import { useState } from 'react'
import Footer from '../components/Footer'
import MainContent from '../components/ui/MainContent'
import LoadingScreen from '../components/LoadingScreen'
import MusicPlayer from '../components/MusicPlayer'
import { useMusicContext } from '../contexts/MusicContext'

const MusicPage = () => {
  const [showLoading, setShowLoading] = useState(true)
  const { songs, isLoading: songsLoading, playSong } = useMusicContext()

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
          
          <div className="p-8 space-y-8 relative">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="relative inline-block">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Music Player
                </h1>
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-lg" />
              </div>
              <p className="text-theme-foreground-secondary max-w-md mx-auto">
                Enjoy this compact music player.
              </p>
              <p className="text-xs text-theme-foreground-secondary/70 max-w-md mx-auto mt-2">
              
              </p>
            </div>

            {/* Music Player */}
            <div className="flex justify-center">
              {songsLoading ? (
                <div className="text-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto mb-2"></div>
                  <p className="text-theme-foreground-secondary">Loading songs...</p>
                </div>
              ) : songs.length > 0 ? (
                <MusicPlayer />
              ) : (
                <div className="text-center p-8">
                  <p className="text-theme-foreground-secondary">No songs available</p>
                </div>
              )}
            </div>

            {/* Song List */}
            {!songsLoading && songs.length > 0 && (
              <div className="max-w-md mx-auto">
                <h2 className="text-xl font-semibold text-theme-foreground mb-4">
                  Playlist
                </h2>
                <div className="space-y-2">
                  {songs.map((song, index) => (
                  <button
                    key={song.id}
                    onClick={() => playSong(index)}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg border border-theme-card-border hover:bg-theme-foreground/5 transition-colors duration-200 text-left"
                  >
                    <div className="w-8 h-8 rounded-md overflow-hidden">
                      <img
                        src={song.thumbnail}
                        alt={song.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-theme-foreground truncate">
                        {song.title}
                      </h3>
                      <p className="text-xs text-theme-foreground-secondary truncate">
                        {song.artist}
                      </p>
                    </div>
                    <div className="text-xs text-theme-foreground-secondary">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    </button>
                  ))}
                </div>
              </div>
            )}


          </div>
        </div>

        <Footer />
      </MainContent>
    </>
  )
}

export default MusicPage
