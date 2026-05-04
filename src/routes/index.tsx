import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import OrbLogo from '/images/logo/orb-silver-R.png'
import OrbNeutral from '/images/orbs/orb-neutral.png'
import OrbWarmDawn from '/images/orbs/orb-warm-dawn.png'
import OrbMidnightGlow from '/images/orbs/orb-midnight-glow.png'
import OrbAutumnEmber from '/images/orbs/orb-autumn-ember.png'
import { useSeasonalBackground, useSeasonalBackgroundVariant } from '@/hooks/useSeasonalBackground'
import type { SeasonalBackgroundVariant } from '@/utils/getSeasonalBackground'

export const Route = createFileRoute('/')({
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
  return (
    <div
      style={{
        position: 'relative',
        width: '84px',
        height: '84px',
        margin: '0 auto 36px',
        animation: 'orbPulse 4.5s ease-in-out infinite',
        ['--orb-glow-a' as string]: palette.orbGlowA,
        ['--orb-glow-b' as string]: palette.orbGlowB,
      }}
    >
      {/* Outer glow ring */}
      <div
        style={{
          position: 'absolute',
          inset: '-20px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.orbGlowA} 0%, ${palette.orbGlowB} 45%, transparent 70%)`,
          animation: 'orbGlow 4.5s ease-in-out infinite',
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
        }}
      />
    </div>
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
    subtitle: 'The interface is a space that can breathe and move with you.',
    body: ' It can be a place that feels alive, not just a static container for content. By reflecting the rhythms of the day and year, it can help you feel more connected to your work and the world around you.',
  },
  {
    index: '02',
    title: 'Quiet Performance',
    subtitle: 'Transitions unfold gently, never rushing, never demanding.',
    body: 'The interface stays quiet enough for you to hear your own thoughts.',
  },
  {
    index: '03',
    title: 'Modular Clarity',
    subtitle: 'Each app is its own quiet room',
    body: 'Shaped with clarity, connected in spirit, and free to grow without disturbing the calm of the whole.',
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
      className="glass-card"
      style={{
        padding: tall ? '48px 40px' : '36px 36px',
        gridRow: tall ? 'span 2' : undefined,
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
      {tall && (
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: palette.accentSoft,
            border: `1px solid ${palette.cardAccent}`,
            marginTop: '32px',
          }}
        />
      )}
    </div>
  )
}

// ── Social Orbs ───────────────────────────────────────────────────────────────

interface SocialPlanet {
  name: string
  href: string
  brandTint: string
  icon: JSX.Element
}

const socialPlanets: SocialPlanet[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    brandTint: 'rgba(24,119,242,0.26)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com',
    brandTint: 'rgba(230,0,35,0.20)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4 2.4 7.4 5.8 9-.1-.8-.1-2 .1-2.8l.8-3.3s-.2-.5-.2-1.3c0-1.2.7-2.1 1.6-2.1.8 0 1.2.6 1.2 1.3 0 .8-.5 2-.8 3.1-.2.9.5 1.7 1.4 1.7 1.6 0 2.7-1.7 2.7-4.1 0-2.1-1.5-3.6-3.7-3.6-2.5 0-4 1.9-4 3.9 0 .8.3 1.6.7 2l-.3 1.1c0 .2-.2.2-.4.2C5.8 14.2 5 12 5 9.7 5 6 7.7 3 12.3 3c3.8 0 6.7 2.7 6.7 6.3 0 3.7-2.3 6.7-5.5 6.7-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.9 2-1.3 2.7.9.3 1.9.5 3 .5C17.5 20 22 15.5 22 10S17.5 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    brandTint: 'rgba(10,102,194,0.26)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Tumblr',
    href: 'https://www.tumblr.com',
    brandTint: 'rgba(53,70,92,0.26)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 3v5H6v3h3v7c0 2.2 1.4 3 3 3h3v-3h-2c-.8 0-1-.4-1-1v-6h3V8h-3V3H9z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    brandTint: 'rgba(193,53,132,0.22)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com',
    brandTint: 'rgba(15,20,25,0.18)',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4l16 16M20 4L4 20"/>
      </svg>
    ),
  },
]

