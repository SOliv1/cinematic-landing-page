import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useCallback, useRef } from 'react'
import { images } from '@/data/BackgroundCarousel'

export const Route = createFileRoute('/explore')({
  component: ExplorePage,
})

// ── Images ────────────────────────────────────────────────────────────────────

const carouselImages = images.map((filename) => ({
  src: `/images/${filename}`,
  caption: filename
    .replace(/^reflections-/, '')
    .replace(/\.png$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()),
}))

const SLIDE_DURATION = 15_000   // 15 s visible
const FADE_DURATION  = 1_200    // 1.2 s cross-fade (kept in sync with CSS)
const INTRO_DURATION = 2_800    // room settles before controls appear

// ── Carousel Component ────────────────────────────────────────────────────────

function ImageCarousel() {
  const [current, setCurrent]     = useState(0)
  const [next,    setNext]        = useState<number | null>(null)
  const [fading,  setFading]      = useState(false)
  const [isSettled, setIsSettled]  = useState(false)
  const fadeTimer = useRef<number | null>(null)

  const advance = useCallback((target?: number) => {
    const to = target ?? (current + 1) % carouselImages.length
    setNext(to)
    setFading(true)
    if (fadeTimer.current !== null) {
      window.clearTimeout(fadeTimer.current)
    }
    fadeTimer.current = window.setTimeout(() => {
      setCurrent(to)
      setNext(null)
      setFading(false)
    }, FADE_DURATION)
  }, [current])

  useEffect(() => {
    const settleTimer = window.setTimeout(() => {
      setIsSettled(true)
    }, INTRO_DURATION)

    return () => {
      window.clearTimeout(settleTimer)
      if (fadeTimer.current !== null) {
        window.clearTimeout(fadeTimer.current)
      }
    }
  }, [])

  // Auto-rotate only after the page has fully settled
  useEffect(() => {
    if (fading || !isSettled) return
    const id = setTimeout(() => advance(), SLIDE_DURATION)
    return () => clearTimeout(id)
  }, [current, fading, isSettled, advance])

  const goTo = (i: number) => {
    if (i === current || fading) return
    advance(i)
  }

  const goPrevious = () => {
    if (fading) return
    advance((current - 1 + carouselImages.length) % carouselImages.length)
  }

  const goNext = () => {
    if (fading) return
    advance()
  }

  return (
    <div className={`carousel-root ${isSettled ? 'carousel-is-settled' : 'carousel-is-entering'}`}>
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
              className={`carousel-img ${isCurrent && !fading ? 'carousel-img-current' : ''}`}
            />
            {/* Cinematic vignette */}
            <div className="carousel-vignette" />
            {/* Redact email address baked into features6 screenshot */}
            {i === 6 && (
              <div
                style={{
                  position: 'absolute',
                  left: '21%',
                  top: '79%',
                  width: '67%',
                  height: '7%',
                  borderRadius: '9999px',
                  backdropFilter: 'blur(18px) saturate(1.1)',
                  WebkitBackdropFilter: 'blur(18px) saturate(1.1)',
                  background: 'rgba(220, 215, 208, 0.22)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.10)',
                }}
              />
            )}
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
          style={{ animationDelay: isSettled ? '0ms' : `${INTRO_DURATION}ms` }}
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

      {/* ── Manual controls ── */}
      <button
        type="button"
        className="carousel-nav-button carousel-nav-button--prev"
        onClick={goPrevious}
        disabled={fading}
        aria-label="Previous carousel image"
      >
        <span aria-hidden="true">&larr;</span>
        <span>Previous</span>
      </button>
      <button
        type="button"
        className="carousel-nav-button carousel-nav-button--next"
        onClick={goNext}
        disabled={fading}
        aria-label="Next carousel image"
      >
        <span>Next</span>
        <span aria-hidden="true">&rarr;</span>
      </button>

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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  return (
    <>
      <Link to="/" className="return-link return-link--immersive">
        &larr; The Seasonal House
      </Link>
      <ImageCarousel />
    </>
  )
}
