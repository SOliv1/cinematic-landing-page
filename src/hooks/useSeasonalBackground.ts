import { useEffect, useState } from 'react'
import {
  getNextSeasonalBackgroundBoundary,
  getSeasonalBackground,
  normalizeSeasonalBackgroundVariant,
  SEASONAL_BACKGROUND_UPDATE_MS,
} from '@/utils/getSeasonalBackground'

function readBackgroundPreview() {
  if (typeof window === 'undefined') {
    return null
  }

  const params = new URLSearchParams(window.location.search);
  const value = params.get('bg') || params.get('background') || params.get('seasonalBackground')
  return normalizeSeasonalBackgroundVariant(value)
}

export function useSeasonalBackground(overrideVariant: string | null = null) {
  const [background, setBackground] = useState(() =>
    getSeasonalBackground(new Date(), normalizeSeasonalBackgroundVariant(overrideVariant) || readBackgroundPreview())
  )

  useEffect(() => {
    const previewVariant = normalizeSeasonalBackgroundVariant(overrideVariant) || readBackgroundPreview()

    const syncBackground = () => {
      setBackground(getSeasonalBackground(new Date(), previewVariant))
    }

    syncBackground()

    if (previewVariant) {
      return undefined
    }

    let intervalId: number | null = null
    const timeoutId = window.setTimeout(() => {
      syncBackground()
      intervalId = window.setInterval(syncBackground, SEASONAL_BACKGROUND_UPDATE_MS)
    }, getNextSeasonalBackgroundBoundary())

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId !== null) {
        window.clearInterval(intervalId)
      }
    }
  }, [overrideVariant])

  return background
}