function SocialOrb({ planet, palette }: { planet: SocialPlanet; palette: SeasonalPalette }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={planet.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={planet.name}
      className="social-orb"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: `radial-gradient(circle at 38% 34%, ${palette.orbCenter}, ${palette.orbEdge})`,
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.48)'}`,
        boxShadow: hovered
          ? `0 0 0 1px rgba(255,255,255,0.4), 0 6px 24px ${planet.brandTint}, 0 0 32px ${planet.brandTint}, inset 0 1px 0 rgba(255,255,255,0.8)`
          : `0 0 10px 2px ${palette.orbGlowA}, 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.7)`,
        backdropFilter: 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
        color: hovered ? 'rgba(26,23,20,0.72)' : 'rgba(26,23,20,0.36)',
        transform: hovered ? 'translateY(-3px) scale(1.07)' : 'translateY(0) scale(1)',
        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease, color 0.4s ease, border-color 0.4s ease',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      {planet.icon}
    </a>
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
  }

  return (
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
      <div className="orb neutral"></div>
      <div className="orb dramatic"></div>


      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: surfaceVeil.hero,
          backdropFilter: 'blur(8px) saturate(1.02)',
          WebkitBackdropFilter: 'blur(8px) saturate(1.02)',
          padding: '40px 24px',
        }}
      >
        {/* Atmospheric background blobs */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: palette.blob1,
            animation: 'slowDrift 22s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: palette.blob2,
            animation: 'slowDriftAlt 28s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: palette.blob3,
          }}
        />

        {/* Grain overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Mood logo */}
        <div
          style={{
            position: 'absolute',
            top: '28px',
            left: '32px',
            zIndex: 10,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '66px',
            height: '66px',
            padding: '10px',
            borderRadius: '20px',
            background:
              'radial-gradient(circle at 35% 28%, rgba(255,255,255,0.10) 0%, rgba(26,23,20,0.30) 58%, rgba(26,23,20,0.42) 100%)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow:
              '0 10px 22px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px) saturate(130%)',
            WebkitBackdropFilter: 'blur(12px) saturate(130%)',
            animation: 'fadeIn 1.6s ease 1s both',
          }}
        >
          <img
            src={OrbLogo}
            alt="Seasonal Neutral Orb Logo"
            className="app-header-logo"
            style={{
              width: '46px',
              height: '46px',
              filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.22))',
            }}
          />
        </div>

        {/* Season badge */}
        <div
          style={{
            position: 'absolute',
            top: '28px',
            right: '32px',
            zIndex: 10,
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: palette.accent,
            opacity: 0.65,
            animation: 'fadeIn 1.6s ease 1s both',
          }}
        >
          {palette.label}
        </div>

        {/* Central panel */}
        <div
          className="glass-panel"
          style={{
            position: 'relative',
            zIndex: 5,
            maxWidth: '620px',
            width: '100%',
            padding: 'clamp(40px, 6vw, 72px) clamp(32px, 6vw, 80px)',
            textAlign: 'center',
            background: `rgba(255,255,255,0.46), ${palette.panelTint}`,
          }}
        >
          {/* Panel shimmer border */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '28px',
              border: '1px solid rgba(255,255,255,0.85)',
              animation: 'borderShimmer 5s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />

          <SeasonalOrb src={orbArtwork} palette={palette} />

          <div
            style={{
              marginTop: '-10px',
              marginBottom: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 14px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.42)',
              border: '1px solid rgba(255,255,255,0.72)',
              backdropFilter: 'blur(10px) saturate(140%)',
              WebkitBackdropFilter: 'blur(10px) saturate(140%)',
              boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: palette.accent,
              opacity: 0.85,
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: palette.accent }} />
            <span>{dayCycleLabel}</span>
          </div>

          <h1
            className="font-display animate-fade-up"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 300,
              fontStyle: 'normal',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: '#1a1714',
              marginBottom: '20px',
              animationDelay: '0.3s',
            }}
          >
            Web apps that breathe<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>with the seasons.</em>
          </h1>

          <p
            className="font-body animate-fade-up"
            style={{
              fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(26,23,20,0.52)',
              letterSpacing: '0.025em',
              marginBottom: '40px',
              animationDelay: '0.52s',
            }}
          >
            Designed for clarity, mood, and quiet delight.
          </p>

          <div
            className="animate-fade-up"
            style={{ animationDelay: '0.72s' }}
          >
            <Link to="/begin-the-journey" className="cta-btn">
              <span>Begin the journey</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.8 }}>
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        <ScrollIndicator accent={palette.accent} />
      </section>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section
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

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1080px', margin: '0 auto' }}>
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
                The principles that<br />
                <em style={{ fontStyle: 'italic' }}>refuse to be hurried.</em>
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
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.82rem',
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '0.06em',
              color: palette.accent,
              opacity: 0.55,
              marginBottom: '48px',
              marginTop: '-32px',
            }}
          >
            A quiet shift into the principles that shape the Seasonal house
          </p>

          {/* Asymmetric grid: tall left + 2 stacked right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gridTemplateRows: 'auto',
              gap: '20px',
            }}
          >
            {/* On larger screens: left card tall, right 2 stacked */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                gridColumn: '1 / -1',
              }}
              className="feature-grid"
            >
                <style>{`
                .feature-grid {
                  grid-template-columns: 1fr;
                }
                @media (min-width: 640px) {
                  .feature-grid {
                    grid-template-columns: 1.1fr 0.9fr;
                  }
                  .feature-grid > *:first-child {
                    grid-row: span 2;
                  }
                }
              `}</style>
              {features.map((f, i) => (
                <FeatureCard
                  key={f.index}
                  feature={f}
                  palette={palette}
                  delay={`${0.85 + i * 0.15}s`}
                  tall={i === 0}
                />
              ))}
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
            Explore the rooms of Seasonal, simple spaces designed to feel clear, calm, and alive in their own quiet way.
          </p>
          <Link to="/explore" className="cta-btn">
            <span>Step inside</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.8 }}>
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

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

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer
        style={{
          padding: '40px 24px',
          background: surfaceVeil.footer,
          backdropFilter: 'blur(8px) saturate(1.02)',
          WebkitBackdropFilter: 'blur(8px) saturate(1.02)',
          borderTop: '1px solid rgba(26,23,20,0.07)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          {/* Mini orb */}
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: `radial-gradient(circle at 35% 32%, ${palette.orbCenter}, ${palette.orbEdge})`,
              boxShadow: `0 0 8px ${palette.orbGlowA}`,
            }}
          />
          <span
            className="font-display"
            style={{
              fontSize: '1.1rem',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: '#1a1714',
              opacity: 0.7,
            }}
          >
            Seasonal
          </span>
        </div>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 300,
            letterSpacing: '0.12em',
            color: 'rgba(26,23,20,0.32)',
            marginBottom: '10px',
            fontStyle: 'italic',
          }}
        >
          Designed by Sara @ KUK, shaped for clarity, rhythm, and quiet delight.
        </p>

        {/* Social Orbs */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            margin: '22px 0 18px',
          }}
        >
          {socialPlanets.map((planet) => (
            <SocialOrb key={planet.name} planet={planet} palette={palette} />
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 300,
            letterSpacing: '0.08em',
            color: 'rgba(26,23,20,0.38)',
          }}
        >
          Crafted with restraint &amp; intention · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}
