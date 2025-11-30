import { useContent } from '@/contexts/ContentContext'
import { FileText, Link as LinkIcon, Image, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function Dashboard() {
  const { content, navigation, footerLinks } = useContent()

  const stats = [
    {
      label: 'Элементов контента',
      value: content.length,
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      link: '/admin/content',
    },
    {
      label: 'Навигационных ссылок',
      value: navigation.length,
      icon: LinkIcon,
      color: 'text-green-600',
      bg: 'bg-green-50',
      link: '/admin/navigation',
    },
    {
      label: 'Категорий футера',
      value: footerLinks.length,
      icon: Settings,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      link: '/admin/navigation',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-darkBlue mb-2">
          Панель управления
        </h1>
        <p className="text-brand-darkBlue/60">
          Управляйте контентом, навигацией и настройками сайта
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.label} to={stat.link}>
              <div className="bg-white rounded-xl p-6 border border-brand-lightTeal/20 shadow-soft hover:shadow-medium transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.bg} p-3 rounded-lg`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-brand-darkBlue mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-brand-darkBlue/60">{stat.label}</div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="bg-white rounded-xl p-6 border border-brand-lightTeal/20 shadow-soft">
        <h2 className="text-xl font-semibold text-brand-darkBlue mb-4">
          Быстрые действия
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/admin/content">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="h-5 w-5 mr-2" />
              Редактировать контент
            </Button>
          </Link>
          <Link to="/admin/navigation">
            <Button variant="outline" className="w-full justify-start">
              <LinkIcon className="h-5 w-5 mr-2" />
              Управление навигацией
            </Button>
          </Link>
          <Link to="/admin/media">
            <Button variant="outline" className="w-full justify-start">
              <Image className="h-5 w-5 mr-2" />
              Загрузить медиа
            </Button>
          </Link>
          <Link to="/admin/settings">
            <Button variant="outline" className="w-full justify-start">
              <Settings className="h-5 w-5 mr-2" />
              Настройки сайта
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

