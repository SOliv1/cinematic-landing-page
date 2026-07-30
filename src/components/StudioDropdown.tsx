import { createPortal } from 'react-dom'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from '@tanstack/react-router'

// ── Items ─────────────────────────────────────────────────────────────────────

const studioItems = [
  { label: 'About', to: '/studio/about', description: 'Studio profile, experience, and selected collaborations.' },
  { label: 'Depth Levels', to: '/studio/depth-levels', description: 'Layers of intention, atmosphere, and interface pacing.' },
  { label: 'Manifesto', to: '/studio/manifesto', description: 'The Seasonal principles guiding the whole studio.' },
  { label: 'Journal', to: '/studio/journal', description: 'Stories, references, sketches, and house notes.' },
  { label: 'The Morning Room', to: '/studio/morning-room', description: 'A calm space shaped by warm light and soft rhythm.' },
  { label: 'Positioning', to: '/studio/positioning', description: 'How Seasonal.Studio is placed and understood.' },
  { label: 'Seasonal Weather', to: '/studio/seasonal-weather', description: 'A page tuned to the light and mood of the day.' },
  { label: 'The Soft Room', to: '/studio/soft-room', description: 'An interior for presence, softness, and reflection.' },
  { label: 'Why Seasonal', to: '/studio/why-seasonal', description: 'Why seasonality is central to the experience design.' },
  { label: 'Unlock More', to: '/studio/unlock-more', description: 'Further tools and rooms currently being revealed.' },
  { label: 'Work With Me', to: '/studio/work-with-me', description: 'Ways to collaborate on calm, cinematic digital work.' },
]

const collectionItems = [
  { label: 'The Studio', to: '/studio/collections', description: 'The complete Seasonal.Studio edit of spaces, notes, and mood-led collections.' },
  {
    label: 'Vintage Notes',
    to: '/studio/vintage-notes',
    description: 'The Early Sketch Collection, Timeless Dressing, Worn & Loved, Sketchbook, and The Wardrobe.',
  },
  { label: 'Homeware', to: '/studio/homeware', description: 'Atmospheric objects for rooms, rituals, and quiet interiors.' },
  { label: 'Garden', to: '/studio/garden', description: 'Outdoor notes, seasonal planting, and weathered beauty.' },
  { label: 'Moodboard', to: '/studio/moodboard', description: 'Textures, palettes, silhouettes, and visual references.' },
]

const vintageNoteItems = [
  'The Early Sketch Collection',
  'Timeless Dressing',
  'Worn & Loved',
  'Sketchbook',
  'The Wardrobe',
]

const sampleWebsiteItems = [
  {
    label: 'Boutique House',
    to: '/studio/collections',
    description: 'Sample website featuring the Boutique House collection experience.',
  },
  {
    label: 'Vintage Notes',
    to: '/studio/vintage-notes',
    description: 'Sample website showcasing archival storytelling and product narratives.',
  },
]

const houseItems = [
  { label: 'Begin the Journey', to: '/begin-the-journey', description: 'Immersive transition into the experience.' },
  { label: 'Explore', to: '/explore', description: 'Cinematic carousel and ambient discovery page.' },
  { label: 'Home', to: '/', description: 'Main landing page for Seasonal.Studio.' },
  { label: 'Seasonal House', to: '/seasonal-house', description: 'The central room map and navigation hub.' },
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
        <>
          <div
            aria-hidden="true"
            onMouseDown={() => setOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99998,
              background: 'transparent',
            }}
          />
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
              {collectionItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={item.to === '/studio/collections' ? 'studio-item studio-item-home' : 'studio-item'}
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
              <div
                style={{
                  margin: '8px 6px 4px',
                  padding: '14px 12px 4px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <p
                  style={{
                    margin: '0 0 10px',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(220,210,195,0.42)',
                  }}
                >
                  Studio Pages
                </p>
                {studioItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="studio-item"
                    style={{ padding: '9px 10px' }}
                  >
                    <span style={{
                      display: 'block',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.98rem',
                      fontWeight: 400,
                      letterSpacing: '0.03em',
                      color: 'rgba(245,238,228,0.88)',
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
              <div
                style={{
                  margin: '8px 6px 4px',
                  padding: '14px 12px 4px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <p
                  style={{
                    margin: '0 0 10px',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(220,210,195,0.42)',
                  }}
                >
                  Under Vintage Notes
                </p>
                {vintageNoteItems.map((item) => (
                  <Link
                    key={item}
                    to="/studio/vintage-notes"
                    hash={item.toLowerCase().replaceAll(' ', '-').replaceAll('&', 'and')}
                    onClick={() => setOpen(false)}
                    className="studio-item"
                    style={{ padding: '9px 10px' }}
                  >
                    <span style={{
                      display: 'block',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.98rem',
                      fontWeight: 400,
                      letterSpacing: '0.03em',
                      color: 'rgba(245,238,228,0.88)',
                    }}>{item}</span>
                  </Link>
                ))}
              </div>
              <div
                style={{
                  margin: '8px 6px 4px',
                  padding: '14px 12px 4px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <p
                  style={{
                    margin: '0 0 10px',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(220,210,195,0.42)',
                  }}
                >
                  Sample Websites
                </p>
                {sampleWebsiteItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="studio-item"
                    style={{ padding: '9px 10px' }}
                  >
                    <span style={{
                      display: 'block',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.98rem',
                      fontWeight: 400,
                      letterSpacing: '0.03em',
                      color: 'rgba(245,238,228,0.88)',
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
              <div
                style={{
                  margin: '8px 6px 4px',
                  padding: '14px 12px 4px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <p
                  style={{
                    margin: '0 0 10px',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(220,210,195,0.42)',
                  }}
                >
                  Site Navigation
                </p>
                {houseItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="studio-item"
                    style={{ padding: '9px 10px' }}
                  >
                    <span style={{
                      display: 'block',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '0.98rem',
                      fontWeight: 400,
                      letterSpacing: '0.03em',
                      color: 'rgba(245,238,228,0.88)',
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
          </div>
        </>,
        document.body
      )}
    </div>
  )
}
