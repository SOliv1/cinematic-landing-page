
import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState, type FC } from 'react'
import { getCurrentTimeOfDay, getHeroImagesForTimeOfDay, fallbackHeroImage } from './hero-images'

export const Hero: FC = () => {

  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [timeOfDay, setTimeOfDay] = useState(getCurrentTimeOfDay())
  const timeoutRef = useRef<number | null>(null)
  const FADE_DURATION = 1500 // ms
  const INTERVAL = 16000 // ms (16 seconds per image)

  // Update timeOfDay on mount and every 5 minutes
  useEffect(() => {
    const update = () => setTimeOfDay(getCurrentTimeOfDay())
    update()
    const interval = setInterval(update, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  let images = getHeroImagesForTimeOfDay(timeOfDay)
  // Fallback: if no images for this time, show all
  if (!images || images.length === 0) {
    if (typeof window !== 'undefined' && window.location && window.location.hostname === 'localhost') {
      // eslint-disable-next-line no-console
      console.warn(`No hero images for timeOfDay="${timeOfDay}"; falling back to all images.`)
    }
    images = getHeroImagesForTimeOfDay('day')
    if (!images || images.length === 0) images = [fallbackHeroImage]
  }
  const heroImage = images[index] ?? fallbackHeroImage

  // Advance carousel automatically
  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % images.length)
        setFade(true)
      }, FADE_DURATION)
    }, INTERVAL)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [index, images.length])

  // Map position to a CSS class
  function getPositionClass(position?: string) {
    switch (position) {
      case 'center 58%':
        return 'hero-image--center-58';
      case 'center 48%':
        return 'hero-image--center-48';
      case 'center':
      default:
        return 'hero-image--center';
    }
  }

  // Manual controls
  const goTo = (i: number) => {
    setFade(false)
    setTimeout(() => {
      setIndex(i)
      setFade(true)
    }, FADE_DURATION)
  }
  const prev = () => goTo((index - 1 + images.length) % images.length)
  const next = () => goTo((index + 1) % images.length)

  return (
    <section className="hero hero--carousel" aria-labelledby="seasonal-hero-title">
      {images.map((img, i) => (
        <img
          key={img.src}
          className={`hero-image${i === index && fade ? ' hero-image--fade-in' : ' hero-image--fade-out'} ${getPositionClass(img.position)}`}
          src={img.src}
          alt={img.alt}
          fetchPriority={i === index ? 'high' : undefined}
          loading={i === index ? 'eager' : 'lazy'}
          style={{ display: i === index || fade ? undefined : 'none' }}
          onError={(e) => {
            if (img.src !== fallbackHeroImage.src) {
              (e.currentTarget as HTMLImageElement).src = fallbackHeroImage.src
            }
          }}
        />
      ))}
      {/* Subtle manual controls */}
      <button className="hero-carousel-btn hero-carousel-btn--prev" aria-label="Previous image" onClick={prev} tabIndex={0} />
      <button className="hero-carousel-btn hero-carousel-btn--next" aria-label="Next image" onClick={next} tabIndex={0} />
      <div className="hero-carousel-indicators">
        {images.map((_, i) => (
          <button
            key={i}
            className={`hero-carousel-indicator${i === index ? ' active' : ''}`}
            aria-label={`Go to image ${i + 1}`}
            onClick={() => goTo(i)}
            tabIndex={0}
          />
        ))}
      </div>
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
