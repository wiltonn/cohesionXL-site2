export interface LeadForm {
  email: string
  firstname?: string
  lastname?: string
  company?: string
  jobtitle?: string
  message?: string
  plan_interest?: string
}

export async function submitLead(form: LeadForm) {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...form,
      secret: import.meta.env.VITE_LEAD_FORM_SHARED_SECRET,
    }),
  })

  const data = await res.json()
  if (!res.ok) throw new Error(data?.error || "Failed")
  return data
}
