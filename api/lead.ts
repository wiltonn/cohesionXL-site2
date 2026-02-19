import type { VercelRequest, VercelResponse } from "@vercel/node";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
    if (!token) {
      return res.status(500).json({ error: "Server not configured" });
    }

    const body = req.body;

    // Optional shared-secret to reduce random bot posts
    const secret = process.env.LEAD_FORM_SHARED_SECRET;
    if (secret && body?.secret !== secret) {
      return res.status(401).json({ error: "Unauthorized" });
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
          Authorization: `Bearer ${token}`,
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

    return res.status(200).json({ ok: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    return res.status(500).json({ error: "Unexpected error", details: message });
  }
}
