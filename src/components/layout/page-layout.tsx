import type { ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Nav } from "./nav"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-void">
      <Nav />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  )
}
