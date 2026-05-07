import { HeadContent, Outlet, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import Footer from '@/components/Footer'
import ScrollToTopOrb from '@/components/ScrollToTopOrb'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Seasonal — Web apps that breathe' },
      { name: 'description', content: 'Designed for clarity, mood, and quiet delight.' },
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
      <header className="site-header">
        <h1 className="site-title">The Living Interface</h1>
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
