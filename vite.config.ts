import { defineConfig, loadEnv } from "vite"
import type { ViteDevServer } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

function devApiPlugin(env: Record<string, string>) {
  return {
    name: "dev-api",
    configureServer(server: ViteDevServer) {
      server.middlewares.use("/api/lead", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405
          res.end(JSON.stringify({ error: "Method not allowed" }))
          return
        }

        const chunks: Buffer[] = []
        for await (const chunk of req) chunks.push(chunk as Buffer)
        const body = JSON.parse(Buffer.concat(chunks).toString())

        const hubspotToken = env.HUBSPOT_PRIVATE_APP_TOKEN
        if (!hubspotToken) {
          res.statusCode = 500
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ error: "Server not configured: HUBSPOT_PRIVATE_APP_TOKEN" }))
          return
        }

        const turnstileSecretKey = env.TURNSTILE_SECRET_KEY
        if (!turnstileSecretKey) {
          res.statusCode = 500
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ error: "Server not configured: TURNSTILE_SECRET_KEY" }))
          return
        }

        // Verify Turnstile token
        const { turnstileToken } = body ?? {}
        if (!turnstileToken || typeof turnstileToken !== "string") {
          res.statusCode = 400
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ error: "Missing turnstile token" }))
          return
        }

        const verifyRes = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              secret: turnstileSecretKey,
              response: turnstileToken,
            }),
          }
        )
        const verifyData = (await verifyRes.json()) as { success?: boolean }
        if (!verifyData?.success) {
          res.statusCode = 403
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ error: "Security verification failed" }))
          return
        }

        // Forward to HubSpot
        const { email, firstname, lastname, company, jobtitle, message, plan_interest } = body ?? {}
        if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          res.statusCode = 400
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ error: "Valid email required" }))
          return
        }

        const properties: Record<string, string> = {
          email,
          firstname: firstname || "",
          lastname: lastname || "",
          company: company || "",
          jobtitle: jobtitle || "",
        }
        if (message) properties.message = message
        if (plan_interest) properties.plan_interest = plan_interest
        properties.lead_source = "cohesionxl_site"

        const hsRes = await fetch(
          "https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${hubspotToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              inputs: [{ idProperty: "email", id: email, properties }],
            }),
          }
        )

        if (!hsRes.ok) {
          const text = await hsRes.text()
          console.error("HubSpot error:", hsRes.status, text)
          res.statusCode = 502
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ error: "HubSpot error", details: text }))
          return
        }

        // Fire-and-forget notification email
        const resendApiKey = env.RESEND_API_KEY
        if (resendApiKey) {
          const leadName = [firstname, lastname].filter(Boolean).join(" ") || "Unknown"
          const lines = [
            `New lead - Check Hubspot`,
            "",
            `**Name:** ${leadName}`,
            `**Email:** ${email}`,
            company ? `**Company:** ${company}` : null,
            jobtitle ? `**Role:** ${jobtitle}` : null,
            plan_interest ? `**Interest:** ${plan_interest}` : null,
            message ? `\n**Message:**\n${message}` : null,
          ].filter((l) => l !== null).join("\n")

          fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "CohesionXL Site <notifications@cohesionxl.com>",
              to: ["hello@cohesionxl.com"],
              subject: `New lead: ${leadName} (${company || "no company"})`,
              text: lines.replace(/\*\*/g, ""),
              html: lines.replace(/\n/g, "<br>"),
            }),
          }).catch((err) => console.error("Resend email error:", err))
        } else {
          console.warn("RESEND_API_KEY not set — skipping notification email")
        }

        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({ ok: true }))
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  // loadEnv with prefix "" loads ALL vars from .env.local, not just VITE_ ones
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [react(), tailwindcss(), devApiPlugin(env)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
