import React from 'react'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ContactForm'
import { Truck, Users, Monitor, Clock, TrendingDown, CheckCircle, ArrowRight } from 'lucide-react'

export function Operations() {
  const [contactFormOpen, setContactFormOpen] = React.useState(false)

  const features = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Диспетчеризация и статусы',
      description: 'Автоматическое распределение заказов, отслеживание статусов в реальном времени, уведомления клиентов.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Курьерский модуль',
      description: 'Приложение для курьеров, расчёт зарплаты, посещаемость, маршрутизация и оптимизация доставок.',
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Рабочие места',
      description: 'Интерфейсы для операторов, кухни и колл-центра. Всё в единой системе.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'SLA и стабильность',
      description: 'Гарантированная стабильность работы, мониторинг и автоматическое восстановление.',
    },
  ]

  const stats = [
    { icon: <TrendingDown className="h-6 w-6" />, value: '-30%', label: 'Время доставки' },
    { icon: <CheckCircle className="h-6 w-6" />, value: '-25%', label: 'Ошибки' },
    { icon: <TrendingDown className="h-6 w-6" />, value: '-20%', label: 'Операционные затраты' },
  ]

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="container mx-auto max-w-7xl mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Операционная система
              <br />
              <span className="text-primary-600">для вашей доставки</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Полный контроль над диспетчеризацией, курьерами, кухней и всеми операциями доставки
            </p>
            <Button size="lg" onClick={() => setContactFormOpen(true)}>
              Оптимизировать операции
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

        {/* Integrations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Интеграции с POS и кухней
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Автоматическая передача заказов в кассу и на кухню
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {['iiko', 'R-Keeper', 'Syrve', 'Poster', 'Paloma'].map((pos, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium"
                >
                  {pos}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Результаты наших клиентов
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-primary-600 mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы оптимизировать операции?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Свяжитесь с нами и узнайте, как Delever может помочь вашему бизнесу
            </p>
            <Button size="lg" variant="secondary" onClick={() => setContactFormOpen(true)}>
              Оптимизировать операции
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>

      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </>
  )
}

