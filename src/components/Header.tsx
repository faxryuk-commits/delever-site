import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
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
  ChevronDown,
} from './ui/DropdownMenu'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

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
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1',
                    isProductActive()
                      ? 'bg-brand-lightBlue text-brand-darkBlue font-semibold'
                      : 'text-brand-darkBlue hover:bg-brand-lightTeal/30'
                  )}
                >
                  Продукты
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {productItems.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link
                        to={item.path}
                        className={cn(
                          'w-full',
                          isActive(item.path) && 'bg-brand-lightBlue/50'
                        )}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

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

