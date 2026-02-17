import { Play } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function DemoPlaceholder() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/[0.06] bg-surface">
            {/* Pulsing border glow */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-xl"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(0,212,255,0.15), 0 0 30px rgba(0,212,255,0.05)",
              }}
              animate={{
                boxShadow: [
                  "inset 0 0 0 1px rgba(0,212,255,0.1), 0 0 20px rgba(0,212,255,0.03)",
                  "inset 0 0 0 1px rgba(0,212,255,0.25), 0 0 40px rgba(0,212,255,0.08)",
                  "inset 0 0 0 1px rgba(0,212,255,0.1), 0 0 20px rgba(0,212,255,0.03)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button className="group flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/20">
                <Play
                  size={24}
                  className="ml-1 text-cyan-400 transition-transform group-hover:scale-110"
                />
              </button>
              <span className="mt-4 text-[15px] font-medium text-text-primary">
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
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-[560px] text-center text-[14px] leading-[1.6] text-text-muted">
            See CohesionXL model a real enterprise constraint graph and simulate
            portfolio trade-offs across mixed human/AI capacity.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
