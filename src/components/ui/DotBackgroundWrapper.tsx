import { ReactNode } from 'react'

interface DotBackgroundWrapperProps {
  children: ReactNode
}

const DotBackgroundWrapper = ({ children }: DotBackgroundWrapperProps) => {
  return (
    <div className="min-h-screen w-full bg-theme-background bg-dot-theme-foreground-secondary/[0.2] relative flex justify-center">
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-theme-background [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]" />
      {children}
    </div>
  )
}

export default DotBackgroundWrapper
