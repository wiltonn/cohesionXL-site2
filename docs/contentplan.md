# CohesionXL — Brochure Website Content Plan

**Format:** 3-page single-page-app (SPA) with nav routing
**Tone:** Authoritative, constraint-honest, enterprise-grade. Not SaaS-cheerful — this is infrastructure language for CTOs and VPs of Engineering.
**Design Direction:** Dark-mode editorial. Think Bloomberg Terminal meets Stripe's documentation. Prismatic cyan as dominant accent. Instrument Serif headlines, General Sans body.
**Tagline:** *If your enterprise portfolio planning isn't currently broken, AI agents will break it.*

---

## Global Elements

### Navigation (fixed, top)
- **Logo:** CohesionXL wordmark (left)
- **Links:** Overview | How It Works | Contact
- **Style:** Glass-morphism bar, blur backdrop, minimal. Logo uses cyan for "Cohesion", dimmed "XL" suffix.

### Footer (all pages)
- Minimal. Logo, copyright, "AI Capacity Governance Platform" descriptor.
- No social links yet (pre-launch posture — deliberate restraint signals seriousness).

---

## Page 1: Home (Overview)

The home page is a progressive disclosure narrative. Each scroll section raises the stakes, names the problem more precisely, and builds toward the "How It Works" CTA. The user should feel: *"This is describing my exact situation — how do they solve it?"*

---

### Section 1: Hero with Rotating Stat Cards

**Layout:** Full viewport height. Centered text block with rotating stat card below.

**Persistent Copy (always visible):**

> **Kicker:** AI Capacity Governance Platform
>
> **Headline:** If your enterprise portfolio planning isn't currently broken, *AI agents will break it.*
>
> **Subhead:** CohesionXL is the constraint-aware portfolio simulation engine for enterprises navigating mixed human and AI delivery capacity.

**Rotating Stat Cards (auto-advance every 6s, manual dot navigation):**

Each card has: giant stat number → label → 2-sentence explanation.

| Card | Stat | Label | Body |
|------|------|-------|------|
| 1 | **20–35%** | Capacity Blindness | Of enterprise software delivery capacity is now AI-generated. 0% of that capacity is modeled in portfolio planning tools. Every enterprise portfolio plan is already this wrong — and the gap widens quarterly. |
| 2 | **$300B+** | Wasted Investment | 42% of companies abandoned most AI initiatives in 2025, up from 17% in 2024. The #1 cited failure isn't model quality — it's governance, integration, and operational readiness. At current failure rates, hundreds of billions in AI spend delivers nothing. |
| 3 | **40%** | The Inflection | Of enterprise applications will embed AI agents by end of 2026. When AI moves from 'a thing developers use' to 'a thing on the capacity plan,' every enterprise needs a new planning primitive. That primitive doesn't exist yet. |

**Color coding:** Card 1 = cyan, Card 2 = red/coral, Card 3 = amber. Each card subtly shifts a background radial glow.

**Scroll indicator:** Subtle "Scroll" text + animated vertical line at bottom center.

---

### Section 2: The Problem Statement

**Layout:** Left-aligned text block, generous whitespace. No imagery — let the words land.

**Section Tag:** `— THE CATEGORY SHIFT`

**Headline:** Your planning tools model a world that no longer exists.

**Body Copy (3 short paragraphs):**

> Strategic portfolio management tools plan *within* constraints they cannot see. They take the organizational topology as given, treat capacity as a static input — headcount × velocity — and sequence work linearly.
>
> That model was already approximate. Now it's broken. When 25% of Google's code is AI-assisted and 85% of developers use AI tools daily, the "capacity" your planning tools model bears no resemblance to the capacity your organization actually has.
>
> This isn't a tooling gap. It's a *category* gap. You don't need a better pipeline planner. You need a constraint-aware portfolio simulation engine.

**No CTA here.** This section builds tension. The reader should feel the problem sharpening.

---

### Section 3: The Pain Acceleration Curve (Animated Widget)

**Layout:** Full-width section. Section tag + headline on left. Animated curve visualization on right (or below on mobile).

