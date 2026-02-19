# Technology Reference — Cohesion XL Marketing Site

Technical runbook for the support team. Covers every service, dependency, and infrastructure component in production.

---

## Hosting and Deployment

| Component | Detail |
|-----------|--------|
| **Platform** | Vercel |
| **Trigger** | Push to `main` branch auto-deploys to production |
| **Framework** | Vite 7 (detected via `vercel.json`) |
| **Build command** | `npm run build` (runs `tsc -b && vite build`) |
| **Output directory** | `dist/` |
| **Routing** | All paths rewrite to `/index.html` (SPA client-side routing) |
| **Serverless function** | `api/lead.ts` — auto-detected by Vercel from the `api/` directory |
| **CI/CD** | None beyond Vercel Git integration. No GitHub Actions, no Docker. |

---

## Frontend Stack

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| UI framework | React | 19 | Single-page application, no SSR |
| Language | TypeScript | 5.9 | Strict mode enabled |
| Build tool | Vite | 7.3 | Dev server + production bundler |
| CSS framework | Tailwind CSS | 4 | v4 syntax — config lives in CSS (`@theme inline`), not `tailwind.config.ts` |
| Component library | shadcn/ui | — | Radix primitives + CVA variants |
| Routing | React Router | 7 | Client-side `BrowserRouter` |
| Icons | Lucide React | 0.574 | SVG icon set |
| Animation | Framer Motion | 12 | Page entrance transitions only |
| Analytics | Vercel Analytics | 1.6 | Automatic page-view tracking |

### Installed shadcn/ui Components

Button, Card, Dialog, Input, Separator, Tabs, Tooltip, Badge. Plus two custom components: `ScrollReveal` and `SectionTag`.

### Fonts (loaded from CDN in `index.html`)

| Font | Source | Usage |
|------|--------|-------|
| Inter | Google Fonts | Headings, body text |
| JetBrains Mono | Google Fonts | Code blocks, terminal UI |
| General Sans | Fontshare | Supplementary sans-serif |
| Instrument Serif | Google Fonts | Decorative italic accents |

---

## External Services and API Integrations

### HubSpot CRM

- **Purpose:** Stores lead contact records.
- **API endpoint:** `POST https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert`
- **Auth:** Bearer token (`HUBSPOT_PRIVATE_APP_TOKEN`)
- **Upsert key:** `email` — creates a new contact or updates an existing one.
- **Standard fields sent:** `email`, `firstname`, `lastname`, `company`, `jobtitle`
- **Custom HubSpot properties (must exist in HubSpot):** `message`, `plan_interest`, `lead_source`
- **`lead_source` value:** Hardcoded to `"cohesionxl_site"` on every submission.
- **Failure behavior:** Returns HTTP 502 to the user if HubSpot rejects the request.

### Cloudflare Turnstile (Spam Protection)

- **Purpose:** Bot detection on the contact form. Replaces traditional CAPTCHA.
- **Client-side:** Script loaded from `https://challenges.cloudflare.com/turnstile/v0/api.js`. React hook at `src/hooks/use-turnstile.ts` renders the widget with `theme: "dark"` and `appearance: "interaction-only"`.
- **Site key:** `VITE_TURNSTILE_SITE_KEY` (browser-side). Falls back to Cloudflare's always-pass test key in local dev.
- **Server verification:** `POST https://challenges.cloudflare.com/turnstile/v0/siteverify` with the secret key and the user's IP.
- **Failure behavior:** Returns HTTP 403 to the user. HubSpot and Resend calls are never reached.

### Resend (Email Notifications)

- **Purpose:** Sends an instant notification to the team when a new lead submits the form.
- **API endpoint:** `POST https://api.resend.com/emails`
- **Auth:** Bearer token (`RESEND_API_KEY`)
- **From address:** `CohesionXL Site <notifications@cohesionxl.com>` (requires verified domain in Resend)
- **To address:** `hello@cohesionxl.com`
- **Failure behavior:** Fire-and-forget. Email failure is logged to the server console but does not affect the user — the form still returns 200.
- **Optional:** If `RESEND_API_KEY` is not set, the email step is silently skipped with a console warning.
- **Free tier limit:** 100 emails/day.

### Vercel Analytics

- **Purpose:** Page-view tracking.
- **Integration:** `<Analytics />` component rendered in `App.tsx`, fires on every route change.
- **No additional configuration required.** Enabled automatically on Vercel-hosted deployments.

---

## Environment Variables

