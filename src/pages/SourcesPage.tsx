import Footer from '../components/Footer'
import ProfileHeader from '../components/ProfileHeader'
import MainContent from '../components/ui/MainContent'

const digitalPhilosophy = [
  {
    title: "Code with Purpose",
    description: "Every line of code should solve a real problem",
    icon: "💡",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Continuous Learning",
    description: "The day you stop learning is the day you fall behind",
    icon: "🚀",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "User-Centric Design",
    description: "Beautiful interfaces that users actually want to use",
    icon: "🎨",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "Open Source Spirit",
    description: "Building together, sharing knowledge, growing as one",
    icon: "🌟",
    color: "from-purple-500/20 to-pink-500/20"
  }
]

const favoriteTools = [
  { name: "TypeScript", emoji: "⚡" },
  { name: "React", emoji: "⚛️" },
  { name: "Vite", emoji: "🚀" },
  { name: "Tailwind", emoji: "🎨" },
  { name: "VS Code", emoji: "💻" },
  { name: "Git", emoji: "📝" }
]

const SourcesPage = () => {
  return (
    <MainContent>
      <div
        id="mainCard"
        className="relative backdrop-blur-xl bg-theme-card border border-theme-card-border rounded-2xl overflow-hidden shadow-2xl overflow-y-auto dark:bg-black/25 dark:border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 mix-blend-overlay pointer-events-none opacity-50" />

        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');",
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent" />

        <ProfileHeader />

        <div className="p-8 space-y-8 relative">
          {/* Digital Philosophy Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-theme-foreground dark:text-white">
              <span className="text-2xl">🧠</span>
              Digital Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {digitalPhilosophy.map((item) => (
                <div
                  key={item.title}
                  className={`group relative p-6 bg-gradient-to-br ${item.color} border border-black/10 dark:border-white/10 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-theme-foreground dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-theme-foreground/70 dark:text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Tools Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-theme-foreground dark:text-white">
              <span className="text-2xl">🛠️</span>
              Favorite Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {favoriteTools.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/15 hover:scale-105"
                >
                  <span className="text-lg">{tool.emoji}</span>
                  <span className="font-medium text-theme-foreground dark:text-white">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Credits Section */}
          <div className="mt-12 pt-6 border-t border-black/10 dark:border-white/10">
            <p className="text-center text-sm text-theme-foreground/60 dark:text-white/60 italic">
              Crafted With ❤️ By Bhaskar
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </MainContent>
  )
}

export default SourcesPage
