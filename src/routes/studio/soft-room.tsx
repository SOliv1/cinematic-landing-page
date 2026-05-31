import { createFileRoute, Link } from '@tanstack/react-router'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/studio/soft-room')({
  component: SoftRoomPage,
})

function SoftRoomPage() {
  return (
    <main className="softroom-layout">
      <Link to="/seasonal-house" className="return-link softroom-return">
        &larr; The Seasonal House
      </Link>

      <figure className="room-orb-arrival room-orb-arrival--cool">
        <img
          src="/images/orbs/todays-rooms-orb-cool.png"
          alt="Cool abstract orb for the Clarity Room"
          className="room-orb-arrival-image"
        />
      </figure>

      <header className="softroom-header">
        <h1 className="softroom-title">The Soft Room</h1>
        <p className="softroom-subtitle">
          A warm space for connection.
        </p>
      </header>

      <section className="softroom-card">
        <h2 className="softroom-card-title">A warm space for connection.
        </h2>
        <p className="softroom-card-text">
          An interior shaped for presence, softness, and gentle conversation.
          Soft gradients, cinematic glow, and a gentle interior atmosphere.
        </p>
      </section>

      <Footer />
    </main>
  )
}
