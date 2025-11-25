import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ContactForm'
import { Globe, TrendingUp, Users, Target, ArrowRight } from 'lucide-react'

export function About() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Видение',
      description: 'Стать 100-летней компанией, которая помогает МСБ расти и развиваться',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Миссия',
      description: 'Сделать запуск собственной доставки доступным для каждого ресторана',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Ценности',
      description: 'Прозрачность, надёжность, инновации и забота о клиентах',
    },
  ]

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="container mx-auto max-w-7xl mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Кто стоит за
              <br />
              <span className="text-primary-600">Delever</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Команда с опытом работы в агрегаторах, сетях ресторанов и технологиях
            </p>
          </div>
        </section>

        {/* History */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                История
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Delever был создан командой с многолетним опытом работы в сфере доставки еды.
                  Наш опыт включает работу в крупных агрегаторах, управление сетями ресторанов и
                  разработку технологических решений.
                </p>
                <p>
                  Мы поняли, что ресторанам нужна единая платформа для управления всеми аспектами
                  доставки — от приёма заказов до аналитики и маркетинга. Так родилась идея Delever
                  — операционной системы для доставки.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geography */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Globe className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                География и масштабы
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
                <div className="text-gray-600 dark:text-gray-300">Стран</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Заведений</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">1M+</div>
                <div className="text-gray-600 dark:text-gray-300">Заказов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Партнёров</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ценности и видение
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-primary-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы обсудить сотрудничество?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Свяжитесь с нами и узнайте, как Delever может помочь вашему бизнесу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => setContactFormOpen(true)}>
                Обсудить сотрудничество
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://app.delever.io/register', '_blank')}
              >
                Стать клиентом
              </Button>
            </div>
          </div>
        </section>
      </div>

      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </>
  )
}

