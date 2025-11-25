import React from 'react'

const clients = [
  'Pizza Hut',
  'Dodo Pizza',
  'EVOS',
  'GIPPO',
  'MAXWAY',
  'Yaponamama',
  'Oqtepa Lavash',
  'KFC',
]

export function Clients() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Наши клиенты
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ведущие сети ресторанов доверяют нам управление своей доставкой
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

