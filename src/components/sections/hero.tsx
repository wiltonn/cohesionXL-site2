import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const statCards = [
  {
    stat: "20-35%",
    label: "Capacity Blindness",
    body: "Of enterprise software delivery capacity is now AI-generated. 0% of that capacity is modeled in portfolio planning tools. Every enterprise portfolio plan is already this wrong — and the gap widens quarterly.",
    color: "blue" as const,
  },
  {
    stat: "$300B+",
    label: "Wasted Investment",
    body: "42% of companies abandoned most AI initiatives in 2025, up from 17% in 2024. The #1 cited failure isn't model quality — it's governance, integration, and operational readiness. At current failure rates, hundreds of billions in AI spend delivers nothing.",
    color: "yellow" as const,
  },
  {
    stat: "40%",
    label: "The Inflection",
    body: "Of enterprise applications will embed AI agents by end of 2026. When AI moves from 'a thing developers use' to 'a thing on the capacity plan,' every enterprise needs a new planning primitive. That primitive doesn't exist yet.",
    color: "blue" as const,
  },
]

const colorMap = {
  blue: {
    stat: "text-brand-blue-400",
    dot: "bg-brand-blue-400",
    dotInactive: "bg-brand-blue-400/30",
  },
  yellow: {
    stat: "text-brand-yellow-400",
    dot: "bg-brand-yellow-400",
    dotInactive: "bg-brand-yellow-400/30",
  },
}

export function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % statCards.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const interval = setInterval(advance, 6000)
    return () => clearInterval(interval)
  }, [advance, paused])

  const card = statCards[active]
  const colors = colorMap[card.color]

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6">
      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-graphite-400">
            AI Capacity Governance Runtime
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[clamp(2rem,5vw,2.25rem)] font-bold leading-[1.2] tracking-[-0.025em] text-graphite-100"
        >
          If your enterprise portfolio planning isn't currently broken,{" "}
          <em className="text-brand-blue-400 not-italic">AI agents will break it.</em>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-6 max-w-[680px] text-base leading-[1.7] text-graphite-300"
        >
          CohesionXL is the constraint-aware portfolio simulation engine for
          enterprises navigating mixed human and AI delivery capacity.
        </motion.p>

        {/* Stat card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="mx-auto max-w-[560px] rounded-lg border border-graphite-600 bg-graphite-800 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div className={`text-[2.25rem] font-bold leading-none tracking-tight ${colors.stat}`}>
                  {card.stat}
                </div>
                <div className="mt-3 text-[15px] font-semibold uppercase tracking-[0.08em] text-graphite-100">
                  {card.label}
                </div>
                <p className="mt-4 text-[15px] leading-[1.7] text-graphite-300">
                  {card.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dot navigation */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {statCards.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === active
                      ? `w-6 ${colorMap[c.color].dot}`
                      : `w-1.5 bg-graphite-500 hover:bg-graphite-400`
                  }`}
                  aria-label={`Show stat ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-graphite-400">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-graphite-400 to-transparent" />
      </motion.div>
    </section>
  )
}
