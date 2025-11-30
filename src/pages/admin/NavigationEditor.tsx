import { useState } from 'react'
import { useContent } from '@/contexts/ContentContext'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Plus, Trash2, GripVertical } from 'lucide-react'
import { toast } from 'sonner'
import type { NavigationItem, FooterLink } from '@/contexts/ContentContext'

export function NavigationEditor() {
  const { navigation, footerLinks, updateNavigation, updateFooterLinks } = useContent()
  const [newNavItem, setNewNavItem] = useState({ path: '', label: '' })
  const [editingNav, setEditingNav] = useState<string | null>(null)

  const handleAddNav = () => {
    if (!newNavItem.path || !newNavItem.label) {
      toast.error('Заполните все поля')
      return
    }
    const updated = [
      ...navigation,
      {
        ...newNavItem,
        order: navigation.length,
      },
    ]
    updateNavigation(updated)
    setNewNavItem({ path: '', label: '' })
    toast.success('Ссылка добавлена')
  }

  const handleDeleteNav = (path: string) => {
    if (confirm('Удалить эту ссылку?')) {
      updateNavigation(navigation.filter((item) => item.path !== path))
      toast.success('Ссылка удалена')
    }
  }

  const handleAddFooterCategory = () => {
    const newCategory: FooterLink = {
      category: 'Новая категория',
      links: [],
    }
    updateFooterLinks([...footerLinks, newCategory])
    toast.success('Категория добавлена')
  }

  const handleUpdateFooterCategory = (index: number, category: FooterLink) => {
    const updated = [...footerLinks]
    updated[index] = category
    updateFooterLinks(updated)
    toast.success('Категория обновлена')
  }

  const handleDeleteFooterCategory = (index: number) => {
    if (confirm('Удалить эту категорию?')) {
      updateFooterLinks(footerLinks.filter((_, i) => i !== index))
      toast.success('Категория удалена')
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-darkBlue mb-2">
          Управление навигацией
        </h1>
        <p className="text-brand-darkBlue/60">
          Редактируйте навигационные ссылки в хедере и футере
        </p>
      </div>

      {/* Header Navigation */}
      <div className="bg-white rounded-xl p-6 border border-brand-lightTeal/20 shadow-soft mb-8">
        <h2 className="text-xl font-semibold text-brand-darkBlue mb-4">
          Навигация в хедере
        </h2>
        <div className="space-y-4">
          {navigation.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 bg-brand-lightBlue/20 rounded-lg"
            >
              <GripVertical className="h-5 w-5 text-brand-darkBlue/40" />
              <div className="flex-1">
                <div className="font-medium text-brand-darkBlue">{item.label}</div>
                <div className="text-sm text-brand-darkBlue/60">{item.path}</div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDeleteNav(item.path)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <div className="flex gap-2 pt-4 border-t border-brand-lightTeal/20">
            <Input
              placeholder="Путь (например: /about)"
              value={newNavItem.path}
              onChange={(e) => setNewNavItem({ ...newNavItem, path: e.target.value })}
              className="flex-1"
            />
            <Input
              placeholder="Название"
              value={newNavItem.label}
              onChange={(e) => setNewNavItem({ ...newNavItem, label: e.target.value })}
              className="flex-1"
            />
            <Button onClick={handleAddNav}>
              <Plus className="h-4 w-4 mr-2" />
              Добавить
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-white rounded-xl p-6 border border-brand-lightTeal/20 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-brand-darkBlue">
            Ссылки в футере
          </h2>
          <Button onClick={handleAddFooterCategory}>
            <Plus className="h-4 w-4 mr-2" />
            Добавить категорию
          </Button>
        </div>
        <div className="space-y-6">
          {footerLinks.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-4 bg-brand-lightBlue/20 rounded-lg space-y-3"
            >
              <Input
                value={category.category}
                onChange={(e) =>
                  handleUpdateFooterCategory(catIdx, {
                    ...category,
                    category: e.target.value,
                  })
                }
                className="font-semibold"
              />
              <div className="space-y-2 pl-4">
                {category.links.map((link, linkIdx) => (
                  <div key={linkIdx} className="flex gap-2">
                    <Input
                      placeholder="Название"
                      value={link.label}
                      onChange={(e) => {
                        const updated = { ...category }
                        updated.links[linkIdx].label = e.target.value
                        handleUpdateFooterCategory(catIdx, updated)
                      }}
                      className="flex-1"
                    />
                    <Input
                      placeholder="Путь"
                      value={link.path}
                      onChange={(e) => {
                        const updated = { ...category }
                        updated.links[linkIdx].path = e.target.value
                        handleUpdateFooterCategory(catIdx, updated)
                      }}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const updated = { ...category }
                        updated.links = updated.links.filter((_, i) => i !== linkIdx)
                        handleUpdateFooterCategory(catIdx, updated)
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const updated = { ...category }
                    updated.links.push({ label: '', path: '' })
                    handleUpdateFooterCategory(catIdx, updated)
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Добавить ссылку
                </Button>
              </div>
              <div className="pt-2 border-t border-brand-lightTeal/20">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteFooterCategory(catIdx)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Удалить категорию
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

