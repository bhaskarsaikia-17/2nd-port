import { useRef } from 'react'
import { cn } from '../util'
import { useMusicContext } from '../contexts/MusicContext'

interface MusicPlayerProps {
  className?: string
}

const MusicPlayer = ({ className }: MusicPlayerProps) => {
  const {
    currentSongIndex,
    currentTime,
    duration,
    songs,
    isPlaying,
    seekTo,
    togglePlayPause,
    nextSong,
    prevSong,
    needsUserInteraction,
  } = useMusicContext()
  
  const progressBarRef = useRef<HTMLDivElement>(null)

  if (songs.length === 0) return null

  const currentSong = songs[currentSongIndex]

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current
    if (!progressBar) return

    const rect = progressBar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickRatio = clickX / rect.width
    const newTime = clickRatio * duration

    seekTo(newTime)
  }

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className={cn(
      "relative backdrop-blur-xl bg-theme-card border border-theme-card-border rounded-2xl overflow-hidden shadow-2xl dark:bg-black/25 dark:border-white/10 max-w-md mx-auto",
      className
    )}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 mix-blend-overlay pointer-events-none opacity-50 dark:opacity-50" />
      
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');",
        }}
      />

      <div className="relative p-4 space-y-4">
        {/* Song info and thumbnail */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={currentSong.thumbnail}
              alt={currentSong.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-black/10" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-theme-foreground truncate">
              {currentSong.title}
            </h3>
            <p className="text-xs text-theme-foreground-secondary truncate">
              {currentSong.artist}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div
            ref={progressBarRef}
            className="relative h-1 bg-theme-foreground/10 rounded-full cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-150"
              style={{ width: `${progressPercentage}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              style={{ left: `${progressPercentage}%`, transform: 'translateX(-50%) translateY(-50%)' }}
            />
          </div>
          <div className="flex justify-between text-xs text-theme-foreground-secondary">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* User interaction prompt */}
        {needsUserInteraction && (
          <div className="text-center py-2">
            <p className="text-sm text-theme-foreground-secondary">
              Click play to start music
            </p>
          </div>
        )}

        {/* Control buttons */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevSong}
            className="p-2 rounded-full hover:bg-theme-foreground/10 transition-colors duration-200 text-theme-foreground/70 hover:text-theme-foreground"
            aria-label="Previous song"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>
          
          <button
            onClick={togglePlayPause}
            className={cn(
              "p-3 rounded-full transition-all duration-200 text-white shadow-lg hover:shadow-xl transform hover:scale-105",
              needsUserInteraction
                ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 animate-pulse"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
            )}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          
          <button
            onClick={nextSong}
            className="p-2 rounded-full hover:bg-theme-foreground/10 transition-colors duration-200 text-theme-foreground/70 hover:text-theme-foreground"
            aria-label="Next song"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}

export default MusicPlayer
