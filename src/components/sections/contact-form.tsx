import { useState } from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Send } from "lucide-react"

const roles = [
  "CTO",
  "VP Engineering",
  "Head of PMO",
  "Engineering Leader",
  "Investor",
  "Other",
]

const interests = [
  "I want to understand our capacity governance gap",
  "I want a product demo",
  "I'm evaluating the market opportunity",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission handler — integrate with backend
    console.log("Form submitted:", formData)
  }

  const inputClasses =
    "w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-[15px] text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-400/20"

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <ScrollReveal>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-[560px] space-y-5"
          >
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-text-secondary">
                Name
              </label>
              <input
                type="text"
                required
                className={inputClasses}
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-text-secondary">
                Email
              </label>
              <input
                type="email"
                required
                className={inputClasses}
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Company */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-text-secondary">
                Company
              </label>
              <input
                type="text"
                required
                className={inputClasses}
                placeholder="Company name"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>

            {/* Role */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-text-secondary">
                Role
              </label>
              <select
                required
                className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238899AA%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10`}
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option value="" disabled>
                  Select your role
                </option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            {/* Primary Interest */}
            <div>
              <label className="mb-3 block text-[13px] font-medium text-text-secondary">
                Primary interest
              </label>
              <div className="space-y-2.5">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors hover:bg-white/[0.04] has-[:checked]:border-cyan-400/30 has-[:checked]:bg-cyan-400/[0.04]"
                  >
                    <input
                      type="radio"
                      name="interest"
                      value={interest}
                      checked={formData.interest === interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      className="mt-0.5 h-4 w-4 appearance-none rounded-full border border-white/20 bg-transparent checked:border-cyan-400 checked:bg-cyan-400 checked:shadow-[inset_0_0_0_3px_#0A0E17]"
                    />
                    <span className="text-[14px] leading-snug text-text-secondary">
                      {interest}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-text-secondary">
                Message{" "}
                <span className="font-normal text-text-muted">(optional)</span>
              </label>
              <textarea
                rows={4}
                className={`${inputClasses} resize-none`}
                placeholder="Tell us about your situation"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 text-[14px] font-semibold text-void transition-all hover:bg-cyan-500 hover:shadow-[0_0_24px_rgba(0,212,255,0.2)]"
            >
              Send Message
              <Send
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>

            <p className="text-center text-[13px] leading-[1.6] text-text-muted">
              We respond within 24 hours. No sales sequences. No 14-email nurture
              campaign. Just a conversation about whether this problem is real for
              your organization.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
