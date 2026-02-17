import { SectionTag } from "@/components/ui/section-tag"

export function FinopsAnalogy() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div>
          <div className="flex justify-center">
            <SectionTag>The Category</SectionTag>
          </div>
        </div>

        <div className="mx-auto max-w-[800px] text-center">
          <div>
            <h2 className="text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-300">
              Cloud compute created a new cost type that didn't fit in existing
              budgeting tools.
            </h2>
          </div>

          <div>
            <p className="mt-4 text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-brand-blue-400">
              <em>FinOps</em> emerged. Multi-billion dollar category.
            </p>
          </div>

          <div>
            <div className="mx-auto my-10 h-px w-16 bg-graphite-600" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-300">
              AI delivery capacity is creating a new throughput type that doesn't
              fit in existing planning tools.
            </h2>
          </div>

          <div>
            <p className="mt-4 text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-brand-blue-400">
              <em>This</em> is that moment.
            </p>
          </div>

          <div>
            <p className="mx-auto mt-12 max-w-[600px] text-[15px] leading-[1.7] text-graphite-400">
              The last time a new capacity type entered the enterprise, it spawned
              a $50B+ governance category. The same structural pattern is
              unfolding now — but for delivery throughput rather than
              infrastructure cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
