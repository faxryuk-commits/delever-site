import React from 'react'
import { Button } from '../ui/Button'
import { ContactForm } from '../ContactForm'
import { ArrowRight } from 'lucide-react'

export function CallToAction() {
  const [contactFormOpen, setContactFormOpen] = React.useState(false)

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Запустите собственную доставку за 7 дней
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Получите демо-версию и посмотрите, как Delever может помочь вашему бизнесу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.open('https://app.delever.io/register', '_blank')}
              className="group"
            >
              Начать сейчас
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => setContactFormOpen(true)}>
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </>
  )
}

