import React from 'react'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ContactForm'
import { FeaturesShowcase } from '@/components/home/FeaturesShowcase'
import { CheckCircle, ArrowRight, Calendar, Palette, Code, Rocket } from 'lucide-react'

export function Channels() {
  const [contactFormOpen, setContactFormOpen] = React.useState(false)

  const steps = [
    { icon: <Calendar className="h-6 w-6" />, title: 'Бриф', description: 'Обсуждаем ваши потребности и цели' },
    { icon: <Palette className="h-6 w-6" />, title: 'Дизайн/Подключение', description: 'Создаём дизайн и подключаем каналы' },
    { icon: <Code className="h-6 w-6" />, title: 'Тест', description: 'Тестируем все функции перед запуском' },
    { icon: <Rocket className="h-6 w-6" />, title: 'Запуск', description: 'Запускаем ваши каналы продаж' },
  ]

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="container mx-auto max-w-7xl mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Все цифровые каналы продаж
              <br />
              <span className="text-primary-600">под вашим брендом</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Сайт, приложение, Telegram-бот, QR-меню, киоск, колл-центр — всё в единой платформе
            </p>
            <Button size="lg" onClick={() => setContactFormOpen(true)}>
              Запустить свои каналы продаж
            </Button>
          </div>
        </section>

        {/* Features */}
        <FeaturesShowcase />

        {/* Work Together */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Работают вместе
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Все каналы продаж используют единый каталог, общие акции и один клиентский профиль.
                Клиент может заказать через любой канал, и все данные сохраняются в единой системе.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {['Единый каталог', 'Общие акции', 'Клиентский профиль'].map((feature, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-6">
                    <CheckCircle className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">{feature}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Launch Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Запуск за 7 дней
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Быстрый запуск ваших каналов продаж
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full mx-auto mb-4 flex items-center justify-center text-primary-600">
                    {step.icon}
                  </div>
                  <div className="text-sm font-medium text-primary-600 mb-2">Шаг {idx + 1}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы запустить свои каналы продаж?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Свяжитесь с нами и получите демо-версию
            </p>
            <Button size="lg" variant="secondary" onClick={() => setContactFormOpen(true)}>
              Запустить каналы продаж
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>

      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </>
  )
}

