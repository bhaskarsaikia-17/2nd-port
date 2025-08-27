import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react'
import { Song, useSongs } from '../hooks/useSongs'

interface MusicContextType {
  // Player state
  currentSongIndex: number
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isMuted: boolean
  songs: Song[]
  isLoading: boolean
  
  // Player controls
  togglePlayPause: () => void
  nextSong: () => void
  prevSong: () => void
  seekTo: (time: number) => void
  setVolume: (volume: number) => void
  toggleMute: () => void
  playSong: (index: number) => void
  
  // UI state
  isPlayerVisible: boolean
  togglePlayerVisibility: () => void
  
  // Autoplay state
  needsUserInteraction: boolean
  userInteracted: boolean
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

interface MusicProviderProps {
  children: ReactNode
}

export const MusicProvider = ({ children }: MusicProviderProps) => {
  const { songs, loading: isLoading } = useSongs()
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlayerVisible, setIsPlayerVisible] = useState(true)
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const [canAutoplay, setCanAutoplay] = useState(false)
  const [needsUserInteraction, setNeedsUserInteraction] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentSong = songs[currentSongIndex]

  // Initialize audio element
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !currentSong) return

    console.log('Loading audio:', currentSong.audioSrc)
    
    // Reset audio state
    setCurrentTime(0)
    setDuration(0)
    
    // Set audio source
    audio.src = currentSong.audioSrc
    audio.volume = isMuted ? 0 : volume
    audio.load() // Force reload

    const setAudioData = () => {
      console.log('Audio loaded successfully:', currentSong.title)
      setDuration(audio.duration || 0)
      setCurrentTime(audio.currentTime || 0)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime || 0)

    const handleEnded = () => {
      console.log('Song ended, playing next...')
      nextSong()
    }

    const handleError = (e: Event) => {
      console.error('Audio loading error:', e)
      console.error('Failed to load:', currentSong.audioSrc)
      setIsPlaying(false)
      
      // Try to play next song if this one fails and there are more songs
      if (songs.length > 1) {
        setTimeout(() => {
          nextSong()
        }, 2000)
      }
    }

    const handleCanPlay = () => {
      console.log('Audio can play:', currentSong.title)
      
      // If we were playing before and user has interacted, continue playing
      if (isPlaying && userInteracted) {
        audio.play().catch(error => {
          console.error('Error continuing playback:', error)
          setIsPlaying(false)
        })
      }
    }

    const handleLoadStart = () => {
      console.log('Started loading:', currentSong.title)
    }

    const handleProgress = () => {
      // Audio is buffering
      if (audio.buffered.length > 0) {
        const bufferedEnd = audio.buffered.end(audio.buffered.length - 1)
        const duration = audio.duration
        if (duration > 0) {
          const bufferedPercent = (bufferedEnd / duration) * 100
          console.log(`Buffered: ${bufferedPercent.toFixed(1)}%`)
        }
      }
    }

    // Add all event listeners
    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('loadedmetadata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)
    audio.addEventListener('canplay', handleCanPlay)
    audio.addEventListener('loadstart', handleLoadStart)
    audio.addEventListener('progress', handleProgress)

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('loadedmetadata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('canplay', handleCanPlay)
      audio.removeEventListener('loadstart', handleLoadStart)
      audio.removeEventListener('progress', handleProgress)
    }
  }, [currentSongIndex, songs])

  // Volume control
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  // Test autoplay capability on first load
  useEffect(() => {
    const testAutoplay = async () => {
      const audio = new Audio()
      audio.muted = true
      audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUYrTp66hVFApGn+DyvWYeBTWH0fPTgjEIGGS57+OZBA'

      try {
        await audio.play()
        setCanAutoplay(true)
      } catch (error) {
        setCanAutoplay(false)
      }
    }

    testAutoplay()
  }, [])

  // Listen for user interaction to enable autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true)
      setCanAutoplay(true)
    }

    // Add event listeners for various user interactions
    const events = ['click', 'keydown', 'touchstart', 'touchend']
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [])

  // Autoplay when songs are loaded and user has interacted or autoplay is allowed
  useEffect(() => {
    if (!hasAutoPlayed && songs.length > 0 && !isLoading && (userInteracted || canAutoplay)) {
      const attemptAutoplay = async () => {
        const audio = audioRef.current
        if (!audio) return

        try {
          console.log('Attempting autoplay...')
          await audio.play()
          setIsPlaying(true)
          setHasAutoPlayed(true)
          console.log('Autoplay successful')
        } catch (error) {
          // Autoplay blocked by browser - user will need to interact first
          console.log('Autoplay blocked:', error)
          setHasAutoPlayed(true)
          setNeedsUserInteraction(true)
        }
      }

      // Small delay to ensure audio is ready
      setTimeout(attemptAutoplay, 1000)
    }
  }, [songs, isLoading, hasAutoPlayed, userInteracted, canAutoplay])

  const togglePlayPause = async () => {
    const audio = audioRef.current
    if (!audio) return

    // Mark user interaction
    setUserInteracted(true)
    setNeedsUserInteraction(false)

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error('Error playing audio:', error)
      setNeedsUserInteraction(true)
    }
  }

  const nextSong = () => {
    if (songs.length === 0) return
    const nextIndex = (currentSongIndex + 1) % songs.length
    setCurrentSongIndex(nextIndex)
    // If user has interacted, continue playing the next song
    if (userInteracted && isPlaying) {
      setTimeout(() => {
        const audio = audioRef.current
        if (audio) {
          audio.play().catch(console.error)
        }
      }, 100)
    } else {
      setIsPlaying(false)
    }
  }

  const prevSong = () => {
    if (songs.length === 0) return
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1
    setCurrentSongIndex(prevIndex)
    // If user has interacted, continue playing the previous song
    if (userInteracted && isPlaying) {
      setTimeout(() => {
        const audio = audioRef.current
        if (audio) {
          audio.play().catch(console.error)
        }
      }, 100)
    } else {
      setIsPlaying(false)
    }
  }

  const seekTo = (time: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = time
    setCurrentTime(time)
  }

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume)
    if (newVolume > 0) setIsMuted(false)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const playSong = async (index: number) => {
    if (index >= 0 && index < songs.length) {
      setCurrentSongIndex(index)
      setUserInteracted(true) // Mark that user has interacted
      
      // Try to start playing immediately
      setTimeout(async () => {
        const audio = audioRef.current
        if (audio) {
          try {
            await audio.play()
            setIsPlaying(true)
          } catch (error) {
            console.error('Error playing selected song:', error)
            setIsPlaying(false)
          }
        }
      }, 100)
    }
  }

  const togglePlayerVisibility = () => {
    setIsPlayerVisible(!isPlayerVisible)
  }

  const value: MusicContextType = {
    currentSongIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    songs,
    isLoading,
    togglePlayPause,
    nextSong,
    prevSong,
    seekTo,
    setVolume,
    toggleMute,
    playSong,
    isPlayerVisible,
    togglePlayerVisibility,
    needsUserInteraction,
    userInteracted,
  }

  return (
    <MusicContext.Provider value={value}>
      {children}
      {/* Global audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        playsInline
        controls={false}
      />
    </MusicContext.Provider>
  )
}

export const useMusicContext = () => {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error('useMusicContext must be used within a MusicProvider')
  }
  return context
}
