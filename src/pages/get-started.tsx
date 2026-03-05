import {
  Compass,
  Network,
  Database,
  BarChart3,
  Handshake,
} from "lucide-react"
import { SectionHero } from "@/components/onboarding/section-hero"
import { TimelinePhase } from "@/components/onboarding/timeline-phase"
import { RoleCard } from "@/components/onboarding/role-card"
import { CrawlWalkRun } from "@/components/onboarding/crawl-walk-run"
import { ComparisonTable } from "@/components/onboarding/comparison-table"
import { SectionTag } from "@/components/ui/section-tag"
import { CtaSection } from "@/components/sections/cta-section"

const phases = [
  {
    number: 1,
    label: "Discovery",
    timeframe: "Weeks 1–2",
    activities:
      "Run all four diagnostic workshops. Collect and pre-assess source data. Produce Capacity Baseline Report, Data Integration Map, and Org Graph seed. Obtain executive sponsor sign-off on graph construction assumptions.",
    exitGate: "Executive sponsor approves assumption set.",
  },
  {
    number: 2,
    label: "Data Ingestion",
    timeframe: "Weeks 3–4",
    activities:
      "Build and validate source system connectors. Run normalization pipeline. Resolve identity matching discrepancies. Achieve >80% field completion rate on Work Item schema.",
    exitGate:
      "Data quality scorecard approved by CohesionXL team and customer.",
  },
  {
    number: 3,
    label: "Graph Construction",
    timeframe: "Month 2",
    activities:
      "Build Org Graph, Work Graph, Dependency Graph, and Capacity Graph. Validate topology with team leads. Calibrate throughput model against 12-sprint historical baseline.",
    exitGate: "Graph topology validated by at least three team leads.",
  },
  {
    number: 4,
    label: "Scenario Modeling",
    timeframe: "Month 3",
    activities:
      "Simulation literacy workshop. Five guided simulations. Aha Moment briefing to executive team. Embed scenario output into first live planning cycle.",
    exitGate: "Customer runs at least one self-directed simulation.",
  },
  {
    number: 5,
    label: "Continuous Operation",
    timeframe: "Month 4+",
    activities:
      "Bi-weekly graph refresh. Monthly capacity model recalibration. Quarterly assumption set review. Quarterly Org Intelligence Report benchmarked against cross-customer dataset.",
  },
]

const roles = [
  {
    icon: Compass,
    title: "Deployment Strategist",
    responsibilities:
      "Overall deployment leadership, executive relationships, workshop facilitation, change management, Aha Moment design and delivery.",
    automationPath:
      "Workshop prep and findings synthesis become AI-assisted over time; executive relationship management stays human.",
  },
  {
    icon: Network,
    title: "Org Modeler",
    responsibilities:
      "Org Graph construction and validation, skill taxonomy development, org structure reconciliation, community detection tuning.",
    automationPath:
      "Graph construction becomes algorithmic; interpretation and validation remain human.",
  },
  {
    icon: Database,
    title: "Data Engineer",
    responsibilities:
      "Source system connector development, normalization pipeline, identity resolution, data quality assessment, integration monitoring.",
    automationPath:
      "Highly automatable — connector templates reused across deployments; human oversight for edge cases.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Analyst",
    responsibilities:
      "Workshop 1 facilitation, initiative inventory, dependency mapping, cost-of-delay scoring, scenario simulation setup.",
    automationPath:
      "Dependency inference and scoring become algorithmic; strategic framing stays human.",
  },
  {
    icon: Handshake,
    title: "Customer Success Lead",
    responsibilities:
      "Onboarding communication, training delivery, adoption tracking, feedback collection, renewal preparation.",
    automationPath:
      "Usage analytics and health scoring become product features; relationship management stays human.",
  },
]

const changeRows = [
  {
    from: "Capacity planning in spreadsheets",
    to: "Constraint-based modeling with live data",
  },
  {
    from: "Annual roadmap commitments based on headcount",
    to: "Rolling commitments validated against real throughput",
  },
  {
    from: "Dependencies discovered at sprint planning",
    to: "Dependencies surfaced at initiative intake",
  },
  {
    from: "AI work invisible to planning systems",
    to: "AI agent throughput in unified capacity model",
  },
  {
    from: "Portfolio decisions by organizational weight",
    to: "Decisions by constraint-honest scenario simulation",
  },
  {
    from: "Post-mortem as primary learning mechanism",
    to: "Pre-mortem scenario modeling as standard prep",
  },
]

export function GetStarted() {
  return (
    <>
      <SectionHero
        headline="From signed contract to operating scenario simulation in 90 days."
        subheadline="Four phases. Explicit entry and exit criteria at every gate. No phase begins until the prior phase is validated."
      />

      {/* 90-Day Timeline */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>The 90-Day Deployment Timeline</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            Four gated phases. Each validated before the next begins.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {phases.map((p) => (
              <TimelinePhase
                key={p.number}
                number={p.number}
                label={p.label}
                timeframe={p.timeframe}
                activities={p.activities}
                exitGate={p.exitGate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Team */}
      <section className="border-t border-graphite-600/50 bg-graphite-850 py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>The Implementation Team</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            Five dedicated roles. Clear automation paths for each.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <RoleCard
                key={r.title}
                icon={r.icon}
                title={r.title}
                responsibilities={r.responsibilities}
                automationPath={r.automationPath}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Crawl / Walk / Run */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>Crawl / Walk / Run</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            A progressive adoption model that matches your readiness.
          </h2>

          <div className="mt-14">
            <CrawlWalkRun />
          </div>
        </div>
      </section>

      {/* Change Management */}
      <section className="border-t border-graphite-600/50 bg-graphite-850 py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>Change Management</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            What to expect: from current state to constraint-honest planning.
          </h2>

          <div className="mt-14">
            <ComparisonTable rows={changeRows} />
          </div>
        </div>
      </section>

      <CtaSection
        headline="Ready to see what's actually possible?"
        body="Start with a 30-minute diagnostic call. We'll show you the Ungoverned Capacity Ratio framework and walk through what the first 30 days look like for an organization at your scale."
        buttonText="Schedule a Diagnostic Call"
        to="/contact"
      />
    </>
  )
}
