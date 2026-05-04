import { SectionTag } from "@/components/ui/section-tag"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const layers = [
  {
    id: "cohesionxl",
    name: "CohesionXL",
    role: "Authorization map",
    summary:
      "Constraint-aware portfolio planning and simulation engine. Maintains the authoritative, structured representation of organizational delivery — people, work, products, capacity, intent, constraints.",
    answers: "What is approved, against which constraints, with what capacity, by whom.",
    maintains: [
      "Org Graph — who can authorize what",
      "Work Graph — dependency and constraint structure",
      "Product Graph — what is being built",
      "Window Algebra — temporal phase composition",
      "Authorized intent contracts",
    ],
    accent: "blue" as const,
  },
  {
    id: "atlas",
    name: "Atlas",
    role: "Execution governance kernel",
    summary:
      "Converts stochastic activity from LLMs, AI agents, and human workers into auditable, evidence-backed project state that reconciles to CohesionXL's authorized intent.",
    answers: "Whether a given action — agent or human — was within the scope of approved work, with full provenance.",
    maintains: [
      "Intent binding — every action bound to its authorizing contract",
      "Authorization audit — full chain back to approving authority",
      "Provenance receipts — pointers from state to source observations",
      "Reconciliation deltas — divergence as a first-class object",
      "Replayable, evidence-backed compiled state",
    ],
    accent: "yellow" as const,
  },
]

const accentMap = {
  blue: {
    border: "border-brand-blue-500/30",
    bg: "bg-brand-blue-500/[0.04]",
    text: "text-brand-blue-400",
    dot: "bg-brand-blue-400",
    pillBg: "bg-brand-blue-500/10",
  },
  yellow: {
    border: "border-brand-yellow-400/30",
    bg: "bg-brand-yellow-400/[0.04]",
    text: "text-brand-yellow-400",
    dot: "bg-brand-yellow-400",
    pillBg: "bg-brand-yellow-400/10",
  },
}

export function TwoLayerArchitecture() {
  return (
    <section className="border-t border-graphite-600/50 bg-graphite-850 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionTag>The Runtime</SectionTag>
        <ScrollReveal>
          <h2 className="max-w-[760px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            Two layers, one runtime.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 max-w-[680px] text-base leading-[1.7] text-graphite-300">
            CohesionXL and Atlas are architecturally distinct and designed to
            compose. CohesionXL holds the{" "}
            <span className="text-brand-blue-400">authorization map</span>. Atlas
            holds the{" "}
            <span className="text-brand-yellow-400">reconciliation</span>{" "}
            between authorized intent and observed delivery.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {layers.map((layer, idx) => {
            const c = accentMap[layer.accent]
            return (
              <ScrollReveal key={layer.id} delay={idx * 0.1}>
                <div
                  className={`h-full rounded-lg border ${c.border} ${c.bg} p-7 lg:p-8`}
                >
                  <div className="flex items-baseline gap-3">
                    <h3 className={`font-mono text-[13px] font-semibold uppercase tracking-[0.1em] ${c.text}`}>
                      {layer.id}
                    </h3>
                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-graphite-400">
                      {layer.role}
                    </span>
                  </div>

                  <h4 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.02em] text-graphite-100">
                    {layer.name}
                  </h4>

                  <p className="mt-4 text-[15px] leading-[1.7] text-graphite-300">
                    {layer.summary}
                  </p>

                  <div className={`mt-6 rounded-lg ${c.pillBg} px-4 py-3`}>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-graphite-400">
                      Answers
                    </span>
                    <p className={`mt-1 text-[14px] leading-[1.6] ${c.text}`}>
                      {layer.answers}
                    </p>
                  </div>

                  <div className="mt-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-graphite-400">
                      Maintains
                    </span>
                    <ul className="mt-3 space-y-2">
                      {layer.maintains.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-[14px] leading-[1.6] text-graphite-300"
                        >
                          <span
                            className={`mt-2 h-1 w-1 flex-shrink-0 rounded-full ${c.dot}`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mt-10 rounded-lg border border-graphite-600 bg-graphite-800 p-6 lg:p-8">
            <div className="flex items-center justify-center gap-3 font-mono text-[13px] leading-[1.6] text-graphite-300">
              <span className="text-brand-blue-400">CohesionXL</span>
              <span className="text-graphite-500">authorizes</span>
              <span className="text-graphite-400">→</span>
              <span className="text-brand-yellow-400">Atlas</span>
              <span className="text-graphite-500">reconciles</span>
            </div>
            <p className="mx-auto mt-5 max-w-[720px] text-center text-[15px] leading-[1.7] text-graphite-400">
              CohesionXL is the prerequisite. Atlas binds activity{" "}
              <em className="text-graphite-200 not-italic">to</em> something —
              and that something is the typed intent contract maintained in
              CohesionXL. Without an authorization map, an audit layer degrades
              to a higher-quality observability tool.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
