import { Hero } from '@/components/home/Hero'
import { ProblemSolution } from '@/components/home/ProblemSolution'
import { TargetAudience } from '@/components/home/TargetAudience'
import { FeaturesShowcase } from '@/components/home/FeaturesShowcase'
import { ProductOverview } from '@/components/home/ProductOverview'
import { AggregatorIntegration } from '@/components/home/AggregatorIntegration'
import { AILayer } from '@/components/home/AILayer'
import { CaseStudies } from '@/components/home/CaseStudies'
import { Clients } from '@/components/home/Clients'
import { SocialProof } from '@/components/home/SocialProof'
import { Pricing } from '@/components/home/Pricing'
import { FAQ } from '@/components/home/FAQ'
import { CallToAction } from '@/components/home/CallToAction'

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <TargetAudience />
      <FeaturesShowcase />
      <ProductOverview />
      <AggregatorIntegration />
      <AILayer />
      <CaseStudies />
      <Clients />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CallToAction />
    </div>
  )
}

