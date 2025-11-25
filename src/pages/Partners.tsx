import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ContactForm'
import { Users, Percent, Globe, TrendingUp, ArrowRight } from 'lucide-react'

export function Partners() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  const partnerTypes = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Консультанты HoReCa',
      description: 'Помогайте вашим клиентам внедрять современные решения для доставки',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Интеграторы POS',
      description: 'Расширяйте возможности ваших POS-систем интеграцией с Delever',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Маркетинговые агентства',
      description: 'Предлагайте клиентам комплексные решения для роста онлайн-продаж',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Франчайзеры',
      description: 'Единая платформа для всех ваших франчайзи с индивидуальными настройками',
    },
  ]

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="container mx-auto max-w-7xl mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Партнёрская программа
              <br />
              <span className="text-primary-600">Delever</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Зарабатывайте вместе с нами, помогая ресторанам запускать собственную доставку
            </p>
            <Button size="lg" onClick={() => setContactFormOpen(true)}>
              Стать партнёром
            </Button>
          </div>
        </section>

        {/* For Whom */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Для кого программа
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerTypes.map((type, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-primary-600 mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Model */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Модель сотрудничества
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Процент с выручки / подписки, градации по объёму
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center mb-6">
                <Percent className="h-12 w-12 text-primary-600" />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    До 20%
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    с первого платежа клиента
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-lg text-gray-600 dark:text-gray-300">
                    Регулярные выплаты и прозрачная отчётность
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Почему с нами выгодно
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
                <div className="text-gray-600 dark:text-gray-300">Стран</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-300">Стабильность</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы стать партнёром?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Заполните форму и мы свяжемся с вами в ближайшее время
            </p>
            <Button size="lg" variant="secondary" onClick={() => setContactFormOpen(true)}>
              Стать партнёром
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>

      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} tag="partner" />
    </>
  )
}

