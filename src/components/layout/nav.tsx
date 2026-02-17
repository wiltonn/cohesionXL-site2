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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#0A0E17]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-baseline gap-0.5 no-underline">
          <span className="font-display text-xl tracking-tight text-cyan-400">
            Cohesion
          </span>
          <span className="font-display text-xl tracking-tight text-text-muted">
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
                  ? "text-cyan-400"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-text-secondary transition-colors hover:text-text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-[#0A0E17]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium no-underline transition-colors ${
                  location.pathname === link.path
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "text-text-secondary hover:bg-white/[0.04] hover:text-text-primary"
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
