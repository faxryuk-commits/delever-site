import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
  user: { email: string } | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AUTH_KEY = 'delever-admin-auth'
const DEFAULT_EMAIL = 'admin@delever.io'
const DEFAULT_PASSWORD = 'admin123' // В продакшене использовать переменные окружения

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const stored = localStorage.getItem(AUTH_KEY)
    return stored === 'true'
  })

  const [user, setUser] = useState<{ email: string } | null>(() => {
    if (isAuthenticated) {
      return { email: DEFAULT_EMAIL }
    }
    return null
  })

  useEffect(() => {
    localStorage.setItem(AUTH_KEY, String(isAuthenticated))
  }, [isAuthenticated])

  const login = (email: string, password: string): boolean => {
    // Простая проверка (в продакшене использовать API)
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      setIsAuthenticated(true)
      setUser({ email })
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem(AUTH_KEY)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

