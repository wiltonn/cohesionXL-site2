import { SectionTag } from "@/components/ui/section-tag"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const items = [
  {
    not: "Build agents",
    instead:
      "Governs activity from agents built on other platforms — Copilot Studio, Agentforce, Workspace Agents, Vertex Agent Builder, custom LangChain/LangGraph systems.",
  },
  {
    not: "Replace Jira, Azure DevOps, GitHub, SharePoint",
    instead:
      "Sits as a constraint authority layer above your systems of record. They remain authoritative for their respective domains.",
  },
  {
    not: "Model observability",
    instead:
      "No prompt-level debugging, token-level performance metrics, or per-call LLM cost optimization.",
  },
  {
    not: "Generic data warehouse",
    instead:
      "Maintains specifically the compiled organizational state required for authorization and reconciliation.",
  },
  {
    not: "Generate code or content",
    instead:
      "Governs the conditions under which generation is authorized, and reconciles the outputs.",
  },
]

export function OutOfScope() {
  return (
    <section className="border-t border-graphite-600/50 bg-graphite-850 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionTag>Out of Scope</SectionTag>
        <ScrollReveal>
          <h2 className="max-w-[760px] text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-graphite-100">
            What this system explicitly does not do.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 max-w-[680px] text-base leading-[1.7] text-graphite-300">
            Stated up front, to keep fitness evaluation honest. The runtime is
            scoped to authorization and reconciliation; everything below is
            explicitly someone else's job.
          </p>
        </ScrollReveal>

        <div className="mt-14 overflow-hidden rounded-lg border border-graphite-600">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-graphite-600 bg-graphite-800">
                <th className="px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite-400">
                  Does not
                </th>
                <th className="px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite-400">
                  Instead
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((row, i) => (
                <tr
                  key={row.not}
                  className={`border-b border-graphite-600 last:border-b-0 ${
                    i % 2 === 0 ? "bg-graphite-850" : "bg-graphite-800"
                  }`}
                >
                  <td className="w-[28%] px-6 py-5 align-top">
                    <span className="text-[14px] font-semibold text-graphite-100">
                      {row.not}
                    </span>
                  </td>
                  <td className="px-6 py-5 align-top text-[14px] leading-[1.7] text-graphite-300">
                    {row.instead}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
