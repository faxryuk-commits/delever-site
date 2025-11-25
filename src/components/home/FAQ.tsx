import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/Accordion'

const faqs = [
  {
    question: 'Сколько стоит подключение?',
    answer:
      'Стоимость подключения зависит от выбранного тарифа. Базовый тариф Light начинается от $99/месяц. Для точного расчёта свяжитесь с нами через форму обратной связи.',
  },
  {
    question: 'Какие сроки настройки?',
    answer:
      'Стандартная настройка занимает 7-14 дней. Это включает подключение каналов продаж, интеграцию с POS-системой, настройку меню и обучение команды.',
  },
  {
    question: 'Какие каналы продаж доступны?',
    answer:
      'Delever поддерживает все основные каналы: Telegram-бот, веб-сайт, мобильное приложение (iOS/Android), QR-меню, киоски и колл-центр. Все каналы работают на единой платформе.',
  },
  {
    question: 'Интеграция с POS-системой',
    answer:
      'Мы интегрируемся с популярными POS-системами: iiko, R-Keeper/Syrve, Poster, Paloma и другими. Интеграция происходит автоматически через API.',
  },
  {
    question: 'Интеграция с агрегаторами',
    answer:
      'Delever принимает заказы из всех популярных агрегаторов: Wolt, Yandex Food, Talabat, Deliveroo, Noon и других. Все заказы приходят в единое окно, не нужно держать несколько планшетов.',
  },
  {
    question: 'Способы оплаты',
    answer:
      'Поддерживаются все популярные платёжные системы: Click, Payme, Uzum, Stripe, Yandex Pay и другие. Клиенты могут оплачивать картой, через электронные кошельки или наличными при получении.',
  },
  {
    question: 'Аналитика и отчёты',
    answer:
      'В платформу встроена мощная аналитика: дашборды для владельца и управляющего, ABC-XYZ анализ, KPI по каналам, курьерам и точкам. Все данные в реальном времени.',
  },
  {
    question: 'Система лояльности',
    answer:
      'Delever включает полноценную систему лояльности: бонусные программы, промокоды, персональные предложения, RFM-анализ и автоматические триггерные рассылки.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ответы на популярные вопросы о платформе Delever
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

