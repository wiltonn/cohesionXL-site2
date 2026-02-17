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
        <div>
          <SectionTag>Key Differentiators</SectionTag>
        </div>

        <div className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {differentiators.map((d) => (
            <div key={d.title}>
              <div className="flex gap-4">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue-400" />
                <div>
                  <h4 className="text-base font-semibold text-graphite-100">
                    {d.title}
                  </h4>
                  <p className="mt-1.5 text-[15px] leading-[1.6] text-graphite-300">
                    {d.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
