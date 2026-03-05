import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

interface SectionHeroProps {
  headline: string
  subheadline: string
  ctaText?: string
  ctaTo?: string
  pullQuote?: string
}

export function SectionHero({
  headline,
  subheadline,
  ctaText,
  ctaTo,
  pullQuote,
}: SectionHeroProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h1 className="max-w-[700px] text-[2.25rem] font-bold leading-[1.2] tracking-[-0.025em] text-graphite-100">
            {headline}
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
            {subheadline}
          </p>
        </motion.div>

        {ctaText && ctaTo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <Link
              to={ctaTo}
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-[14px] font-semibold text-brand-frost no-underline transition-colors duration-200 hover:bg-brand-blue-400"
            >
              {ctaText}
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        )}

        {pullQuote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            <div className="mt-10 max-w-[700px] rounded-lg border-l-2 border-brand-blue-500 bg-graphite-800 p-6">
              <p className="text-[15px] leading-[1.7] text-graphite-300 italic">
                "{pullQuote}"
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
