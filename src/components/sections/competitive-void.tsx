import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionTag } from "@/components/ui/section-tag"

const categories = [
  {
    name: "Strategic Portfolio Management",
    players: "Planview, Planisware, ServiceNow",
    whatTheyDo:
      "Top-down portfolio prioritization, scenario modeling for funding allocation, OKR alignment.",
    gap: "They simulate financial constraints, not organizational constraints. They'll tell you a portfolio is over-allocated by $2M but not that three teams share a platform dependency binding five workstreams. And they have no model for AI agent capacity.",
  },
  {
    name: "Value Stream Management",
    players: "Planview/Plutora, Broadcom, Jellyfish, LinearB",
    whatTheyDo:
      "Measuring flow metrics across the delivery pipeline — cycle time, deployment frequency, change failure rate.",
    gap: "They're measurement tools, not simulation tools. They tell you what happened. They can't answer \"what would happen if.\" And they assume homogeneous toolchains that don't exist in real enterprises.",
  },
  {
    name: "AI Governance Platforms",
    players: "Credo AI, Holistic AI, OneTrust, IBM watsonx",
    whatTheyDo:
      "Model inventory, risk assessment, compliance (EU AI Act, NIST), policy enforcement, bias detection.",
    gap: "They govern AI models and systems, not AI work capacity. They'll tell you whether your model is compliant, but not how much delivery capacity your AI agents actually contribute to your portfolio. Zero concept of the SDLC.",
  },
]

export function CompetitiveVoid() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal>
          <SectionTag>The Landscape</SectionTag>
          <h2 className="max-w-[700px] font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] tracking-[-0.02em] text-text-primary">
            Three categories exist nearby. None of them solve this.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={0.1 + i * 0.1}>
              <div className="group h-full rounded-xl border border-white/[0.06] bg-surface p-6 transition-colors hover:border-white/[0.1] hover:bg-surface-elevated">
                <h3 className="font-display text-lg leading-snug tracking-tight text-text-primary">
                  {cat.name}
                </h3>
                <p className="mt-1 text-[12px] font-medium text-text-muted">
                  {cat.players}
                </p>

                <div className="mt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted">
                    What they do
                  </span>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-text-secondary">
                    {cat.whatTheyDo}
                  </p>
                </div>

                <div className="mt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-coral-400">
                    The gap
                  </span>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-text-secondary">
                    {cat.gap}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-14">
          <div className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6 lg:p-8">
            <p className="mx-auto max-w-[800px] text-center text-[16px] leading-[1.7] text-text-secondary">
              CohesionXL sits at the intersection: it{" "}
              <span className="text-cyan-400">discovers</span> organizational
              topology, uses that topology to{" "}
              <span className="text-cyan-400">model constraints</span>, and
              treats human + AI capacity as a{" "}
              <span className="text-cyan-400">unified throughput model</span>.
              No existing product does this.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
