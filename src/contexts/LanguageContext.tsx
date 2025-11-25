import React, { createContext, useContext, useState } from 'react'

type Language = 'ru' | 'en' | 'uz'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  ru: {
    'nav.home': 'Главная',
    'nav.products': 'Продукты',
    'nav.integrations': 'Интеграции',
    'nav.partners': 'Партнёрам',
    'nav.about': 'О компании',
    'cta.start': 'Запустить сейчас',
    'cta.demo': 'Получить демо',
  },
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.integrations': 'Integrations',
    'nav.partners': 'Partners',
    'nav.about': 'About',
    'cta.start': 'Start Now',
    'cta.demo': 'Get Demo',
  },
  uz: {
    'nav.home': 'Bosh sahifa',
    'nav.products': 'Mahsulotlar',
    'nav.integrations': 'Integratsiyalar',
    'nav.partners': 'Hamkorlar',
    'nav.about': 'Kompaniya haqida',
    'cta.start': 'Hozir boshlash',
    'cta.demo': 'Demo olish',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru')

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

