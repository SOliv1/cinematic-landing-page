import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ReflectionsSplash, useSplashTrigger, useSplashShow } from '@/components/ReflectionsSplash'
import { Hero } from '@/components/Hero'
import OrbNeutral from '/images/orbs/orb-neutral.png'
import OrbWarmDawn from '/images/orbs/orb-warm-dawn.png'
import OrbMidnightGlow from '/images/orbs/orb-midnight-glow.png'
import OrbAutumnEmber from '/images/orbs/orb-autumn-ember.png'
import { useOrbState } from '@/hooks/useOrbState'
import { useSeasonalBackground, useSeasonalBackgroundVariant } from '@/hooks/useSeasonalBackground'
import type { SeasonalBackgroundVariant } from '@/utils/getSeasonalBackground'
export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Seasonal.Studio Atmospheric Web Design & Cinematic Web Apps' },
      {
        name: 'description',
        content: 'Independent UK studio creating atmospheric, cinematic web apps and slow-tech digital experiences. Calm, minimal, handcrafted interfaces built with React and Django.',
      },
      { property: 'og:title', content: 'Seasonal.Studio Atmospheric Web Design & Cinematic Web Apps' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:description',
        content: 'Independent UK studio creating atmospheric, cinematic web apps and slow-tech digital experiences. Calm, minimal, handcrafted interfaces built with React and Django.',
      },
      { property: 'og:image', content: '/images/carousel/seasonal-studio-cinematic-glow.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Seasonal.Studio Atmospheric Web Design & Cinematic Web Apps' },
      {
        name: 'twitter:description',
        content: 'Independent UK studio creating atmospheric, cinematic web apps and slow-tech digital experiences. Calm, minimal, handcrafted interfaces built with React and Django.',
      },
      { name: 'twitter:image', content: '/images/carousel/seasonal-studio-cinematic-glow.png' },
    ],
  }),
  component: LandingPage,
})

// ── Seasonal palette ──────────────────────────────────────────────────────────
type Season = 'spring' | 'summer' | 'autumn' | 'winter'

interface SeasonalPalette {
  blob1: string
  blob2: string
  blob3: string
  orbCenter: string
  orbEdge: string
  orbGlowA: string
  orbGlowB: string
  accent: string
  accentSoft: string
  ctaBg: string
  ctaHover: string
  ctaShadow: string
  panelTint: string
  cardAccent: string
  label: string
}

