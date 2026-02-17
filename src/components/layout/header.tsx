import { Separator } from "@/components/ui/separator"

export function Header() {
  return (
    <header className="border-b border-graphite-600">
      <div className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold tracking-tight text-brand-blue-400">
            cohesion
          </span>
          <Separator orientation="vertical" className="h-4" />
          <span className="font-mono text-xs text-graphite-400">xl</span>
        </div>
        <nav className="flex items-center gap-6">
          {/* Navigation will be populated by content deck */}
        </nav>
      </div>
    </header>
  )
}
