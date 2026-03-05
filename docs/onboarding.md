# CohesionXL — New Website Pages: Onboarding & Customer Journey

## PURPOSE OF THIS DOCUMENT
This is a Claude Code prompt specification for building new pages on cohesionxl.com.
The site is assumed to be Next.js/React with Tailwind CSS. Brand colors are:
- Primary Cyan: `#00A0E0`
- Navy: `#0F1B3D`
- Accent Teal: `#00C4B4`
- Light Gray BG: `#F4F6F9`
- Dark Gray text: `#4A5568`

All new pages should match the existing site's design language: dark navy hero sections,
cyan accents, clean white content cards, and a professional enterprise SaaS aesthetic.

---

## PAGES TO BUILD

1. `/customer-pain` — The Pain Landscape (why enterprises need CohesionXL)
2. `/how-it-works` — The Engagement & Onboarding Model
3. `/aha-moments` — The First 30 Days: What Customers Discover
4. `/get-started` — The Deployment Journey (timeline + team)

These can also be implemented as scroll sections on a single long-form page at `/why-cohesion`.

---

## PAGE 1: THE PAIN LANDSCAPE (`/customer-pain`)

### Hero Section
**Headline:** Your portfolio commitments are not connected to reality.
**Subheadline:** Every VP of Engineering knows the feeling — standing in front of a CEO unable to answer: "Do we actually have the capacity to deliver this?"
**CTA:** See How CohesionXL Fixes This →

### Section: "The Seven Organizational Dysfunctions"
Render as a grid of 7 cards (3-2-2 or 4-3 layout). Each card has:
- Icon (choose relevant from lucide-react or heroicons)
- Pain title (bold, navy)
- 2–3 sentence description (gray body text)
- Subtle cyan left-border accent

**Card 1 — Invisible Capacity**
Title: Invisible Capacity
Body: No engineering organization has a reliable view of actual throughput. The gap between headcount and available delivery capacity — after meetings, incidents, tech debt, and context-switching — is typically 30–50%. Leaders making portfolio commitments are working from numbers that overstate available capacity by half.

**Card 2 — Disconnected Commitments**
Title: Portfolio Commitments Divorced from Reality
Body: Annual planning produces roadmaps that bear no relationship to constraint reality. Initiatives are prioritized on strategic weight, not on engineering capacity, skill availability, and cross-team dependencies. The portfolio looks credible in a slide deck and is infeasible the moment a team tries to execute it.

**Card 3 — Hidden Backlog Load**
Title: Work Hidden in Backlogs
Body: The work that actually consumes capacity is not on the roadmap. It lives in a 40,000-ticket Jira backlog, in ad hoc Slack requests that become sprint commitments, in the legacy incidents that absorb three engineers every Thursday. Traditional planning tools have no mechanism to surface this shadow load.

**Card 4 — Fragmented Tooling**
Title: Fragmented and Siloed Tools
Body: A typical 500-person engineering org uses 8–12 distinct work management and planning tools. Each team has its own Jira taxonomy, its own field conventions, its own definition of a story point. There is no unified data model, no shared vocabulary for capacity.

**Card 5 — Invisible AI Work**
Title: AI Automation That Nobody Tracks
Body: As enterprises deploy AI agents across engineering, QA, and operations, an invisible category of work has emerged. AI-completed tasks appear in neither headcount nor capacity models. Leaders cannot quantify ROI, cannot reinvest reclaimed capacity, and cannot model how further AI adoption affects delivery.

**Card 6 — Political Planning**
Title: Decisions Made by Politics, Not Data
Body: In the absence of constraint-honest data, portfolio decisions default to organizational politics. The loudest VP wins. Post-mortems reveal that the capacity constraints that caused a missed delivery were knowable at planning time — they simply weren't surfaced.

**Card 7 — No Scenario Modeling**
Title: No Way to Model What-If
Body: Leadership cannot answer "what happens if we delay Initiative X by one quarter?" There is no system that holds the full constraint graph — the dependencies, shared allocations, critical path — and can run a counterfactual. Every scenario is a manual spreadsheet exercise that takes two weeks and is outdated on day one.

### Section: "Why Existing Tools Fail"
Render as a comparison table or a 4-column icon grid:

