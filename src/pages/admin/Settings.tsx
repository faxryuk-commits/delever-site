import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Save, Mail, Phone, MapPin } from 'lucide-react'
import { toast } from 'sonner'

interface SiteSettings {
  siteName: string
  siteDescription: string
  contactEmail: string
  contactPhone: string
  address: string
  socialLinks: {
    linkedin: string
    youtube: string
  }
}

export function Settings() {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const stored = localStorage.getItem('delever-settings')
    return stored
      ? JSON.parse(stored)
      : {
          siteName: 'Delever',
          siteDescription: 'Операционная система для доставки',
          contactEmail: 'info@delever.io',
          contactPhone: '+998 90 123 45 67',
          address: 'Ташкент, Узбекистан',
          socialLinks: {
            linkedin: 'https://linkedin.com/company/delever',
            youtube: 'https://youtube.com/@delever',
          },
        }
  })

  const handleSave = () => {
    localStorage.setItem('delever-settings', JSON.stringify(settings))
    toast.success('Настройки сохранены')
  }

  const handleChange = (field: keyof SiteSettings, value: any) => {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-darkBlue mb-2">
          Настройки сайта
        </h1>
        <p className="text-brand-darkBlue/60">
          Управляйте основными настройками сайта
        </p>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl p-6 border border-brand-lightTeal/20 shadow-soft">
          <h2 className="text-xl font-semibold text-brand-darkBlue mb-4">
            Общие настройки
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-brand-darkBlue mb-2">
                Название сайта
              </label>
              <Input
                value={settings.siteName}
                onChange={(e) => handleChange('siteName', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-darkBlue mb-2">
                Описание сайта
              </label>
              <Textarea
                value={settings.siteDescription}
                onChange={(e) => handleChange('siteDescription', e.target.value)}
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-6 border border-brand-lightTeal/20 shadow-soft">
          <h2 className="text-xl font-semibold text-brand-darkBlue mb-4">
            Контактная информация
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-brand-darkBlue mb-2">
                <Mail className="h-4 w-4 inline mr-2" />
                Email
              </label>
              <Input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleChange('contactEmail', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-darkBlue mb-2">
                <Phone className="h-4 w-4 inline mr-2" />
                Телефон
              </label>
              <Input
                value={settings.contactPhone}
                onChange={(e) => handleChange('contactPhone', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-darkBlue mb-2">
                <MapPin className="h-4 w-4 inline mr-2" />
                Адрес
              </label>
              <Input
                value={settings.address}
                onChange={(e) => handleChange('address', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-xl p-6 border border-brand-lightTeal/20 shadow-soft">
          <h2 className="text-xl font-semibold text-brand-darkBlue mb-4">
            Социальные сети
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-brand-darkBlue mb-2">
                LinkedIn
              </label>
              <Input
                type="url"
                value={settings.socialLinks.linkedin}
                onChange={(e) =>
                  handleChange('socialLinks', {
                    ...settings.socialLinks,
                    linkedin: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-darkBlue mb-2">
                YouTube
              </label>
              <Input
                type="url"
                value={settings.socialLinks.youtube}
                onChange={(e) =>
                  handleChange('socialLinks', {
                    ...settings.socialLinks,
                    youtube: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Сохранить настройки
          </Button>
        </div>
      </div>
    </div>
  )
}

