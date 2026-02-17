import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-void">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-baseline gap-0.5 no-underline">
            <span className="font-display text-lg tracking-tight text-cyan-400">
              Cohesion
            </span>
            <span className="font-display text-lg tracking-tight text-text-muted">
              XL
            </span>
          </Link>
          <span className="hidden h-4 w-px bg-white/[0.06] sm:block" />
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted">
            AI Capacity Governance Platform
          </span>
        </div>
        <span className="text-[13px] text-text-muted">
          &copy; {new Date().getFullYear()} CohesionXL
        </span>
      </div>
    </footer>
  )
}
