import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface ContentItem {
  id: string
  type: 'text' | 'image' | 'link' | 'section'
  path: string // путь к элементу, например: 'home.hero.title'
  value: string
  label: string
  description?: string
}

export interface NavigationItem {
  path: string
  label: string
  order: number
}

export interface FooterLink {
  category: string
  links: Array<{ label: string; path: string }>
}

interface ContentContextType {
  content: ContentItem[]
  navigation: NavigationItem[]
  footerLinks: FooterLink[]
  updateContent: (id: string, value: string) => void
  addContent: (item: ContentItem) => void
  deleteContent: (id: string) => void
  updateNavigation: (items: NavigationItem[]) => void
  updateFooterLinks: (links: FooterLink[]) => void
  getContentByPath: (path: string) => ContentItem | undefined
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

const STORAGE_KEY = 'delever-content'
const NAVIGATION_KEY = 'delever-navigation'
const FOOTER_KEY = 'delever-footer'

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentItem[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  const [navigation, setNavigation] = useState<NavigationItem[]>(() => {
    const stored = localStorage.getItem(NAVIGATION_KEY)
    return stored ? JSON.parse(stored) : []
  })

  const [footerLinks, setFooterLinks] = useState<FooterLink[]>(() => {
    const stored = localStorage.getItem(FOOTER_KEY)
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
  }, [content])

  useEffect(() => {
    localStorage.setItem(NAVIGATION_KEY, JSON.stringify(navigation))
  }, [navigation])

  useEffect(() => {
    localStorage.setItem(FOOTER_KEY, JSON.stringify(footerLinks))
  }, [footerLinks])

  const updateContent = (id: string, value: string) => {
    setContent((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item))
    )
  }

  const addContent = (item: ContentItem) => {
    setContent((prev) => [...prev, item])
  }

  const deleteContent = (id: string) => {
    setContent((prev) => prev.filter((item) => item.id !== id))
  }

  const updateNavigation = (items: NavigationItem[]) => {
    setNavigation(items)
  }

  const updateFooterLinks = (links: FooterLink[]) => {
    setFooterLinks(links)
  }

  const getContentByPath = (path: string) => {
    return content.find((item) => item.path === path)
  }

  return (
    <ContentContext.Provider
      value={{
        content,
        navigation,
        footerLinks,
        updateContent,
        addContent,
        deleteContent,
        updateNavigation,
        updateFooterLinks,
        getContentByPath,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within ContentProvider')
  }
  return context
}