const palettes: Record<Season, SeasonalPalette> = {
  spring: {
    blob1: 'radial-gradient(ellipse 70% 60% at 15% 20%, rgba(220,195,215,0.55) 0%, transparent 70%)',
    blob2: 'radial-gradient(ellipse 65% 55% at 88% 75%, rgba(195,220,205,0.48) 0%, transparent 70%)',
    blob3: 'radial-gradient(ellipse 55% 50% at 55% 50%, rgba(235,220,230,0.30) 0%, transparent 65%)',
    orbCenter: '#f5f0f4',
    orbEdge: '#d4b8d0',
    orbGlowA: 'rgba(212,184,208,0.35)',
    orbGlowB: 'rgba(195,218,200,0.20)',
    accent: '#8a6b87',
    accentSoft: 'rgba(138,107,135,0.12)',
    ctaBg: 'linear-gradient(135deg, #9b7a98 0%, #8a6b87 100%)',
    ctaHover: 'linear-gradient(135deg, #b090ad 0%, #9b7a98 100%)',
    ctaShadow: 'rgba(138,107,135,0.35)',
    panelTint: 'rgba(245,240,243,0.18)',
    cardAccent: 'rgba(212,184,208,0.25)',
    label: 'Spring',
  },
  summer: {
    blob1: 'radial-gradient(ellipse 70% 60% at 18% 25%, rgba(220,205,185,0.52) 0%, transparent 70%)',
    blob2: 'radial-gradient(ellipse 65% 55% at 85% 70%, rgba(185,215,205,0.45) 0%, transparent 70%)',
    blob3: 'radial-gradient(ellipse 55% 50% at 50% 45%, rgba(228,218,205,0.28) 0%, transparent 65%)',
    orbCenter: '#f5f2ed',
    orbEdge: '#d4c4a8',
    orbGlowA: 'rgba(212,196,168,0.35)',
    orbGlowB: 'rgba(185,215,205,0.20)',
    accent: '#7a6850',
    accentSoft: 'rgba(122,104,80,0.12)',
    ctaBg: 'linear-gradient(135deg, #8f7d62 0%, #7a6850 100%)',
    ctaHover: 'linear-gradient(135deg, #a49278 0%, #8f7d62 100%)',
    ctaShadow: 'rgba(122,104,80,0.35)',
    panelTint: 'rgba(245,242,237,0.18)',
    cardAccent: 'rgba(212,196,168,0.25)',
    label: 'Summer',
  },
  autumn: {
    blob1: 'radial-gradient(ellipse 70% 60% at 12% 22%, rgba(215,190,165,0.55) 0%, transparent 70%)',
    blob2: 'radial-gradient(ellipse 65% 55% at 90% 72%, rgba(210,185,160,0.48) 0%, transparent 70%)',
    blob3: 'radial-gradient(ellipse 55% 50% at 50% 48%, rgba(228,210,190,0.30) 0%, transparent 65%)',
    orbCenter: '#f5f0eb',
    orbEdge: '#d4b898',
    orbGlowA: 'rgba(212,184,152,0.38)',
    orbGlowB: 'rgba(215,185,160,0.22)',
    accent: '#8a6040',
    accentSoft: 'rgba(138,96,64,0.12)',
    ctaBg: 'linear-gradient(135deg, #a0734f 0%, #8a6040 100%)',
    ctaHover: 'linear-gradient(135deg, #b88868 0%, #a0734f 100%)',
    ctaShadow: 'rgba(138,96,64,0.35)',
    panelTint: 'rgba(245,240,235,0.18)',
    cardAccent: 'rgba(212,184,152,0.25)',
    label: 'Autumn',
  },
  winter: {
    blob1: 'radial-gradient(ellipse 70% 60% at 16% 20%, rgba(190,198,228,0.52) 0%, transparent 70%)',
    blob2: 'radial-gradient(ellipse 65% 55% at 86% 76%, rgba(185,215,228,0.45) 0%, transparent 70%)',
    blob3: 'radial-gradient(ellipse 55% 50% at 52% 50%, rgba(210,215,235,0.28) 0%, transparent 65%)',
    orbCenter: '#f2f3f8',
    orbEdge: '#b8c2d8',
    orbGlowA: 'rgba(184,194,216,0.35)',
    orbGlowB: 'rgba(185,215,228,0.22)',
    accent: '#5a6888',
    accentSoft: 'rgba(90,104,136,0.12)',
    ctaBg: 'linear-gradient(135deg, #6e82a8 0%, #5a6888 100%)',
    ctaHover: 'linear-gradient(135deg, #8298be 0%, #6e82a8 100%)',
    ctaShadow: 'rgba(90,104,136,0.35)',
    panelTint: 'rgba(242,243,250,0.18)',
    cardAccent: 'rgba(184,194,216,0.25)',
    label: 'Winter',
  },
}

function getSeason(): Season {
  const m = new Date().getMonth()
  if (m >= 2 && m <= 4) return 'spring'
  if (m >= 5 && m <= 7) return 'summer'
  if (m >= 8 && m <= 10) return 'autumn'
  return 'winter'
}

function getDayCycleArtwork(date = new Date()) {
  const hour = date.getHours()

  if (hour >= 5 && hour < 11) return OrbWarmDawn
  if (hour >= 11 && hour < 17) return OrbNeutral
  if (hour >= 17 && hour < 21) return OrbAutumnEmber
  return OrbMidnightGlow
}

function getDayCycleLabel(date = new Date()) {
  const hour = date.getHours()

  if (hour >= 5 && hour < 11) return 'Morning'
  if (hour >= 11 && hour < 17) return 'Day'
  if (hour >= 17 && hour < 21) return 'Evening'
  return 'Night'
}

