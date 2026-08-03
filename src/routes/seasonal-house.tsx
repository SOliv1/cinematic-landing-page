import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useSeasonalBackground, useSeasonalBackgroundVariant } from '@/hooks/useSeasonalBackground'
import type { SeasonalBackgroundVariant } from '@/utils/getSeasonalBackground'

export const Route = createFileRoute('/seasonal-house')({
  component: SeasonalHousePage,
})

// ── Veil ─────────────────────────────────────────────────────────────────────
// A soft gradient overlay that lets the background breathe through
// while keeping typography legible and the orb glow atmospheric.

interface Veil {
  overlay: string
  ink: string
  inkMuted: string
  cardBg: string
  cardBgHover: string
  cardBorder: string
  cardBgDim: string
  cardBorderDim: string
  cardShadow: string
}

function getVeil(variant: SeasonalBackgroundVariant): Veil {
  switch (variant) {
    case 'morning':
      return {
        overlay:      'linear-gradient(160deg, rgba(249,241,234,0.78) 0%, rgba(245,238,229,0.64) 100%)',
        ink:          '#1a1714',
        inkMuted:     'rgba(26,23,20,0.62)',
        cardBg:       'rgba(255,255,255,0.52)',
        cardBgHover:  'rgba(255,255,255,0.64)',
        cardBorder:   'rgba(255,255,255,0.70)',
        cardBgDim:    'rgba(255,255,255,0.28)',
        cardBorderDim:'rgba(255,255,255,0.36)',
        cardShadow:   '0 4px 24px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.80)',
      }
    case 'evening':
      return {
        overlay:      'linear-gradient(160deg, rgba(22,13,10,0.58) 0%, rgba(18,12,20,0.50) 100%)',
        ink:          'rgba(240,232,222,0.92)',
        inkMuted:     'rgba(240,232,222,0.58)',
        cardBg:       'rgba(255,255,255,0.10)',
        cardBgHover:  'rgba(255,255,255,0.16)',
        cardBorder:   'rgba(255,255,255,0.18)',
        cardBgDim:    'rgba(255,255,255,0.05)',
        cardBorderDim:'rgba(255,255,255,0.10)',
        cardShadow:   '0 4px 32px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.12)',
      }
    case 'night':
      return {
        overlay:      'linear-gradient(160deg, rgba(8,12,24,0.68) 0%, rgba(4,6,14,0.56) 100%)',
        ink:          'rgba(220,228,242,0.90)',
        inkMuted:     'rgba(220,228,242,0.52)',
        cardBg:       'rgba(255,255,255,0.08)',
        cardBgHover:  'rgba(255,255,255,0.13)',
        cardBorder:   'rgba(255,255,255,0.14)',
        cardBgDim:    'rgba(255,255,255,0.04)',
        cardBorderDim:'rgba(255,255,255,0.08)',
        cardShadow:   '0 4px 32px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.08)',
      }
    case 'day':
    default:
      return {
        overlay:      'linear-gradient(160deg, rgba(247,245,241,0.74) 0%, rgba(241,237,232,0.60) 100%)',
        ink:          '#1a1714',
        inkMuted:     'rgba(26,23,20,0.62)',
        cardBg:       'rgba(255,255,255,0.48)',
        cardBgHover:  'rgba(255,255,255,0.60)',
        cardBorder:   'rgba(255,255,255,0.64)',
        cardBgDim:    'rgba(255,255,255,0.24)',
        cardBorderDim:'rgba(255,255,255,0.32)',
        cardShadow:   '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.80)',
      }
  }
}

// ── Seasonal tint ───────────────────────────────────────────────────────────────
// Per-variant hover tint colours set as CSS variables on the page root.
// Cards read them via var(--seasonal-tint) etc.

function getSeasonalTint(variant: SeasonalBackgroundVariant): {
  hover: string
  hoverDim: string
  glow: string
} {
  switch (variant) {
    case 'morning':
      return {
        hover:    'rgba(255,210,160,0.22)',
        hoverDim: 'rgba(255,210,160,0.12)',
        glow:     'rgba(255,200,140,0.38)',
      }
    case 'evening':
      return {
        hover:    'rgba(255,150,70,0.18)',
        hoverDim: 'rgba(255,150,70,0.10)',
        glow:     'rgba(255,130,50,0.32)',
      }
    case 'night':
      return {
        hover:    'rgba(130,155,220,0.16)',
        hoverDim: 'rgba(130,155,220,0.09)',
        glow:     'rgba(130,155,220,0.28)',
      }
    case 'day':
    default:
      return {
        hover:    'rgba(240,225,190,0.22)',
        hoverDim: 'rgba(240,225,190,0.12)',
        glow:     'rgba(230,210,160,0.35)',
      }
  }
}

