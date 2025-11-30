import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Upload, Image as ImageIcon, File, Trash2, Search } from 'lucide-react'
import { toast } from 'sonner'

interface MediaItem {
  id: string
  name: string
  type: 'image' | 'document'
  url: string
  size: number
  uploadedAt: Date
}

export function MediaManager() {
  const [media, setMedia] = useState<MediaItem[]>(() => {
    const stored = localStorage.getItem('delever-media')
    return stored ? JSON.parse(stored) : []
  })
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMedia = media.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const newItem: MediaItem = {
          id: `media-${Date.now()}-${Math.random()}`,
          name: file.name,
          type: file.type.startsWith('image/') ? 'image' : 'document',
          url: event.target?.result as string,
          size: file.size,
          uploadedAt: new Date(),
        }
        setMedia((prev) => {
          const updated = [...prev, newItem]
          localStorage.setItem('delever-media', JSON.stringify(updated))
          return updated
        })
        toast.success(`Файл ${file.name} загружен`)
      }
      reader.readAsDataURL(file)
    })
  }

  const handleDelete = (id: string) => {
    if (confirm('Удалить этот файл?')) {
      setMedia((prev) => {
        const updated = prev.filter((item) => item.id !== id)
        localStorage.setItem('delever-media', JSON.stringify(updated))
        return updated
      })
      toast.success('Файл удален')
    }
  }

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-darkBlue mb-2">
            Управление медиа
          </h1>
          <p className="text-brand-darkBlue/60">
            Загружайте и управляйте изображениями и документами
          </p>
        </div>
        <div>
          <input
            type="file"
            id="file-upload"
            multiple
            onChange={handleUpload}
            className="hidden"
            accept="image/*,.pdf,.doc,.docx"
          />
          <Button as="label" htmlFor="file-upload">
            <Upload className="h-4 w-4 mr-2" />
            Загрузить файлы
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brand-darkBlue/40" />
          <Input
            type="text"
            placeholder="Поиск файлов..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Media Grid */}
      {filteredMedia.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-brand-lightTeal/20">
          <ImageIcon className="h-12 w-12 text-brand-darkBlue/30 mx-auto mb-4" />
          <p className="text-brand-darkBlue/60 mb-4">
            {searchTerm ? 'Ничего не найдено' : 'Файлы пока не загружены'}
          </p>
          {!searchTerm && (
            <Button as="label" htmlFor="file-upload">
              <Upload className="h-4 w-4 mr-2" />
              Загрузить первый файл
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-brand-lightTeal/20 shadow-soft overflow-hidden"
            >
              {item.type === 'image' ? (
                <div className="aspect-video bg-brand-lightBlue/20 flex items-center justify-center">
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-brand-lightBlue/20 flex items-center justify-center">
                  <File className="h-12 w-12 text-brand-darkBlue/40" />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-brand-darkBlue truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-darkBlue/60 mt-1">
                      {formatSize(item.size)}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-3 flex gap-2">
                  <Input
                    value={item.url}
                    readOnly
                    className="text-xs"
                    onClick={(e) => {
                      e.currentTarget.select()
                      navigator.clipboard.writeText(item.url)
                      toast.success('URL скопирован')
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

