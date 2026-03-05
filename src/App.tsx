import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { PageLayout } from "@/components/layout/page-layout"
import { Home } from "@/pages/home"
import { HowItWorks } from "@/pages/how-it-works"
import { Contact } from "@/pages/contact"
import { CustomerPain } from "@/pages/customer-pain"
import { HowItWorksOnboarding } from "@/pages/how-it-works-onboarding"
import { AhaMoments } from "@/pages/aha-moments"
import { GetStarted } from "@/pages/get-started"

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customer-pain" element={<CustomerPain />} />
          <Route path="/engagement-model" element={<HowItWorksOnboarding />} />
          <Route path="/aha-moments" element={<AhaMoments />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </PageLayout>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