| Tool | What It Tracks | What It Misses |
|------|---------------|----------------|
| Jira | Work items | Capacity |
| Workday | Headcount | Throughput |
| Smartsheet | Plans | Constraints |
| Resource Mgmt Tools | Allocations | Dependencies |
| BI / Analytics | The past | The future |

**Callout below table:**
"No existing tool unifies the Org Graph and the Work Graph into a constraint-aware simulation engine. That is the gap CohesionXL fills."

### CTA Section
Headline: Ready to see your actual capacity?
CTA Button: Start the Diagnostic →

---

## PAGE 2: HOW IT WORKS — THE ENGAGEMENT MODEL (`/how-it-works`)

### Hero Section
**Headline:** A deployment model built for enterprise reality.
**Subheadline:** CohesionXL doesn't drop software on your infrastructure and walk away. Every deployment begins with a structured diagnostic that surfaces organizational truth before a single integration is built.

### Section: "The Deployment Philosophy"
3-column card row:

**Card 1 — High-Touch First**
Icon: Users/team icon
Title: Consulting-Grade Onboarding
Body: We embed with your team for the first 30 days. Four structured workshops. Deep data mapping. A Capacity Baseline Report that reflects your organization's actual throughput — built from your own data.

**Card 2 — Data Before Software**
Icon: Database icon
Title: Data Integrity as a Gate
Body: No graph is built on unvalidated data. Every integration, every normalization decision, every assumption is reviewed and signed off with your team before the model goes live. We don't estimate — we calibrate.

**Card 3 — Model You Own**
Icon: Lock/key icon
Title: You Co-Own the Model
Body: The Org Graph, Work Graph, and Capacity Graph we build together become your organization's planning substrate. Not a vendor-locked black box — an auditable, versioned representation of your delivery system.

### Section: "The Four Diagnostic Workshops"
Render as a numbered step-flow (horizontal timeline on desktop, vertical on mobile).
Each step is a card with: number badge (cyan), title, duration pill, objective, key outputs.

**Workshop 1 — Portfolio Intake Mapping**
Duration: 3 hours
Objective: Map every active and planned initiative against strategic objectives. Surface cross-initiative dependencies and identify what is on the roadmap versus what is actually resourced.
Key Outputs: Initiative inventory with strategic weight scores, preliminary dependency map, "zombie initiative" list (committed but unresourced)

**Workshop 2 — Resource Census & Org Graph Seeding**
Duration: 4 hours
Objective: Build the ground-truth org structure — teams, roles, reporting lines, skill taxonomies, allocation percentages, and known capacity constraints.
Key Outputs: Canonical org graph seed data, skill taxonomy v1, allocation baseline, open headcount inventory

**Workshop 3 — Work System Mapping**
Duration: 3 hours
Objective: Inventory every system where work is tracked, requested, and completed. Map data quality and integration readiness for each.
Key Outputs: Work system topology map, data quality scorecard per system, shadow work discovery, integration complexity rating

**Workshop 4 — Capacity & Skill Modeling Baseline**
Duration: 4 hours
Objective: Establish the mathematical foundation for capacity modeling — calibrated throughput estimation, skill-to-work matching, bottleneck identification, AI agent inventory.
Key Outputs: Throughput baseline per team, velocity variance analysis, skill gap map, AI agent token budget estimates, Ungoverned Capacity Ratio v1

### Section: "The Enterprise Data Mapping Process"
Render as a source → output flow diagram or icon grid.
Show 5 source connectors on left, arrows to "CohesionXL Normalization Engine", then 4 graph outputs on right.

**Source Systems (left):**
- Jira / Azure DevOps → Work Graph
- Workday / HRIS → Org Graph
- GitHub / CI-CD → Delivery Signals
- Spreadsheets / Smartsheet → Shadow Work Layer
- CRM / ProductBoard → Initiative Context

**Normalization Stages (center):**
Label as a 4-stage pipeline:
1. Identity Resolution — one canonical identity per person across all systems
2. Work Item Normalization — unified schema: type, complexity, cycle time, owner
3. Skill Tagging — every work item tagged with required skill domains
4. Capacity Token Accounting — human and AI agent throughput unified into one model

**Graph Outputs (right):**
- Org Graph — actual working teams, not just the org chart
- Work Graph — full initiative hierarchy from strategy to task
- Dependency Graph — cross-team constraints made explicit
- Capacity Graph — available throughput matched to portfolio demand

