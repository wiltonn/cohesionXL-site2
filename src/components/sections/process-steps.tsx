const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Automatic SDLC Topology Mapping",
    layer: "CohesionXL",
    body: "Cohesion connects to your existing toolchain — Jira, Azure DevOps, GitHub, ServiceNow, whatever you run — and automatically discovers your organizational structure, team dependencies, and delivery artifacts. No manual configuration. No forced uniformity.",
  },
  {
    number: "02",
    title: "Model",
    subtitle: "Constraint Graph Construction",
    layer: "CohesionXL",
    body: "Every shared resource, platform dependency, review gate, and deployment window becomes a node in a queryable constraint graph. Human capacity and AI agent throughput are unified into a single token-based model — the first planning primitive that treats both as real inputs.",
  },
  {
    number: "03",
    title: "Simulate",
    subtitle: "Portfolio-Level What-If Analysis",
    layer: "CohesionXL",
    body: 'Ask questions your planning tools can\'t represent: "What happens if we redirect 30% of Team Alpha to compliance?" "What\'s our realistic delivery envelope this quarter?" Get probability distributions, not point estimates. Confidence intervals, not Gantt charts.',
  },
  {
    number: "04",
    title: "Govern",
    subtitle: "Continuous Reconciliation",
    layer: "Atlas",
    body: "Atlas binds every observed action — agent or human — to the authorizing intent contract. Constrained MAP inference projects stochastic activity into evidence-backed state. Reconciliation deltas surface where delivery diverges from plan, with full provenance back to the source observations.",
  },
]

const layerStyles: Record<string, { text: string; border: string; bg: string }> = {
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
}

export function ProcessSteps() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-gradient-to-b from-brand-blue-500/40 via-brand-blue-500/20 to-transparent lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="group relative flex gap-8 lg:gap-12">
                  {/* Number node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-brand-blue-500/20 bg-brand-blue-500/[0.06] transition-colors duration-200 group-hover:border-brand-blue-500/40 group-hover:bg-brand-blue-500/10">
                      <span className="font-mono text-sm font-semibold text-brand-blue-400">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-graphite-100">
                        {step.title}
                      </h3>
                      <span
                        className={`inline-flex items-center rounded-full border ${layerStyles[step.layer].border} ${layerStyles[step.layer].bg} px-2.5 py-0.5 font-mono text-[11px] font-medium ${layerStyles[step.layer].text}`}
                      >
                        {step.layer}
                      </span>
                    </div>
                    <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.1em] text-brand-blue-400/70">
                      {step.subtitle}
                    </p>
                    <p className="mt-4 max-w-[560px] text-base leading-[1.7] text-graphite-300">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
