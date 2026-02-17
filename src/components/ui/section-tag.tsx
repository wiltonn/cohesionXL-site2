interface SectionTagProps {
  children: string
}

export function SectionTag({ children }: SectionTagProps) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <div className="h-px w-8 bg-text-muted" />
      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted">
        {children}
      </span>
    </div>
  )
}
