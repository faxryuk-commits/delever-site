import React from 'react'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ContactForm'
import { AggregatorIntegration } from '@/components/home/AggregatorIntegration'
import { CheckCircle, ArrowRight, Code, Shield, HeadphonesIcon } from 'lucide-react'

export function Integrations() {
  const [contactFormOpen, setContactFormOpen] = React.useState(false)

  const posSystems = ['iiko', 'R-Keeper', 'Syrve', 'Poster', 'Paloma', 'TouchBistro']
  const paymentGateways = ['Click', 'Payme', 'Uzum', 'Stripe', 'Yandex Pay', 'PayPal']

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="container mx-auto max-w-7xl mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Все ваши сервисы
              <br />
              <span className="text-primary-600">в одной экосистеме</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Интеграции с агрегаторами, POS-системами, платёжными шлюзами и другими сервисами
            </p>
            <Button size="lg" onClick={() => setContactFormOpen(true)}>
              Подключить ваши интеграции
            </Button>
          </div>
        </section>

        {/* Aggregators */}
        <AggregatorIntegration />

        {/* POS Systems */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                POS-системы
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Автоматическая синхронизация заказов с вашей кассой
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {posSystems.map((pos, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {pos}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Gateways */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Платёжные шлюзы
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Поддержка всех популярных способов оплаты
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {paymentGateways.map((gateway, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {gateway}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API & Enterprise */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                API & Enterprise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Для крупных клиентов и кастомных интеграций
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                <Code className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  API доступ
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Полный доступ к API для кастомных интеграций
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                <Shield className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">SLA</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Гарантированное время отклика и стабильность
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                <HeadphonesIcon className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Выделенный менеджер
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Персональная поддержка для Enterprise клиентов
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы подключить интеграции?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Свяжитесь с нами и мы поможем настроить все необходимые интеграции
            </p>
            <Button size="lg" variant="secondary" onClick={() => setContactFormOpen(true)}>
              Подключить интеграции
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>

      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </>
  )
}

