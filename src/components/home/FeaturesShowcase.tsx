import React from 'react'
import { Bot, Globe, Smartphone, QrCode, Monitor, Phone } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'Telegram-бот',
    description: 'Принимайте заказы прямо в Telegram. Рост продаж до 30%, удобство для клиентов.',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Веб-сайт',
    description: 'Собственный сайт с онлайн-заказом. Полный контроль над брендом и данными клиентов.',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Мобильное приложение',
    description: 'iOS и Android приложения под вашим брендом. Повышение среднего чека на 25%.',
  },
  {
    icon: <QrCode className="h-8 w-8" />,
    title: 'QR-меню',
    description: 'Бесконтактное меню с возможностью заказа. Быстрое развёртывание, низкая стоимость.',
  },
  {
    icon: <Monitor className="h-8 w-8" />,
    title: 'Киоск',
    description: 'Сенсорные киоски для зала. Снижение нагрузки на персонал, увеличение продаж.',
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: 'Колл-центр',
    description: 'Интеграция с колл-центром. Единая система обработки заказов по телефону.',
  },
]

export function FeaturesShowcase() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Собственные каналы продаж
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Все цифровые каналы продаж под вашим брендом. Единый каталог, общие акции, один
            клиентский профиль.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

