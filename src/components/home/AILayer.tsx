import React from 'react'
import { Brain, TrendingUp, Package, Users, DollarSign } from 'lucide-react'

const aiFeatures = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Прогнозирование спроса',
    description: 'ИИ анализирует исторические данные и предсказывает спрос на блюда, помогая оптимизировать закупки.',
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: 'Оптимизация запасов',
    description: 'Автоматический расчёт оптимального количества ингредиентов, снижение потерь и пересортицы.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Управление персоналом',
    description: 'Рекомендации по расписанию работы сотрудников на основе прогноза загрузки.',
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'Денежный поток',
    description: 'Прогнозирование денежных потоков и рекомендации по оптимизации финансов.',
  },
]

export function AILayer() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full mb-4">
            <Brain className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Delever AI — превращает данные в решения
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ИИ прогнозирует спрос, оптимизирует запасы, персонал, маркетинг и денежный поток
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-8 border border-primary-200 dark:border-primary-800">
          <p className="text-center text-lg font-medium text-primary-900 dark:text-primary-300">
            AI-движок встроен в ядро системы — не надстройка, а фундамент
          </p>
        </div>
      </div>
    </section>
  )
}

