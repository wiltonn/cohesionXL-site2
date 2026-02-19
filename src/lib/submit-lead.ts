export interface LeadForm {
  email: string
  firstname?: string
  lastname?: string
  company?: string
  jobtitle?: string
  message?: string
  plan_interest?: string
}

export async function submitLead(form: LeadForm, turnstileToken: string) {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...form,
      turnstileToken,
    }),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data?.error || "Failed")
  return data
}
