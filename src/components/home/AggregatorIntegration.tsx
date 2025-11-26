import { CheckCircle, Zap, Globe, Clock, Tablet } from 'lucide-react'

const aggregators = ['Wolt', 'Yandex Eats', 'Talabat', 'Deliveroo', 'Noon', 'Uzum Tezkor']

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-lightBlue">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-darkBlue mb-4">
            Все агрегаторы в одном окне
          </h2>
          <p className="text-xl text-brand-darkBlue/80 max-w-2xl mx-auto">
            Забудьте про несколько планшетов на кухне. Все заказы из агрегаторов приходят в единую систему Delever
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-brand-lightTeal/30 mb-6">
              <h3 className="text-2xl font-semibold text-brand-darkBlue mb-4">
                Как это работает
              </h3>
              <p className="text-brand-darkBlue/80 mb-6">
                Заказы из всех агрегаторов автоматически поступают в Delever. Управляйте стоп-листами, меню и ценами из одного места — изменения синхронизируются со всеми платформами.
              </p>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-darkBlue mt-0.5 flex-shrink-0" />
                    <span className="text-brand-darkBlue/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-lightBeige rounded-lg p-4 border-2 border-brand-darkBlue/20">
              <p className="text-sm font-semibold text-brand-darkBlue">
                Больше никаких планшетов на кухне — все заказы в одном интерфейсе
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Aggregator Badges */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-brand-darkBlue mb-4">
                Поддерживаемые агрегаторы
              </h3>
              <div className="flex flex-wrap gap-3">
                {aggregators.map((agg, idx) => (
                  <div
                    key={idx}
                    className="bg-white px-4 py-2 rounded-lg border-2 border-brand-lightTeal/30 text-sm font-medium text-brand-darkBlue hover:border-brand-darkBlue transition-all"
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
                  className="bg-white rounded-lg p-4 border-2 border-brand-lightTeal/30 text-center"
                >
                  <div className="text-brand-darkBlue mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-brand-darkBlue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-brand-darkBlue/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

