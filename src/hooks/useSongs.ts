import { useState, useEffect } from 'react'

export interface Song {
  id: string
  title: string
  artist: string
  audioSrc: string
  thumbnail: string
}

// This can be expanded to fetch from an API or read from a config file
const getSongs = async (): Promise<Song[]> => {
  return [
    {
      id: '1',
      title: 'I like the way you kiss me',
      artist: 'Artemas',
      audioSrc: '/songs/I like the way you kiss me/i like the way you kiss me - Artemas.mp3',
      thumbnail: '/songs/I like the way you kiss me/I like the way you kiss me.jpg'
    }
  ]
}

export const useSongs = () => {
  const [songs, setSongs] = useState<Song[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadSongs = async () => {
      try {
        setLoading(true)
        const loadedSongs = await getSongs()
        setSongs(loadedSongs)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load songs')
      } finally {
        setLoading(false)
      }
    }

    loadSongs()
  }, [])

  return { songs, loading, error }
}
