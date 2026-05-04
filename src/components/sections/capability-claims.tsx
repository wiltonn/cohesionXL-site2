import { SectionTag } from "@/components/ui/section-tag"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

type Layer = "CohesionXL" | "Atlas" | "Both"

const claims: { n: string; question: string; layer: Layer }[] = [
  {
    n: "01",
    question:
      "For any AI agent action, what was the authorizing intent — and was the action within scope?",
    layer: "Atlas",
  },
  {
    n: "02",
    question:
      "For any artifact, what is the full chain of authorization from the action back to the approving authority?",
    layer: "Both",
  },
  {
    n: "03",
    question:
      "What portion of delivered capacity in this window was AI-generated vs. human-generated — and was the AI portion authorized?",
    layer: "Both",
  },
  {
    n: "04",
    question:
      "Where is observed delivery diverging from authorized intent — and is the divergence accepted, contested, or unexplained?",
    layer: "Atlas",
  },
  {
    n: "05",
    question:
      "What is the calibrated probability that initiative X completes by window Wₖ, with credible intervals, given current evidence and constraints?",
    layer: "CohesionXL",
  },
  {
    n: "06",
    question:
      "Which constraints in the active intent contract are at risk of violation — and what is the marginal cost of each potential remediation?",
    layer: "CohesionXL",
  },
  {
    n: "07",
    question:
      "For a proposed new initiative, is there a feasible allocation under current constraints — or is the constraint configuration provably unsatisfiable?",
    layer: "CohesionXL",
  },
  {
    n: "08",
    question:
      "What is the override history for a given constraint, planner, or program — and is there a pattern indicating systemic constraint mis-specification?",
    layer: "Both",
  },
  {
    n: "09",
    question:
      "For any agent or worker, what bounded context pack should they receive to act within scope on a given task?",
    layer: "Atlas",
  },
  {
    n: "10",
    question:
      "Given a budget constraint, what is the optimal control action — proceed, gather more evidence, escalate to human, or pause?",
    layer: "Both",
  },
]

const layerStyles: Record<Layer, { text: string; border: string; bg: string }> = {
  CohesionXL: {
    text: "text-brand-blue-400",
    border: "border-brand-blue-500/30",
    bg: "bg-brand-blue-500/10",
  },
  Atlas: {
    text: "text-brand-yellow-400",
    border: "border-brand-yellow-400/30",
    bg: "bg-brand-yellow-400/10",
  },
  Both: {
    text: "text-graphite-100",
    border: "border-graphite-500",
    bg: "bg-graphite-700",
  },
}

export function CapabilityClaims() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionTag>What it answers</SectionTag>
        <ScrollReveal>
          <h2 className="max-w-[760px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            Ten questions most toolchains cannot answer end-to-end.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 max-w-[680px] text-base leading-[1.7] text-graphite-300">
            Use these as the mapping surface for evaluating fit against your
            documented tracking issues. Each claim is concrete, falsifiable, and
            attributable to the layer that produces the answer.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {claims.map((claim, idx) => {
            const c = layerStyles[claim.layer]
            return (
              <ScrollReveal key={claim.n} delay={idx * 0.04}>
                <div className="group h-full rounded-lg border border-graphite-600 bg-graphite-800 p-6 transition-colors duration-200 hover:border-graphite-500 hover:bg-graphite-750">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[13px] font-semibold text-graphite-400">
                      {claim.n}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border ${c.border} ${c.bg} px-2.5 py-0.5 font-mono text-[11px] font-medium ${c.text}`}
                    >
                      {claim.layer}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] leading-[1.7] text-graphite-200">
                    {claim.question}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
