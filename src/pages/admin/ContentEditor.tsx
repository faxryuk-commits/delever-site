import { useState } from 'react'
import { useContent, ContentItem } from '@/contexts/ContentContext'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Plus, Trash2, Search, Save } from 'lucide-react'
import { toast } from 'sonner'

export function ContentEditor() {
  const { content, updateContent, addContent, deleteContent } = useContent()
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')

  const filteredContent = content.filter(
    (item) =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.path.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEdit = (item: ContentItem) => {
    setEditingId(item.id)
    setEditValue(item.value)
  }

  const handleSave = (id: string) => {
    updateContent(id, editValue)
    setEditingId(null)
    toast.success('Контент обновлен')
  }

  const handleAdd = () => {
    const newItem: ContentItem = {
      id: `content-${Date.now()}`,
      type: 'text',
      path: 'new.path',
      value: '',
      label: 'Новый элемент',
    }
    addContent(newItem)
    setEditingId(newItem.id)
    setEditValue('')
    toast.success('Новый элемент добавлен')
  }

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот элемент?')) {
      deleteContent(id)
      toast.success('Элемент удален')
    }
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-darkBlue mb-2">
            Управление контентом
          </h1>
          <p className="text-brand-darkBlue/60">
            Редактируйте тексты, изображения и другие элементы сайта
          </p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 mr-2" />
          Добавить
        </Button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brand-darkBlue/40" />
          <Input
            type="text"
            placeholder="Поиск по контенту..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {filteredContent.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-brand-lightTeal/20">
            <p className="text-brand-darkBlue/60 mb-4">
              {searchTerm ? 'Ничего не найдено' : 'Контент пока не добавлен'}
            </p>
            {!searchTerm && (
              <Button onClick={handleAdd}>
                <Plus className="h-4 w-4 mr-2" />
                Добавить первый элемент
              </Button>
            )}
          </div>
        ) : (
          filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border border-brand-lightTeal/20 shadow-soft"
            >
              {editingId === item.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-darkBlue mb-2">
                      Путь
                    </label>
                    <Input value={item.path} disabled />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-darkBlue mb-2">
                      Значение
                    </label>
                    {item.type === 'text' ? (
                      <Textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        rows={4}
                      />
                    ) : (
                      <Input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                      />
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => handleSave(item.id)}>
                      <Save className="h-4 w-4 mr-2" />
                      Сохранить
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setEditingId(null)}
                    >
                      Отмена
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-brand-darkBlue/50 uppercase">
                        {item.type}
                      </span>
                      <span className="text-xs text-brand-darkBlue/40">
                        {item.path}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-brand-darkBlue mb-2">
                      {item.label}
                    </h3>
                    <p className="text-brand-darkBlue/70 whitespace-pre-wrap">
                      {item.value || '(пусто)'}
                    </p>
                    {item.description && (
                      <p className="text-sm text-brand-darkBlue/50 mt-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(item)}
                    >
                      Редактировать
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

