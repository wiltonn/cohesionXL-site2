import { motion } from "framer-motion"
import { ContactForm } from "@/components/sections/contact-form"
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
            <h1 className="max-w-[700px] text-[2.25rem] font-bold leading-[1.2] tracking-[-0.025em] text-graphite-100">
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
            <p className="mt-6 max-w-[640px] text-base leading-[1.7] text-graphite-300">
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
          <div>
            <div className="mx-auto flex max-w-[560px] flex-col items-center gap-4 rounded-lg border border-graphite-600 bg-graphite-800 p-8 text-center sm:flex-row sm:text-left">
              <div className="flex flex-1 items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-brand-blue-400" />
                <div>
                  <span className="text-[13px] text-graphite-400">
                    Prefer email?
                  </span>
                  <a
                    href="mailto:hello@cohesionxl.com"
                    className="ml-2 text-[14px] font-medium text-brand-blue-400 no-underline transition-colors duration-200 hover:text-brand-blue-300"
                  >
                    hello@cohesionxl.com
                  </a>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-graphite-600 sm:block" />

              <div className="flex flex-1 items-center gap-3">
                <FileText size={16} className="flex-shrink-0 text-brand-blue-400" />
                <div>
                  <span className="text-[13px] text-graphite-400">
                    Want to see the research?
                  </span>
                  <span className="ml-2 text-[14px] font-medium text-graphite-400">
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