// ── Room data ─────────────────────────────────────────────────────────────────

interface Room {
  title: string
  description: string
  comingSoon?: boolean
  href?: string
  external?: boolean
  className?: string
}

const rooms: Room[] = [
  {
    title: 'Seasonal Weather',
    description: 'A calm space shaped by colour, and the light of day.',
    href: '/studio/seasonal-weather',
    className: 'seasonal-weather-gradient',
  },
  {
    title: 'The Morning Room',
    description: 'A gentle start, soft tones, warm light, and calm intention.',
    comingSoon: true,
    href: '/studio/morning-room',
    className: 'morning-room-gradient',
  },
  {
    title: 'The Evening Lounge',
    description: 'Where the day slows down and the atmosphere deepens.',
    comingSoon: true,
    href: '/studio/evening-lounge',
    className: 'evening-lounge-gradient',
  },
  {
    title: 'The Soft Room',
    description: 'An interior shaped for presence, softness, and connection.',
    comingSoon: true,
    href: '/studio/soft-room',
    className: 'soft-room-gradient',
  },
  {
    title: 'Vintage Notes ✦',
    description: 'Enter the live Boutique House Vintage Notes app.',
    href: 'https://boutique-house-vintage-note-production.up.railway.app/',
    external: true,
    className: 'another-room-gradient',
  },
  {
    title: 'Boutique House',
    description: 'Visit the live Boutique House atelier.',
    href: 'https://boutique-house-production-751b.up.railway.app/',
    external: true,
    className: 'boutique-house-gradient',
  },
  {
    title: 'Another Room',
    description: 'This room is still being arranged.',
    comingSoon: true,
    href: '/studio/another-room',
    className: 'another-room-gradient',
  },
]

// ── RoomCard ──────────────────────────────────────────────────────────────────

function RoomCard({ title, description, comingSoon, href, external, className, ink, inkMuted }: Room & Pick<Veil, 'ink' | 'inkMuted'>) {
  const cardClassName = ['seasonal-card', className, comingSoon ? 'coming-soon' : '', 'relative group']
    .filter(Boolean)
    .join(' ')

  if (comingSoon || href) {
    const cardContent = (
      <>
        {/* Seasonal glow halo */}
        <div className="absolute inset-0 rounded-3xl blur-xl bg-[var(--seasonal-tint-dim)] opacity-0 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />
        {/* Card */}
        <div className="seasonal-card-content relative rounded-3xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 opacity-85 transition-all duration-300 hover:opacity-95 hover:bg-[var(--seasonal-tint-dim)] hover:shadow-[0_0_20px_var(--seasonal-tint)] flex flex-col justify-center min-h-[140px] shimmer">
          <h3 className="seasonal-card-title h3 mb-2" style={{ color: inkMuted }}>{title}</h3>
          <p className="seasonal-card-text body-sm" style={{ color: inkMuted }}>{description}</p>
          {comingSoon ? (
            <span className="seasonal-card-tag" style={{ color: inkMuted }}>
              Coming Soon
            </span>
          ) : null}
          {external ? (
            <span className="seasonal-card-tag seasonal-card-tag--live" style={{ color: inkMuted }}>
              Seasonal House Stays Open
            </span>
          ) : null}
        </div>
      </>
    )

    if (href) {
      return (
        <a
          href={href}
          className={cardClassName}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {cardContent}
        </a>
      )
    }

    return (
      <div className={cardClassName}>
        {cardContent}
      </div>
    )
  }

  return (
    <div className={cardClassName}>
      {/* Seasonal glow halo */}
      <div className="absolute inset-0 rounded-3xl blur-xl bg-[var(--seasonal-tint)] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
      {/* Orb glow */}
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,var(--seasonal-tint)_0%,transparent_70%)] opacity-40 blur-2xl pointer-events-none" />
      {/* Card */}
      <div className="seasonal-card-content relative rounded-3xl p-6 bg-white/10 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-[var(--seasonal-tint)] hover:shadow-[0_0_25px_var(--seasonal-tint-glow)] flex flex-col justify-center min-h-[140px] shimmer glint">
        <h3 className="seasonal-card-title h3 mb-2" style={{ color: ink }}>{title}</h3>
        <p className="seasonal-card-text body-sm" style={{ color: inkMuted }}>{description}</p>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

