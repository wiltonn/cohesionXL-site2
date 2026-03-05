interface TimelinePhaseProps {
  number: number
  label: string
  timeframe: string
  activities: string
  exitGate?: string
}

export function TimelinePhase({
  number,
  label,
  timeframe,
  activities,
  exitGate,
}: TimelinePhaseProps) {
  return (
    <div className="relative flex flex-col rounded-lg border border-graphite-600 bg-graphite-800 p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-500 text-[13px] font-bold text-brand-frost">
          {number}
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold text-graphite-100">
            {label}
          </span>
          <span className="text-[12px] font-medium text-brand-blue-400">
            {timeframe}
          </span>
        </div>
      </div>

      <p className="text-[14px] leading-[1.65] text-graphite-300">
        {activities}
      </p>

      {exitGate && (
        <div className="mt-4 rounded-lg border border-graphite-600 bg-graphite-850 p-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-graphite-400">
            Exit gate
          </span>
          <p className="mt-1 text-[13px] leading-[1.5] text-graphite-300">
            {exitGate}
          </p>
        </div>
      )}
    </div>
  )
}
