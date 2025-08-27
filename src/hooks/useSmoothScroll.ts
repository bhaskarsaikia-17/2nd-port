import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

interface UseSmoothScrollOptions {
  duration?: number
  easing?: (t: number) => number
  direction?: 'vertical' | 'horizontal'
  gestureDirection?: 'vertical' | 'horizontal' | 'both'
  smooth?: boolean
  mouseMultiplier?: number
  smoothTouch?: boolean
  touchMultiplier?: number
  infinite?: boolean
  wrapper?: HTMLElement
  content?: HTMLElement
}

export const useSmoothScroll = (options: UseSmoothScrollOptions = {}) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with optimized settings for butter-smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for ultra-smooth feel
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Disable on touch for better performance on mobile
      touchMultiplier: 2,
      infinite: false,
      ...options
    })

    lenisRef.current = lenis

    // RAF loop for smooth animation
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle page visibility changes to pause/resume smooth scrolling
    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop()
      } else {
        lenis.start()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Cleanup function
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo = (target: string | number | HTMLElement, options?: { offset?: number; duration?: number; easing?: (t: number) => number }) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options
      })
    }
  }

  const scrollToTop = (options?: { duration?: number; easing?: (t: number) => number }) => {
    scrollTo(0, options)
  }

  const scrollToBottom = (options?: { duration?: number; easing?: (t: number) => number }) => {
    if (lenisRef.current) {
      scrollTo(document.body.scrollHeight, options)
    }
  }

  const stop = () => {
    if (lenisRef.current) {
      lenisRef.current.stop()
    }
  }

  const start = () => {
    if (lenisRef.current) {
      lenisRef.current.start()
    }
  }

  return {
    lenis: lenisRef.current,
    scrollTo,
    scrollToTop,
    scrollToBottom,
    stop,
    start
  }
}
