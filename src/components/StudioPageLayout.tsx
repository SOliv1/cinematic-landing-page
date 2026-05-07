import { type ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { useSeasonalBackground, useSeasonalBackgroundVariant } from '@/hooks/useSeasonalBackground'
import { StudioDropdown } from '@/components/StudioDropdown'

// ── Universal veil: soft dark overlay readable across all seasons ─────────────

const VEIL = 'linear-gradient(160deg, rgba(8,10,16,0.64) 0%, rgba(4,6,12,0.52) 100%)'
const INK        = 'rgba(220,228,240,0.90)'
const INK_MUTED  = 'rgba(220,228,240,0.50)'

interface StudioPageLayoutProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export function StudioPageLayout({ title, subtitle, children }: StudioPageLayoutProps) {
  const bg      = useSeasonalBackground()
  const _variant = useSeasonalBackgroundVariant()
  const contentRef = useRef<HTMLDivElement>(null)

  // Fade-in observer
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const elements = el.querySelectorAll<HTMLElement>('.fade-in')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Parallax background */}
      <div
        className="parallax-bg"
        style={{
          position: 'fixed',
          inset: 0,
          background: bg,
          zIndex: 0,
        }}
      />

      {/* Veil */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: VEIL,
          zIndex: 1,
        }}
      />

      {/* Grain */}
      <div className="pointer-events-none grain-layer" aria-hidden="true" />

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '56rem',
          margin: '0 auto',
          padding: '6rem 1.5rem',
        }}
      >
        {/* Nav bar */}
        <nav
          className="fade-in"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '5rem',
            position: 'relative',
            zIndex: 9999,
          }}
        >
          <Link
            to="/"
            className="return-link"
          >
            ← The Seasonal House
          </Link>
          <StudioDropdown />
        </nav>

        {/* Hero text */}
        <div className="fade-in" style={{ transitionDelay: '0.15s', marginBottom: '2rem' }}>
          <h1
            className="h1"
            style={{ color: INK, marginBottom: '1.5rem' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="body" style={{ color: INK_MUTED }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Divider */}
        <div
          className="fade-in"
          style={{
            transitionDelay: '0.25s',
            width: '100%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)',
            margin: '4rem 0',
          }}
        />

        {/* Body content */}
        <div>
          {children ?? (
            <p className="body" style={{ color: INK_MUTED }}>
              Content coming soon.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
