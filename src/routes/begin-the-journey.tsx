import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import '../BeginTheJourney.css'
import { useSeasonalBackground } from '@/hooks/useSeasonalBackground'
import { SocialLinks } from '@/components/Footer'

const BACKGROUND_VARIANTS = [
  { key: null, label: 'Original' },
  { key: 'morning', label: 'Morning' },
  { key: 'day', label: 'Day' },
  { key: 'evening', label: 'Evening' },
  { key: 'night', label: 'Night' },
] as const

export const Route = createFileRoute('/begin-the-journey')({
  component: BeginTheJourney,
})

function BeginTheJourney() {
  const navigate = useNavigate()
  const [isDeparting, setIsDeparting] = useState(false)
  const [backgroundPreview, setBackgroundPreview] = useState<string | null>(null)
  const departureTimer = useRef<number | null>(null)
  const seasonalBackground = useSeasonalBackground(backgroundPreview)

  useEffect(() => {
    return () => {
      if (departureTimer.current !== null) {
        window.clearTimeout(departureTimer.current)
      }
    }
  }, [])

  const handleStepInside = () => {
    if (isDeparting) return

    setIsDeparting(true)

    departureTimer.current = window.setTimeout(() => {
      navigate({
        to: '/explore',
        viewTransition: true,
      })
    }, 1800)
  }

  return (
    <div
      className={`btj-container seasonal-background ${isDeparting ? 'is-departing' : ''}`}
      style={{
        backgroundImage: backgroundPreview ? seasonalBackground : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1.5s ease, background-color 1.5s ease',
      }}
    >
      <Link to="/seasonal-house" className="return-link return-link--immersive">
        &larr; The Seasonal House
      </Link>
      <div className="btj-orb-stage" aria-hidden="true">
        <div className="orb neutral" />
        <div className="orb dramatic" />
      </div>
      <div className="btj-text">
        <p className="tagline-primary">
          Designed by Sara @ KUK, shaped for clarity, rhythm, and quiet delight.
        </p>
        <p className="tagline-secondary">
          Every season begins with a single step into the light.
        </p>
        <SocialLinks className="social-row" />
        <p className="btj-footer-line">
          Crafted with restraint &amp; intention · {new Date().getFullYear()}
        </p>
        <button
          type="button"
          className="btj-button cta-button"
          onClick={handleStepInside}
          disabled={isDeparting}
        >
          Step Inside
        </button>
      </div>

      {import.meta.env.DEV ? (
        <div className="btj-background-preview" aria-label="Background preview controls">
          <span className="btj-background-preview-label">Preview</span>
          {BACKGROUND_VARIANTS.map((variant) => (
            <button
              key={variant.label}
              type="button"
              className={backgroundPreview === variant.key ? 'is-active' : ''}
              onClick={() => setBackgroundPreview(variant.key)}
            >
              {variant.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
