import type { ReactNode } from "react"
import { Header } from "./header"

interface ShellProps {
  children?: ReactNode
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-graphite-900">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  )
}
