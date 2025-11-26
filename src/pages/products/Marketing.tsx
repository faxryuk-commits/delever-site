import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/ContactForm'
import { PageNavigation } from '@/components/PageNavigation'
import { Users, Mail, Gift, Zap, ArrowRight } from 'lucide-react'

export function Marketing() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'RFM-анализ',
      description: 'Автоматическая сегментация клиентов по частоте, давности и сумме покупок. Определяйте VIP-клиентов и тех, кого нужно вернуть.',
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Персонализированные рассылки',
      description: 'Рассылки через Telegram, SMS и push с персональными предложениями для каждого сегмента клиентов.',
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: 'Программы лояльности',
      description: 'Бонусные программы, промокоды и персональные предложения. Автоматическое начисление и списание бонусов.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Автоматические кампании',
      description: 'Триггерные рассылки срабатывают автоматически: возврат уснувших клиентов, повышение среднего чека, поздравления с днём рождения.',
    },
  ]

  const scenarios = [
    {
      title: 'Вернуть уснувших клиентов',
      description: 'Автоматическая рассылка персональных предложений клиентам, которые не заказывали более 30 дней. Возвращайте до 20% потерянных клиентов.',
    },
    {
      title: 'Повысить средний чек',
      description: 'Персональные рекомендации и предложения на основе истории заказов. Увеличивайте средний чек на 15-25% без дополнительных затрат.',
    },
    {
      title: 'Перевести в собственные каналы',
      description: 'Специальные предложения для клиентов агрегаторов с призывом заказать через ваш сайт или приложение. Снижайте зависимость от комиссий.',
    },
  ]

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="container mx-auto max-w-7xl mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-darkBlue mb-6">
              Маркетинг и лояльность
              <br />
              <span className="bg-gradient-brand bg-clip-text text-transparent">которые работают</span>
            </h1>
            <p className="text-xl text-brand-darkBlue/80 mb-8">
              Автоматизируйте маркетинг с помощью RFM-анализа и триггерных рассылок. Персонализируйте предложения для каждого клиента и увеличивайте средний чек на 25%.
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
                  className="bg-white rounded-xl p-6 shadow-sm border-2 border-brand-lightTeal/30"
                >
                  <div className="text-brand-darkBlue mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-brand-darkBlue mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-darkBlue/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-lightBeige">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-darkBlue mb-4">
                Примеры сценариев
              </h2>
              <p className="text-xl text-brand-darkBlue/80">
                Готовые решения для типичных маркетинговых задач
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scenarios.map((scenario, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border-2 border-brand-lightTeal/30"
                >
                  <h3 className="text-xl font-semibold text-brand-darkBlue mb-3">
                    {scenario.title}
                  </h3>
                  <p className="text-brand-darkBlue/80">{scenario.description}</p>
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

      <PageNavigation />
      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </>
  )
}

