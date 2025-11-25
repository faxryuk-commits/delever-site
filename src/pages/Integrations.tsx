import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ContactForm'
import { AggregatorIntegration } from '@/components/home/AggregatorIntegration'
import { ArrowRight, Code, Shield, HeadphonesIcon } from 'lucide-react'

export function Integrations() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  const posSystems = ['iiko', 'R-Keeper', 'Syrve', 'Poster', 'Paloma', 'TouchBistro']
  const paymentGateways = ['Click', 'Payme', 'Uzum', 'Stripe', 'Yandex Pay', 'PayPal']

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="container mx-auto max-w-7xl mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-darkBlue mb-6">
              Хаб интеграций Delever
            </h1>
            <p className="text-xl text-brand-darkBlue/80 mb-8 leading-relaxed">
              Мы сотрудничаем с лучшими компаниями в сфере заказа еды, чтобы предложить высококачественные и надёжные API-интеграции с приложениями доставки, POS-системами, программным обеспечением для управления запасами, решениями для последней мили и многим другим.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setContactFormOpen(true)}>
                Запросить интеграцию
              </Button>
            </div>
          </div>
        </section>

        {/* Aggregators */}
        <AggregatorIntegration />

        {/* POS Systems */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-darkBlue mb-4">
                POS-системы
              </h2>
              <p className="text-xl text-brand-darkBlue/80">
                Автоматическая синхронизация заказов с вашей кассой
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {posSystems.map((pos, idx) => (
                <div
                  key={idx}
                  className="bg-white px-6 py-3 rounded-lg border-2 border-brand-lightTeal/30 text-sm font-medium shadow-sm hover:shadow-md hover:border-brand-darkBlue transition-all text-brand-darkBlue"
                >
                  {pos}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Gateways */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-lightBeige">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-darkBlue mb-4">
                Платёжные шлюзы
              </h2>
              <p className="text-xl text-brand-darkBlue/80">
                Поддержка всех популярных способов оплаты
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {paymentGateways.map((gateway, idx) => (
                <div
                  key={idx}
                  className="bg-white px-6 py-3 rounded-lg border-2 border-brand-lightTeal/30 text-sm font-medium shadow-sm hover:shadow-md hover:border-brand-darkBlue transition-all text-brand-darkBlue"
                >
                  {gateway}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API & Enterprise */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-darkBlue mb-4">
                API & Enterprise
              </h2>
              <p className="text-xl text-brand-darkBlue/80">
                Для крупных клиентов и кастомных интеграций
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 border-2 border-brand-lightTeal/30 text-center hover:border-brand-darkBlue transition-all">
                <Code className="h-8 w-8 text-brand-darkBlue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-darkBlue mb-2">
                  API доступ
                </h3>
                <p className="text-brand-darkBlue/70">
                  Полный доступ к API для кастомных интеграций
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-brand-lightTeal/30 text-center hover:border-brand-darkBlue transition-all">
                <Shield className="h-8 w-8 text-brand-darkBlue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-darkBlue mb-2">SLA</h3>
                <p className="text-brand-darkBlue/70">
                  Гарантированное время отклика и стабильность
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-brand-lightTeal/30 text-center hover:border-brand-darkBlue transition-all">
                <HeadphonesIcon className="h-8 w-8 text-brand-darkBlue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-darkBlue mb-2">
                  Выделенный менеджер
                </h3>
                <p className="text-brand-darkBlue/70">
                  Персональная поддержка для Enterprise клиентов
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-darkBlue text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы подключить интеграции?</h2>
            <p className="text-xl text-white/90 mb-8">
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

