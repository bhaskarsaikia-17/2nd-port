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
  
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentSong = songs[currentSongIndex]

  // Initialize audio element
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !currentSong) return

    audio.src = currentSong.audioSrc
    audio.volume = isMuted ? 0 : volume

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    const handleEnded = () => {
      nextSong()
    }

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentSongIndex, songs])

  // Volume control
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  // Autoplay when songs are loaded
  useEffect(() => {
    if (!hasAutoPlayed && songs.length > 0 && !isLoading) {
      const attemptAutoplay = async () => {
        const audio = audioRef.current
        if (!audio) return

        try {
          await audio.play()
          setIsPlaying(true)
          setHasAutoPlayed(true)
        } catch (error) {
          // Autoplay blocked by browser - user will need to interact first
          console.log('Autoplay blocked:', error)
          setHasAutoPlayed(true)
        }
      }

      // Small delay to ensure audio is ready
      setTimeout(attemptAutoplay, 500)
    }
  }, [songs, isLoading, hasAutoPlayed])

  const togglePlayPause = async () => {
    const audio = audioRef.current
    if (!audio) return

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
    }
  }

  const nextSong = () => {
    if (songs.length === 0) return
    const nextIndex = (currentSongIndex + 1) % songs.length
    setCurrentSongIndex(nextIndex)
    setIsPlaying(false) // Will be set to true when new song loads if autoplay works
  }

  const prevSong = () => {
    if (songs.length === 0) return
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1
    setCurrentSongIndex(prevIndex)
    setIsPlaying(false)
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

  const playSong = (index: number) => {
    if (index >= 0 && index < songs.length) {
      setCurrentSongIndex(index)
      setIsPlaying(false) // Will auto-play when song loads
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
  }

  return (
    <MusicContext.Provider value={value}>
      {children}
      {/* Global audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        style={{ display: 'none' }}
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
