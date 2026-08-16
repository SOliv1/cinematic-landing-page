import { createFileRoute, Link } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/collections')({
  component: CollectionsPage,
})

const collections = [
  {
    title: 'Vintage Notes',
    href: '/studio/vintage-notes',
    description: 'Timeless dressing, drawn from memory.',
  },
  {
    title: 'Homeware',
    href: '/studio/homeware',
    description: 'Atmospheric objects for rooms, rituals, and quiet interiors.',
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
        {collections.map((collection) => (
          <Link
            key={collection.href}
            to={collection.href}
            className="rounded-lg border border-white/10 bg-white/[0.055] p-6 no-underline transition hover:-translate-y-1 hover:border-[rgba(244,222,177,0.34)] hover:bg-white/[0.09]"
          >
            <h2 className="font-display mb-3 text-3xl font-normal text-[rgba(253,244,228,0.94)]">
              {collection.title}
            </h2>
            <p className="m-0 text-base leading-7 text-[rgba(253,244,228,0.64)]">
              {collection.description}
            </p>
          </Link>
        ))}
      </div>
    </StudioPageLayout>
  )
}
