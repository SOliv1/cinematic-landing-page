import { createPortal } from 'react-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'

type MenuMode = 'menu' | 'search'

interface NavItem {
  label: string
  to: string
  description: string
  children?: NavItem[]
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: 'Top Menu',
    items: [
      { label: 'Home', to: '/', description: 'Main landing page and introduction.' },
      { label: 'Work With Me', to: '/studio/work-with-me', description: 'Collaboration and project enquiries.' },
      {
        label: 'Licencing',
        to: '/studio/licencing',
        description: 'Licencing, usage, and collaboration terms.',
        children: [
          { label: 'Terms & Conditions', to: '/studio/terms', description: 'Full licence and digital product terms.' },
          { label: 'Support', to: '/studio/support', description: 'How support works.' },
          { label: 'Maintenance Roadmap', to: '/studio/maintenance-roadmap', description: 'Engine updates and compatibility.' },
        ],
      },
      { label: 'Studio', to: '/studio/about', description: 'Identity, experience, and studio practice.' },
      { label: 'Journal', to: '/studio/journal', description: 'Stories, references, and house notes.' },
      { label: 'Contact', to: '/studio/work-with-me#studio-contact-form', description: 'Send an enquiry or project note.' },
    ],
  },
]

const allItems = navSections.flatMap((section) =>
  section.items.flatMap((item) => [
    { ...item, section: section.title },
    ...(item.children ?? []).map((child) => ({ ...child, section: section.title })),
  ]),
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
      <nav className="site-nav-primary" aria-label="Primary navigation">
        {navSections[0].items.map((item, index) => (
          <span
            className={`site-nav-primary-group ${item.children ? 'has-submenu' : ''}`}
            key={`${item.to}-${item.label}`}
          >
            <Link
              to={item.to}
              className="site-nav-primary-link"
              aria-haspopup={item.children ? 'true' : undefined}
            >
              {item.label}
            </Link>
            {item.children && (
              <span className="site-nav-submenu" aria-label={`${item.label} submenu`}>
                {item.children.map((child) => (
                  <Link key={`${item.label}-${child.to}`} to={child.to} className="site-nav-submenu-link">
                    {child.label}
                  </Link>
                ))}
              </span>
            )}
            {index < navSections[0].items.length - 1 && (
              <span className="site-nav-primary-separator" aria-hidden="true">/</span>
            )}
          </span>
        ))}
      </nav>

      <div className="site-nav-actions" aria-label="Site navigation">
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