**Section Tag:** `— PAIN ACCELERATION CURVE`

**Headline:** The governance gap is widening faster than your planning tools can adapt.

**Widget Behavior:**

An animated S-curve chart (x-axis = time, y-axis = ungoverned capacity / planning pain). The curve draws itself on scroll-into-view.

Three labeled inflection points appear sequentially along the curve as it draws. Each point is clickable/hoverable to expand a detail card.

| Phase | Timeline | Point Title | Detail Card Copy |
|-------|----------|-------------|------------------|
| 1 | Now → Mid 2026 | Tool Sprawl Creates Planning Chaos | 49% of developers use 5+ AI tools. Teams lose 7 hours per member per week to AI-related inefficiency. Pain is diffuse — nobody can explain *why* at the portfolio level because the planning tools can't see AI capacity or its friction costs. |
| 2 | Mid 2026 → 2027 | Agent Capacity Becomes a Budget Line | Organizations start paying for AI agents as production delivery capacity, not productivity tools. You can't put an agentic coding team on a Gantt chart. You can't allocate "30% of Claude Code's throughput" in Planview. The planning model literally has no input field for this. |
| 3 | 2027+ | The Failure Cascade Forces the Buy | 40%+ of agentic AI projects canceled. Organizations that can't govern mixed human/AI capacity will either abandon AI entirely — or buy the governance layer they should have had from the start. |

**Color escalation:** Phase 1 = amber, Phase 2 = red, Phase 3 = deep red. The curve's color shifts as it progresses, visualizing urgency.

**Below the widget, a single line:**

> The question isn't whether you'll need AI capacity governance. It's whether you'll have it before the failure cascade hits your portfolio.

---

### Section 4: The Competitive Void

**Layout:** Three-column card grid (stacks on mobile). Each card names an adjacent category, what it does, and the gap it can't fill.

**Section Tag:** `— THE LANDSCAPE`

**Headline:** Three categories exist nearby. None of them solve this.

| Card | Category | What They Do | The Gap |
|------|----------|--------------|---------|
| 1 | **Strategic Portfolio Management** (Planview, Planisware, ServiceNow) | Top-down portfolio prioritization, scenario modeling for funding allocation, OKR alignment. | They simulate *financial* constraints, not *organizational* constraints. They'll tell you a portfolio is over-allocated by $2M but not that three teams share a platform dependency binding five workstreams. And they have no model for AI agent capacity. |
| 2 | **Value Stream Management** (Planview/Plutora, Broadcom, Jellyfish, LinearB) | Measuring flow metrics across the delivery pipeline — cycle time, deployment frequency, change failure rate. | They're *measurement* tools, not *simulation* tools. They tell you what happened. They can't answer "what would happen if." And they assume homogeneous toolchains that don't exist in real enterprises. |
| 3 | **AI Governance Platforms** (Credo AI, Holistic AI, OneTrust, IBM watsonx) | Model inventory, risk assessment, compliance (EU AI Act, NIST), policy enforcement, bias detection. | They govern AI *models and systems*, not AI *work capacity*. They'll tell you whether your model is compliant, but not how much delivery capacity your AI agents actually contribute to your portfolio. Zero concept of the SDLC. |

**Below the grid:**

> CohesionXL sits at the intersection: it *discovers* organizational topology, uses that topology to *model constraints*, and treats human + AI capacity as a *unified throughput model*. No existing product does this.

---

### Section 5: The FinOps Analogy (Category Framing)

**Layout:** Centered, cinematic. Minimal text, maximum weight.

**Section Tag:** `— THE CATEGORY`

**Headline (large, display-weight):**

> Cloud compute created a new cost type that didn't fit in existing budgeting tools.
> *FinOps* emerged. Multi-billion dollar category.
>
> AI delivery capacity is creating a new throughput type that doesn't fit in existing planning tools.
> *This* is that moment.

**Subtext (small, gray):**

> The last time a new capacity type entered the enterprise, it spawned a $50B+ governance category. The same structural pattern is unfolding now — but for delivery throughput rather than infrastructure cost.

