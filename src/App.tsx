import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { PageLayout } from "@/components/layout/page-layout"
import { Home } from "@/pages/home"
import { HowItWorks } from "@/pages/how-it-works"
import { Contact } from "@/pages/contact"

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
