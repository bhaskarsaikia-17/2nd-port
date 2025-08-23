import { ReactNode } from 'react'

interface MainContentProps {
  children: ReactNode
  progressiveBlur?: boolean
}

const MainContent = ({ children }: MainContentProps) => {
  return (
    <main className="relative max-w-5xl px-4 h-full pt-28">
      {children}
      {/* Note: Progressive blur functionality can be added later if needed */}
    </main>
  )
}

export default MainContent
