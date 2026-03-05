interface WorkshopCardProps {
  number: number
  title: string
  duration: string
  objective: string
  outputs: string[]
}

export function WorkshopCard({
  number,
  title,
  duration,
  objective,
  outputs,
}: WorkshopCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-graphite-600 bg-graphite-800 p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-500 text-[13px] font-bold text-brand-frost">
          {number}
        </div>
        <span className="rounded-full bg-graphite-700 px-3 py-1 text-[12px] font-medium text-graphite-300">
          {duration}
        </span>
      </div>

      <h3 className="text-base font-semibold leading-snug text-graphite-100">
        {title}
      </h3>

      <div className="mt-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-graphite-400">
          Objective
        </span>
        <p className="mt-1.5 text-[14px] leading-[1.65] text-graphite-300">
          {objective}
        </p>
      </div>

      <div className="mt-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-graphite-400">
          Key outputs
        </span>
        <ul className="mt-2 flex flex-col gap-1.5">
          {outputs.map((output) => (
            <li
              key={output}
              className="flex items-start gap-2 text-[14px] leading-[1.5] text-graphite-300"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue-400" />
              {output}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
