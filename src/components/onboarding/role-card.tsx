import type { LucideIcon } from "lucide-react"

interface RoleCardProps {
  icon: LucideIcon
  title: string
  responsibilities: string
  automationPath: string
}

export function RoleCard({
  icon: Icon,
  title,
  responsibilities,
  automationPath,
}: RoleCardProps) {
  return (
    <div className="rounded-lg border border-graphite-600 bg-graphite-800 p-6 transition-colors duration-200 hover:border-graphite-500 hover:bg-graphite-750">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue-500/10">
        <Icon size={18} className="text-brand-blue-400" />
      </div>
      <h3 className="text-base font-semibold leading-snug text-graphite-100">
        {title}
      </h3>
      <p className="mt-3 text-[14px] leading-[1.65] text-graphite-300">
        {responsibilities}
      </p>
      <div className="mt-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-graphite-400">
          Automation path
        </span>
        <p className="mt-1.5 text-[13px] leading-[1.5] text-graphite-300">
          {automationPath}
        </p>
      </div>
    </div>
  )
}
