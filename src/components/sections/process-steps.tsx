import { ScrollReveal } from "@/components/ui/scroll-reveal"

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Automatic SDLC Topology Mapping",
    body: "Cohesion connects to your existing toolchain — Jira, Azure DevOps, GitHub, ServiceNow, whatever you run — and automatically discovers your organizational structure, team dependencies, and delivery artifacts. No manual configuration. No forced uniformity.",
  },
  {
    number: "02",
    title: "Model",
    subtitle: "Constraint Graph Construction",
    body: "Every shared resource, platform dependency, review gate, and deployment window becomes a node in a queryable constraint graph. Human capacity and AI agent throughput are unified into a single token-based model — the first planning primitive that treats both as real inputs.",
  },
  {
    number: "03",
    title: "Simulate",
    subtitle: "Portfolio-Level What-If Analysis",
    body: 'Ask questions your planning tools can\'t represent: "What happens if we redirect 30% of Team Alpha to compliance?" "What\'s our realistic delivery envelope this quarter?" Get probability distributions, not point estimates. Confidence intervals, not Gantt charts.',
  },
  {
    number: "04",
    title: "Govern",
    subtitle: "Continuous Capacity Intelligence",
    body: "Live monitoring of capacity model drift — the delta between what your planning tools think and what's actually happening. Automated alerts when constraint collisions are imminent. The control layer that makes AI-augmented delivery governable at enterprise scale.",
  },
]

export function ProcessSteps() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/20 to-transparent lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.12}>
                <div className="group relative flex gap-8 lg:gap-12">
                  {/* Number node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] transition-colors group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                      <span className="font-mono text-sm font-semibold text-cyan-400">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-[-0.02em] text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.1em] text-cyan-400/70">
                      {step.subtitle}
                    </p>
                    <p className="mt-4 max-w-[560px] text-[16px] leading-[1.7] text-text-secondary">
                      {step.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
