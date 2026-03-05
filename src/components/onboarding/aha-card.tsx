interface AhaCardProps {
  number: number
  title: string
  body: string
  metric: string
}

export function AhaCard({ number, title, body, metric }: AhaCardProps) {
  return (
    <div className="rounded-lg border border-graphite-600 bg-graphite-800 p-6 transition-colors duration-200 hover:border-graphite-500 hover:bg-graphite-750">
      <div className="mb-3 text-[2.25rem] font-bold leading-none tracking-tight text-brand-blue-400">
        {number}
      </div>
      <h3 className="text-lg font-semibold leading-snug text-graphite-100">
        {title}
      </h3>
      <p className="mt-3 text-[14px] leading-[1.65] text-graphite-300">
        {body}
      </p>
      <div className="mt-4 inline-block rounded-full bg-brand-blue-500/10 px-4 py-1.5 text-[13px] font-medium text-brand-blue-400">
        {metric}
      </div>
    </div>
  )
}
