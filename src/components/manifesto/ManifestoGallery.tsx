import type { ReactNode } from 'react'

import './ManifestoGallery.css'

type ManifestoGalleryProps = {
  children: ReactNode
}

export function ManifestoGallery({ children }: ManifestoGalleryProps) {
  return <section className="manifesto-gallery">{children}</section>
}
