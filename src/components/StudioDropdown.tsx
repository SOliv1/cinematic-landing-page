import { createPortal } from 'react-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'

type MenuMode = 'menu' | 'search'

interface NavItem {
  label: string
  to: string
  description: string
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: 'Start Here',
    items: [
      { label: 'Home', to: '/', description: 'Main landing page and introduction.' },
      { label: 'Seasonal House', to: '/seasonal-house', description: 'Central navigation hub.' },
      { label: 'Begin the Journey', to: '/begin-the-journey', description: 'Immersive entry into the experience.' },
      { label: 'Explore', to: '/explore', description: 'Cinematic carousel and discovery page.' },
    ],
  },
  {
    title: 'Studio',
    items: [
      { label: 'About', to: '/studio/about', description: 'Identity, experience, and collaborations.' },
      { label: 'Manifesto', to: '/studio/manifesto', description: 'Principles that guide the work.' },
      { label: 'Positioning', to: '/studio/positioning', description: 'How Seasonal.Studio is placed.' },
      { label: 'Why Seasonal', to: '/studio/why-seasonal', description: 'The role of seasonality in the studio.' },
      { label: 'Depth Levels', to: '/studio/depth-levels', description: 'Scope, intention, and interface pacing.' },
      { label: 'Seasonal Weather', to: '/studio/seasonal-weather', description: 'Mood, light, and daily atmosphere.' },
      { label: 'Work With Me', to: '/studio/work-with-me', description: 'Collaboration and project enquiries.' },
      { label: 'Unlock More', to: '/studio/unlock-more', description: 'Additional tools and rooms.' },
    ],
  },
  {
    title: 'Collections',
    items: [
      { label: 'Collections', to: '/studio/collections', description: 'Full edit of spaces, notes, and mood-led work.' },
      { label: 'Vintage Notes', to: '/studio/vintage-notes', description: 'Archival style, sketches, and product narratives.' },
      { label: 'Homeware', to: '/studio/homeware', description: 'Objects for rooms and rituals.' },
      { label: 'Garden', to: '/studio/garden', description: 'Outdoor notes and seasonal planting.' },
      { label: 'Journal', to: '/studio/journal', description: 'Stories, references, and house notes.' },
      { label: 'Moodboard', to: '/studio/moodboard', description: 'Textures, palettes, and visual references.' },
      { label: 'Morning Room', to: '/studio/morning-room', description: 'Warm light and soft rhythm.' },
      { label: 'Soft Room', to: '/studio/soft-room', description: 'Presence, softness, and reflection.' },
    ],
  },
  {
    title: 'Sample Sites',
    items: [
      { label: 'Boutique House', to: '/studio/collections', description: 'Lifestyle collection demonstration.' },
      { label: 'Vintage Notes', to: '/studio/vintage-notes', description: 'Archival storytelling demonstration.' },
    ],
  },
]

const allItems = navSections.flatMap((section) =>
  section.items.map((item) => ({ ...item, section: section.title })),
)

function matchesQuery(item: NavItem & { section: string }, query: string) {
  const value = `${item.section} ${item.label} ${item.description}`.toLowerCase()
  return value.includes(query.trim().toLowerCase())
}

export function StudioDropdown() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<MenuMode>('menu')
  const [query, setQuery] = useState('')
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const searchResults = useMemo(() => {
    if (!query.trim()) return allItems
    return allItems.filter((item) => matchesQuery(item, query))
  }, [query])

  useEffect(() => {
    if (!open) return

    const handler = (event: MouseEvent) => {
      const target = event.target as Node
      const insideButtons = rootRef.current?.contains(target)
      const insidePanel = panelRef.current?.contains(target)

      if (!insideButtons && !insidePanel) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  useEffect(() => {
    if (open && mode === 'search') {
      window.setTimeout(() => searchRef.current?.focus(), 80)
    }
  }, [mode, open])

  const toggleMode = (nextMode: MenuMode) => {
    if (open && mode === nextMode) {
      setOpen(false)
      return
    }

    setMode(nextMode)
    setOpen(true)
  }

  const closePanel = () => {
    setOpen(false)
    setQuery('')
  }

  return (
    <div className="site-nav" ref={rootRef}>
      <div className="site-nav-actions" aria-label="Site navigation">
        <button
          type="button"
          className={`site-nav-button ${open && mode === 'menu' ? 'is-active' : ''}`}
          aria-expanded={open && mode === 'menu'}
          aria-haspopup="dialog"
          onClick={() => toggleMode('menu')}
        >
          <span>Menu</span>
        </button>
        <button
          type="button"
          className={`site-nav-button ${open && mode === 'search' ? 'is-active' : ''}`}
          aria-expanded={open && mode === 'search'}
          aria-haspopup="dialog"
          onClick={() => toggleMode('search')}
        >
          <span>Search</span>
        </button>
      </div>

      {open && createPortal(
        <div ref={panelRef} className="site-nav-panel" role="dialog" aria-label={mode === 'search' ? 'Search site navigation' : 'Site menu'}>
          {mode === 'search' && (
            <label className="site-nav-search">
              <input
                ref={searchRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pages"
              />
            </label>
          )}

          <div className="site-nav-scroll">
            {mode === 'menu' ? (
              navSections.map((section) => (
                <section className="site-nav-section" key={section.title}>
                  <h2>{section.title}</h2>
                  {section.items.map((item) => (
                    <Link key={`${section.title}-${item.to}-${item.label}`} to={item.to} className="site-nav-item" onClick={closePanel}>
                      <span>{item.label}</span>
                      <small>{item.description}</small>
                    </Link>
                  ))}
                </section>
              ))
            ) : (
              <section className="site-nav-section">
                <h2>{query.trim() ? 'Results' : 'All Pages'}</h2>
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <Link key={`${item.section}-${item.to}-${item.label}`} to={item.to} className="site-nav-item" onClick={closePanel}>
                      <span>{item.label}</span>
                      <small>{item.section} - {item.description}</small>
                    </Link>
                  ))
                ) : (
                  <p className="site-nav-empty">No matching pages.</p>
                )}
              </section>
            )}
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}
