import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import '../BeginTheJourney.css'

export const Route = createFileRoute('/begin-the-journey')({
  component: BeginTheJourney,
})

function BeginTheJourney() {
  const navigate = useNavigate()
  const [isDeparting, setIsDeparting] = useState(false)
  const departureTimer = useRef<number | null>(null)

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
    <div className={`btj-container ${isDeparting ? 'is-departing' : ''}`}>
      <Link to="/" className="btj-back">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M13 7H1M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Return</span>
      </Link>
      <div className="btj-orb-stage" aria-hidden="true">
        <div className="orb neutral" />
        <div className="orb dramatic" />
      </div>
      <div className="btj-text">
        <p className="btj-line">
          Every season begins with a single step into the light.
        </p>
        <button
          type="button"
          className="btj-button"
          onClick={handleStepInside}
          disabled={isDeparting}
        >
          Step Inside
        </button>
      </div>
    </div>
  )
}
