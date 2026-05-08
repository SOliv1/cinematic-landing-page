import { createFileRoute, Link } from '@tanstack/react-router'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/studio/evening-lounge')({
  component: EveningLoungePage,
})

function EveningLoungePage() {
  return (
    <main className="eveninglounge-layout">
      <Link to="/seasonal-house" className="return-link eveninglounge-return">
        &larr; The Seasonal House
      </Link>

      <header className="eveninglounge-header">
        <h1 className="eveninglounge-title">The Evening Lounge</h1>
        <p className="eveninglounge-subtitle">
          Where the day slows down and the atmosphere deepens.
        </p>
      </header>

      <section className="eveninglounge-card">
        <h2 className="eveninglounge-card-title">The moment the day exhales</h2>
        <p className="eveninglounge-card-text">
          This room settles into plum violet, warm dusk rose, deep twilight
          indigo, and a near-night shadow. It is a slower interior for closing
          loops, soft focus, and letting the atmosphere deepen.
        </p>
      </section>

      <Footer />
    </main>
  )
}
