import { useState } from 'react'
import Footer from '../components/Footer'
import ProfileHeader from '../components/ProfileHeader'
import AboutCard from '../components/cards/AboutCard'
import SkillCard from '../components/cards/SkillCard'
import ActivityCard from '../components/cards/ActivityCard'
import DiscordProfileCard from '../components/cards/DiscordProfileCard'
import MainContent from '../components/ui/MainContent'
import LoadingScreen from '../components/LoadingScreen'

const HomePage = () => {
  const [showLoading, setShowLoading] = useState(true)

  const handleLoadingComplete = () => {
    setShowLoading(false)
  }

  return (
    <>
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
    <MainContent>
      <div
        id="mainCard"
        className="relative backdrop-blur-xl bg-theme-card border border-theme-card-border rounded-2xl overflow-hidden shadow-2xl overflow-y-auto dark:bg-black/25 dark:border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 mix-blend-overlay pointer-events-none opacity-50 dark:opacity-50" />
        
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');",
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/20" />
        
        <ProfileHeader />
        
        <div className="p-8 space-y-8 relative">
          <AboutCard />
          
          <DiscordProfileCard />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCard />
            <ActivityCard />
          </div>
        </div>
      </div>

      <Footer />
    </MainContent>
    </>
  )
}

export default HomePage
