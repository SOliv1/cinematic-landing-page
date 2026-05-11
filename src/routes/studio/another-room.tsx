import { createFileRoute, Link } from '@tanstack/react-router'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/studio/another-room')({
  component: AnotherRoomPage,
})

function AnotherRoomPage() {
  return (
    <main className="anotherroom-layout">
      <Link to="/seasonal-house" className="return-link anotherroom-return">
        &larr; The Seasonal House
      </Link>

      <header className="anotherroom-header">
        <h1 className="anotherroom-title">Another Room</h1>
        <p className="anotherroom-subtitle">
          This room is still being arranged.
        </p>
      </header>

      <section className="anotherroom-card">
        <h2 className="anotherroom-card-title">A quiet interior in progress</h2>
        <p className="anotherroom-card-text">
          An interior in progress.
          Soft grey‑lavender, muted violet‑grey, and cool shadow keep the space alive while its purpose takes shape.
        </p>
      </section>

      <Footer />
    </main>
  )
}
