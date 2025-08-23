import { ReactNode } from 'react'
import NavigationBar from './NavigationBar'
import DotBackgroundWrapper from './ui/DotBackgroundWrapper'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      <DotBackgroundWrapper>
        <div className="absolute inset-0 h-full w-full bg-theme-background-dark bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:opacity-100 opacity-30 bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 h-[35rem] w-[35rem] bg-theme-foreground-contrast dark:opacity-10 opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-[25rem] w-[25rem] bg-theme-foreground-contrast dark:opacity-10 opacity-20 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 h-[15rem] w-[15rem] bg-theme-foreground-contrast dark:opacity-10 opacity-20 blur-[100px] rounded-full" />
        {children}
      </DotBackgroundWrapper>
    </>
  )
}

export default Layout
