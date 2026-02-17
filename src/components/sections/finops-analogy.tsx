import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionTag } from "@/components/ui/section-tag"

export function FinopsAnalogy() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex justify-center">
            <SectionTag>The Category</SectionTag>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-[800px] text-center">
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-text-secondary">
              Cloud compute created a new cost type that didn't fit in existing
              budgeting tools.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="mt-4 font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-cyan-400">
              <em>FinOps</em> emerged. Multi-billion dollar category.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mx-auto my-10 h-px w-16 bg-white/[0.12]" />
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-text-secondary">
              AI delivery capacity is creating a new throughput type that doesn't
              fit in existing planning tools.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.65}>
            <p className="mt-4 font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-cyan-400">
              <em>This</em> is that moment.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <p className="mx-auto mt-12 max-w-[600px] text-[15px] leading-[1.7] text-text-muted">
              The last time a new capacity type entered the enterprise, it spawned
              a $50B+ governance category. The same structural pattern is
              unfolding now — but for delivery throughput rather than
              infrastructure cost.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
