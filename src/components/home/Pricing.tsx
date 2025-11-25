import { Check } from 'lucide-react'
import { Button } from '../ui/Button'

const plans = [
  {
    name: 'Light',
    price: '$99',
    period: '/месяц',
    description: 'Для небольших заведений',
    features: ['POS интеграция', 'Telegram-бот', 'Базовый CRM', 'Отчёты'],
    highlight: false,
  },
  {
    name: 'Start',
    price: '$299',
    period: '/месяц',
    description: 'Для растущего бизнеса',
    features: [
      'Всё из Light',
      'Веб-сайт',
      'RFM анализ',
      'Курьерский модуль',
      'Расширенная аналитика',
    ],
    highlight: true,
  },
  {
    name: 'Medium',
    price: '$599',
    period: '/месяц',
    description: 'Для сетей ресторанов',
    features: [
      'Всё из Start',
      'Мобильное приложение',
      'ABC-XYZ анализ',
      'Маркетинг модуль',
      'Приоритетная поддержка',
    ],
    highlight: false,
  },
  {
    name: 'Big',
    price: '$999',
    period: '/месяц',
    description: 'Для крупных сетей',
    features: [
      'Всё из Medium',
      'Множество точек',
      'Расширенная аналитика',
      'Кастомные интеграции',
      'SLA гарантии',
    ],
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: 'По запросу',
    period: '',
    description: 'Индивидуальные решения',
    features: [
      'Всё из Big',
      'Выделенный менеджер',
      'API доступ',
      'Кастомная разработка',
      'Персональный SLA',
    ],
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Тарифы Delever
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Выберите план, который подходит вашему бизнесу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 ${
                plan.highlight
                  ? 'border-primary-500 dark:border-primary-500'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.highlight && (
                <div className="bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-4">
                  Популярный
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.highlight ? 'primary' : 'outline'}
                onClick={() => window.open('https://app.delever.io/register', '_blank')}
              >
                Выбрать план
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

