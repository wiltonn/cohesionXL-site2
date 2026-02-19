import type { VercelRequest, VercelResponse } from "@vercel/node";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function verifyTurnstileToken(
  token: string,
  secretKey: string,
  remoteip?: string
): Promise<boolean> {
  const body: Record<string, string> = {
    secret: secretKey,
    response: token,
  };
  if (remoteip) body.remoteip = remoteip;

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  const data = (await res.json()) as { success?: boolean };
  return data?.success === true;
}

interface LeadData {
  email: string
  firstname?: string
  lastname?: string
  company?: string
  jobtitle?: string
  message?: string
  plan_interest?: string
}

async function sendNotificationEmail(apiKey: string, lead: LeadData) {
  const name = [lead.firstname, lead.lastname].filter(Boolean).join(" ") || "Unknown"
  const lines = [
    `New lead - Check Hubspot`,
    "",
    `**Name:** ${name}`,
    `**Email:** ${lead.email}`,
    lead.company ? `**Company:** ${lead.company}` : null,
    lead.jobtitle ? `**Role:** ${lead.jobtitle}` : null,
    lead.plan_interest ? `**Interest:** ${lead.plan_interest}` : null,
    lead.message ? `\n**Message:**\n${lead.message}` : null,
  ].filter((l) => l !== null).join("\n")

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "CohesionXL Site <notifications@cohesionxl.com>",
      to: ["hello@cohesionxl.com"],
      subject: `New lead: ${name} (${lead.company || "no company"})`,
      text: lines.replace(/\*\*/g, ""),
      html: lines.replace(/\n/g, "<br>"),
    }),
  })
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (!hubspotToken) {
      return res.status(500).json({ error: "Server not configured" });
    }

    const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecretKey) {
      return res.status(500).json({ error: "Server not configured" });
    }

    const body = req.body;

    const { turnstileToken } = body ?? {};
    if (!turnstileToken || typeof turnstileToken !== "string") {
      return res.status(400).json({ error: "Missing turnstile token" });
    }

    const remoteip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket?.remoteAddress;

    const isValid = await verifyTurnstileToken(
      turnstileToken,
      turnstileSecretKey,
      remoteip
    );
    if (!isValid) {
      return res.status(403).json({ error: "Security verification failed" });
    }

    const {
      email,
      firstname,
      lastname,
      company,
      jobtitle,
      message,
      plan_interest,
    } = body ?? {};

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return res.status(400).json({ error: "Valid email required" });
    }

    // HubSpot "Create or update contact" via batch upsert endpoint
    // Standard HubSpot contact properties
    const properties: Record<string, string> = {
      email,
      firstname: firstname || "",
      lastname: lastname || "",
      company: company || "",
      jobtitle: jobtitle || "",
    };

    // Custom properties — create these in HubSpot first:
    // Settings > Data Management > Properties > Create property (Contact)
    //   "message"       — Single-line or Multi-line text
    //   "plan_interest" — Single-line text or Dropdown
    //   "lead_source"   — Single-line text or Dropdown
    if (message) properties.message = message;
    if (plan_interest) properties.plan_interest = plan_interest;
    properties.lead_source = "cohesionxl_site";

    const hsRes = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${hubspotToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: [
            {
              idProperty: "email",
              id: email,
              properties,
            },
          ],
        }),
      }
    );

    if (!hsRes.ok) {
      const text = await hsRes.text();
      console.error("HubSpot error:", hsRes.status, text);
      return res.status(502).json({ error: "HubSpot error", details: text });
    }

    // Fire-and-forget notification email
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      sendNotificationEmail(resendApiKey, { email, firstname, lastname, company, jobtitle, message, plan_interest }).catch(
        (err) => console.error("Resend email error:", err)
      );
    } else {
      console.warn("RESEND_API_KEY not set — skipping notification email");
    }

    return res.status(200).json({ ok: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    return res.status(500).json({ error: "Unexpected error", details: message });
  }
}
