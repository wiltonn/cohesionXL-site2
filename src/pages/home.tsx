import { Hero } from "@/components/sections/hero"
import { ProblemStatement } from "@/components/sections/problem-statement"
import { PainCurve } from "@/components/sections/pain-curve"
import { CompetitiveVoid } from "@/components/sections/competitive-void"
import { FinopsAnalogy } from "@/components/sections/finops-analogy"
import { CtaSection } from "@/components/sections/cta-section"

export function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <PainCurve />
      <CompetitiveVoid />
      <FinopsAnalogy />
      <CtaSection
        headline="The governance layer for AI-augmented delivery."
        body="See how CohesionXL discovers your organizational topology, models constraint propagation, and simulates portfolio outcomes across mixed human/AI capacity."
        buttonText="See How It Works"
        to="/how-it-works"
      />
    </>
  )
}
