const phases = [
  {
    label: "Crawl",
    title: "CohesionXL Core",
    body: "Enterprises achieve organizational legibility. They can see their actual capacity, their constraint graph, their dependency structure, and their AI agent footprint. Portfolio planning becomes constraint-honest.",
  },
  {
    label: "Walk",
    title: "CohesionXL + Atlas Feed",
    body: "AI agent activity becomes visible inside the planning model. The Org Graph and Work Graph that CohesionXL builds become the context substrate for Atlas. Human and AI work are tracked in a unified capacity model.",
  },
  {
    label: "Run",
    title: "Full Governance",
    body: "Atlas governs AI agents with the full organizational context graph as its operating substrate. Every agent action is auditable against the planning model. The enterprise has a single system of context for all delivery work — human and AI.",
  },
]

export function CrawlWalkRun() {
  return (
    <div className="relative grid gap-5 md:grid-cols-3">
      {/* Connecting line behind cards on desktop */}
      <div className="absolute top-10 right-[calc(100%/6)] left-[calc(100%/6)] hidden h-px bg-graphite-600 md:block" />

      {phases.map((phase) => (
        <div
          key={phase.label}
          className="relative flex flex-col rounded-lg border border-graphite-600 bg-graphite-800 p-6"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-brand-blue-500/10 px-3 py-1 text-[12px] font-semibold text-brand-blue-400">
              {phase.label}
            </span>
          </div>
          <h3 className="text-base font-semibold leading-snug text-graphite-100">
            {phase.title}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.65] text-graphite-300">
            {phase.body}
          </p>
        </div>
      ))}
    </div>
  )
}
