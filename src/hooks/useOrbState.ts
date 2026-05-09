import { useEffect, useMemo, useState } from 'react'

export type DayPhase = 'dawn' | 'day' | 'dusk' | 'night'
export type Season = 'spring' | 'summer' | 'autumn' | 'winter'
export type WeatherCondition = 'clear' | 'rain' | 'storm' | 'snow'

const weatherConditions = new Set<WeatherCondition>(['clear', 'rain', 'storm', 'snow'])

function getDayPhase(date = new Date()): DayPhase {
  const hour = date.getHours()

  if (hour >= 5 && hour < 12) return 'dawn'
  if (hour >= 12 && hour < 17) return 'day'
  if (hour >= 17 && hour < 21) return 'dusk'
  return 'night'
}

function getSeason(date = new Date()): Season {
  const month = date.getMonth()

  if (month >= 2 && month <= 4) return 'spring'
  if (month >= 5 && month <= 7) return 'summer'
  if (month >= 8 && month <= 10) return 'autumn'
  return 'winter'
}

function normalizeWeather(condition: unknown): WeatherCondition {
  return typeof condition === 'string' && weatherConditions.has(condition as WeatherCondition)
    ? condition as WeatherCondition
    : 'clear'
}

export function useOrbState() {
  const [phase, setPhase] = useState<DayPhase>(() => getDayPhase())
  const [season, setSeason] = useState<Season>(() => getSeason())
  const [weather, setWeather] = useState<WeatherCondition>('clear')

  useEffect(() => {
    const updateTimeState = () => {
      const now = new Date()
      setPhase(getDayPhase(now))
      setSeason(getSeason(now))
    }

    updateTimeState()
    const intervalId = window.setInterval(updateTimeState, 60 * 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    fetch('/api/weather', { signal: controller.signal })
      .then((res) => res.ok ? res.json() : Promise.reject(new Error('Weather unavailable')))
      .then((data) => setWeather(normalizeWeather(data?.condition)))
      .catch((error) => {
        if (error instanceof Error && error.name === 'AbortError') return
        setWeather('clear')
      })

    return () => controller.abort()
  }, [])

  const className = useMemo(
    () => [
      'seasonal-orb',
      `seasonal-orb-${phase}`,
      `season-${season}`,
      `weather-${weather}`,
    ].join(' '),
    [phase, season, weather],
  )

  return { phase, season, weather, className }
}
