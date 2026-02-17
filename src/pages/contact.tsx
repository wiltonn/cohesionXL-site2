import { motion } from "framer-motion"
import { ContactForm } from "@/components/sections/contact-form"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Mail, FileText } from "lucide-react"

export function Contact() {
  return (
    <>
      {/* Contact Hero */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h1 className="max-w-[700px] font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] tracking-[-0.02em] text-text-primary">
              Let's talk about your capacity governance gap.
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
            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.7] text-text-secondary">
              Whether you're a CTO navigating mixed human/AI delivery, a VP of
              Engineering watching planning accuracy degrade, or an investor
              evaluating the AI governance infrastructure opportunity — we'd like
              to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactForm />

      {/* Alternative Contact */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto flex max-w-[560px] flex-col items-center gap-4 rounded-xl border border-white/[0.06] bg-surface p-8 text-center sm:flex-row sm:text-left">
              <div className="flex flex-1 items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-cyan-400" />
                <div>
                  <span className="text-[13px] text-text-muted">
                    Prefer email?
                  </span>
                  <a
                    href="mailto:hello@cohesionxl.com"
                    className="ml-2 text-[14px] font-medium text-cyan-400 no-underline transition-colors hover:text-cyan-500"
                  >
                    hello@cohesionxl.com
                  </a>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-white/[0.06] sm:block" />

              <div className="flex flex-1 items-center gap-3">
                <FileText size={16} className="flex-shrink-0 text-cyan-400" />
                <div>
                  <span className="text-[13px] text-text-muted">
                    Want to see the research?
                  </span>
                  <span className="ml-2 text-[14px] font-medium text-text-muted">
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
