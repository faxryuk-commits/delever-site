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
            <h1 className="text-5xl md:text-6xl font-bold text-brand-darkBlue mb-6">
              Партнёрская программа
              <br />
              <span className="bg-gradient-brand bg-clip-text text-transparent">Delever</span>
            </h1>
            <p className="text-xl text-brand-darkBlue/80 mb-8">
              Зарабатывайте, рекомендуя Delever своим клиентам. Получайте до 20% с первого платежа и регулярные выплаты за каждого привлечённого клиента.
            </p>
            <Button size="lg" onClick={() => setContactFormOpen(true)}>
              Стать партнёром
            </Button>
          </div>
        </section>

        {/* For Whom */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-lightBeige">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-darkBlue mb-4">
            Для кого программа
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border-2 border-brand-lightTeal/30"
            >
              <div className="text-brand-darkBlue mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold text-brand-darkBlue mb-2">
                {type.title}
              </h3>
              <p className="text-brand-darkBlue/70 text-sm">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Model */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-darkBlue mb-4">
                Условия сотрудничества
              </h2>
              <p className="text-xl text-brand-darkBlue/80">
                Прозрачная модель вознаграждения с регулярными выплатами
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-brand-lightBeige rounded-xl p-8 border-2 border-brand-darkBlue/20">
              <div className="flex items-center justify-center mb-6">
                <Percent className="h-12 w-12 text-brand-darkBlue" />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-darkBlue mb-2">
                    До 20%
                  </div>
                  <div className="text-brand-darkBlue/80">
                    с первого платежа каждого привлечённого клиента
                  </div>
                </div>
                <div className="pt-4 border-t border-brand-darkBlue/20">
                  <div className="text-lg text-brand-darkBlue/80">
                    Регулярные выплаты каждый месяц. Прозрачная отчётность по каждому клиенту
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-lightBlue">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-darkBlue mb-4">
                Почему партнёры выбирают нас
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-darkBlue mb-2">500+</div>
                <div className="text-brand-darkBlue/80">Активных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-darkBlue mb-2">5</div>
                <div className="text-brand-darkBlue/80">Стран присутствия</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-darkBlue mb-2">99.9%</div>
                <div className="text-brand-darkBlue/80">Uptime платформы</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-darkBlue text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы стать партнёром?</h2>
            <p className="text-xl text-white/90 mb-8">
              Заполните форму и мы свяжемся с вами в ближайшее время для обсуждения условий
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

