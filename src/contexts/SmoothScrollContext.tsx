import { createContext, useContext, ReactNode } from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

interface SmoothScrollContextType {
  scrollTo: (target: string | number | HTMLElement, options?: { offset?: number; duration?: number; easing?: (t: number) => number }) => void
  scrollToTop: (options?: { duration?: number; easing?: (t: number) => number }) => void
  scrollToBottom: (options?: { duration?: number; easing?: (t: number) => number }) => void
  stop: () => void
  start: () => void
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null)

interface SmoothScrollProviderProps {
  children: ReactNode
}

function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const smoothScrollFunctions = useSmoothScroll({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2
  })

  return (
    <SmoothScrollContext.Provider value={smoothScrollFunctions}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

function useSmoothScrollContext() {
  const context = useContext(SmoothScrollContext)
  if (!context) {
    throw new Error('useSmoothScrollContext must be used within a SmoothScrollProvider')
  }
  return context
}

export { SmoothScrollProvider, useSmoothScrollContext }
