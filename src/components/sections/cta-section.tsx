import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface CtaSectionProps {
  headline: string
  body: string
  buttonText: string
  to: string
}

export function CtaSection({ headline, body, buttonText, to }: CtaSectionProps) {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-surface/30 to-void" />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center lg:px-8">
        <ScrollReveal>
          <h2 className="mx-auto max-w-[700px] font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] tracking-[-0.02em] text-text-primary">
            {headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-[600px] text-[16px] leading-[1.7] text-text-secondary">
            {body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Link
            to={to}
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 text-[14px] font-semibold text-void no-underline transition-all hover:bg-cyan-500 hover:shadow-[0_0_24px_rgba(0,212,255,0.2)]"
          >
            {buttonText}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
