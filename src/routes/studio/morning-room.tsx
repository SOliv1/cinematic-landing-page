import { createFileRoute, Link } from '@tanstack/react-router'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/studio/morning-room')({
  component: MorningRoomPage,
})

function MorningRoomPage() {
  return (
    <main className="morningroom-layout">
      <Link to="/seasonal-house" className="return-link morningroom-return">
        &larr; The Seasonal House
      </Link>

      <header className="morningroom-header">
        <h1 className="morningroom-title">The Morning Room</h1>
        <p className="morningroom-subtitle">
          A gentle start, soft tones, warm light, and quiet intention.
        </p>
      </header>

      <section className="morningroom-card">
        <h2 className="morningroom-card-title">A lavender morning interior</h2>
        <p className="morningroom-card-text">
          This room opens with a soft lavender wash, warm orb tint, atmospheric
          violet, and a quiet indigo echo. It is shaped for first thoughts,
          gentle focus, and the small rituals that begin the day.
        </p>
      </section>

      <Footer />
    </main>
  )
}
