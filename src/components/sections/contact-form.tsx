import { useState } from "react"
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
    console.log("Form submitted:", formData)
  }

  const inputClasses =
    "w-full rounded-lg border border-graphite-600 bg-graphite-700 px-4 py-3 text-[15px] text-graphite-200 placeholder:text-graphite-400 outline-none transition-colors duration-200 focus:border-brand-blue-500/40 focus:bg-graphite-700 focus:ring-1 focus:ring-brand-blue-500/20"

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-[560px] space-y-5"
          >
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-graphite-300">
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
              <label className="mb-1.5 block text-[13px] font-medium text-graphite-300">
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
              <label className="mb-1.5 block text-[13px] font-medium text-graphite-300">
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
              <label className="mb-1.5 block text-[13px] font-medium text-graphite-300">
                Role
              </label>
              <select
                required
                className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10`}
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
              <label className="mb-3 block text-[13px] font-medium text-graphite-300">
                Primary interest
              </label>
              <div className="space-y-2.5">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-graphite-600 bg-graphite-750 px-4 py-3 transition-colors duration-200 hover:bg-graphite-700 has-[:checked]:border-brand-blue-500/30 has-[:checked]:bg-brand-blue-500/[0.06]"
                  >
                    <input
                      type="radio"
                      name="interest"
                      value={interest}
                      checked={formData.interest === interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      className="mt-0.5 h-4 w-4 appearance-none rounded-full border border-graphite-500 bg-transparent checked:border-brand-blue-500 checked:bg-brand-blue-500 checked:shadow-[inset_0_0_0_3px_#0f1117]"
                    />
                    <span className="text-[14px] leading-snug text-graphite-300">
                      {interest}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-graphite-300">
                Message{" "}
                <span className="font-normal text-graphite-400">(optional)</span>
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
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3.5 text-[14px] font-semibold text-brand-frost transition-colors duration-200 hover:bg-brand-blue-400"
            >
              Send Message
              <Send
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>

            <p className="text-center text-[13px] leading-[1.6] text-graphite-400">
              We respond within 24 hours. No sales sequences. No 14-email nurture
              campaign. Just a conversation about whether this problem is real for
              your organization.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
