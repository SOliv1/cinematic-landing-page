import { createFileRoute, Link } from '@tanstack/react-router'

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

// ── Orb Component ─────────────────────────────────────────────────────────────

function SeasonalOrb({ palette }: { palette: SeasonalPalette }) {
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
      <div
        style={{
          position: 'relative',
          width: '84px',
          height: '84px',
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 32%, ${palette.orbCenter} 0%, ${palette.orbEdge} 65%, rgba(0,0,0,0.06) 100%)`,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.9),
            inset 0 -2px 8px rgba(0,0,0,0.06),
            0 2px 8px rgba(0,0,0,0.06),
            0 0 0 1px rgba(255,255,255,0.6)
          `,
        }}
      >
        {/* Highlight specular */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '18px',
            width: '28px',
            height: '18px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 100%)',
            transform: 'rotate(-20deg)',
          }}
        />
      </div>
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
  body: string
}

const features: Feature[] = [
  {
    index: '01',
    title: 'Seasonal Awareness',
    body: 'The interface breathes with the calendar. Palette, mood, and tone shift quietly with the turning of the year — without announcement, without ceremony.',
  },
  {
    index: '02',
    title: 'Quiet Performance',
    body: 'Motion exists to serve meaning, not to impress. Every transition earns its frame. Every pause is intentional.',
  },
  {
    index: '03',
    title: 'Modular Clarity',
    body: 'Each section holds its own weight. Composable, restrained, and sized to breathe — never crowded into obligation.',
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

// ── Main Page ─────────────────────────────────────────────────────────────────

function LandingPage() {
  const season = getSeason()
  const palette = palettes[season]

  const cssVars = {
    ['--accent' as string]: palette.accent,
    ['--orb-glow-a' as string]: palette.orbGlowA,
    ['--orb-glow-b' as string]: palette.orbGlowB,
    ['--cta-bg' as string]: palette.ctaBg,
    ['--cta-hover' as string]: palette.ctaHover,
    ['--cta-shadow' as string]: palette.ctaShadow,
  }

  return (
    <div style={{ minHeight: '100vh', ...cssVars }}>
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
          background: '#f5f3f0',
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
            top: '24px',
            left: '28px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            animation: 'fadeIn 1.6s ease 1s both',
          }}
        >
          <img
            src="/mood-logo1.png"
            alt="Mood"
            style={{
              width: '44px',
              height: '44px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))',
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

          <SeasonalOrb palette={palette} />

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
          background: '#f5f3f0',
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
                Three principles that<br />
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
                    grid-template-rows: auto auto;
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
          background: `linear-gradient(170deg, #f5f3f0 0%, color-mix(in srgb, ${palette.orbEdge} 12%, #f5f3f0) 100%)`,
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
            "Good design is like a clear sky — you notice the world, not the weather."
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
            linear-gradient(180deg, color-mix(in srgb, ${palette.orbEdge} 12%, #f5f3f0) 0%, #f5f3f0 60%, color-mix(in srgb, ${palette.accent} 8%, #f5f3f0) 100%)
          `,
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
              marginBottom: '44px',
            }}
          >
            Ready to explore?
          </h2>

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
          background: '#f0ede8',
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
