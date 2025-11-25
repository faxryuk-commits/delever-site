import { Link } from 'react-router-dom'
import { ShoppingCart, Truck, BarChart3, Megaphone, ArrowRight } from 'lucide-react'

const products = [
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: 'Channels',
    description: 'Все каналы продаж в одном месте. Telegram-бот, сайт, приложение, QR-меню и другие.',
    link: '/products/channels',
    color: 'bg-blue-500',
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Operations',
    description: 'Диспетчеризация, курьеры, кухня, статусы. Полный контроль над операциями доставки.',
    link: '/products/operations',
    color: 'bg-green-500',
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Analytics',
    description: 'Дашборды, отчёты, показатели. Реальное управление на основе данных.',
    link: '/products/analytics',
    color: 'bg-purple-500',
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: 'Marketing',
    description: 'Рассылки, сегментация, акции. Маркетинг и лояльность на автопилоте.',
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
            Найдите правильное решение для каждого этапа роста
          </h2>
          <p className="text-xl text-brand-darkBlue/80 max-w-3xl mx-auto">
            Наши решения разработаны, чтобы помочь вам привлекать и удерживать клиентов, развивать бизнес и сохранять контроль над тем, что важно для вас.
          </p>
        </div>

        {/* Категории в стиле Deliverect */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-brand-darkBlue mb-6">Собственные каналы продаж</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.slice(0, 2).map((product, idx) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(2).map((product, idx) => (
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