### Section: "What We Deliver Before Month 2"
Render as a checklist-style deliverables list with green checkmarks:
- ✓ Capacity Baseline Report — real throughput vs. committed throughput
- ✓ Data Integration Map — systems, quality scores, integration complexity
- ✓ Org Graph Seed — canonical team structure, roles, skills, allocations
- ✓ Shadow Work Inventory — estimated capacity consumed by untracked work
- ✓ Ungoverned Capacity Ratio — AI agent work outside any planning model
- ✓ Deployment Readiness Score — go/no-go for Phase 2 graph construction

---

## PAGE 3: THE AHA MOMENTS — FIRST 30 DAYS (`/aha-moments`)

### Hero Section
**Headline:** Your first 30 days will change how your organization plans.
**Subheadline:** The insights CohesionXL surfaces in the first month are not product demos — they are moments of organizational reckoning, derived entirely from your own data.

**Pull quote / callout:**
"The 'aha moment' does two things simultaneously: it validates that the model is accurate — earning trust — and it surfaces an insight the organization could not generate without the tool — earning adoption."

### Section: "The Six Standard Discoveries"
Render as a 2-column grid of large insight cards. Each card has:
- Large number (cyan, oversized)
- Insight title (navy, bold)
- Description paragraph
- Example metric / stat in a highlighted pill

**Discovery 1 — The Capacity Gap**
Title: Your Real Capacity vs. Your Committed Capacity
Body: We show the ratio of what the roadmap assumes (committed capacity) to what the Capacity Graph calculates (available capacity). For a typical 200-person engineering organization, this gap is 35–55%. This is derived from your own data, calibrated against your own sprint history.
Example pill: "Typical finding: 42% gap between committed and available capacity"

**Discovery 2 — The Shadow Work Load**
Title: The Work Nobody Is Planning Around
Body: We surface the estimated capacity consumed by shadow work — work that exists in backlogs, Slack threads, and spreadsheets but appears on no roadmap. Typically 15–30% of engineering capacity. We break this down by team and work type.
Example pill: "Typical finding: 22% of capacity consumed by untracked work"

**Discovery 3 — The Bottleneck Team**
Title: The Team That Blocks Everything Else
Body: We show the Dependency Graph and highlight the team with the highest centrality — the team that is a dependency for the most other teams. In most organizations, this is the Platform or Data team. We calculate the portfolio-wide delivery risk that results from their current allocation.
Example pill: "Typical finding: 1 team blocking 5–8 concurrent initiatives"

**Discovery 4 — Portfolio Infeasibility**
Title: How Many Initiatives Are Actually Deliverable
Body: We run the constraint solver against the current portfolio and capacity model. We show which committed initiatives are infeasible under current constraints — not because they are bad ideas, but because the organization cannot execute them concurrently.
Example pill: "Typical finding: 30–45% of committed initiatives are infeasible as scheduled"

**Discovery 5 — The Ungoverned Capacity Ratio**
Title: The AI Work That Lives Outside Your Planning Model
Body: For organizations with measurable AI agent activity, we show the percentage of delivery work performed by agents that appears in no planning model. This is capacity you are getting — but not accounting for, not reinvesting, and not modeling forward.
Example pill: "Typical finding: 15–25% of delivery work performed by untracked AI agents"

**Discovery 6 — The True Cost of Delay**
Title: Which Initiative You Should Actually Be Prioritizing
Body: We select two competing initiatives and calculate cost-of-delay for each, factoring in customer commitment risk, revenue impact, dependency chain effects, and team opportunity cost. We show whether the initiative you are currently prioritizing has the highest or lowest delay cost.
Example pill: "Typical finding: highest-priority initiative ≠ highest cost-of-delay initiative"

### Section: "How We Stage the Aha Moment"
Render as a 3-step horizontal process:

Step 1 — Validate with Team Leads
Before any executive presentation, every data point in the Capacity Baseline is validated with the team leads who generated it. The model must be co-owned by the people whose reality it reflects.

Step 2 — Executive Briefing
A dedicated 90-minute briefing with the Engineering VP, PMO Lead, and CTO/CPO. Findings are presented as a consulting report — "here is what we found in your data" — not a product demo.

Step 3 — Model Handoff
Only after the insight has landed does the CohesionXL interface get shown. By this point, the model is the customer's model — not ours.

