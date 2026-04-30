import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
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
  shellComponent: RootDocument,
})

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
