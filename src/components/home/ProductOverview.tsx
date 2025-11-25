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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Продукты Delever
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Четыре модуля, которые работают вместе как единая система
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <Link
              key={idx}
              to={product.link}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700"
            >
              <div className={`${product.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
              <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-1 transition-transform">
                Узнать больше
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

