import { createFileRoute, Link } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/collections')({
  component: CollectionsPage,
})

const collections = [
  {
    title: 'Vintage Notes',
    href: 'https://boutique-house-vintage-note-production.up.railway.app/',
    description: 'Open the live Boutique House Vintage Notes app.',
    external: true,
  },
  {
    title: 'Homeware',
    href: 'https://boutique-house-production-751b.up.railway.app/',
    description: 'Visit the live Boutique House app while this collection room is being shaped.',
    external: true,
  },
  {
    title: 'Garden',
    href: '/studio/garden',
    description: 'Outdoor notes, seasonal planting, and weathered beauty.',
  },
  {
    title: 'Journal',
    href: '/studio/journal',
    description: 'Stories, references, sketches, and house notes.',
  },
  {
    title: 'Moodboard',
    href: '/studio/moodboard',
    description: 'Textures, palettes, silhouettes, and visual references.',
  },
]

function CollectionsPage() {
  return (
    <StudioPageLayout
      title="All Collections"
      subtitle="Boutique House as a lifestyle atelier: wardrobe, home, garden, journal, and mood."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {collections.map((collection) => {
          const cardContent = (
            <>
              <h2 className="font-display mb-3 text-3xl font-normal text-[rgba(253,244,228,0.94)]">
                {collection.title}
              </h2>
              <p className="m-0 text-base leading-7 text-[rgba(253,244,228,0.64)]">
                {collection.description}
              </p>
              {collection.external ? (
                <span className="mt-5 inline-flex rounded-full border border-[rgba(244,222,177,0.22)] px-3 py-1 text-xs uppercase tracking-[0.14em] text-[rgba(253,244,228,0.66)]">
                  Seasonal House Stays Open
                </span>
              ) : null}
            </>
          )

          if (collection.external) {
            return (
              <a
                key={collection.href}
                href={collection.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6 no-underline transition hover:-translate-y-1 hover:border-[rgba(244,222,177,0.34)] hover:bg-white/[0.09]"
              >
                {cardContent}
              </a>
            )
          }

          return (
            <Link
              key={collection.href}
              to={collection.href}
              className="rounded-lg border border-white/10 bg-white/[0.055] p-6 no-underline transition hover:-translate-y-1 hover:border-[rgba(244,222,177,0.34)] hover:bg-white/[0.09]"
            >
              {cardContent}
            </Link>
          )
        })}
      </div>
    </StudioPageLayout>
  )
}
