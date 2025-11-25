import React from 'react'
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react'

interface CaseStudy {
  company: string
  location: string
  results: {
    icon: React.ReactNode
    metric: string
    label: string
  }[]
  highlight: string
}

const cases: CaseStudy[] = [
  {
    company: 'Yaponamama',
    location: 'Ташкент, Узбекистан',
    results: [
      { icon: <TrendingUp className="h-5 w-5" />, metric: '+45%', label: 'Рост заказов' },
      { icon: <Clock className="h-5 w-5" />, metric: '-30%', label: 'Время доставки' },
      { icon: <DollarSign className="h-5 w-5" />, metric: '+28%', label: 'Средний чек' },
    ],
    highlight: 'Запуск собственных каналов продаж за 5 дней',
  },
  {
    company: 'GIPPO',
    location: 'Ташкент, Узбекистан',
    results: [
      { icon: <Users className="h-5 w-5" />, metric: '+60%', label: 'Онлайн-заказы' },
      { icon: <TrendingUp className="h-5 w-5" />, metric: '+35%', label: 'Выручка' },
      { icon: <Clock className="h-5 w-5" />, metric: '-25%', label: 'Ошибки' },
    ],
    highlight: 'Единая платформа для 15 точек сети',
  },
  {
    company: 'MAXWAY',
    location: 'Ташкент, Узбекистан',
    results: [
      { icon: <DollarSign className="h-5 w-5" />, metric: '+40%', label: 'GMV' },
      { icon: <Users className="h-5 w-5" />, metric: '+50%', label: 'Активные клиенты' },
      { icon: <TrendingUp className="h-5 w-5" />, metric: '+32%', label: 'Конверсия' },
    ],
    highlight: 'Интеграция с агрегаторами и собственными каналами',
  },
]

export function CaseStudies() {
  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Кейсы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Реальные результаты от использования платформы Delever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {caseStudy.company}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{caseStudy.location}</p>
              </div>

              <div className="space-y-3 mb-6">
                {caseStudy.results.map((result, rIdx) => (
                  <div key={rIdx} className="flex items-center space-x-3">
                    <div className="text-primary-600">{result.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {result.metric}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {result.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                <p className="text-sm font-medium text-primary-900 dark:text-primary-300">
                  {caseStudy.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

