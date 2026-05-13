import { Link } from '@tanstack/react-router'
import { useState, type FC } from 'react'
import { fallbackHeroImage, getHeroImage } from './hero-images'

export const Hero: FC = () => {
  const [heroImage, setHeroImage] = useState(() => getHeroImage())

  return (
    <section className="hero" aria-labelledby="seasonal-hero-title">
      <img
        className="hero-image"
        src={heroImage.src}
        alt={heroImage.alt}
        style={{ objectPosition: heroImage.position ?? 'center' }}
        fetchPriority="high"
        onError={() => {
          if (heroImage.src !== fallbackHeroImage.src) {
            setHeroImage(fallbackHeroImage)
          }
        }}
      />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-content">
        <h1 className="hero-title" id="seasonal-hero-title">Seasonal The Living Interface</h1>
        <p className="hero-tagline">Web apps that breathe</p>
        <Link className="hero-button" to="/begin-the-journey">
          Follow the Light
        </Link>
      </div>
    </section>
  )
}
