import { HeadContent, Outlet, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import Footer from '@/components/Footer'
import ScrollToTopOrb from '@/components/ScrollToTopOrb'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'N0gV4nqYRcKs7HGGNdbiZqzJ6UyTyOan8QQuGFmyGBI' },
      { title: 'Seasonal.Studio — Atmospheric Web Design & Cinematic Web Apps' },
      {
        name: 'description',
        content: 'Independent UK studio creating atmospheric, cinematic web apps and slow-tech digital experiences. Calm, minimal, handcrafted interfaces built with React and Django.',
      },
      { property: 'og:title', content: 'Seasonal.Studio — Atmospheric Web Design & Cinematic Web Apps' },
      {
        property: 'og:description',
        content: 'Independent UK studio creating atmospheric, cinematic web apps and slow-tech digital experiences.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://seasonal.studio' },
      { property: 'og:image', content: 'https://seasonal.studio/og/seasonal-studio-preview.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Seasonal.Studio — Atmospheric Web Design & Cinematic Web Apps' },
      {
        name: 'twitter:description',
        content: 'Independent UK studio creating atmospheric, cinematic web apps and slow-tech digital experiences.',
      },
      { name: 'twitter:image', content: 'https://seasonal.studio/og/seasonal-studio-preview.png' },
    ],
    links: [
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/png', sizes: 'any', href: '/images/favicons/favicon-r-visible.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicons/favicon-32.png' },
    ],
  }),
  component: RootLayout,
  shellComponent: RootDocument,
})

function RootLayout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const usesImmersiveLayout = pathname === '/begin-the-journey' || pathname === '/explore'

  return (
    <>
      <header className={`site-header ${usesImmersiveLayout ? 'site-header--immersive' : ''}`}>
        <div className="site-title">The Living Interface</div>
      </header>
      <main className={`page-wrapper ${usesImmersiveLayout ? 'page-wrapper--immersive' : ''}`}>
        <Outlet />
      </main>
      {!usesImmersiveLayout && <Footer />}
      <ScrollToTopOrb />
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
