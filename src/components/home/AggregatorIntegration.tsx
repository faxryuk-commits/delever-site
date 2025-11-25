import React from 'react'
import { CheckCircle, Zap, Globe, Clock, Tablet } from 'lucide-react'

const aggregators = ['Wolt', 'Yandex Food', 'Talabat', 'Deliveroo', 'Noon', 'Uzum Tezkor']

const stats = [
  { icon: <Zap className="h-6 w-6" />, value: '95%', label: 'Автоматизация' },
  { icon: <Globe className="h-6 w-6" />, value: '15+', label: 'Агрегаторов' },
  { icon: <Clock className="h-6 w-6" />, value: '24/7', label: 'Работа' },
  { icon: <Tablet className="h-6 w-6" />, value: '0', label: 'Планшетов' },
]

const features = [
  'Автоматический приём заказов',
  'Синхронизация меню и цен',
  'Управление стоп-листами',
  'Передача в кассу',
  'Отслеживание статуса доставки',
]

export function AggregatorIntegration() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Единое окно для агрегаторов
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Приём заказов из Wolt, Yandex, Talabat, Deliveroo, Noon в одном интерфейсе
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Как это работает
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Все заказы из агрегаторов автоматически поступают в Delever. Вы управляете
                стоп-листами, меню и ценами из одного места.
              </p>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 border border-primary-200 dark:border-primary-800">
              <p className="text-sm font-medium text-primary-900 dark:text-primary-300">
                Не нужно держать несколько планшетов — всё приходит в Delever
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Aggregator Badges */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Поддерживаемые агрегаторы
              </h3>
              <div className="flex flex-wrap gap-3">
                {aggregators.map((agg, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {agg}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 text-center"
                >
                  <div className="text-primary-600 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

