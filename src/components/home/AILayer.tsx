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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-lightBlue rounded-full mb-4">
            <Brain className="h-8 w-8 text-brand-darkBlue" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-darkBlue mb-4">
            AI, который работает на ваш бизнес
          </h2>
          <p className="text-xl text-brand-darkBlue/80 max-w-2xl mx-auto">
            Искусственный интеллект анализирует ваши данные и предлагает конкретные решения для увеличения прибыли и оптимизации операций
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm border-2 border-brand-lightTeal/30"
            >
              <div className="text-brand-darkBlue mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-brand-darkBlue mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-brand-darkBlue/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-brand rounded-xl p-8 border-2 border-brand-darkBlue/20">
          <p className="text-center text-lg font-semibold text-brand-darkBlue">
            AI встроен в основу платформы — это не дополнительная функция, а основа системы
          </p>
        </div>
      </div>
    </section>
  )
}

