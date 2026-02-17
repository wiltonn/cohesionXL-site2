import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionTag } from "@/components/ui/section-tag"
import { X } from "lucide-react"

const phases = [
  {
    id: 1,
    timeline: "Now → Mid 2026",
    title: "Tool Sprawl Creates Planning Chaos",
    body: "49% of developers use 5+ AI tools. Teams lose 7 hours per member per week to AI-related inefficiency. Pain is diffuse — nobody can explain why at the portfolio level because the planning tools can't see AI capacity or its friction costs.",
    color: "amber" as const,
    cx: 25,
    cy: 28,
  },
  {
    id: 2,
    timeline: "Mid 2026 → 2027",
    title: "Agent Capacity Becomes a Budget Line",
    body: "Organizations start paying for AI agents as production delivery capacity, not productivity tools. You can't put an agentic coding team on a Gantt chart. You can't allocate \"30% of Claude Code's throughput\" in Planview. The planning model literally has no input field for this.",
    color: "coral" as const,
    cx: 52,
    cy: 52,
  },
  {
    id: 3,
    timeline: "2027+",
    title: "The Failure Cascade Forces the Buy",
    body: "40%+ of agentic AI projects canceled. Organizations that can't govern mixed human/AI capacity will either abandon AI entirely — or buy the governance layer they should have had from the start.",
    color: "deepred" as const,
    cx: 78,
    cy: 82,
  },
]

const colorStyles = {
  amber: {
    fill: "#FFAA00",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    text: "text-amber-400",
    badge: "bg-amber-400/15 text-amber-400",
  },
  coral: {
    fill: "#FF3366",
    bg: "bg-coral-400/10",
    border: "border-coral-400/20",
    text: "text-coral-400",
    badge: "bg-coral-400/15 text-coral-400",
  },
  deepred: {
    fill: "#CC1133",
    bg: "bg-coral-400/10",
    border: "border-coral-400/30",
    text: "text-coral-400",
    badge: "bg-coral-400/15 text-coral-400",
  },
}

// S-curve path
const curvePath =
  "M 60,250 C 100,248 160,240 220,220 C 280,200 320,170 380,130 C 440,90 480,50 560,35 C 620,24 680,20 740,18"

export function PainCurve() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal>
          <SectionTag>Pain Acceleration Curve</SectionTag>
          <h2 className="max-w-[700px] font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] tracking-[-0.02em] text-text-primary">
            The governance gap is widening faster than your planning tools can
            adapt.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-16">
          <div
            ref={containerRef}
            className="relative rounded-xl border border-white/[0.06] bg-surface p-6 lg:p-10"
          >
            {/* SVG Chart */}
            <div className="relative w-full">
              <svg
                viewBox="0 0 800 280"
                className="h-auto w-full"
                fill="none"
              >
                {/* Grid lines */}
                {[70, 140, 210].map((y) => (
                  <line
                    key={y}
                    x1={40}
                    y1={y}
                    x2={760}
                    y2={y}
                    stroke="rgba(255,255,255,0.04)"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Axis labels */}
                <text x={400} y={272} textAnchor="middle" fill="#556677" fontSize={11} fontFamily="General Sans, sans-serif">
                  Time
                </text>
                <text x={20} y={140} textAnchor="middle" fill="#556677" fontSize={11} fontFamily="General Sans, sans-serif" transform="rotate(-90, 20, 140)">
                  Planning Pain
                </text>

                {/* Gradient definition for the curve */}
                <defs>
                  <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFAA00" />
                    <stop offset="50%" stopColor="#FF3366" />
                    <stop offset="100%" stopColor="#CC1133" />
                  </linearGradient>
                </defs>

                {/* Animated curve */}
                <motion.path
                  d={curvePath}
                  stroke="url(#curveGradient)"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, ease: [0.25, 0.4, 0.25, 1] }}
                />

                {/* Area fill under curve */}
                <motion.path
                  d={curvePath + " L 740,260 L 60,260 Z"}
                  fill="url(#curveGradient)"
                  opacity={0.04}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.04 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />

                {/* Inflection points */}
                {phases.map((phase, i) => {
                  const x = (phase.cx / 100) * 700 + 60
                  const yVal = phase.cy / 100
                  const y = 250 - yVal * 230

                  return (
                    <motion.g
                      key={phase.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + i * 0.4,
                        ease: [0.25, 0.4, 0.25, 1],
                      }}
                      style={{ transformOrigin: `${x}px ${y}px` }}
                    >
                      <circle
                        cx={x}
                        cy={y}
                        r={expandedPhase === phase.id ? 8 : 6}
                        fill={colorStyles[phase.color].fill}
                        className="cursor-pointer transition-all"
                        onClick={() =>
                          setExpandedPhase(
                            expandedPhase === phase.id ? null : phase.id
                          )
                        }
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r={12}
                        fill={colorStyles[phase.color].fill}
                        opacity={0.15}
                        className="cursor-pointer"
                        onClick={() =>
                          setExpandedPhase(
                            expandedPhase === phase.id ? null : phase.id
                          )
                        }
                      />
                      {/* Label */}
                      <text
                        x={x}
                        y={y - 20}
                        textAnchor="middle"
                        fill={colorStyles[phase.color].fill}
                        fontSize={11}
                        fontWeight={500}
                        fontFamily="General Sans, sans-serif"
                        className="cursor-pointer"
                        onClick={() =>
                          setExpandedPhase(
                            expandedPhase === phase.id ? null : phase.id
                          )
                        }
                      >
                        {phase.timeline}
                      </text>
                    </motion.g>
                  )
                })}
              </svg>
            </div>

            {/* Phase detail cards (mobile: always visible as timeline) */}
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {phases.map((phase) => {
                const colors = colorStyles[phase.color]
                const isExpanded = expandedPhase === phase.id

                return (
                  <motion.div
                    key={phase.id}
                    layout
                    className={`cursor-pointer rounded-lg border p-5 transition-colors ${
                      isExpanded
                        ? `${colors.bg} ${colors.border}`
                        : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                    }`}
                    onClick={() =>
                      setExpandedPhase(isExpanded ? null : phase.id)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${colors.badge}`}
                      >
                        {phase.timeline}
                      </span>
                      {isExpanded && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedPhase(null)
                          }}
                          className="text-text-muted hover:text-text-secondary"
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                    <h4
                      className={`mt-3 text-[15px] font-semibold ${
                        isExpanded ? colors.text : "text-text-primary"
                      }`}
                    >
                      {phase.title}
                    </h4>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-[14px] leading-[1.7] text-text-secondary">
                        {phase.body}
                      </p>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="mt-12">
          <p className="mx-auto max-w-[720px] text-center font-display text-[clamp(1.1rem,2vw,1.35rem)] leading-[1.5] tracking-[-0.01em] text-text-secondary italic">
            The question isn't whether you'll need AI capacity governance. It's
            whether you'll have it before the failure cascade hits your
            portfolio.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
