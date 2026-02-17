import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-graphite-600 bg-graphite-950">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-baseline gap-0.5 no-underline">
            <span className="text-lg font-bold tracking-tight text-brand-blue-400">
              Cohesion
            </span>
            <span className="text-lg font-bold tracking-tight text-graphite-400">
              XL
            </span>
          </Link>
          <span className="hidden h-4 w-px bg-graphite-600 sm:block" />
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-graphite-400">
            AI Capacity Governance Runtime
          </span>
        </div>
        <span className="text-[13px] text-graphite-400">
          &copy; {new Date().getFullYear()} CohesionXL
        </span>
      </div>
    </footer>
  )
}