---

### Section 6: CTA to How It Works

**Layout:** Full-width, subtle gradient background (dark → slightly lighter). Centered.

**Headline:** The governance layer for AI-augmented delivery.

**Body:** One sentence max.

> See how CohesionXL discovers your organizational topology, models constraint propagation, and simulates portfolio outcomes across mixed human/AI capacity.

**Button:** `See How It Works →` (routes to Page 2)

---

## Page 2: How It Works

This page is explanatory and visual. It should feel like the "technical credibility" page — enough detail to satisfy a VP of Engineering, not so much that it reads like documentation.

---

### Section 1: Page Hero

**Headline:** From fragmented toolchains to governable delivery.

**Subhead:**

> CohesionXL is infrastructure, not another dashboard. It sits underneath your existing planning tools and gives them the one thing they've never had: an accurate model of what your organization can actually deliver.

---

### Section 2: Four-Step Process

**Layout:** Vertical timeline or staggered card layout. Each step has a number, title, subtitle, and 2-3 sentence explanation. Animate in on scroll.

| Step | Title | Subtitle | Body |
|------|-------|----------|------|
| 01 | **Discover** | Automatic SDLC Topology Mapping | Cohesion connects to your existing toolchain — Jira, Azure DevOps, GitHub, ServiceNow, whatever you run — and automatically discovers your organizational structure, team dependencies, and delivery artifacts. No manual configuration. No forced uniformity. |
| 02 | **Model** | Constraint Graph Construction | Every shared resource, platform dependency, review gate, and deployment window becomes a node in a queryable constraint graph. Human capacity and AI agent throughput are unified into a single token-based model — the first planning primitive that treats both as real inputs. |
| 03 | **Simulate** | Portfolio-Level What-If Analysis | Ask questions your planning tools can't represent: "What happens if we redirect 30% of Team Alpha to compliance?" "What's our realistic delivery envelope this quarter?" Get probability distributions, not point estimates. Confidence intervals, not Gantt charts. |
| 04 | **Govern** | Continuous Capacity Intelligence | Live monitoring of capacity model drift — the delta between what your planning tools think and what's actually happening. Automated alerts when constraint collisions are imminent. The control layer that makes AI-augmented delivery governable at enterprise scale. |

---

### Section 3: Animated Demo Placeholder

**Layout:** Full-width, 16:9 aspect ratio container with dark background. Centered.

**Content:** A placeholder frame with:
- Subtle animated border (pulsing cyan glow)
- Center text: "Product Demo" with a play button icon
- Subtext below: "See CohesionXL model a real enterprise constraint graph and simulate portfolio trade-offs across mixed human/AI capacity."

**Technical note:** This placeholder is designed to be replaced with either a Remotion-rendered demo video or an interactive product walkthrough. The container should support both embed formats.

---

### Section 4: The Key Differentiators

**Layout:** Two-column grid of concise differentiator statements. No cards — just text pairs with a cyan accent marker.

| Differentiator | One-Line Explanation |
|---|---|
| **Mappings are data, not code** | Adapts to your organization without engineering changes for each context. |
| **Governance, not surveillance** | Enables capacity reasoning — doesn't monitor individual developers. |
| **Vendor-neutral by design** | Works across heterogeneous toolchains. Doesn't require standardization. |
| **Probabilistic, not deterministic** | Discovery uses inference with human-in-the-loop validation, not brittle automation. |
| **Infrastructure, not application** | Sits underneath your existing SPM/VSM tools, not beside them. |
| **Tokens, not time** | Measures capacity as observed throughput, not self-reported estimates. |

---

### Section 5: CTA to Contact

**Headline:** Ready to see what your capacity model is missing?

**Body:**

> We'll show you the delta between what your planning tools think your delivery capacity is — and what it actually is.

**Button:** `Get in Touch →` (routes to Page 3)

---

## Page 3: Contact

Clean, minimal, no friction.

---

### Section 1: Contact Hero

**Headline:** Let's talk about your capacity governance gap.

**Subhead:**

