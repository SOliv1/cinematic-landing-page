import { createFileRoute, Link } from '@tanstack/react-router'
import Footer from '@/components/Footer'

const atmospheres = [
  {
    name: 'Seasonal Weather',
    className: 'seasonalweather-swatch seasonalweather-swatch--weather',
  },
  {
    name: 'Morning Room',
    className: 'seasonalweather-swatch seasonalweather-swatch--morning',
  },
  {
    name: 'Evening Lounge',
    className: 'seasonalweather-swatch seasonalweather-swatch--evening',
  },
  {
    name: 'Soft Room',
    className: 'seasonalweather-swatch seasonalweather-swatch--soft',
  },
  {
    name: 'Another Room',
    className: 'seasonalweather-swatch seasonalweather-swatch--another',
  },
]

export const Route = createFileRoute('/studio/seasonal-weather')({
  component: SeasonalWeatherPage,
})

function SeasonalWeatherPage() {
  return (
    <main className="seasonalweather-layout">
      <Link to="/seasonal-house" className="return-link seasonalweather-return">
        &larr; The Seasonal House
      </Link>

      <figure className="room-orb-arrival room-orb-arrival--studio">
        <img
          src="/images/carousel/seasonalStudio-orb.png"
          alt="Seasonal.Studio atmospheric orb brand image"
          className="room-orb-arrival-image room-orb-arrival-image--wide"
        />
      </figure>

      <header className="seasonalweather-header">
        <h1 className="seasonalweather-title">Seasonal Weather</h1>
        <p className="seasonalweather-subtitle">
          A calm space shaped by light, colour, and the rhythm of the day.
        </p>
      </header>

      <section className="seasonalweather-card">
        <h2 className="seasonalweather-card-title">A sky-lit weather wash</h2>
        <p className="seasonalweather-card-text">
          This room holds the house in a gentle balance.
          Morning blue, soft daylight, cool haze,
          and an indigo echo create an interior where each room keeps its own emotional temperature.
        </p>
      </section>

      <section className="seasonalweather-spectrum" aria-label="Seasonal room atmospheres">
        {atmospheres.map((atmosphere) => (
          <div className={atmosphere.className} key={atmosphere.name}>
            <span>{atmosphere.name}</span>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  )
}
