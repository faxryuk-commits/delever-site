import React from 'react'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ContactForm'
import { Users, Mail, Gift, Zap, ArrowRight } from 'lucide-react'

export function Marketing() {
  const [contactFormOpen, setContactFormOpen] = React.useState(false)

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'RFM-анализ и сегментация',
      description: 'Автоматическая сегментация клиентов по частоте, давности и сумме покупок.',
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Рассылки',
      description: 'Рассылки через Telegram, SMS и push-уведомления. Персонализированные сообщения.',
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: 'Программы лояльности',
      description: 'Бонусные программы, акции, промокоды и персональные предложения для каждого клиента.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Автоматические кампании',
      description: 'Триггерные рассылки на основе действий клиентов: возврат уснувших, повышение чека и др.',
    },
  ]

  const scenarios = [
    {
      title: 'Вернуть уснувших клиентов',
      description: 'Автоматическая рассылка персональных предложений клиентам, которые не заказывали более 30 дней.',
    },
    {
      title: 'Повысить средний чек',
      description: 'Персональные предложения и рекомендации на основе истории заказов клиента.',
    },
    {
      title: 'Перевести гостей агрегаторов',
      description: 'Специальные предложения для клиентов, которые заказывают через агрегаторы, чтобы перевести их в собственные каналы.',
    },
  ]

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="container mx-auto max-w-7xl mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Маркетинг и лояльность
              <br />
              <span className="text-primary-600">на автопилоте</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Автоматизация маркетинга, персонализация предложений и рост лояльности клиентов
            </p>
            <Button size="lg" onClick={() => setContactFormOpen(true)}>
              Запустить маркетинг с Delever
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-primary-600 mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Примеры сценариев
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Готовые решения для типичных маркетинговых задач
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scenarios.map((scenario, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{scenario.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы автоматизировать маркетинг?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Запустите маркетинг с Delever и начните расти быстрее
            </p>
            <Button size="lg" variant="secondary" onClick={() => setContactFormOpen(true)}>
              Запустить маркетинг
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>

      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </>
  )
}

