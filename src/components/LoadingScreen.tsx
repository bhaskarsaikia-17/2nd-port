import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Start fade out after a brief moment to ensure smooth animation
    const fadeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 100) // Small delay to ensure the component is mounted

    // Remove from DOM after animation completes
    const removeTimer = setTimeout(() => {
      setShouldRender(false)
      onComplete()
    }, 1600) // 1.5s + 100ms buffer for animation completion

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [onComplete])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-1500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        // Ensure it's above everything else
        zIndex: 9999,
      }}
    />
  )
}

export default LoadingScreen