function SeasonalHousePage() {
  const bg      = useSeasonalBackground()
  const variant = useSeasonalBackgroundVariant()
  const veil    = getVeil(variant)
  const tint    = getSeasonalTint(variant)

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      '--seasonal-tint':     tint.hover,
      '--seasonal-tint-dim': tint.hoverDim,
      '--seasonal-tint-glow': tint.glow,
    } as React.CSSProperties}>

      {/* ── Background ── */}
      <div
        aria-hidden="true"
        className="parallax-bg"
        style={{
          position: 'fixed',
          inset: 0,
          background: bg,
          zIndex: 0,
        }}
      />

      {/* ── Soft veil ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background: veil.overlay,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '56rem',
          margin: '0 auto',
          padding: '6rem 1.5rem',
          color: veil.ink,
        }}
      >

        {/* ── Header bar ────────────────────────────────────────────────── */}
        <nav className="fade-in mb-32 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 hover:bg-white/10"
            style={{
              background: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.18)',
              color: veil.inkMuted,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1rem',
              fontWeight: 400,
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}
          >
            <span style={{ fontSize: '0.9rem', lineHeight: 1, opacity: 0.6 }}>←</span>
            The Seasonal House
          </Link>
        </nav>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative mb-32">
          {/* Atmospheric wash — warm, open, welcoming */}
          <div className="absolute inset-0 pointer-events-none opacity-40 blur-3xl bg-[radial-gradient(circle_at_50%_0%,var(--seasonal-tint),transparent_70%)]" />
          <div className="absolute inset-0 pointer-events-none opacity-20 blur-3xl bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
          <div className="relative">
            <h1 className="h1 fade-in mb-12">
              The Seasonal House
            </h1>
            <p className="body fade-in mb-8 max-w-xl" style={{ color: veil.inkMuted }}>
              A suite of interior atmospheres and emerging experiences, each shaped by clarity, rhythm, and mood.
            </p>
          </div>
        </section>

        <div className="seasonal-house-prelude fade-in" aria-hidden="true">
          <div className="seasonal-house-prelude-orbs">
            <figure className="seasonal-house-prelude-phase seasonal-house-prelude-phase--morning">
              <img
                className="seasonal-house-prelude-orb seasonal-house-prelude-orb--warm"
                src="/images/orbs/todays-rooms-orb.png"
                alt=""
              />
              <figcaption>Morning</figcaption>
            </figure>
            <figure className="seasonal-house-prelude-phase seasonal-house-prelude-phase--cool">
              <img
                className="seasonal-house-prelude-orb seasonal-house-prelude-orb--cool"
                src="/images/orbs/todays-rooms-orb-cool.png"
                alt=""
              />
              <figcaption>Cool</figcaption>
            </figure>
            <figure className="seasonal-house-prelude-phase seasonal-house-prelude-phase--evening">
              <img
                className="seasonal-house-prelude-orb seasonal-house-prelude-orb--violet"
                src="/images/orbs/todays-rooms-orb-violet.png"
                alt=""
              />
              <figcaption>Evening</figcaption>
            </figure>
            <figure className="seasonal-house-prelude-phase seasonal-house-prelude-phase--night">
              <img
                className="seasonal-house-prelude-orb seasonal-house-prelude-orb--night"
                src="/images/orbs/todays-rooms-orb-night.png"
                alt=""
              />
              <figcaption>Continuum</figcaption>
            </figure>
          </div>
          <div className="seasonal-house-prelude-divider" />
        </div>

        {/* ── Rooms ────────────────────────────────────────────────── */}
        <section className="relative mb-32 fade-in">
          {/* Atmospheric wash — recessed, lateral, like a different wing */}
          <div className="absolute inset-0 pointer-events-none opacity-30 blur-3xl bg-[radial-gradient(circle_at_70%_100%,var(--seasonal-tint-dim),transparent_70%)]" />
          <div className="absolute inset-0 pointer-events-none opacity-15 blur-3xl bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative">
            <h2 className="h2 mb-12" style={{ color: veil.inkMuted }}>Today's Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {rooms.map((room, i) => (
                <div key={room.title} className="fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <RoomCard {...room} ink={veil.ink} inkMuted={veil.inkMuted} />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── Grain ── */}
      <div className="pointer-events-none grain-layer" aria-hidden="true" />
    </div>
  )
}
