import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionTag } from "@/components/ui/section-tag"

const differentiators = [
  {
    title: "Mappings are data, not code",
    description:
      "Adapts to your organization without engineering changes for each context.",
  },
  {
    title: "Governance, not surveillance",
    description:
      "Enables capacity reasoning — doesn't monitor individual developers.",
  },
  {
    title: "Vendor-neutral by design",
    description:
      "Works across heterogeneous toolchains. Doesn't require standardization.",
  },
  {
    title: "Probabilistic, not deterministic",
    description:
      "Discovery uses inference with human-in-the-loop validation, not brittle automation.",
  },
  {
    title: "Infrastructure, not application",
    description:
      "Sits underneath your existing SPM/VSM tools, not beside them.",
  },
  {
    title: "Tokens, not time",
    description:
      "Measures capacity as observed throughput, not self-reported estimates.",
  },
]

export function Differentiators() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal>
          <SectionTag>Key Differentiators</SectionTag>
        </ScrollReveal>

        <div className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {differentiators.map((d, i) => (
            <ScrollReveal key={d.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                <div>
                  <h4 className="text-[16px] font-semibold text-text-primary">
                    {d.title}
                  </h4>
                  <p className="mt-1.5 text-[15px] leading-[1.6] text-text-secondary">
                    {d.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
