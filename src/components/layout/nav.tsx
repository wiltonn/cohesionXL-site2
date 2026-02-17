import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Overview", path: "/" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Contact", path: "/contact" },
]

export function Nav() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-graphite-600 bg-graphite-900"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-baseline gap-0.5 no-underline">
          <span className="text-xl font-bold tracking-tight text-brand-blue-400">
            Cohesion
          </span>
          <span className="text-xl font-bold tracking-tight text-graphite-400">
            XL
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-200 no-underline ${
                location.pathname === link.path
                  ? "text-brand-blue-400"
                  : "text-graphite-300 hover:text-graphite-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-graphite-300 transition-colors duration-200 hover:text-graphite-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-graphite-600 bg-graphite-900 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium no-underline transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "bg-brand-blue-500/10 text-brand-blue-400"
                    : "text-graphite-300 hover:bg-graphite-800 hover:text-graphite-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
