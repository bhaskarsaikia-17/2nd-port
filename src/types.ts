export interface Experience {
  id: string
  title: string
  shortDescription: string
  url?: string
  flag?: string
  flagColor?: string
  heroImage: string
  startDate: string
  endDate?: string
  company: string
  position: string
}

export interface ActivityTrackDatabaseRow {
  id: number
  snapshot_time: number
  mouse_activity: string
  keyboard_presses: number
  window_activity: string
}

export interface ActivityTrack {
  id: number
  snapshot_time: number
  mouse_activity: {
    totalMouseDistance: number
    rightClicks: number
    leftClicks: number
  }
  keyboard_presses: number
  window_activity: Array<any>
}

export interface NormalizedInputData {
  snapshot_time: number
  keyboard_presses: number
  totalMouseDistance: number
  rightClicks: number
  leftClicks: number
}