---

## PAGE 4: THE DEPLOYMENT JOURNEY (`/get-started`)

### Hero Section
**Headline:** From signed contract to operating scenario simulation in 90 days.
**Subheadline:** Four phases. Explicit entry and exit criteria at every gate. No phase begins until the prior phase is validated.

### Section: "The 90-Day Deployment Timeline"
Render as a visual timeline (horizontal on desktop, vertical on mobile).
Each phase is a card with phase number, label, timeframe, and key activities.

**Phase 1 — Discovery**
Timeframe: Weeks 1–2
Activities: Run all four diagnostic workshops. Collect and pre-assess source data. Produce Capacity Baseline Report, Data Integration Map, and Org Graph seed. Obtain executive sponsor sign-off on graph construction assumptions.
Exit Gate: Executive sponsor approves assumption set.

**Phase 2 — Data Ingestion**
Timeframe: Weeks 3–4
Activities: Build and validate source system connectors. Run normalization pipeline. Resolve identity matching discrepancies. Achieve >80% field completion rate on Work Item schema.
Exit Gate: Data quality scorecard approved by CohesionXL team and customer.

**Phase 3 — Graph Construction**
Timeframe: Month 2
Activities: Build Org Graph, Work Graph, Dependency Graph, and Capacity Graph. Validate topology with team leads. Calibrate throughput model against 12-sprint historical baseline.
Exit Gate: Graph topology validated by at least three team leads.

**Phase 4 — Scenario Modeling**
Timeframe: Month 3
Activities: Simulation literacy workshop. Five guided simulations. Aha Moment briefing to executive team. Embed scenario output into first live planning cycle.
Exit Gate: Customer runs at least one self-directed simulation.

**Ongoing — Continuous Operation**
Timeframe: Month 4+
Activities: Bi-weekly graph refresh. Monthly capacity model recalibration. Quarterly assumption set review. Quarterly Org Intelligence Report benchmarked against cross-customer dataset.

### Section: "The Implementation Team"
Render as a 5-card grid with role icon, title, responsibilities summary, and "automation path" note.

**Role 1 — Deployment Strategist**
Icon: strategy/compass
Responsibilities: Overall deployment leadership, executive relationships, workshop facilitation, change management, Aha Moment design and delivery.
Automation Path: Workshop prep and findings synthesis become AI-assisted over time; executive relationship management stays human.

**Role 2 — Org Modeler**
Icon: org chart / nodes
Responsibilities: Org Graph construction and validation, skill taxonomy development, org structure reconciliation, community detection tuning.
Automation Path: Graph construction becomes algorithmic; interpretation and validation remain human.

**Role 3 — Data Engineer**
Icon: database / pipeline
Responsibilities: Source system connector development, normalization pipeline, identity resolution, data quality assessment, integration monitoring.
Automation Path: Highly automatable — connector templates reused across deployments; human oversight for edge cases.

**Role 4 — Portfolio Analyst**
Icon: chart / portfolio
Responsibilities: Workshop 1 facilitation, initiative inventory, dependency mapping, cost-of-delay scoring, scenario simulation setup.
Automation Path: Dependency inference and scoring become algorithmic; strategic framing stays human.

**Role 5 — Customer Success Lead**
Icon: handshake / star
Responsibilities: Onboarding communication, training delivery, adoption tracking, feedback collection, renewal preparation.
Automation Path: Usage analytics and health scoring become product features; relationship management stays human.

### Section: "The Crawl / Walk / Run Model"
Render as a large 3-column visual with icons and connectors between phases.

**Crawl — CohesionXL Core**
Enterprises achieve organizational legibility. They can see their actual capacity, their constraint graph, their dependency structure, and their AI agent footprint. Portfolio planning becomes constraint-honest.

**Walk — CohesionXL + Atlas Feed**
AI agent activity becomes visible inside the planning model. The Org Graph and Work Graph that CohesionXL builds become the context substrate for Atlas. Human and AI work are tracked in a unified capacity model.

**Run — Full Governance**
Atlas governs AI agents with the full organizational context graph as its operating substrate. Every agent action is auditable against the planning model. The enterprise has a single system of context for all delivery work — human and AI.

### Section: "Change Management: What to Expect"
Render as a "From → To" two-column table with alternating row shading.

