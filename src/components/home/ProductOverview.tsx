import { Link } from 'react-router-dom'
import { ShoppingCart, Truck, BarChart3, Megaphone, ArrowRight } from 'lucide-react'

const products = [
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: 'Каналы продаж',
    description: 'Запустите собственные каналы продаж: сайт, приложение, Telegram-бот, QR-меню. Все заказы в единой системе без комиссий агрегаторов.',
    link: '/products/channels',
    color: 'bg-blue-500',
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Операции',
    description: 'Управляйте диспетчеризацией, курьерами и кухней из одного окна. Автоматизация процессов снижает ошибки и ускоряет доставку.',
    link: '/products/operations',
    color: 'bg-green-500',
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Аналитика',
    description: 'Принимайте решения на основе данных. Дашборды, отчёты и AI-прогнозы помогают оптимизировать меню, запасы и персонал.',
    link: '/products/analytics',
    color: 'bg-purple-500',
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: 'Маркетинг',
    description: 'Автоматизируйте маркетинг и лояльность. RFM-анализ, персональные предложения и триггерные рассылки увеличивают средний чек.',
    link: '/products/marketing',
    color: 'bg-orange-500',
  },
]

export function ProductOverview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-darkBlue mb-4">
            Всё необходимое для роста вашего бизнеса
          </h2>
          <p className="text-xl text-brand-darkBlue/80 max-w-3xl mx-auto">
            Четыре модуля, которые работают вместе как единая система. От приёма заказов до аналитики и маркетинга — всё в одной платформе.
          </p>
        </div>

        {/* Категории в стиле Deliverect */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-brand-darkBlue mb-6">Продажи и маркетинг</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[products[0], products[3]].map((product, idx) => (
              <Link
                key={idx}
                to={product.link}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-2 border-brand-lightTeal/30 hover:border-brand-darkBlue"
              >
                <div className="w-14 h-14 bg-brand-darkBlue rounded-lg flex items-center justify-center text-white mb-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-darkBlue mb-2">
                  {product.title}
                </h3>
                <p className="text-brand-darkBlue/70 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex items-center text-brand-darkBlue font-semibold group-hover:translate-x-1 transition-transform text-sm">
                  Узнать больше
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-brand-darkBlue mb-6">Операции и аналитика</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[products[1], products[2]].map((product, idx) => (
              <Link
                key={idx}
                to={product.link}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-2 border-brand-lightTeal/30 hover:border-brand-darkBlue"
              >
                <div className="w-14 h-14 bg-brand-darkBlue rounded-lg flex items-center justify-center text-white mb-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-darkBlue mb-2">
                  {product.title}
                </h3>
                <p className="text-brand-darkBlue/70 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex items-center text-brand-darkBlue font-semibold group-hover:translate-x-1 transition-transform text-sm">
                  Узнать больше
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

