import { createPortal } from 'react-dom'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from '@tanstack/react-router'

// ── Items ─────────────────────────────────────────────────────────────────────

const studioItems = [
  { label: 'Home',         to: '/',                     description: 'Return to the main landing page.' },
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
  const [panelStyle, setPanelStyle] = useState<React.CSSProperties>({})
  const [canScrollDown, setCanScrollDown] = useState(false)
  const [canScrollUp, setCanScrollUp] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollUp(el.scrollTop > 4)
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 4)
  }, [])

  useEffect(() => {
    if (!open) return
    // slight delay lets the portal render before measuring
    const t = window.setTimeout(() => updateScrollState(), 50)
    return () => window.clearTimeout(t)
  }, [open, updateScrollState])

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      const target = e.target as Node
      const insideTrigger = ref.current?.contains(target)
      const insidePanel = panelRef.current?.contains(target)
      if (!insideTrigger && !insidePanel) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const handleOpen = () => {
    if (!open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom - 16
      const spaceAbove = rect.top - 16
      const GAP = 10

      if (spaceBelow >= 200 || spaceBelow >= spaceAbove) {
        // open downward
        setPanelStyle({
          top: rect.bottom + GAP,
          right: window.innerWidth - rect.right,
          maxHeight: Math.max(spaceBelow, 160),
        })
      } else {
        // flip upward
        setPanelStyle({
          bottom: window.innerHeight - rect.top + GAP,
          right: window.innerWidth - rect.right,
          maxHeight: Math.max(spaceAbove, 160),
        })
      }
    }
    setOpen(o => !o)
  }

  return (
    <div ref={ref} style={{ position: 'relative', zIndex: 1000 }}>
      {/* Trigger */}
      <button
        ref={btnRef}
        onClick={handleOpen}
        aria-expanded={open}
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

      {/* Panel — rendered via portal so it escapes all stacking contexts */}
      {open && createPortal(
        <div ref={panelRef} style={{
          position: 'fixed',
          ...panelStyle,
          minWidth: '300px',
          borderRadius: '22px',
          background: 'linear-gradient(160deg, rgba(18, 18, 24, 0.88) 0%, rgba(12, 12, 18, 0.92) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.10)',
          backdropFilter: 'blur(40px) saturate(160%) brightness(0.9)',
          WebkitBackdropFilter: 'blur(40px) saturate(160%) brightness(0.9)',
          boxShadow: '0 32px 72px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07)',
          padding: '0',
          overflow: 'hidden',
          animation: 'panelReveal 0.25s ease both',
          zIndex: 99999,
        }}>
          {/* Scroll fade — top */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '32px',
            background: 'linear-gradient(to bottom, rgba(14,14,20,0.75), transparent)',
            pointerEvents: 'none',
            borderRadius: '22px 22px 0 0',
            opacity: canScrollUp ? 1 : 0,
            transition: 'opacity 0.2s ease',
            zIndex: 1,
          }} />
          {/* Scrollable list */}
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            style={{ overflowY: 'auto', maxHeight: panelStyle.maxHeight, padding: '10px' }}
          >
            {studioItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={item.to === '/' ? 'studio-item studio-item-home' : 'studio-item'}
              >
                <span style={{
                  display: 'block',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.05rem',
                  fontWeight: 400,
                  letterSpacing: '0.03em',
                  color: 'rgba(245,238,228,0.95)',
                  marginBottom: '2px',
                }}>{item.label}</span>
                <span style={{
                  display: 'block',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 300,
                  letterSpacing: '0.05em',
                  color: 'rgba(220,210,195,0.52)',
                }}>{item.description}</span>
              </Link>
            ))}
          </div>
          {/* Scroll fade — bottom */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '36px',
            background: 'linear-gradient(to top, rgba(14,14,20,0.85), transparent)',
            pointerEvents: 'none',
            borderRadius: '0 0 22px 22px',
            opacity: canScrollDown ? 1 : 0,
            transition: 'opacity 0.2s ease',
            zIndex: 1,
          }} />
        </div>,
        document.body
      )}
    </div>
  )
}
