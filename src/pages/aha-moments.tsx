import { SectionHero } from "@/components/onboarding/section-hero"
import { AhaCard } from "@/components/onboarding/aha-card"
import { SectionTag } from "@/components/ui/section-tag"

const discoveries = [
  {
    number: 1,
    title: "Your Real Capacity vs. Your Committed Capacity",
    body: "We show the ratio of what the roadmap assumes (committed capacity) to what the Capacity Graph calculates (available capacity). For a typical 200-person engineering organization, this gap is 35–55%. This is derived from your own data, calibrated against your own sprint history.",
    metric: "Typical finding: 42% gap between committed and available capacity",
  },
  {
    number: 2,
    title: "The Work Nobody Is Planning Around",
    body: "We surface the estimated capacity consumed by shadow work — work that exists in backlogs, Slack threads, and spreadsheets but appears on no roadmap. Typically 15–30% of engineering capacity. We break this down by team and work type.",
    metric: "Typical finding: 22% of capacity consumed by untracked work",
  },
  {
    number: 3,
    title: "The Team That Blocks Everything Else",
    body: "We show the Dependency Graph and highlight the team with the highest centrality — the team that is a dependency for the most other teams. In most organizations, this is the Platform or Data team. We calculate the portfolio-wide delivery risk that results from their current allocation.",
    metric: "Typical finding: 1 team blocking 5–8 concurrent initiatives",
  },
  {
    number: 4,
    title: "How Many Initiatives Are Actually Deliverable",
    body: "We run the constraint solver against the current portfolio and capacity model. We show which committed initiatives are infeasible under current constraints — not because they are bad ideas, but because the organization cannot execute them concurrently.",
    metric:
      "Typical finding: 30–45% of committed initiatives are infeasible as scheduled",
  },
  {
    number: 5,
    title: "The AI Work That Lives Outside Your Planning Model",
    body: "For organizations with measurable AI agent activity, we show the percentage of delivery work performed by agents that appears in no planning model. This is capacity you are getting — but not accounting for, not reinvesting, and not modeling forward.",
    metric:
      "Typical finding: 15–25% of delivery work performed by untracked AI agents",
  },
  {
    number: 6,
    title: "Which Initiative You Should Actually Be Prioritizing",
    body: "We select two competing initiatives and calculate cost-of-delay for each, factoring in customer commitment risk, revenue impact, dependency chain effects, and team opportunity cost. We show whether the initiative you are currently prioritizing has the highest or lowest delay cost.",
    metric:
      "Typical finding: highest-priority initiative ≠ highest cost-of-delay initiative",
  },
]

const steps = [
  {
    number: 1,
    title: "Validate with Team Leads",
    body: "Before any executive presentation, every data point in the Capacity Baseline is validated with the team leads who generated it. The model must be co-owned by the people whose reality it reflects.",
  },
  {
    number: 2,
    title: "Executive Briefing",
    body: 'A dedicated 90-minute briefing with the Engineering VP, PMO Lead, and CTO/CPO. Findings are presented as a consulting report — "here is what we found in your data" — not a product demo.',
  },
  {
    number: 3,
    title: "Model Handoff",
    body: "Only after the insight has landed does the CohesionXL interface get shown. By this point, the model is the customer’s model — not ours.",
  },
]

export function AhaMoments() {
  return (
    <>
      <SectionHero
        headline="Your first 30 days will change how your organization plans."
        subheadline="The insights CohesionXL surfaces in the first month are not product demos — they are moments of organizational reckoning, derived entirely from your own data."
        pullQuote="The ‘aha moment’ does two things simultaneously: it validates that the model is accurate — earning trust — and it surfaces an insight the organization could not generate without the tool — earning adoption."
      />

      {/* Six Standard Discoveries */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>The Six Standard Discoveries</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            Six insights your organization could not generate without this
            model.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {discoveries.map((d) => (
              <AhaCard
                key={d.number}
                number={d.number}
                title={d.title}
                body={d.body}
                metric={d.metric}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Stage the Aha Moment */}
      <section className="border-t border-graphite-600/50 bg-graphite-850 py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <SectionTag>Staging the Insight</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            How we stage the aha moment.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-lg border border-graphite-600 bg-graphite-800 p-6"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-500 text-[13px] font-bold text-brand-frost">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold leading-snug text-graphite-100">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-graphite-300">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
