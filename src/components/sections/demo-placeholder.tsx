import { Play } from "lucide-react"

export function DemoPlaceholder() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-graphite-600 bg-graphite-800">
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button className="group flex h-16 w-16 items-center justify-center rounded-full border border-brand-blue-500/30 bg-brand-blue-500/10 transition-colors duration-200 hover:border-brand-blue-500/50 hover:bg-brand-blue-500/20">
                <Play
                  size={24}
                  className="ml-1 text-brand-blue-400 transition-transform duration-200 group-hover:scale-110"
                />
              </button>
              <span className="mt-4 text-[15px] font-medium text-graphite-100">
                Product Demo
              </span>
            </div>

            {/* Subtle grid overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>

        <div>
          <p className="mx-auto mt-5 max-w-[560px] text-center text-[14px] leading-[1.6] text-graphite-400">
            See CohesionXL model a real enterprise constraint graph and simulate
            portfolio trade-offs across mixed human/AI capacity.
          </p>
        </div>
      </div>
    </section>
  )
}
