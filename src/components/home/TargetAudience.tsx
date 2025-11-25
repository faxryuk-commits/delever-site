import React from 'react'
import { Utensils, Coffee, Building2, Store, Users } from 'lucide-react'

const audiences = [
  {
    icon: <Utensils className="h-6 w-6" />,
    title: 'Рестораны',
    pain: 'Нужна собственная доставка без комиссий агрегаторов',
    benefit: 'Собственные каналы продаж под вашим брендом',
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: 'Кафе',
    pain: 'Ручной приём заказов, ошибки, потеря времени',
    benefit: 'Автоматизация всех процессов, снижение ошибок',
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: 'Облачные кухни',
    pain: 'Управление несколькими брендами и каналами',
    benefit: 'Единая платформа для всех брендов и каналов',
  },
  {
    icon: <Store className="h-6 w-6" />,
    title: 'Сети ресторанов',
    pain: 'Сложность управления множеством точек',
    benefit: 'Централизованное управление всеми точками',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Франшизы',
    pain: 'Нужна единая система для всех франчайзи',
    benefit: 'Единая платформа с индивидуальными настройками',
  },
]

export function TargetAudience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Для кого Delever
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Решение для всех типов заведений общественного питания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="text-primary-600 mb-4">{audience.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {audience.title}
              </h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Проблема:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{audience.pain}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-600 mb-1">Выгода:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{audience.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

