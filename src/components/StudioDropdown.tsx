import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

// ── Items ─────────────────────────────────────────────────────────────────────

const studioItems = [
  { label: 'About',        to: '/studio/about',         description: 'A quiet introduction to who I am and how I think.' },
  { label: 'Manifesto',    to: '/studio/manifesto',     description: 'My Seasonal principles, my philosophy.' },
  { label: 'Interiors',    to: '/studio/interiors',     description: 'My services, framed as cinematic digital interiors.' },
  { label: 'Depth Levels', to: '/studio/depth-levels',  description: 'My pricing tiers, framed as layers of involvement.' },
  { label: 'Positioning',  to: '/studio/positioning',   description: 'My strategic identity and value proposition.' },
  { label: 'Why Seasonal', to: '/studio/why-seasonal',  description: 'My competitive differentiators, why these interiors feel different.' },
  { label: 'Work With Me', to: '/studio/work-with-me',  description: 'A soft, atmospheric contact page.' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export function StudioDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open ? 'true' : 'false'}
        aria-haspopup="true"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '7px 14px',
          borderRadius: '100px',
          background: 'linear-gradient(135deg, rgba(58, 42, 26, 0.62) 0%, rgba(20, 18, 14, 0.72) 100%)',
          border: '1px solid rgba(240, 225, 202, 0.16)',
          backdropFilter: 'blur(18px) saturate(140%)',
          WebkitBackdropFilter: 'blur(18px) saturate(140%)',
          boxShadow: '0 6px 16px rgba(0,0,0,0.18), inset 0 1px 0 rgba(240,225,202,0.08)',
          cursor: 'pointer',
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.63rem',
          fontWeight: 400,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(240, 225, 202, 0.92)',
        }}
      >
        The Studio
        <span style={{
          fontSize: '0.6rem',
          opacity: 0.55,
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          display: 'inline-block',
          marginTop: '1px',
        }}>▾</span>
      </button>

      {/* Panel */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 10px)',
          right: 0,
          minWidth: '300px',
          borderRadius: '22px',
          background: 'rgba(20, 22, 26, 0.28)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(18px) saturate(140%)',
          WebkitBackdropFilter: 'blur(18px) saturate(140%)',
          boxShadow: '0 24px 56px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.05)',
          padding: '10px',
          animation: 'panelReveal 0.25s ease both',
          zIndex: 20,
        }}>
          {studioItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="studio-item"
            >
              <span style={{
                display: 'block',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.05rem',
                fontWeight: 400,
                letterSpacing: '0.03em',
                color: 'rgba(255,255,255,0.88)',
                marginBottom: '2px',
              }}>{item.label}</span>
              <span style={{
                display: 'block',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 300,
                letterSpacing: '0.05em',
                color: 'rgba(255,255,255,0.38)',
              }}>{item.description}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
