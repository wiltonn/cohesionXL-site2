import { SectionTag } from "@/components/ui/section-tag"

export function ProblemStatement() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div>
          <SectionTag>The Category Shift</SectionTag>
        </div>

        <div>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            Your planning tools model a world that no longer exists.
          </h2>
        </div>

        <div className="mt-10 max-w-[640px] space-y-6">
          <div>
            <p className="text-base leading-[1.7] text-graphite-300">
              Strategic portfolio management tools plan{" "}
              <em className="text-graphite-100 not-italic">within</em>{" "}
              constraints they cannot see. They take the organizational topology
              as given, treat capacity as a static input — headcount x velocity —
              and sequence work linearly.
            </p>
          </div>

          <div>
            <p className="text-base leading-[1.7] text-graphite-300">
              That model was already approximate. Now it's broken. When 25% of
              Google's code is AI-assisted and 85% of developers use AI tools
              daily, the "capacity" your planning tools model bears no resemblance
              to the capacity your organization actually has.
            </p>
          </div>

          <div>
            <p className="text-base leading-[1.7] text-graphite-300">
              This isn't a tooling gap. It's a{" "}
              <em className="text-brand-blue-400">category</em> gap. You don't need a
              better pipeline planner. You need a constraint-aware portfolio
              simulation engine.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
