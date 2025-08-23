import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import SourcesPage from './pages/SourcesPage'
import { initGlowEffect, applyStoredTheme } from './util'

function App() {
  const location = useLocation()

  useEffect(() => {
    applyStoredTheme()
    initGlowEffect()
    
    // Update document title based on route
    const getTitle = () => {
      switch (location.pathname) {
        case '/experience':
          return 'Experience - Bhaskar'
        case '/sources':
          return 'Sources - Bhaskar'
        default:
          return 'Bhaskar'
      }
    }
    
    document.title = getTitle()
  }, [location])

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
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/sources" element={<SourcesPage />} />
      </Routes>
    </Layout>
  )
}

export default App
