import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useCallback } from 'react'

export const Route = createFileRoute('/explore')({
  component: ExplorePage,
})

// ── Images ────────────────────────────────────────────────────────────────────

const carouselImages = [
  { src: '/images/reflections-door-of-wonder-banner.png', caption: 'Door of Wonder' },
  { src: '/images/reflectionsFeatures2.png',              caption: 'Feature II' },
  { src: '/images/reflectionsFeatures3.png',              caption: 'Feature III' },
  { src: '/images/reflectionsFeatures4.png',              caption: 'Feature IV' },
  { src: '/images/reflections-features5.png',             caption: 'Feature V' },
  { src: '/images/reflections-features6.png',             caption: 'Feature VI' },
  { src: '/images/reflectionsFeatures7.png',              caption: 'Feature VII' },
  { src: '/images/reflectionsFeatures8.png',              caption: 'Feature VIII' },
  { src: '/images/Reflections-photo-gallery.png',         caption: 'Photo Gallery' },
]

const SLIDE_DURATION = 15_000   // 15 s visible
const FADE_DURATION  = 1_200    // 1.2 s cross-fade (kept in sync with CSS)

// ── Carousel Component ────────────────────────────────────────────────────────

function ImageCarousel() {
  const [current, setCurrent]     = useState(0)
  const [next,    setNext]        = useState<number | null>(null)
  const [fading,  setFading]      = useState(false)

  const advance = useCallback((target?: number) => {
    const to = target ?? (current + 1) % carouselImages.length
    setNext(to)
    setFading(true)
    setTimeout(() => {
      setCurrent(to)
      setNext(null)
      setFading(false)
    }, FADE_DURATION)
  }, [current])

  // Auto-rotate every 20 s
  useEffect(() => {
    if (fading) return
    const id = setTimeout(() => advance(), SLIDE_DURATION)
    return () => clearTimeout(id)
  }, [current, fading, advance])

  const goTo = (i: number) => {
    if (i === current || fading) return
    advance(i)
  }

  return (
    <div className="carousel-root">
      {/* ── Slides ── */}
      {carouselImages.map((img, i) => {
        const isCurrent = i === current
        const isNext    = i === next
        if (!isCurrent && !isNext) return null
        return (
          <div
            key={img.src}
            className={`carousel-slide ${isCurrent && !fading ? 'slide-visible' : ''} ${isNext && fading ? 'slide-entering' : ''} ${isCurrent && fading ? 'slide-exiting' : ''}`}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="carousel-img"
            />
            {/* Cinematic vignette */}
            <div className="carousel-vignette" />
          </div>
        )
      })}

      {/* ── Caption ── */}
      <div className="carousel-caption">
        <span className="carousel-caption-index">
          {String(current + 1).padStart(2, '0')} / {String(carouselImages.length).padStart(2, '0')}
        </span>
        <span className="carousel-caption-text">
          {carouselImages[current].caption}
        </span>
      </div>

      {/* ── Progress bar ── */}
      <div className="carousel-progress-track">
        <div
          key={`${current}-progress`}
          className={`carousel-progress-fill ${fading ? 'progress-paused' : ''}`}
        />
      </div>

      {/* ── Dot navigation ── */}
      <div className="carousel-dots">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`carousel-dot ${i === current ? 'dot-active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Back link ── */}
      <Link to="/" className="carousel-back">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M13 7H1M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Return</span>
      </Link>

      {/* ── Collection title ── */}
      <div className="carousel-title">
        <span className="carousel-title-eyebrow">The Collection</span>
        <span className="carousel-title-name">Reflections</span>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

function ExplorePage() {
  return <ImageCarousel />
}
