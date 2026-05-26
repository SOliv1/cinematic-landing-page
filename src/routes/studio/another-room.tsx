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

      <section className="anotherroom-card anotherroom-comingsoon">
        <h2 className="anotherroom-card-title">Coming Soon: Moods Board</h2>
        <p className="anotherroom-card-text">
          Moods Board will be a personal, visual space for capturing and reflecting on your moods—aligned with the ethos of mindful, seasonal living. Curate your emotional landscape, track patterns, and create a board that feels uniquely yours. Stay tuned for updates!
        </p>
      </section>

      <Footer />
    </main>
  )
}
