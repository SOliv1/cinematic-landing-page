import { useState } from 'react'

type ManifestoCardProps = {
  title: string
  lines: string[]
  drawerTitle: string
  drawerText: string
}

export function ManifestoCard({
  title,
  lines,
  drawerTitle,
  drawerText,
}: ManifestoCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <article className="manifesto-card">
      <h2>{title}</h2>

      <div className="manifesto-lines">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <button
        type="button"
        className="manifesto-toggle"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? 'Close' : 'Read more'}
      </button>

      <div className={`manifesto-drawer ${open ? 'open' : ''}`}>
        <h3>{drawerTitle}</h3>
        <p>{drawerText}</p>
      </div>
    </article>
  )
}
