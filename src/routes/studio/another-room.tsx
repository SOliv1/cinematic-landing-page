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
          This room holds a neutral, cinematic atmosphere while its purpose is
          still taking shape. Soft grey lavender, muted violet-grey, cool
          shadow, and quiet interior depth keep the space alive without pulling
          it toward morning or evening.
        </p>
      </section>

      <Footer />
    </main>
  )
}
