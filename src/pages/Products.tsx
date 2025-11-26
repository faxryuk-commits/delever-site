import { ProductOverview } from '@/components/home/ProductOverview'
import { AggregatorIntegration } from '@/components/home/AggregatorIntegration'
import { AILayer } from '@/components/home/AILayer'
import { ProblemSolution } from '@/components/home/ProblemSolution'
import { TargetAudience } from '@/components/home/TargetAudience'
import { CallToAction } from '@/components/home/CallToAction'

export function Products() {
  return (
    <>
      <ProductOverview />
      <AggregatorIntegration />
      <AILayer />
      <ProblemSolution />
      <TargetAudience />
      <CallToAction />
    </>
  )
}

