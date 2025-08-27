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
      audioSrc: '/songs/I%20like%20the%20way%20you%20kiss%20me/i%20like%20the%20way%20you%20kiss%20me%20-%20Artemas.mp3',
      thumbnail: '/songs/I%20like%20the%20way%20you%20kiss%20me/I%20like%20the%20way%20you%20kiss%20me.jpg'
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
