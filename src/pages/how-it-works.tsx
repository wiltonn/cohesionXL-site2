import { motion } from "framer-motion"
import { ProcessSteps } from "@/components/sections/process-steps"
import { DemoPlaceholder } from "@/components/sections/demo-placeholder"
import { Differentiators } from "@/components/sections/differentiators"
import { CtaSection } from "@/components/sections/cta-section"

export function HowItWorks() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h1 className="max-w-[700px] font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] tracking-[-0.02em] text-text-primary">
              From fragmented toolchains to governable delivery.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.7] text-text-secondary">
              CohesionXL is infrastructure, not another dashboard. It sits
              underneath your existing planning tools and gives them the one thing
              they've never had: an accurate model of what your organization can
              actually deliver.
            </p>
          </motion.div>
        </div>
      </section>

      <ProcessSteps />

      <DemoPlaceholder />

      <Differentiators />

      <CtaSection
        headline="Ready to see what your capacity model is missing?"
        body="We'll show you the delta between what your planning tools think your delivery capacity is — and what it actually is."
        buttonText="Get in Touch"
        to="/contact"
      />
    </>
  )
}
