import { useState } from 'react'
import { Button } from '../ui/Button'
import { ContactForm } from '../ContactForm'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-brand-lightBlue/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-darkBlue mb-6 leading-tight">
              Единая платформа
              <br />
              <span className="bg-gradient-brand bg-clip-text text-transparent">для управления доставкой</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-darkBlue/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Управляйте всеми каналами продаж, операциями доставки и аналитикой из одного места. Запустите собственные каналы продаж, автоматизируйте работу с агрегаторами и увеличьте прибыль уже через неделю.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => window.open('https://app.delever.io/register', '_blank')}
                className="group text-lg px-8 py-6"
              >
                Запустить сейчас
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Statistics - в стиле Deliverect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-brand-darkBlue mb-2">1M+</div>
              <div className="text-lg text-brand-darkBlue/70">Заказов обработано</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-brand-darkBlue mb-2">500+</div>
              <div className="text-lg text-brand-darkBlue/70">Заведений</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-brand-darkBlue mb-2">5</div>
              <div className="text-lg text-brand-darkBlue/70">Стран</div>
            </div>
          </div>

          {/* Integrations logos */}
          <div className="text-center mb-8">
            <p className="text-sm text-brand-darkBlue/60 mb-6">Интеграции с ведущими агрегаторами и POS-системами</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Wolt', 'Yandex Food', 'Talabat', 'Deliveroo', 'Noon', 'Uzum Tezkor'].map(
                (brand) => (
                  <div key={brand} className="text-lg font-semibold text-brand-darkBlue/50">
                    {brand}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </>
  )
}

