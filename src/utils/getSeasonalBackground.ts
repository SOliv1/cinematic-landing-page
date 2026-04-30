const HOUR_MS = 60 * 60 * 1000

export const SEASONAL_BACKGROUND_VARIANTS = ['morning', 'day', 'evening', 'night'] as const

export type SeasonalBackgroundVariant = (typeof SEASONAL_BACKGROUND_VARIANTS)[number]

const VARIANT_ALIASES: Record<string, SeasonalBackgroundVariant> = {
  dawn: 'morning',
  sunrise: 'morning',
  warmdawn: 'morning',
  'warm-dawn': 'morning',
  warm: 'morning',
  midday: 'day',
  neutral: 'day',
  daylight: 'day',
  dusk: 'evening',
  sunset: 'evening',
  'autumn-ember': 'evening',
  autumnember: 'evening',
  ember: 'evening',
  midnight: 'night',
  'midnight-glow': 'night',
  midnightglow: 'night',
  late: 'night',
}

export function normalizeSeasonalBackgroundVariant(
  value: string | null | undefined
): SeasonalBackgroundVariant | null {
  const key = String(value || '').trim().toLowerCase()

  if (!key) {
    return null
  }

  if ((SEASONAL_BACKGROUND_VARIANTS as readonly string[]).includes(key)) {
    return key as SeasonalBackgroundVariant
  }

  return VARIANT_ALIASES[key] || null
}

export function getSeasonalBackground(date = new Date(), variant?: SeasonalBackgroundVariant | null) {
  const resolvedVariant = variant || getSeasonalBackgroundVariant(date)

  if (resolvedVariant === 'morning') {
    return [
      'radial-gradient(circle at 18% 20%, rgba(255, 232, 214, 0.92) 0%, rgba(255, 232, 214, 0.24) 24%, transparent 60%)',
      'radial-gradient(circle at 78% 28%, rgba(255, 201, 170, 0.55) 0%, transparent 42%)',
      'linear-gradient(145deg, #f9efe6 0%, #edd9c7 55%, #dbc4ae 100%)',
    ].join(', ')
  }

  if (resolvedVariant === 'day') {
    return [
      'radial-gradient(circle at 20% 24%, rgba(250, 245, 238, 0.82) 0%, rgba(250, 245, 238, 0.2) 26%, transparent 58%)',
      'radial-gradient(circle at 84% 76%, rgba(219, 225, 232, 0.55) 0%, transparent 44%)',
      'linear-gradient(145deg, #f7f4ef 0%, #ece6de 56%, #d9d0c7 100%)',
    ].join(', ')
  }

  if (resolvedVariant === 'evening') {
    return [
      'radial-gradient(circle at 18% 24%, rgba(255, 209, 164, 0.78) 0%, rgba(255, 209, 164, 0.16) 24%, transparent 58%)',
      'radial-gradient(circle at 78% 78%, rgba(255, 148, 72, 0.42) 0%, transparent 46%)',
      'linear-gradient(145deg, #2c1d17 0%, #4b2a1d 52%, #1c1721 100%)',
    ].join(', ')
  }

  return [
    'radial-gradient(circle at 26% 24%, rgba(123, 146, 214, 0.46) 0%, rgba(123, 146, 214, 0.12) 24%, transparent 56%)',
    'radial-gradient(circle at 78% 72%, rgba(205, 223, 255, 0.18) 0%, transparent 42%)',
    'linear-gradient(145deg, #0a1020 0%, #121a34 48%, #05060c 100%)',
  ].join(', ')
}

export function getSeasonalBackgroundVariant(date = new Date()): SeasonalBackgroundVariant {
  const hour = date.getHours()

  if (hour >= 5 && hour < 11) {
    return 'morning'
  }

  if (hour >= 11 && hour < 17) {
    return 'day'
  }

  if (hour >= 17 && hour < 21) {
    return 'evening'
  }

  return 'night'
}

export function getNextSeasonalBackgroundBoundary(date = new Date()) {
  const boundary = new Date(date)
  boundary.setMinutes(0, 0, 0)
  boundary.setHours(boundary.getHours() + 1)
  return Math.max(0, boundary.getTime() - date.getTime())
}

export const SEASONAL_BACKGROUND_UPDATE_MS = HOUR_MS
