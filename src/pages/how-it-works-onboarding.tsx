import { Users, Database, Lock } from "lucide-react"
import { SectionHero } from "@/components/onboarding/section-hero"
import { PainCard } from "@/components/onboarding/pain-card"
import { WorkshopCard } from "@/components/onboarding/workshop-card"
import { SourceFlowDiagram } from "@/components/onboarding/source-flow-diagram"
import { SectionTag } from "@/components/ui/section-tag"
import { Check } from "lucide-react"

const philosophyCards = [
  {
    icon: Users,
    title: "Consulting-Grade Onboarding",
    body: "We embed with your team for the first 30 days. Four structured workshops. Deep data mapping. A Capacity Baseline Report that reflects your organization’s actual throughput — built from your own data.",
  },
  {
    icon: Database,
    title: "Data Integrity as a Gate",
    body: "No graph is built on unvalidated data. Every integration, every normalization decision, every assumption is reviewed and signed off with your team before the model goes live. We don’t estimate — we calibrate.",
  },
  {
    icon: Lock,
    title: "You Co-Own the Model",
    body: "The Org Graph, Work Graph, and Capacity Graph we build together become your organization’s planning substrate. Not a vendor-locked black box — an auditable, versioned representation of your delivery system.",
  },
]

const workshops = [
  {
    number: 1,
    title: "Portfolio Intake Mapping",
    duration: "3 hours",
    objective:
      "Map every active and planned initiative against strategic objectives. Surface cross-initiative dependencies and identify what is on the roadmap versus what is actually resourced.",
    outputs: [
      "Initiative inventory with strategic weight scores",
      "Preliminary dependency map",
      '“Zombie initiative” list (committed but unresourced)',
    ],
  },
  {
    number: 2,
    title: "Resource Census & Org Graph Seeding",
    duration: "4 hours",
    objective:
      "Build the ground-truth org structure — teams, roles, reporting lines, skill taxonomies, allocation percentages, and known capacity constraints.",
    outputs: [
      "Canonical org graph seed data",
      "Skill taxonomy v1",
      "Allocation baseline",
      "Open headcount inventory",
    ],
  },
  {
    number: 3,
    title: "Work System Mapping",
    duration: "3 hours",
    objective:
      "Inventory every system where work is tracked, requested, and completed. Map data quality and integration readiness for each.",
    outputs: [
      "Work system topology map",
      "Data quality scorecard per system",
      "Shadow work discovery",
      "Integration complexity rating",
    ],
  },
  {
    number: 4,
    title: "Capacity & Skill Modeling Baseline",
    duration: "4 hours",
    objective:
      "Establish the mathematical foundation for capacity modeling — calibrated throughput estimation, skill-to-work matching, bottleneck identification, AI agent inventory.",
    outputs: [
      "Throughput baseline per team",
      "Velocity variance analysis",
      "Skill gap map",
      "AI agent token budget estimates",
      "Ungoverned Capacity Ratio v1",
    ],
  },
]

const deliverables = [
  "Capacity Baseline Report — real throughput vs. committed throughput",
  "Data Integration Map — systems, quality scores, integration complexity",
  "Org Graph Seed — canonical team structure, roles, skills, allocations",
  "Shadow Work Inventory — estimated capacity consumed by untracked work",
  "Ungoverned Capacity Ratio — AI agent work outside any planning model",
  "Deployment Readiness Score — go/no-go for Phase 2 graph construction",
]

export function HowItWorksOnboarding() {
  return (
    <>
      <SectionHero
        headline="A deployment model built for enterprise reality."
        subheadline="CohesionXL doesn't drop software on your infrastructure and walk away. Every deployment begins with a structured diagnostic that surfaces organizational truth before a single integration is built."
      />

      {/* Deployment Philosophy */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>The Deployment Philosophy</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            High-touch first. Data before software. A model you own.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {philosophyCards.map((card) => (
              <PainCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                body={card.body}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Four Diagnostic Workshops */}
      <section className="border-t border-graphite-600/50 bg-graphite-850 py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>The Four Diagnostic Workshops</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            Four structured workshops that surface organizational ground truth.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {workshops.map((w) => (
              <WorkshopCard
                key={w.number}
                number={w.number}
                title={w.title}
                duration={w.duration}
                objective={w.objective}
                outputs={w.outputs}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Data Mapping */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>Enterprise Data Mapping</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            From fragmented source systems to a unified constraint model.
          </h2>

          <div className="mt-14">
            <SourceFlowDiagram />
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-graphite-600/50 bg-graphite-850 py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>Before Month 2</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            What we deliver before month 2.
          </h2>

          <div className="mt-14 max-w-[700px]">
            <div className="flex flex-col gap-4">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-graphite-600 bg-graphite-800 px-5 py-4"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500/10">
                    <Check size={12} className="text-green-400" />
                  </div>
                  <span className="text-[14px] leading-[1.5] text-graphite-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
