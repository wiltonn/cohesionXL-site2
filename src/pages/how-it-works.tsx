import { motion } from "framer-motion"
import { ProcessSteps } from "@/components/sections/process-steps"
import { DataFlowLoop } from "@/components/sections/data-flow-loop"
import { CapabilityClaims } from "@/components/sections/capability-claims"
import { OutOfScope } from "@/components/sections/out-of-scope"
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
            <h1 className="max-w-[760px] text-[2.25rem] font-bold leading-[1.2] tracking-[-0.025em] text-graphite-100">
              From fragmented toolchains to{" "}
              <em className="not-italic text-brand-blue-400">authorized</em>{" "}
              delivery.
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
            <p className="mt-6 max-w-[640px] text-base leading-[1.7] text-graphite-300">
              CohesionXL is infrastructure, not another dashboard. It holds the
              authorization map. Atlas binds every observed action — agent or
              human — back to that map and produces evidence-backed,
              fully-replayable state. Together they make AI-augmented delivery
              governable at enterprise scale.
            </p>
          </motion.div>
        </div>
      </section>

      <ProcessSteps />

      <DataFlowLoop />

      <CapabilityClaims />

      <DemoPlaceholder />

      <Differentiators />

      <OutOfScope />

      <CtaSection
        headline="Ready to see what your capacity model is missing?"
        body="We'll show you the delta between what your planning tools think your delivery capacity is — and what it actually is."
        buttonText="Get in Touch"
        to="/contact"
      />
    </>
  )
}
