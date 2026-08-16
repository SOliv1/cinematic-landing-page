import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { StudioPageLayout } from '@/components/StudioPageLayout'
import products from '@/data/products'

export const Route = createFileRoute('/studio/vintage-notes')({
  component: VintageNotesPage,
})

const timelessPieces = [
  'Linen dresses',
  'Effortless tailoring',
  'Soft separates',
  'Wide-leg trousers',
  'Timeless blouses',
]

const lovedNotes = [
  'Inspired by a blouse worn in Chelsea, 1987.',
  'A countryside skirt remembered from summers long ago.',
]

const sketchbookNotes = [
  'Original sketches',
  'Inspiration notes',
  'Moodboards',
  'Fabric palettes',
  '1980 sketch → 2026 reimagining',
]

const heroImages = products.filter((piece) => piece.pairImage !== '/placeholder.png')

function VintageNotesPage() {
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    if (heroImages.length < 2) return

    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length)
    }, 6200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <StudioPageLayout
      title="Boutique House Vintage Notes"
      subtitle="Timeless dressing, drawn from memory."
    >
      <div className="space-y-16 text-[rgba(253,244,228,0.82)]">
        {heroImages.length > 0 ? (
          <section
            aria-label="Boutique House Vintage Notes collection preview"
            className="relative -mt-8 min-h-[34rem] overflow-hidden rounded-lg border border-white/10 bg-black/20 shadow-[0_28px_70px_rgba(0,0,0,0.32)]"
          >
            {heroImages.map((piece, index) => (
              <img
                key={piece.id}
                src={piece.pairImage}
                alt={`${piece.name} original sketch and reimagined garment`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
                  index === heroIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,6,0.68)_0%,rgba(10,8,6,0.34)_48%,rgba(10,8,6,0.18)_100%),linear-gradient(180deg,rgba(10,8,6,0.18)_0%,rgba(10,8,6,0.62)_100%)]"
            />
            <div className="relative z-10 flex min-h-[34rem] max-w-2xl flex-col justify-end p-8 md:p-12">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[rgba(244,222,177,0.72)]">
                The Early Sketch Collection
              </p>
              <h2 className="font-display mb-4 max-w-xl text-4xl font-normal leading-tight text-[rgba(253,244,228,0.96)] md:text-6xl">
                A wardrobe drawn from memory.
              </h2>
              <p className="max-w-md text-base leading-7 text-[rgba(253,244,228,0.72)]">
                Original Boutique House sketches, softly reimagined as timeless
                dressing for now.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 z-10 flex gap-2">
              {heroImages.map((piece, index) => (
                <button
                  key={piece.id}
                  type="button"
                  aria-label={`Show ${piece.name}`}
                  onClick={() => setHeroIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full border border-[rgba(253,244,228,0.52)] transition ${
                    index === heroIndex ? 'bg-[rgba(253,244,228,0.88)]' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </section>
        ) : null}

        <section id="the-early-sketch-collection" className="rounded-lg border border-white/12 bg-white/[0.055] p-8 shadow-[0_24px_58px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[rgba(253,244,228,0.54)]">
            Hero category
          </p>
          <h2 className="font-display mb-4 text-3xl font-normal text-[rgba(253,244,228,0.94)] md:text-4xl">
            The Early Sketch Collection
          </h2>
          <p className="max-w-2xl text-base leading-7 text-[rgba(253,244,228,0.68)]">
            Rediscovered from original Boutique House sketches, c.1980-81.
            Three reimagined looks, held as remembered silhouettes rather than
            plain product tiles.
          </p>

          <div className="mt-8 grid gap-6">
            {products.map((piece) => (
              <Link
                key={piece.id}
                to="/products/$productId"
                params={{ productId: String(piece.id) }}
                className="group grid gap-6 rounded-lg border border-white/10 bg-white/[0.06] p-5 text-left no-underline transition hover:-translate-y-1 hover:border-[rgba(244,222,177,0.34)] hover:bg-white/[0.09] md:grid-cols-[1.05fr_0.95fr]"
              >
                <div>
                  <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[rgba(244,222,177,0.62)]">
                    Drawn from an original sketch, c.1980-81
                  </p>
                  <h3 className="font-display mb-3 text-3xl font-normal text-[rgba(253,244,228,0.94)]">
                    {piece.name}
                  </h3>
                  <p className="m-0 text-sm leading-6 text-[rgba(253,244,228,0.62)]">
                    {piece.shortDescription}
                  </p>
                  {piece.price ? (
                    <p className="mt-5 text-lg font-medium text-[rgba(244,222,177,0.9)]">
                      £{piece.price}
                    </p>
                  ) : null}
                  <p className="mt-2 text-[0.72rem] uppercase tracking-[0.16em] text-[rgba(253,244,228,0.56)]">
                    Style No. {piece.publicStyleNo}
                  </p>
                  <dl className="mt-6 grid gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-[rgba(253,244,228,0.5)]">
                    <div className="flex justify-between gap-4 border-t border-white/10 pt-2">
                      <dt>Collection</dt>
                      <dd className="m-0 text-right text-[rgba(253,244,228,0.72)]">{piece.category}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-white/10 pt-2">
                      <dt>Colours</dt>
                      <dd className="m-0 text-right text-[rgba(253,244,228,0.72)]">{piece.colours.map((colour) => colour.name).join(', ')}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <figure className="m-0 overflow-hidden rounded-md border border-white/10 bg-[rgba(253,244,228,0.08)]">
                    <img
                      src={piece.pairImage}
                      alt={`${piece.name} original sketch and 2026 reimagining`}
                      className="aspect-[4/5] w-full object-cover"
                    />
                    <figcaption className="flex items-center justify-between gap-4 px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-[rgba(253,244,228,0.48)]">
                      <span>Original sketch</span>
                      <span>2026 reimagining</span>
                    </figcaption>
                  </figure>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="sketchbook" className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[rgba(253,244,228,0.54)]">
              Sketchbook
            </p>
            <h2 className="font-display mb-4 text-3xl font-normal text-[rgba(253,244,228,0.94)]">
              Original sketch to modern mood.
            </h2>
            <p className="max-w-md text-base leading-7 text-[rgba(253,244,228,0.64)]">
              This is where the magic of the brand lives: a visible line from
              archive drawing to inspiration, moodboard, palette, and reimagined garment.
            </p>
          </div>

          <div className="grid gap-3">
            {sketchbookNotes.map((note) => (
              <div
                key={note}
                className="rounded-lg border border-white/10 bg-white/[0.055] px-5 py-4 text-base text-[rgba(253,244,228,0.72)]"
              >
                {note}
              </div>
            ))}
          </div>
        </section>

        <section id="timeless-dressing" className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[rgba(253,244,228,0.54)]">
              Timeless Dressing
            </p>
            <h2 className="font-display mb-4 text-3xl font-normal text-[rgba(253,244,228,0.94)]">
              Pieces designed to outlast trends.
            </h2>
            <p className="font-display text-2xl italic text-[rgba(244,222,177,0.88)]">
              Quiet luxury, softly worn.
            </p>
          </div>

          <ul className="grid gap-3 p-0">
            {timelessPieces.map((piece) => (
              <li
                key={piece}
                className="list-none rounded-lg border border-white/10 bg-white/[0.055] px-5 py-4 text-base text-[rgba(253,244,228,0.72)]"
              >
                {piece}
              </li>
            ))}
          </ul>
        </section>

        <section id="worn-and-loved" className="rounded-lg border border-[rgba(244,222,177,0.18)] bg-[rgba(244,222,177,0.08)] p-8 md:p-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[rgba(253,244,228,0.54)]">
            Worn & Loved
          </p>
          <h2 className="font-display mb-4 text-3xl font-normal text-[rgba(253,244,228,0.94)]">
            Inspired by favourite clothes from your own life.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {lovedNotes.map((note) => (
              <blockquote
                key={note}
                className="m-0 border-l border-[rgba(244,222,177,0.42)] pl-5 font-display text-2xl italic leading-snug text-[rgba(253,244,228,0.84)]"
              >
                {note}
              </blockquote>
            ))}
          </div>
        </section>

        <section id="the-wardrobe" className="rounded-lg border border-white/10 bg-white/[0.045] p-8 md:p-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[rgba(253,244,228,0.54)]">
            The Wardrobe
          </p>
          <h2 className="font-display mb-4 text-3xl font-normal text-[rgba(253,244,228,0.94)]">
            Everything together.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-[rgba(253,244,228,0.66)]">
            The elegant equivalent of “Shop All”: archive pieces, timeless
            dressing, sketchbook ideas, and worn-and-loved memories gathered in
            one Boutique House wardrobe.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[rgba(253,244,228,0.56)]">
            Style numbers stay simple on the shop floor, while the house SKU
            system keeps everything organised behind the scenes: BHVN for
            Boutique House Vintage Notes, ES for Early Sketch Collection, a
            three-digit garment number, and a final colour code such as LW for
            Linen Whisper.
          </p>
        </section>
      </div>
    </StudioPageLayout>
  )
}
