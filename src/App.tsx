import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { ContentProvider } from './contexts/ContentContext'
import { Toaster } from 'sonner'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Pricing } from './pages/Pricing'
import { Channels } from './pages/products/Channels'
import { Operations } from './pages/products/Operations'
import { Analytics } from './pages/products/Analytics'
import { Marketing } from './pages/products/Marketing'
import { Integrations } from './pages/Integrations'
import { Partners } from './pages/Partners'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/admin/Login'
import { Dashboard } from './pages/admin/Dashboard'
import { ContentEditor } from './pages/admin/ContentEditor'
import { NavigationEditor } from './pages/admin/NavigationEditor'
import { MediaManager } from './pages/admin/MediaManager'
import { Settings } from './pages/admin/Settings'
import { AdminLayout } from './components/admin/AdminLayout'
import { ProtectedRoute } from './components/admin/ProtectedRoute'

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/channels" element={<Channels />} />
          <Route path="/products/operations" element={<Operations />} />
          <Route path="/products/analytics" element={<Analytics />} />
          <Route path="/products/marketing" element={<Marketing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ContentProvider>
          <Tooltip.Provider>
            <BrowserRouter>
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin/login" element={<Login />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <Dashboard />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/content"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <ContentEditor />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/navigation"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <NavigationEditor />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/media"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <MediaManager />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/settings"
                  element={
                    <ProtectedRoute>
                      <AdminLayout>
                        <Settings />
                      </AdminLayout>
                    </ProtectedRoute>
                  }
                />

                {/* Public Routes */}
                <Route path="*" element={<PublicLayout />} />
              </Routes>
              <Toaster position="top-right" />
            </BrowserRouter>
          </Tooltip.Provider>
        </ContentProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

