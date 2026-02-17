import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionTag } from "@/components/ui/section-tag"
import { X } from "lucide-react"

const phases = [
  {
    id: 1,
    timeline: "Now - Mid 2026",
    title: "Tool Sprawl Creates Planning Chaos",
    body: "49% of developers use 5+ AI tools. Teams lose 7 hours per member per week to AI-related inefficiency. Pain is diffuse — nobody can explain why at the portfolio level because the planning tools can't see AI capacity or its friction costs.",
    color: "yellow" as const,
    cx: 25,
    cy: 28,
  },
  {
    id: 2,
    timeline: "Mid 2026 - 2027",
    title: "Agent Capacity Becomes a Budget Line",
    body: "Organizations start paying for AI agents as production delivery capacity, not productivity tools. You can't put an agentic coding team on a Gantt chart. You can't allocate \"30% of Claude Code's throughput\" in Planview. The planning model literally has no input field for this.",
    color: "error" as const,
    cx: 52,
    cy: 52,
  },
  {
    id: 3,
    timeline: "2027+",
    title: "The Failure Cascade Forces the Buy",
    body: "40%+ of agentic AI projects canceled. Organizations that can't govern mixed human/AI capacity will either abandon AI entirely — or buy the governance layer they should have had from the start.",
    color: "deeperror" as const,
    cx: 78,
    cy: 82,
  },
]

const colorStyles = {
  yellow: {
    fill: "#ded132",
    bg: "bg-brand-yellow-400/10",
    border: "border-brand-yellow-400/20",
    text: "text-brand-yellow-400",
    badge: "bg-brand-yellow-400/15 text-brand-yellow-400",
  },
  error: {
    fill: "#ef4444",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    text: "text-red-500",
    badge: "bg-red-500/15 text-red-500",
  },
  deeperror: {
    fill: "#dc2626",
    bg: "bg-red-600/10",
    border: "border-red-600/30",
    text: "text-red-600",
    badge: "bg-red-600/15 text-red-600",
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
        <div>
          <SectionTag>Pain Acceleration Curve</SectionTag>
          <h2 className="max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            The governance gap is widening faster than your planning tools can
            adapt.
          </h2>
        </div>

        <div className="mt-16">
          <div
            ref={containerRef}
            className="relative rounded-lg border border-graphite-600 bg-graphite-800 p-6 lg:p-10"
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
                    stroke="#2a2f3b"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Axis labels */}
                <text x={400} y={272} textAnchor="middle" fill="#6b7280" fontSize={11} fontFamily="Inter, system-ui, sans-serif">
                  Time
                </text>
                <text x={20} y={140} textAnchor="middle" fill="#6b7280" fontSize={11} fontFamily="Inter, system-ui, sans-serif" transform="rotate(-90, 20, 140)">
                  Planning Pain
                </text>

                {/* Gradient definition for the curve */}
                <defs>
                  <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ded132" />
                    <stop offset="50%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>

                {/* Animated curve */}
                <motion.path
                  d={curvePath}
                  stroke="url(#curveGradient)"
                  strokeWidth={2}
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
                        fontFamily="Inter, system-ui, sans-serif"
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

            {/* Phase detail cards */}
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {phases.map((phase) => {
                const colors = colorStyles[phase.color]
                const isExpanded = expandedPhase === phase.id

                return (
                  <motion.div
                    key={phase.id}
                    layout
                    className={`cursor-pointer rounded-lg border p-5 transition-colors duration-200 ${
                      isExpanded
                        ? `${colors.bg} ${colors.border}`
                        : "border-graphite-600 bg-graphite-750 hover:bg-graphite-700"
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
                          className="text-graphite-400 hover:text-graphite-300"
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
                    <h4
                      className={`mt-3 text-[15px] font-semibold ${
                        isExpanded ? colors.text : "text-graphite-100"
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
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-[14px] leading-[1.7] text-graphite-300">
                        {phase.body}
                      </p>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="mx-auto max-w-[720px] text-center text-xl font-semibold leading-[1.4] tracking-[-0.01em] text-graphite-300 italic">
            The question isn't whether you'll need AI capacity governance. It's
            whether you'll have it before the failure cascade hits your
            portfolio.
          </p>
        </div>
      </div>
    </section>
  )
}
