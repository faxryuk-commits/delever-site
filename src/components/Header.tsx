import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, ShoppingCart, Truck, BarChart3, Megaphone, Plug, Globe, ChevronDown } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from './ui/Button'
import { ContactForm } from './ContactForm'
import { Logo } from './Logo'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/DropdownMenu'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const productCategories = [
    {
      category: 'Собственные каналы',
      items: [
        { path: '/products/channels', label: 'Каналы продаж', icon: <ShoppingCart className="h-5 w-5" />, desc: 'Сайт, приложение, Telegram-бот' },
      ],
    },
    {
      category: 'Операции',
      items: [
        { path: '/products/operations', label: 'Операции доставки', icon: <Truck className="h-5 w-5" />, desc: 'Диспетчеризация и курьеры' },
      ],
    },
    {
      category: 'Аналитика',
      items: [
        { path: '/products/analytics', label: 'Аналитика и отчёты', icon: <BarChart3 className="h-5 w-5" />, desc: 'Дашборды и AI-прогнозы' },
      ],
    },
    {
      category: 'Маркетинг',
      items: [
        { path: '/products/marketing', label: 'Маркетинг и лояльность', icon: <Megaphone className="h-5 w-5" />, desc: 'RFM-анализ и рассылки' },
        { path: '/integrations', label: 'Интеграции', icon: <Plug className="h-5 w-5" />, desc: 'Агрегаторы и POS-системы' },
      ],
    },
  ]

  const productItems = [
    { path: '/products', label: 'Все продукты' },
    { path: '/products/channels', label: 'Каналы продаж' },
    { path: '/products/operations', label: 'Операции' },
    { path: '/products/analytics', label: 'Аналитика' },
    { path: '/products/marketing', label: 'Маркетинг' },
    { path: '/integrations', label: 'Интеграции' },
  ]

  const navItems = [
    { path: '/pricing', label: 'Тарифы' },
    { path: '/partners', label: 'Партнёрам' },
    { path: '/about', label: 'О компании' },
  ]

  const isProductActive = () => {
    return (
      location.pathname === '/products' ||
      location.pathname.startsWith('/products/') ||
      location.pathname === '/integrations'
    )
  }

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-lg border-b border-brand-lightTeal/10 shadow-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo height={32} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Products Dropdown */}
              <DropdownMenu open={productsMenuOpen} onOpenChange={setProductsMenuOpen}>
                <DropdownMenuTrigger
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1',
                    isProductActive()
                      ? 'bg-brand-lightBlue text-brand-darkBlue font-semibold'
                      : 'text-brand-darkBlue hover:bg-brand-lightTeal/30'
                  )}
                >
                  Продукты
                  <ChevronDown className={cn('h-4 w-4 transition-transform', productsMenuOpen && 'rotate-180')} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[600px] p-6">
                  <div className="grid grid-cols-4 gap-6">
                    {productCategories.map((category, catIdx) => (
                      <div key={catIdx} className="space-y-3">
                        <h4 className="text-xs font-semibold text-brand-darkBlue/60 uppercase tracking-wider mb-3">
                          {category.category}
                        </h4>
                        {category.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setProductsMenuOpen(false)}
                            className={cn(
                              'block p-3 rounded-lg hover:bg-brand-lightBlue/50 transition-colors group',
                              isActive(item.path) && 'bg-brand-lightBlue/30'
                            )}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={cn(
                                'text-brand-darkBlue mt-0.5 group-hover:scale-110 transition-transform',
                                isActive(item.path) && 'text-brand-darkBlue'
                              )}>
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={cn(
                                  'text-sm font-semibold text-brand-darkBlue mb-1',
                                  isActive(item.path) && 'text-brand-darkBlue'
                                )}>
                                  {item.label}
                                </div>
                                <div className="text-xs text-brand-darkBlue/60 leading-relaxed">
                                  {item.desc}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-brand-lightTeal/20">
                    <Link
                      to="/products"
                      onClick={() => setProductsMenuOpen(false)}
                      className="text-sm font-semibold text-brand-darkBlue hover:text-brand-darkBlue/80 transition-colors flex items-center"
                    >
                      Все продукты
                      <ChevronDown className="h-4 w-4 rotate-[-90deg] ml-2" />
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Integrations */}
              <Link
                to="/integrations"
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  isActive('/integrations')
                    ? 'bg-brand-lightBlue/50 text-brand-darkBlue font-semibold'
                    : 'text-brand-darkBlue/80 hover:text-brand-darkBlue hover:bg-brand-lightBlue/30'
                )}
              >
                Интеграции
              </Link>

              {/* Other Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive(item.path)
                      ? 'bg-brand-lightBlue/50 text-brand-darkBlue font-semibold'
                      : 'text-brand-darkBlue/80 hover:text-brand-darkBlue hover:bg-brand-lightBlue/30'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hidden sm:flex"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => setContactFormOpen(true)}>
                  Демо
                </Button>
                <Button size="sm" onClick={() => window.open('https://app.delever.io', '_blank')}>
                  Войти
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-lightTeal/20 bg-white">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {/* Products Section */}
              <div className="mb-4">
                <div className="px-3 py-2 text-sm font-semibold text-brand-darkBlue mb-2">
                  Продукты
                </div>
                <div className="pl-4 space-y-1">
                  {productItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block px-3 py-2 rounded-md text-sm font-medium',
                        isActive(item.path)
                          ? 'bg-brand-lightBlue text-brand-darkBlue font-semibold'
                          : 'text-brand-darkBlue/80'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    isActive(item.path)
                      ? 'bg-brand-lightBlue/50 text-brand-darkBlue font-semibold'
                      : 'text-brand-darkBlue/80'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-brand-lightTeal/20 mt-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setContactFormOpen(true)
                    setMobileMenuOpen(false)
                  }}
                >
                  Получить демо
                </Button>
                <Button
                  className="w-full"
                  onClick={() => window.open('https://app.delever.io', '_blank')}
                >
                  Войти в систему
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </>
  )
}

