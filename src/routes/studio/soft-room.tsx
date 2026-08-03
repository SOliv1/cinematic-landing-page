import { createFileRoute, Link } from '@tanstack/react-router'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/studio/soft-room')({
  component: SoftRoomPage,
})

function SoftRoomPage() {
  return (
    <main className="softroom-layout continuum-bg">
      <Link to="/seasonal-house" className="return-link seasonal-house-invitation softroom-return">
        <span aria-hidden="true">&larr;</span>
        <span>The Seasonal House</span>
      </Link>

      <figure className="room-orb-arrival room-orb-arrival--continuum continuum-orb-glow">
        <img
          src="/images/orbs/todays-rooms-orb-night.png"
          alt="Deep violet abstract orb for the Continuum room"
          className="room-orb-arrival-image continuum-orb"
        />
      </figure>

      <header className="softroom-header">
        <h1 className="softroom-title">Continuum</h1>
        <p className="softroom-subtitle">
          Ink violet, spectral lavender, and ultraviolet glow.
        </p>
      </header>

      <section className="softroom-card continuum-panel">
        <h2 className="softroom-card-title">A deeper interior atmosphere.
        </h2>
        <p className="softroom-card-text">
          A room shaped as a continuum: quiet shadow, lavender edge light,
          and a cinematic ultraviolet glow that holds the whole space together.
        </p>
      </section>

      <Footer />
    </main>
  )
}
