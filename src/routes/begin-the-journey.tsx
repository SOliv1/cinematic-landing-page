import { createFileRoute, Link } from '@tanstack/react-router'
import '../BeginTheJourney.css'

export const Route = createFileRoute('/begin-the-journey')({
  component: BeginTheJourney,
})

function BeginTheJourney() {
  return (
    <div className="btj-container">
      <Link to="/" className="btj-back">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M13 7H1M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Return</span>
      </Link>
      <div className="btj-orb" />
      <div className="btj-text">
        <p className="btj-line">
          Every season begins with a single step into the light.
        </p>
        <Link to="/explore" className="btj-button" viewTransition>
          Step Inside
        </Link>
      </div>
    </div>
  )
}
