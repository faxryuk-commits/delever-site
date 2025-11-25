import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <Logo variant="white" height={40} />
            </div>
            <p className="text-sm mb-4">
              Операционная система для доставки. Единая платформа для управления всеми каналами
              продаж, операциями и аналитикой.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Продукты</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/channels" className="hover:text-white transition-colors">
                  Каналы продаж
                </Link>
              </li>
              <li>
                <Link to="/products/operations" className="hover:text-white transition-colors">
                  Операции
                </Link>
              </li>
              <li>
                <Link to="/products/analytics" className="hover:text-white transition-colors">
                  Аналитика
                </Link>
              </li>
              <li>
                <Link to="/products/marketing" className="hover:text-white transition-colors">
                  Маркетинг
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition-colors">
                  Партнёрам
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="hover:text-white transition-colors">
                  Интеграции
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@delever.io" className="hover:text-white transition-colors">
                  info@delever.io
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+998901234567" className="hover:text-white transition-colors">
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Ташкент, Узбекистан</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Delever. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="#" className="hover:text-white transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

