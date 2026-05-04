import { SectionTag } from "@/components/ui/section-tag"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const steps = [
  {
    n: "01",
    label: "act",
    title: "Agents and humans act",
    body: "Activity flows through systems of record — Jira, Azure DevOps, GitHub, SharePoint — driven by human operators and AI agents from any platform.",
    layer: "source",
  },
  {
    n: "02",
    label: "ingest",
    title: "Atlas ingests events",
    body: "All observed activity is appended to the event log ℒ. Append-only, deterministic, replayable. Nothing is mutated; everything is derivable.",
    layer: "atlas",
  },
  {
    n: "03",
    label: "compile",
    title: "Constrained MAP inference",
    body: "At each window boundary, the compiler picks the most plausible structured delta given evidence, intent, and prior state. Δₖ★ = argmax ℙ(Δ | τₖ, Iₖ, Cₖ).",
    layer: "atlas",
  },
  {
    n: "04",
    label: "merge",
    title: "Algebraic state merge",
    body: "Cₖ₊₁ = Cₖ ⊕ Δₖ★. Deterministic update of the compiled macro-state. Every receipt traces back to the observations and intent that produced it.",
    layer: "atlas",
  },
  {
    n: "05",
    label: "reconcile",
    title: "CohesionXL surfaces reconciliation",
    body: "What was authorized. What was delivered. What diverged. Reconciliation deltas are first-class objects — explainable, accept-as-override, or escalate.",
    layer: "cohesionxl",
  },
  {
    n: "06",
    label: "feedback",
    title: "Overrides feed the model",
    body: "Override decisions, new intents, and planning changes are themselves events. They close the loop and progressively sharpen the constraint model per organization.",
    layer: "cohesionxl",
  },
]

const layerColors: Record<string, { text: string; dot: string; border: string }> = {
  source: {
    text: "text-graphite-300",
    dot: "bg-graphite-400",
    border: "border-graphite-600",
  },
  atlas: {
    text: "text-brand-yellow-400",
    dot: "bg-brand-yellow-400",
    border: "border-brand-yellow-400/30",
  },
  cohesionxl: {
    text: "text-brand-blue-400",
    dot: "bg-brand-blue-400",
    border: "border-brand-blue-500/30",
  },
}

export function DataFlowLoop() {
  return (
    <section className="border-t border-graphite-600/50 bg-graphite-850 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionTag>Data Flow</SectionTag>
        <ScrollReveal>
          <h2 className="max-w-[760px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            A closed loop from action to authorization, every window.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 max-w-[680px] text-base leading-[1.7] text-graphite-300">
            Activity is appended to an event log. The compiler projects it into
            structured state at each window boundary. Reconciliation surfaces
            divergence. Overrides feed back into the constraint model. The loop
            is deterministic and replayable from the log alone.
          </p>
        </ScrollReveal>

        {/* Pipeline rail */}
        <ScrollReveal delay={0.15}>
          <div className="mt-14 hidden rounded-lg border border-graphite-600 bg-graphite-800 p-6 lg:block">
            <div className="flex items-center justify-between gap-2 font-mono text-[12px]">
              {steps.map((s, i) => {
                const c = layerColors[s.layer]
                return (
                  <div key={s.n} className="flex flex-1 items-center gap-2">
                    <div className="flex flex-col items-start gap-1">
                      <div
                        className={`h-2 w-2 rounded-full ${c.dot}`}
                        aria-hidden
                      />
                      <span className={`${c.text}`}>{s.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="mx-1 h-px flex-1 bg-graphite-500" />
                    )}
                  </div>
                )
              })}
            </div>
            <div className="mt-4 flex items-center gap-5 border-t border-graphite-700 pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-graphite-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-graphite-400" />
                <span>source</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow-400" />
                <span className="text-brand-yellow-400">atlas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-400" />
                <span className="text-brand-blue-400">cohesionxl</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Step cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => {
            const c = layerColors[step.layer]
            return (
              <ScrollReveal key={step.n} delay={idx * 0.05}>
                <div
                  className={`h-full rounded-lg border ${c.border} bg-graphite-800 p-6`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] font-semibold text-graphite-400">
                      {step.n}
                    </span>
                    <span
                      className={`font-mono text-[11px] uppercase tracking-[0.12em] ${c.text}`}
                    >
                      {step.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold leading-snug tracking-[-0.01em] text-graphite-100">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-graphite-300">
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="mt-10 rounded-lg border border-graphite-600 bg-graphite-950 p-6 font-mono text-[13px] leading-[1.7]">
            <div className="text-graphite-400">// invariant</div>
            <div className="mt-1 text-graphite-200">
              <span className="text-brand-blue-400">C</span>
              <span className="text-graphite-400">ₖ₊₁</span>{" "}
              <span className="text-graphite-500">=</span>{" "}
              <span className="text-brand-blue-400">C</span>
              <span className="text-graphite-400">ₖ</span>{" "}
              <span className="text-brand-yellow-400">⊕</span>{" "}
              <span className="text-brand-yellow-400">Δ</span>
              <span className="text-graphite-400">ₖ★</span>
            </div>
            <div className="mt-3 text-graphite-400">
              // every state is derivable from ℒ; nothing is mutated in place
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
