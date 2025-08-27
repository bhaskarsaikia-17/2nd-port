import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import SourcesPage from './pages/SourcesPage'
import MusicPage from './pages/MusicPage'
import { initGlowEffect, applyStoredTheme } from './util'
import { SmoothScrollProvider, useSmoothScrollContext } from './contexts/SmoothScrollContext'
import { MusicProvider } from './contexts/MusicContext'
// Internal App component that uses the context
function AppContent() {
  const location = useLocation()
  const { scrollToTop } = useSmoothScrollContext()

  useEffect(() => {
    applyStoredTheme()
    initGlowEffect()
    
    // Update document title based on route
    const getTitle = () => {
      switch (location.pathname) {
        case '/projects':
          return 'Projects - Bhaskar'
        case '/sources':
          return 'Sources - Bhaskar'
        case '/music':
          return 'Music - Bhaskar'
        default:
          return 'Bhaskar'
      }
    }
    
    document.title = getTitle()
    
    // Scroll to top on route change with smooth animation
    scrollToTop({ duration: 0.8 })
  }, [location, scrollToTop])

  useEffect(() => {
    const handleUserAgent = () => {
      const userAgent = navigator.userAgent || ""
      const unsupportedEngine = userAgent.includes("Gecko/") || userAgent.includes("Firefox")
      
      if (unsupportedEngine) {
        console.warn(
          "Unsupported engine detected. Some features may not work as expected. You may want to switch to a modern browser."
        )
      }
    }
    
    handleUserAgent()
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/sources" element={<SourcesPage />} />
        <Route path="/music" element={<MusicPage />} />
      </Routes>
    </Layout>
  )
}

// Main App component with providers
function App() {
  return (
    <MusicProvider>
      <SmoothScrollProvider>
        <AppContent />
      </SmoothScrollProvider>
    </MusicProvider>
  )
}

export default App
