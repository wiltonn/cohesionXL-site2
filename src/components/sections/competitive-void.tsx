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
        <div>
          <SectionTag>The Landscape</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            Three categories exist nearby. None of them solve this.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group h-full rounded-lg border border-graphite-600 bg-graphite-800 p-6 transition-colors duration-200 hover:border-graphite-500 hover:bg-graphite-750"
            >
              <h3 className="text-lg font-semibold leading-snug tracking-tight text-graphite-100">
                {cat.name}
              </h3>
              <p className="mt-1 text-[12px] font-medium text-graphite-400">
                {cat.players}
              </p>

              <div className="mt-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-graphite-400">
                  What they do
                </span>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-graphite-300">
                  {cat.whatTheyDo}
                </p>
              </div>

              <div className="mt-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-red-400">
                  The gap
                </span>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-graphite-300">
                  {cat.gap}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="rounded-lg border border-brand-blue-500/20 bg-brand-blue-500/[0.05] p-6 lg:p-8">
            <p className="mx-auto max-w-[800px] text-center text-base leading-[1.7] text-graphite-300">
              CohesionXL sits at the intersection: it{" "}
              <span className="text-brand-blue-400">discovers</span> organizational
              topology, uses that topology to{" "}
              <span className="text-brand-blue-400">model constraints</span>, and
              treats human + AI capacity as a{" "}
              <span className="text-brand-blue-400">unified throughput model</span>.
              No existing product does this.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
