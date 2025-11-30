import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/Logo'
import {
  LayoutDashboard,
  FileText,
  Image,
  Link as LinkIcon,
  Settings,
  LogOut,
  Home,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

const menuItems = [
  { path: '/admin', label: 'Главная', icon: LayoutDashboard },
  { path: '/admin/content', label: 'Контент', icon: FileText },
  { path: '/admin/navigation', label: 'Навигация', icon: LinkIcon },
  { path: '/admin/media', label: 'Медиа', icon: Image },
  { path: '/admin/settings', label: 'Настройки', icon: Settings },
]

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout, user } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    logout()
    toast.success('Вы вышли из системы')
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-brand-lightBlue/20">
      {/* Top Bar */}
      <header className="bg-white border-b border-brand-lightTeal/20 shadow-sm sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <Link to="/admin" className="flex items-center">
                <Logo height={32} />
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/" target="_blank">
                <Button variant="ghost" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Сайт
                </Button>
              </Link>
              <div className="text-sm text-brand-darkBlue/70">
                {user?.email}
              </div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-brand-lightTeal/20 transform transition-transform duration-200 ease-in-out lg:translate-x-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brand-lightBlue text-brand-darkBlue font-semibold'
                      : 'text-brand-darkBlue/70 hover:bg-brand-lightBlue/40 hover:text-brand-darkBlue'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}

