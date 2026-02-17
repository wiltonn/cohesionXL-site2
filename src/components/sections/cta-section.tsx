import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

interface CtaSectionProps {
  headline: string
  body: string
  buttonText: string
  to: string
}

export function CtaSection({ headline, body, buttonText, to }: CtaSectionProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1200px] px-6 text-center lg:px-8">
        <div>
          <h2 className="mx-auto max-w-[700px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            {headline}
          </h2>
        </div>

        <div>
          <p className="mx-auto mt-5 max-w-[600px] text-base leading-[1.7] text-graphite-300">
            {body}
          </p>
        </div>

        <div>
          <Link
            to={to}
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-[14px] font-semibold text-brand-frost no-underline transition-colors duration-200 hover:bg-brand-blue-400"
          >
            {buttonText}
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
