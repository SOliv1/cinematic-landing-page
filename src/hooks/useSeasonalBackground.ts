import { useEffect, useState } from 'react'
import {
  getNextSeasonalBackgroundBoundary,
  getSeasonalBackground,
  getSeasonalBackgroundVariant,
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

function resolveBackgroundPreview(overrideVariant: string | null) {
  return normalizeSeasonalBackgroundVariant(overrideVariant) || readBackgroundPreview()
}

export function useSeasonalBackgroundVariant(overrideVariant: string | null = null) {
  const [variant, setVariant] = useState(() =>
    resolveBackgroundPreview(overrideVariant) || getSeasonalBackgroundVariant()
  )

  useEffect(() => {
    const previewVariant = resolveBackgroundPreview(overrideVariant)

    const syncVariant = () => {
      setVariant(previewVariant || getSeasonalBackgroundVariant())
    }

    syncVariant()

    if (previewVariant) {
      return undefined
    }

    let intervalId: number | null = null
    const timeoutId = window.setTimeout(() => {
      syncVariant()
      intervalId = window.setInterval(syncVariant, SEASONAL_BACKGROUND_UPDATE_MS)
    }, getNextSeasonalBackgroundBoundary())

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId !== null) {
        window.clearInterval(intervalId)
      }
    }
  }, [overrideVariant])

  return variant
}

export function useSeasonalBackground(overrideVariant: string | null = null) {
  const variant = useSeasonalBackgroundVariant(overrideVariant)
  return getSeasonalBackground(new Date(), variant)
}
