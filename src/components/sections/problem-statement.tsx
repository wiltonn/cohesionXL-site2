import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionTag } from "@/components/ui/section-tag"

export function ProblemStatement() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal>
          <SectionTag>The Category Shift</SectionTag>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="max-w-[700px] font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] tracking-[-0.02em] text-text-primary">
            Your planning tools model a world that no longer exists.
          </h2>
        </ScrollReveal>

        <div className="mt-10 max-w-[640px] space-y-6">
          <ScrollReveal delay={0.2}>
            <p className="text-[17px] leading-[1.7] text-text-secondary">
              Strategic portfolio management tools plan{" "}
              <em className="text-text-primary not-italic">within</em>{" "}
              constraints they cannot see. They take the organizational topology
              as given, treat capacity as a static input — headcount × velocity —
              and sequence work linearly.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-[17px] leading-[1.7] text-text-secondary">
              That model was already approximate. Now it's broken. When 25% of
              Google's code is AI-assisted and 85% of developers use AI tools
              daily, the "capacity" your planning tools model bears no resemblance
              to the capacity your organization actually has.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-[17px] leading-[1.7] text-text-secondary">
              This isn't a tooling gap. It's a{" "}
              <em className="text-cyan-400">category</em> gap. You don't need a
              better pipeline planner. You need a constraint-aware portfolio
              simulation engine.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
