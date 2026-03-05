import {
  EyeOff,
  Unlink,
  Layers,
  Puzzle,
  Bot,
  Megaphone,
  HelpCircle,
} from "lucide-react"
import { SectionHero } from "@/components/onboarding/section-hero"
import { PainCard } from "@/components/onboarding/pain-card"
import { SectionTag } from "@/components/ui/section-tag"
import { CtaSection } from "@/components/sections/cta-section"

const painCards = [
  {
    icon: EyeOff,
    title: "Invisible Capacity",
    body: "No engineering organization has a reliable view of actual throughput. The gap between headcount and available delivery capacity — after meetings, incidents, tech debt, and context-switching — is typically 30–50%. Leaders making portfolio commitments are working from numbers that overstate available capacity by half.",
  },
  {
    icon: Unlink,
    title: "Portfolio Commitments Divorced from Reality",
    body: "Annual planning produces roadmaps that bear no relationship to constraint reality. Initiatives are prioritized on strategic weight, not on engineering capacity, skill availability, and cross-team dependencies. The portfolio looks credible in a slide deck and is infeasible the moment a team tries to execute it.",
  },
  {
    icon: Layers,
    title: "Work Hidden in Backlogs",
    body: "The work that actually consumes capacity is not on the roadmap. It lives in a 40,000-ticket Jira backlog, in ad hoc Slack requests that become sprint commitments, in the legacy incidents that absorb three engineers every Thursday. Traditional planning tools have no mechanism to surface this shadow load.",
  },
  {
    icon: Puzzle,
    title: "Fragmented and Siloed Tools",
    body: "A typical 500-person engineering org uses 8–12 distinct work management and planning tools. Each team has its own Jira taxonomy, its own field conventions, its own definition of a story point. There is no unified data model, no shared vocabulary for capacity.",
  },
  {
    icon: Bot,
    title: "AI Automation That Nobody Tracks",
    body: "As enterprises deploy AI agents across engineering, QA, and operations, an invisible category of work has emerged. AI-completed tasks appear in neither headcount nor capacity models. Leaders cannot quantify ROI, cannot reinvest reclaimed capacity, and cannot model how further AI adoption affects delivery.",
  },
  {
    icon: Megaphone,
    title: "Decisions Made by Politics, Not Data",
    body: "In the absence of constraint-honest data, portfolio decisions default to organizational politics. The loudest VP wins. Post-mortems reveal that the capacity constraints that caused a missed delivery were knowable at planning time — they simply weren’t surfaced.",
  },
  {
    icon: HelpCircle,
    title: "No Way to Model What-If",
    body: "Leadership cannot answer “what happens if we delay Initiative X by one quarter?” There is no system that holds the full constraint graph — the dependencies, shared allocations, critical path — and can run a counterfactual. Every scenario is a manual spreadsheet exercise that takes two weeks and is outdated on day one.",
  },
]

const toolComparison = [
  { tool: "Jira", tracks: "Work items", misses: "Capacity" },
  { tool: "Workday", tracks: "Headcount", misses: "Throughput" },
  { tool: "Smartsheet", tracks: "Plans", misses: "Constraints" },
  {
    tool: "Resource Mgmt Tools",
    tracks: "Allocations",
    misses: "Dependencies",
  },
  { tool: "BI / Analytics", tracks: "The past", misses: "The future" },
]

export function CustomerPain() {
  return (
    <>
      <SectionHero
        headline="Your portfolio commitments are not connected to reality."
        subheadline='Every VP of Engineering knows the feeling — standing in front of a CEO unable to answer: "Do we actually have the capacity to deliver this?"'
        ctaText="See How CohesionXL Fixes This"
        ctaTo="/how-it-works"
      />

      {/* Seven Organizational Dysfunctions */}
      <section className="border-t border-graphite-600/50 bg-graphite-850 py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>The Seven Organizational Dysfunctions</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            The seven dysfunctions that make portfolio planning unreliable.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {painCards.map((card) => (
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

      {/* Why Existing Tools Fail */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>Why Existing Tools Fail</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            Every tool in your stack solves a fragment. None solve the system.
          </h2>

          <div className="mt-14 overflow-x-auto rounded-lg border border-graphite-600">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-graphite-600 bg-graphite-800">
                  <th className="px-6 py-4 text-[13px] font-semibold text-graphite-100">
                    Tool
                  </th>
                  <th className="px-6 py-4 text-[13px] font-semibold text-graphite-100">
                    What It Tracks
                  </th>
                  <th className="px-6 py-4 text-[13px] font-semibold text-graphite-100">
                    What It Misses
                  </th>
                </tr>
              </thead>
              <tbody>
                {toolComparison.map((row, i) => (
                  <tr
                    key={row.tool}
                    className={`border-b border-graphite-600 last:border-b-0 ${
                      i % 2 === 0 ? "bg-graphite-850" : "bg-graphite-800"
                    }`}
                  >
                    <td className="px-6 py-4 text-[14px] font-medium text-graphite-200">
                      {row.tool}
                    </td>
                    <td className="px-6 py-4 text-[14px] text-graphite-300">
                      {row.tracks}
                    </td>
                    <td className="px-6 py-4 text-[14px] text-graphite-400">
                      {row.misses}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-lg border border-brand-blue-500/20 bg-brand-blue-500/[0.05] p-6 lg:p-8">
            <p className="mx-auto max-w-[800px] text-center text-base leading-[1.7] text-graphite-300">
              No existing tool unifies the{" "}
              <span className="text-brand-blue-400">Org Graph</span> and the{" "}
              <span className="text-brand-blue-400">Work Graph</span> into a
              constraint-aware simulation engine. That is the gap CohesionXL
              fills.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        headline="Ready to see your actual capacity?"
        body="Start with a diagnostic that surfaces what your planning tools are missing. No slide decks. No demos. Just your data, modeled honestly."
        buttonText="Start the Diagnostic"
        to="/contact"
      />
    </>
  )
}
