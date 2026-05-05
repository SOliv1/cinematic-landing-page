import { useEffect, useRef, useState } from 'react'
import OrbLogo from '/images/logo/orb-silver-R.png'

// ── Types ─────────────────────────────────────────────────────────────────────

export type SplashReason =
  | 'first-visit'       // user entering the Seasonal universe for the first time
  | 'seasonal-transition' // season or atmosphere changed since last visit
  | 'feature-launch'    // a major new chapter is being introduced
  | 'cinematic-mode'    // user explicitly summoned the experience

interface ReflectionsSplashProps {
  reason: SplashReason
  onComplete: () => void
}

// ── Reason labels ─────────────────────────────────────────────────────────────

const subtitleMap: Record<SplashReason, string> = {
  'first-visit':          'The seasons are listening.',
  'seasonal-transition':  'The sky has shifted.',
  'feature-launch':       'A new chapter is opening.',
  'cinematic-mode':       'The veil lifts.',
}

// ── Component ─────────────────────────────────────────────────────────────────

export function ReflectionsSplash({ reason, onComplete }: ReflectionsSplashProps) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter')
  const timers = useRef<number[]>([])

  const clear = () => timers.current.forEach(t => window.clearTimeout(t))

  useEffect(() => {
    // enter → hold (after 520ms — constellation fully revealed)
    timers.current.push(window.setTimeout(() => setPhase('hold'), 520))
    // hold → exit (constellation is brief — 680ms hold)
    timers.current.push(window.setTimeout(() => setPhase('exit'), 520 + 680))
    // exit → done (sky clears, 480ms)
    timers.current.push(window.setTimeout(() => onComplete(), 520 + 680 + 480))

    return clear
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // User can skip by clicking
  const skip = () => {
    clear()
    setPhase('exit')
    timers.current.push(window.setTimeout(() => onComplete(), 480))
  }

  return (
    <div
      className={`rsplash-veil rsplash-veil--${phase}`}
      aria-modal="true"
      role="dialog"
      aria-label="Reflections identity"
      onClick={skip}
    >
      {/* Atmospheric grain */}
      <div className="rsplash-grain" aria-hidden="true" />

      {/* Bloom — light born from the veil */}
      <div className={`rsplash-bloom rsplash-bloom--${phase}`} aria-hidden="true" />

      {/* Logo mark */}
      <div className={`rsplash-mark rsplash-mark--${phase}`}>
        <img
          src={OrbLogo}
          alt="Reflections"
          className="rsplash-logo"
          draggable={false}
        />
      </div>

      {/* Wordmark */}
      <div className={`rsplash-wordmark rsplash-wordmark--${phase}`}>
        <span className="rsplash-title">Reflections</span>
        <span className="rsplash-subtitle">{subtitleMap[reason]}</span>
      </div>

      {/* Skip hint — only shown in hold phase */}
      {phase === 'hold' && (
        <span className="rsplash-skip">tap to continue</span>
      )}
    </div>
  )
}

// ── Storage helpers ───────────────────────────────────────────────────────────

const STORAGE_KEY = 'seasonal:last-visit'
const SEASON_KEY  = 'seasonal:last-season'

function getSeason(): string {
  const m = new Date().getMonth()
  if (m >= 2 && m <= 4) return 'spring'
  if (m >= 5 && m <= 7) return 'summer'
  if (m >= 8 && m <= 10) return 'autumn'
  return 'winter'
}

export function useSplashTrigger(): { reason: SplashReason | null; dismiss: () => void } {
  const [reason, setReason] = useState<SplashReason | null>(null)

  useEffect(() => {
    const lastVisit = localStorage.getItem(STORAGE_KEY)
    const lastSeason = localStorage.getItem(SEASON_KEY)
    const currentSeason = getSeason()

    if (!lastVisit) {
      setReason('first-visit')
    } else if (lastSeason && lastSeason !== currentSeason) {
      setReason('seasonal-transition')
    }
    // feature-launch and cinematic-mode are triggered externally via showSplash()
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
    localStorage.setItem(SEASON_KEY, getSeason())
    setReason(null)
  }

  return { reason, dismiss }
}

// External trigger — call this to show any reason programmatically
// e.g. useSplashStore in a Zustand store, or a simple event
export function useSplashShow() {
  const [reason, setReason] = useState<SplashReason | null>(null)
  const dismiss = () => setReason(null)
  const show = (r: SplashReason) => setReason(r)
  return { reason, show, dismiss }
}
