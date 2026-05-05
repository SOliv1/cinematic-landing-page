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
          gap: '8px',
          padding: '10px 20px',
          borderRadius: '100px',
          background: 'radial-gradient(circle at 35% 28%, rgba(255,255,255,0.08) 0%, rgba(26,23,20,0.22) 100%)',
          border: '1px solid rgba(255,255,255,0.14)',
          backdropFilter: 'blur(12px) saturate(130%)',
          WebkitBackdropFilter: 'blur(12px) saturate(130%)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.10)',
          cursor: 'pointer',
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1rem',
          fontWeight: 400,
          letterSpacing: '0.06em',
          color: 'rgba(255,255,255,0.82)',
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
          background: 'radial-gradient(circle at 60% 0%, rgba(255,255,255,0.07) 0%, rgba(14,12,10,0.84) 100%)',
          border: '1px solid rgba(255,255,255,0.10)',
          backdropFilter: 'blur(32px) saturate(160%)',
          WebkitBackdropFilter: 'blur(32px) saturate(160%)',
          boxShadow: '0 24px 56px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.06)',
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
