import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
}

const getVariants = (
  direction: string,
  distance: number
): Variants => {
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }[direction] ?? {}

  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  }
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.7,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      variants={getVariants(direction, distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
