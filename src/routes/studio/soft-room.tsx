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

      <header className="softroom-header">
        <h1 className="softroom-title">The Soft Room</h1>
        <p className="softroom-subtitle">
          A warm space for connection. A quiet interior shaped for presence and
          gentle conversation.
        </p>
      </header>

      <section className="softroom-card">
        <h2 className="softroom-card-title">A warm space for connection</h2>
        <p className="softroom-card-text">
          This room holds the former Depth Levels aesthetic. Soft gradients,
          cinematic glow, and a gentle interior atmosphere.
        </p>
      </section>

      <Footer />
    </main>
  )
}