> Whether you're a CTO navigating mixed human/AI delivery, a VP of Engineering watching planning accuracy degrade, or an investor evaluating the AI governance infrastructure opportunity — we'd like to hear from you.

---

### Section 2: Contact Form

**Fields:**
- Name (text)
- Email (email)
- Company (text)
- Role (dropdown: CTO / VP Engineering / Head of PMO / Engineering Leader / Investor / Other)
- Message (textarea, optional)
- **Primary interest** (radio buttons):
  - "I want to understand our capacity governance gap"
  - "I want a product demo"
  - "I'm evaluating the market opportunity"

**Submit Button:** `Send Message →`

**Below form, small text:**

> We respond within 24 hours. No sales sequences. No 14-email nurture campaign. Just a conversation about whether this problem is real for your organization.

---

### Section 3: Alternative Contact

**Simple text block:**

> Prefer email? → hello@cohesionxl.com
> Want to see the research? → [Link to a future whitepaper or data page]

---

## Design & Interaction Notes

### Animation Philosophy
- **Scroll-triggered reveals:** Each section fades/slides in on viewport entry. Staggered delays for multi-element sections.
- **The Pain Curve widget** is the centerpiece animation. It should feel like a data visualization coming alive — the curve draws itself, inflection points pop in sequentially, detail cards expand on interaction.
- **Hero stat cards** crossfade on a timer with manual override via dots. Transition: fade down out, fade up in (not lateral slide — this isn't a carousel, it's a data point rotation).
- **Restraint everywhere else.** This is enterprise infrastructure, not a consumer app. Motion should feel precise and informational, not playful.

### Typography Hierarchy
- **Display / Hero Headlines:** Instrument Serif, large, tight tracking (-0.02em)
- **Section Headlines:** Instrument Serif, medium
- **Section Tags:** General Sans, 11px, uppercase, wide tracking (0.15em), with a leading horizontal rule
- **Body:** General Sans, 16-18px, generous line height (1.7)
- **Stats:** Instrument Serif or DM Serif Display, oversized (60-80px), with accent color

### Color System
- **Background:** #0A0E17 (near-black blue)
- **Card backgrounds:** #111827
- **Primary accent:** Cyan (#00D4FF) — used for brand, CTAs, positive data
- **Alert accent:** Coral/Red (#FF3366) — used for failure/risk data
- **Warning accent:** Amber (#FFAA00) — used for emerging risk
- **Body text:** #8899AA (gray) for secondary, #F0F4F8 (off-white) for primary
- **Borders:** rgba(255,255,255,0.06) — barely visible, structural

### Responsive Approach
- **Desktop:** Max-width ~1200px content area, generous padding
- **Tablet:** Stack columns, reduce stat card sizes
- **Mobile:** Full-width sections, hero stat cards stack vertically, Pain Curve widget becomes a vertical timeline with expandable cards instead of a chart

### What This Plan Does NOT Include (Intentionally)
- **Pricing page:** Too early. This is a "define the category" site, not a conversion funnel.
- **Feature list:** Avoided deliberately. Features invite comparison. Category-defining messaging invites recognition.
- **Testimonials / logos:** Pre-launch. The data from analyst reports (Gartner, S&P Global, etc.) serves as third-party credibility instead.
- **Blog / resources:** Can be added later. For now, the site IS the thought leadership.

---

## Content Narrative Arc (Summary)

```
Hero:        "Your planning is already broken" (shock + data)
     ↓
Problem:     "Here's why — the world changed" (context)
     ↓
Curve:       "It's getting worse, fast" (urgency)
     ↓
Landscape:   "Nobody else solves this" (competitive void)
     ↓
Analogy:     "This is the next FinOps" (category framing)
     ↓
CTA:         "See how it works" (bridge)
     ↓
How:         Discover → Model → Simulate → Govern (mechanism)
     ↓
Demo:        [Visual proof placeholder]
     ↓
Contact:     "Let's talk" (conversion)
```

Each transition raises the stakes slightly and answers the question the previous section created. The reader never feels sold to — they feel progressively *informed* until the logical conclusion is: "I need to talk to these people."