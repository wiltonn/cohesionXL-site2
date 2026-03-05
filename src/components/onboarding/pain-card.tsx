import type { LucideIcon } from "lucide-react"

interface PainCardProps {
  icon: LucideIcon
  title: string
  body: string
}

export function PainCard({ icon: Icon, title, body }: PainCardProps) {
  return (
    <div className="flex rounded-lg border border-graphite-600 bg-graphite-800 transition-colors duration-200 hover:border-graphite-500 hover:bg-graphite-750">
      <div className="w-0.5 flex-shrink-0 rounded-l-lg bg-brand-blue-400" />
      <div className="p-6">
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue-500/10">
          <Icon size={18} className="text-brand-blue-400" />
        </div>
        <h3 className="text-base font-semibold leading-snug text-graphite-100">
          {title}
        </h3>
        <p className="mt-3 text-[14px] leading-[1.65] text-graphite-300">
          {body}
        </p>
      </div>
    </div>
  )
}