function getNextDayCycleBoundary(date = new Date()) {
  const hour = date.getHours()
  const nextHour =
    hour < 11 ? 11 :
    hour < 17 ? 17 :
    hour < 21 ? 21 :
    29

  const boundary = new Date(date)
  if (nextHour === 29) {
    boundary.setDate(boundary.getDate() + 1)
    boundary.setHours(5, 0, 0, 0)
  } else {
    boundary.setHours(nextHour, 0, 0, 0)
  }

  return boundary.getTime()
}

function getSurfaceVeilStyles(veilTone: SeasonalBackgroundVariant) {
  switch (veilTone) {
    case 'morning':
      return {
        hero: 'linear-gradient(180deg, rgba(249, 241, 234, 0.86) 0%, rgba(245, 238, 229, 0.74) 100%)',
        section: 'rgba(248, 242, 235, 0.78)',
        footer: 'rgba(243, 237, 230, 0.84)',
      }
    case 'evening':
      return {
        hero: 'linear-gradient(180deg, rgba(255, 232, 216, 0.30) 0%, rgba(104, 60, 36, 0.62) 34%, rgba(34, 24, 38, 0.56) 100%)',
        section: 'rgba(248, 237, 229, 0.68)',
        footer: 'rgba(243, 232, 221, 0.76)',
      }
    case 'night':
      return {
        hero: 'linear-gradient(180deg, rgba(12, 16, 30, 0.70) 0%, rgba(7, 10, 20, 0.56) 100%)',
        section: 'rgba(244, 239, 235, 0.68)',
        footer: 'rgba(235, 239, 246, 0.76)',
      }
    case 'day':
    default:
      return {
        hero: 'linear-gradient(180deg, rgba(247, 245, 241, 0.84) 0%, rgba(241, 237, 232, 0.72) 100%)',
        section: 'rgba(245, 243, 240, 0.76)',
        footer: 'rgba(239, 236, 230, 0.82)',
      }
  }
}

// ── Orb Component ─────────────────────────────────────────────────────────────