| Variable | Scope | Required | Description |
|----------|-------|----------|-------------|
| `HUBSPOT_PRIVATE_APP_TOKEN` | Server only | Yes | HubSpot private app bearer token |
| `TURNSTILE_SECRET_KEY` | Server only | Yes | Cloudflare Turnstile server-side secret |
| `VITE_TURNSTILE_SITE_KEY` | Client (browser) | Recommended | Cloudflare Turnstile site key. Falls back to test key in dev. |
| `RESEND_API_KEY` | Server only | No | Resend API key for notification emails. Omit to skip. |

**Where to set them:**

- **Production:** Vercel dashboard > Project Settings > Environment Variables
- **Local dev:** `.env.local` in the project root (git-ignored)

`VITE_`-prefixed variables are injected into the browser bundle by Vite. All other variables remain server-side only.

---

## Form Submission Flow

The contact form is the only API route. Here is the full request lifecycle:

```
User fills form → Turnstile widget issues token
        ↓
POST /api/lead  { email, firstname, lastname, company, jobtitle,
                  message, plan_interest, turnstileToken }
        ↓
[1] Verify Turnstile token with Cloudflare  → 403 on failure
        ↓
[2] Validate email format server-side       → 400 on failure
        ↓
[3] Upsert contact in HubSpot CRM          → 502 on failure
        ↓
[4] Send notification email via Resend      → logged on failure, does not block
        ↓
Return { ok: true } (HTTP 200)
```

**In local dev:** The Vite dev server middleware at `vite.config.ts` mirrors the same logic so the form works without deploying to Vercel.

---

## Site Structure

### Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/pages/home.tsx` | Landing page with hero, problem statement, differentiators, CTA |
| `/how-it-works` | `src/pages/how-it-works.tsx` | Technical explanation of the runtime |
| `/contact` | `src/pages/contact.tsx` | Contact form with Turnstile integration |

### Layout

All pages share `src/components/layout/page-layout.tsx`, which includes the header, navigation, shell, and footer.

### Key Directories

```
api/              Vercel serverless functions (lead.ts)
docs/             Design system spec, this file
scripts/          Maintenance scripts (update-docs.sh)
src/
  components/
    layout/       Header, footer, nav, shell
    sections/     Page section components (hero, CTA, contact form, etc.)
    ui/           shadcn/ui primitives (button, card, dialog, etc.)
  hooks/          Custom React hooks (use-turnstile.ts)
  lib/            Utilities (submit-lead.ts, utils.ts)
  pages/          Route-level page components
```

---

## DNS and Domain Requirements

| Requirement | Service | Detail |
|-------------|---------|--------|
| `cohesionxl.com` DNS | Vercel | Must point to Vercel for hosting |
| `cohesionxl.com` domain verification | Resend | Required to send from `notifications@cohesionxl.com`. Add DNS records provided by Resend. |
| `cohesionxl.com` domain verification | Cloudflare Turnstile | Site key is bound to the domain in the Cloudflare dashboard |

---

## Common Support Tasks

### A lead says they submitted the form but nothing happened

1. Check the Vercel function logs for the `/api/lead` route (Vercel dashboard > Deployments > Functions).
2. Look for `HubSpot error:` or `Resend email error:` in the logs.
3. Verify `HUBSPOT_PRIVATE_APP_TOKEN` is set and the HubSpot private app has not been revoked.
4. If only the email is missing but HubSpot received the contact, check `RESEND_API_KEY` and Resend domain verification status.

### Notification emails stopped arriving

1. Check Resend dashboard for delivery status and bounce logs.
2. Verify `RESEND_API_KEY` is still valid in Vercel env vars.
3. Confirm `cohesionxl.com` domain is still verified in Resend (DNS records intact).
4. Check if the 100 emails/day free-tier limit was exceeded.

### Turnstile is blocking real users

1. Check the Cloudflare Turnstile dashboard for challenge pass rates.
2. Verify `TURNSTILE_SECRET_KEY` matches the site key's secret in Cloudflare.
3. The widget uses `appearance: "interaction-only"` — it should be invisible to most users.

### Build fails

- Run `npm run build` locally. The command runs `tsc -b` (type-check) then `vite build`.
- TypeScript strict mode is on. Common issues: unused variables, missing types, unchecked nulls.
- Run `npm run lint` for ESLint errors.

---

## Dependency Notes

- **Zero server-side npm dependencies for API integrations.** HubSpot, Cloudflare Turnstile, and Resend are all called via raw `fetch()` to their REST APIs. No SDKs installed.
- **shadcn/ui components are vendored.** They live in `src/components/ui/` as regular project files, not in `node_modules`. To add a new component: `npx shadcn@latest add <component>`.
- **Tailwind v4 has no config file.** All design tokens are in `src/index.css` under the `@theme inline` block. Do not create a `tailwind.config.ts`.
