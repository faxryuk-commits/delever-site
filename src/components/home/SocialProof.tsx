import { useRef, useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          const startTime = Date.now()
          const startValue = 0
          const endValue = value

          const animate = () => {
            const now = Date.now()
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)

            const currentValue = Math.floor(startValue + (endValue - startValue) * progress)
            setCount(currentValue)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(endValue)
            }
          }

          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, value, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-brand-darkBlue">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

const stats = [
  { value: 13000000, suffix: '+', label: 'Заказов обработано' },
  { value: 5, suffix: '', label: 'Стран' },
  { value: 1000, suffix: '+', label: 'Ресторанов и магазинов' },
  { value: 40, suffix: '+', label: 'Интеграций' },
  { value: 100, prefix: '$', suffix: 'M+', label: 'Продаж через платформу' },
]

export function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-lightBeige">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-darkBlue mb-4">
            Delever в цифрах
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />
              <p className="text-lg text-brand-darkBlue/70 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