function SeasonalOrb({ src, palette }: { src: string; palette: SeasonalPalette }) {
  const orbState = useOrbState()
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  return (
    <div
      className={orbState.className}
      style={{
        position: 'relative',
        width: '84px',
        height: '84px',
        margin: '0 auto 36px',
        animation: 'orbPulse 4.5s ease-in-out infinite',
        ['--orb-glow-a' as string]: palette.orbGlowA,
        ['--orb-glow-b' as string]: palette.orbGlowB,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer glow ring */}
      <div
        style={{
          position: 'absolute',
          inset: '-20px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.orbGlowA} 0%, ${palette.orbGlowB} 45%, transparent 70%)`,
          animation: 'orbGlow 4.5s ease-in-out infinite',
          transition: 'opacity 0.48s ease',
          opacity: hovered ? 1.6 : 1,
          ['--orb-glow-a' as string]: palette.orbGlowA,
          ['--orb-glow-b' as string]: palette.orbGlowB,
        }}
      />
      {/* Inner orb body */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        style={{
          position: 'relative',
          width: '84px',
          height: '84px',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'center',
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.9),
            inset 0 -2px 8px rgba(0,0,0,0.06),
            0 2px 8px rgba(0,0,0,0.06),
            0 0 0 1px rgba(255,255,255,0.6)
          `,
          transition: 'filter 0.48s ease',
          filter: hovered ? 'brightness(1.08) saturate(1.1)' : 'none',
        }}
      />
      <span className="orb-tint" aria-hidden="true" />
      <span className="orb-sparkles" aria-hidden="true" />

      <picture className="orb-logo">
        <img
          src="/images/logo/r-logo-pearl-512.png"
          alt="Seasonal sunrise-gold orb logo"
          className="r-logo"
        />
      </picture>
    </div>
  )
}

// ── CTA Button ────────────────────────────────────────────────────────────────
// Reads seasonal CSS vars (--cta-bg, --cta-hover, --cta-shadow) set on the page

function CtaButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to="/begin-the-journey"
      aria-label="Begin the journey"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        padding: '14px 32px',
        borderRadius: '100px',
        background: hovered ? 'var(--cta-hover)' : 'var(--cta-bg)',
        color: 'rgba(255,255,255,0.95)',
        fontFamily: "'Outfit', sans-serif",
        fontSize: '0.72rem',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        boxShadow: hovered
          ? `0 8px 32px var(--cta-shadow), 0 0 0 1px rgba(255,255,255,0.12)`
          : `0 4px 20px var(--cta-shadow), 0 0 0 1px rgba(255,255,255,0.06)`,
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'background 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease',
      }}
    >
      Begin the Journey →
    </Link>
  )
}

// ── Scroll Indicator ──────────────────────────────────────────────────────────

function ScrollIndicator({ accent }: { accent: string }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'fadeIn 1.8s ease 1.4s both',
      }}
    >
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.68rem',
          fontWeight: 400,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: `color-mix(in srgb, ${accent} 60%, transparent)`,
        }}
      >
        Scroll
      </span>
      <div
        style={{
          width: '1px',
          height: '32px',
          background: `linear-gradient(to bottom, ${accent}60, transparent)`,
          animation: 'scrollIndicator 2.2s ease-in-out infinite',
        }}
      />
    </div>
  )
}

// ── Feature Cards ─────────────────────────────────────────────────────────────

interface Feature {
  index: string
  title: string
  subtitle: string
  body: string
}

const features: Feature[] = [
  {
    index: '01',
    title: 'Seasonal Awareness',
    subtitle: 'Interfaces that evolve with light, time, and season.',
    body: 'Keeping your space aligned with the world outside.',
  },
  {
    index: '02',
    title: 'Composed Performance',
    subtitle: 'Motion and detail stay out of the way.',
    body: 'Tuned into focus. No distractions.',
  },
  {
    index: '03',
    title: 'Modular Clarity',
    subtitle: 'Each feature stands on its own, yet belongs to the same calm structure. ',
    body: 'Simple to expand, effortless to navigate.',
  },
  {
    index: '04',
    title: 'Living Atmosphere',
    subtitle: 'A background that changes with the hour and stays easy to preview.',
    body: 'The page can move through morning, day, evening, and night without losing its calm centre. A small preview control helps you test each mood while you refine the composition.',
  },
]

function FeatureCard({
  feature,
  palette,
  delay,
  tall,
}: {
  feature: Feature
  palette: SeasonalPalette
  delay: string
  tall?: boolean
}) {
  return (
    <div
      className={`glass-card principles-card ${tall ? 'principles-card--tall' : ''}`}
      style={{
        padding: tall ? '48px 40px' : '36px 36px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: tall ? 'space-between' : 'flex-start',
        animation: `fadeUp 1s cubic-bezier(0.16,1,0.3,1) ${delay} both`,
        borderTop: `2px solid ${palette.cardAccent}`,
        minHeight: tall ? '320px' : undefined,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.78rem',
            fontWeight: 400,
            letterSpacing: '0.22em',
            color: palette.accent,
            opacity: 0.7,
            marginBottom: '20px',
            textTransform: 'uppercase',
          }}
        >
          {feature.index}
        </div>
        <h3
          className="font-display"
          style={{
            fontSize: tall ? '1.85rem' : '1.45rem',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: '#1a1714',
            marginBottom: '18px',
          }}
        >
          {feature.title}
        </h3>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.94rem',
            fontWeight: 300,
            lineHeight: 1.65,
            color: 'rgba(26,23,20,0.68)',
            marginBottom: '16px',
            maxWidth: '320px',
          }}
        >
          {feature.subtitle}
        </p>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.92rem',
            fontWeight: 300,
            lineHeight: 1.75,
            color: 'rgba(26,23,20,0.58)',
            maxWidth: '320px',
          }}
        >
          {feature.body}
        </p>
      </div>

    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

function LandingPage() {
  const season = getSeason()
  const palette = palettes[season]
  const [orbArtwork, setOrbArtwork] = useState(() => getDayCycleArtwork())
  const [dayCycleLabel, setDayCycleLabel] = useState(() => getDayCycleLabel())
  const seasonalBackground = useSeasonalBackground()
  const veilTone = useSeasonalBackgroundVariant()
  const surfaceVeil = getSurfaceVeilStyles(veilTone)

  // ── Splash logic ──────────────────────────────────────────
  const { reason: autoReason, dismiss: dismissAuto } = useSplashTrigger()
  const { reason: manualReason, show: showSplash, dismiss: dismissManual } = useSplashShow()
  const activeSplashReason = manualReason ?? autoReason
  const dismissSplash = manualReason ? dismissManual : dismissAuto

  useEffect(() => {
    setOrbArtwork(getDayCycleArtwork())
    setDayCycleLabel(getDayCycleLabel())

    const updateAtBoundary = window.setTimeout(() => {
      setOrbArtwork(getDayCycleArtwork())
      setDayCycleLabel(getDayCycleLabel())
    }, Math.max(0, getNextDayCycleBoundary() - Date.now()))

    return () => {
      window.clearTimeout(updateAtBoundary)
    }
  }, [])

  const cssVars = {
    ['--accent' as string]: palette.accent,
    ['--orb-glow-a' as string]: palette.orbGlowA,
    ['--orb-glow-b' as string]: palette.orbGlowB,
    ['--cta-bg' as string]: palette.ctaBg,
    ['--cta-hover' as string]: palette.ctaHover,
    ['--cta-shadow' as string]: palette.ctaShadow,
    ['--studio-item-hover' as string]: palette.accentSoft,
  }

  return (
    <>
    {/* ── Reflections splash — shown only when earned ─── */}
    {activeSplashReason && (
      <ReflectionsSplash reason={activeSplashReason} onComplete={dismissSplash} />
    )}

    <div
      className="seasonal-background"
      style={{
        minHeight: '100vh',
        backgroundImage: seasonalBackground,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1.5s ease, background-color 1.5s ease',
        ...cssVars,
      }}
    >
      {/* ── HERO IMAGE SECTION ──────────────────────────────── */}
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
        {/* OrbLogo sits inside the central hero artwork. */}
        <div className="hero-orb-anchor">
          <SeasonalOrb src={orbArtwork} palette={palette} />
        </div>
        <Hero onCinematicMode={() => showSplash('cinematic-mode')} />
      </div>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section
        className="principles-section"
        style={{
          position: 'relative',
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)',
          background: surfaceVeil.section,
          backdropFilter: 'blur(8px) saturate(1.02)',
          WebkitBackdropFilter: 'blur(8px) saturate(1.02)',
          overflow: 'hidden',
        }}
      >
        {/* Subtle background continuation */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: palette.blob2,
            opacity: 0.4,
          }}
        />

        <div className="principles-inner" style={{ position: 'relative', zIndex: 2, maxWidth: '1080px', margin: '0 auto' }}>
          {/* Section header */}

          <div
            style={{
              marginBottom: '64px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: palette.accent,
                  opacity: 0.7,
                  marginBottom: '14px',
                }}
              >
                The philosophy
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  color: '#1a1714',
                  maxWidth: '420px',
                }}
              >
                A space for reflection,<br />
                self-awareness, and mindful moments.
              </h2>
            </div>
            <div
              style={{
                width: '80px',
                height: '1px',
                background: `linear-gradient(to right, ${palette.accent}60, transparent)`,
                flexShrink: 0,
                marginBottom: '8px',
              }}
            />
          </div>

          {/* Micro-transition */}
          <p
            className="principles-transition"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.02rem, 2.4vw, 1.18rem)',
              fontWeight: 500,
              fontStyle: 'italic',
              lineHeight: 1.45,
              letterSpacing: '0.025em',
              color: palette.accent,
              opacity: 0.78,
              maxWidth: '38rem',
              marginBottom: '48px',
              marginTop: '-24px',
            }}
          >
            Designed for journaling, mood check-ins, and digital wellbeing where emotional aesthetics and seasonal awareness shape every interaction.
          </p>

          {/* Asymmetric grid: tall left + 2 stacked right */}
          <div
            className="principles-grid-shell"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gridTemplateRows: 'auto',
              gap: '20px',
            }}
          >
            {/* On larger screens: left card tall, right 2 stacked */}
            <div
              className="feature-grid principles-grid"
              style={{
                display: 'grid',
                gap: '20px',
                gridColumn: '1 / -1',
                position: 'relative',
              }}
            >
              {features.map((f, i) => (
                <FeatureCard
                  key={f.index}
                  feature={f}
                  palette={palette}
                  delay={`${0.85 + i * 0.15}s`}
                  tall={i === 0}
                />
              ))}
              <div
                className="glass-card living-quote-card"
                style={{ animation: `fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.45s both` }}
              >
                &ldquo;Light changes everything, and a digital space should breathe with it.&rdquo;
              </div>
              {/* Neutral orb — floats at the crossroads between the four cards */}
              <div className="feature-grid-neutral-orb">
                Where the light begins.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)',
          background: `linear-gradient(170deg, ${surfaceVeil.section} 0%, color-mix(in srgb, ${palette.orbEdge} 12%, ${surfaceVeil.section}) 100%)`,
          backdropFilter: 'blur(8px) saturate(1.02)',
          WebkitBackdropFilter: 'blur(8px) saturate(1.02)',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: palette.blob1,
            opacity: 0.35,
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
          <div
            className="prose-divider"
            style={{ marginBottom: '48px' }}
          />
          <blockquote
            className="font-display"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.4,
              letterSpacing: '-0.01em',
              color: '#1a1714',
              marginBottom: '32px',
              quotes: 'none',
            }}
          >
            "Good design is like a clear sky, you notice the world, not the weather."
          </blockquote>
          <cite
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: palette.accent,
              opacity: 0.65,
              fontStyle: 'normal',
            }}
          >
            On craft &amp; restraint
          </cite>
          <div
            className="prose-divider"
            style={{ marginTop: '48px' }}
          />
        </div>
      </section>

      {/* ── CALL TO ACTION ────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(100px, 12vw, 180px) clamp(24px, 6vw, 80px)',
          background: `
            radial-gradient(ellipse 80% 70% at 50% 50%, color-mix(in srgb, ${palette.orbEdge} 22%, transparent) 0%, transparent 70%),
            linear-gradient(180deg, color-mix(in srgb, ${palette.orbEdge} 12%, ${surfaceVeil.footer}) 0%, ${surfaceVeil.footer} 60%, color-mix(in srgb, ${palette.accent} 8%, ${surfaceVeil.footer}) 100%)
          `,
          backdropFilter: 'blur(8px) saturate(1.02)',
          WebkitBackdropFilter: 'blur(8px) saturate(1.02)',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Soft atmospheric blob */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: palette.blob3,
            opacity: 0.6,
            animation: 'slowDrift 24s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
        {/* Grain overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.028'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '560px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            className="prose-divider"
            style={{ marginBottom: '40px' }}
          />

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4.2vw, 3rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.2,
              letterSpacing: '-0.015em',
              color: '#1a1714',
              marginBottom: '20px',
            }}
          >
            Ready to explore?
          </h2>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.94rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(26,23,20,0.58)',
              textAlign: 'center',
              maxWidth: '400px',
              marginBottom: '36px',
            }}
          >
            Explore the rooms of Seasonal, a set of calm, clear, unhurried spaces.
          </p>
          <Link to="/seasonal-house" className="seasonal-pill step-inside">
            <span>Step inside</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a
            className="daily-orb-home-link"
            href="https://soliv1.github.io/Daily-Reflections-App/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Daily Orb: Reflections</span>
            <small>Open the companion app, then save it to your phone or desktop</small>
          </a>

          <p
            style={{
              marginTop: '32px',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.78rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: `color-mix(in srgb, ${palette.accent} 70%, transparent)`,
              opacity: 0.75,
            }}
          >
            No noise. Just clarity.
          </p>
        </div>
      </section>

    </div>
    </>
  )
}
