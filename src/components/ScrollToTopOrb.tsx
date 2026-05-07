import { useEffect, useState, type CSSProperties } from 'react'

const SHOW_AFTER_PX = 360
const FOOTER_GAP_PX = 24
const RESTING_BOTTOM_PX = 32

export default function ScrollToTopOrb() {
  const [isVisible, setIsVisible] = useState(false)
  const [bottomOffset, setBottomOffset] = useState(RESTING_BOTTOM_PX)

  useEffect(() => {
    let frameId: number | null = null

    const updateOrb = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      setIsVisible(scrollY > SHOW_AFTER_PX)

      const footer = document.querySelector<HTMLElement>('.studio-footer')
      if (!footer) {
        setBottomOffset(RESTING_BOTTOM_PX)
        return
      }

      const footerTop = footer.getBoundingClientRect().top
      const overlap = window.innerHeight - footerTop
      setBottomOffset(Math.max(RESTING_BOTTOM_PX, overlap + FOOTER_GAP_PX))
    }

    const requestUpdate = () => {
      if (frameId !== null) return
      frameId = window.requestAnimationFrame(() => {
        frameId = null
        updateOrb()
      })
    }

    updateOrb()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`scroll-top-orb ${isVisible ? 'is-visible' : ''}`}
      style={{ '--scroll-orb-bottom': `${bottomOffset}px` } as CSSProperties}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
    />
  )
}
