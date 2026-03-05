import { ArrowRight } from "lucide-react"

const sources = [
  { label: "Jira / Azure DevOps", output: "Work Graph" },
  { label: "Workday / HRIS", output: "Org Graph" },
  { label: "GitHub / CI-CD", output: "Delivery Signals" },
  { label: "Spreadsheets / Smartsheet", output: "Shadow Work Layer" },
  { label: "CRM / ProductBoard", output: "Initiative Context" },
]

const stages = [
  "Identity Resolution —one canonical identity per person across all systems",
  "Work Item Normalization —unified schema: type, complexity, cycle time, owner",
  "Skill Tagging —every work item tagged with required skill domains",
  "Capacity Token Accounting —human and AI agent throughput unified into one model",
]

const outputs = [
  {
    name: "Org Graph",
    desc: "actual working teams, not just the org chart",
  },
  {
    name: "Work Graph",
    desc: "full initiative hierarchy from strategy to task",
  },
  {
    name: "Dependency Graph",
    desc: "cross-team constraints made explicit",
  },
  {
    name: "Capacity Graph",
    desc: "available throughput matched to portfolio demand",
  },
]

export function SourceFlowDiagram() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-6">
      {/* Source Systems */}
      <div className="flex flex-1 flex-col gap-2">
        <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-graphite-400">
          Source systems
        </span>
        {sources.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-graphite-600 bg-graphite-800 px-4 py-2.5 text-[13px] text-graphite-200"
          >
            {s.label}
          </div>
        ))}
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center lg:mt-10">
        <ArrowRight size={20} className="text-brand-blue-400" />
      </div>

      {/* Normalization Engine */}
      <div className="flex flex-1 flex-col gap-2">
        <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-graphite-400">
          Normalization pipeline
        </span>
        {stages.map((stage, i) => (
          <div
            key={stage}
            className="flex items-start gap-3 rounded-lg border border-graphite-600 bg-graphite-850 px-4 py-2.5"
          >
            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-500 text-[10px] font-bold text-brand-frost">
              {i + 1}
            </div>
            <span className="text-[13px] leading-[1.5] text-graphite-300">
              {stage}
            </span>
          </div>
        ))}
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center lg:mt-10">
        <ArrowRight size={20} className="text-brand-blue-400" />
      </div>

      {/* Graph Outputs */}
      <div className="flex flex-1 flex-col gap-2">
        <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-graphite-400">
          Graph outputs
        </span>
        {outputs.map((o) => (
          <div
            key={o.name}
            className="rounded-lg border border-brand-blue-500/20 bg-brand-blue-500/[0.05] px-4 py-2.5"
          >
            <span className="text-[13px] font-semibold text-brand-blue-400">
              {o.name}
            </span>
            <span className="ml-2 text-[12px] text-graphite-400">
              {o.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