| From (Current State) | To (With CohesionXL) |
|---------------------|----------------------|
| Capacity planning in spreadsheets | Constraint-based modeling with live data |
| Annual roadmap commitments based on headcount | Rolling commitments validated against real throughput |
| Dependencies discovered at sprint planning | Dependencies surfaced at initiative intake |
| AI work invisible to planning systems | AI agent throughput in unified capacity model |
| Portfolio decisions by organizational weight | Decisions by constraint-honest scenario simulation |
| Post-mortem as primary learning mechanism | Pre-mortem scenario modeling as standard prep |

### Final CTA Section
**Headline:** Ready to see what's actually possible?
**Body:** Start with a 30-minute diagnostic call. We'll show you the Ungoverned Capacity Ratio framework and walk through what the first 30 days look like for an organization at your scale.
**Primary CTA:** Schedule a Diagnostic Call →
**Secondary CTA:** Download the Deployment Runbook →

---

## COMPONENT NOTES FOR CLAUDE CODE

### Reusable Components to Build:
1. `<PainCard />` — card with icon, title, body, cyan left border
2. `<WorkshopCard />` — numbered step card with duration pill, objective, outputs
3. `<TimelinePhase />` — phase card with number, timeframe, activities, exit gate
4. `<AhaCard />` — large numbered insight card with metric pill
5. `<RoleCard />` — team role card with icon, title, responsibilities, automation path
6. `<ComparisonTable />` — From/To two-column table with navy/cyan header
7. `<SourceFlowDiagram />` — visual connector flow (source systems → normalization → graphs)
8. `<CrawlWalkRun />` — 3-phase progression visual with connecting arrows

### Navigation:
Add the following to the site's main nav:
- "Why CohesionXL" → `/customer-pain`
- "How It Works" → `/how-it-works`
- "The First 30 Days" → `/aha-moments`
- "Get Started" → `/get-started`

### Animation Suggestions:
- Pain cards: stagger-fade on scroll into view
- Workshop timeline: sequential reveal left-to-right
- Aha numbers: count-up animation on scroll
- Timeline phases: progressive reveal with connecting line draw

### Tone & Copy Notes:
- Write for a VP Engineering or CPO audience — specific, credible, not fluffy
- Lead with the pain, not the product features
- Use "your data", "your organization", "your teams" — not generic enterprise copy
- Numbers and metrics should feel like findings, not marketing claims
- Avoid: "best-in-class", "cutting-edge", "seamless", "holistic", "synergy"
- Use: "constraint-honest", "calibrated", "auditable", "ground truth", "real throughput"

### Brand Voice Keywords to Use Throughout:
- Ungoverned Capacity Ratio
- Constraint-honest portfolio planning
- Organizational legibility
- Capacity theater
- Shadow work
- Ground truth org structure
- Crawl / Walk / Run
- Aha moment
- System of context

---

## FILE/FOLDER STRUCTURE SUGGESTION

```
/pages (or /app if App Router)
  /customer-pain
    page.tsx
  /how-it-works
    page.tsx
  /aha-moments
    page.tsx
  /get-started
    page.tsx

/components/onboarding
  PainCard.tsx
  WorkshopCard.tsx
  TimelinePhase.tsx
  AhaCard.tsx
  RoleCard.tsx
  ComparisonTable.tsx
  SourceFlowDiagram.tsx
  CrawlWalkRun.tsx
  SectionHero.tsx
  MetricPill.tsx
```

---

## EXAMPLE CLAUDE CODE PROMPT (use this verbatim)

```
Read onboarding.md in full. Then build the four new pages specified:
/customer-pain, /how-it-works, /aha-moments, and /get-started.

Match the existing cohesionxl.com design language:
- Navy (#0F1B3D) hero sections with cyan (#00A0E0) accent text
- White content cards with subtle gray (#F4F6F9) section backgrounds
- Clean, enterprise SaaS typography (likely Inter or similar sans-serif)
- Cyan left-border accent on cards
- Responsive — mobile-first layout

Build all reusable components listed in the Component Notes section first,
then compose each page from those components using the content specified.

Use the exact copy from the onboarding.md — do not rewrite or summarize.
All numbers, metrics, and workshop descriptions should be verbatim.

Start with /customer-pain, confirm the component structure looks right,
then proceed through the remaining three pages.
```
