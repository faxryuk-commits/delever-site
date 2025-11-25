import { useState } from 'react'
import { Button } from '../ui/Button'
import { ContactForm } from '../ContactForm'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Операционная система
              <br />
              <span className="text-primary-600">для доставки</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Единая платформа для управления всеми каналами продаж, операциями доставки и
              аналитикой. Запустите собственную доставку за 7 дней.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => window.open('https://app.delever.io/register', '_blank')}
                className="group"
              >
                Запустить сейчас
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setContactFormOpen(true)}>
                Получить демо
              </Button>
            </div>
          </div>

          {/* Hero Animation Placeholder */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {['Агрегаторы', 'Delever', 'Кухня', 'Клиент'].map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg">
                      {idx + 1}
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                Поток заказов от источников до клиента через единую платформу
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Нам доверяют ведущие сети ресторанов
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Pizza Hut', 'Dodo Pizza', 'EVOS', 'GIPPO', 'MAXWAY', 'Yaponamama'].map(
                (brand) => (
                  <div key={brand} className="text-lg font-semibold text-gray-400">
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

