import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find(
      (product) => product.id === +params.productId,
    )
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="flex flex-col md:flex-row gap-8 p-5">
      <div className="w-full md:w-[55%]">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={product.pairImage}
            alt={product.name}
            className="w-full object-cover"
          />
          {product.comingSoon && (
            <div className="absolute inset-0 grid place-items-center bg-stone-950/42 backdrop-blur-[2px]">
              <div className="border border-white/35 bg-white/18 px-6 py-4 text-center text-white shadow-2xl backdrop-blur-md">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.32em]">
                  Coming soon
                </p>
                <p className="m-0 mt-2 text-sm font-light text-white/82">
                  Preview image shown while this collection is prepared.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full md:w-[45%] p-8">
        <Link to="/" className="inline-block mb-4">
          &larr; Back to Vintage Notes
        </Link>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
          {product.category} / {product.era}
        </p>
        <h1 className="mb-4 font-display text-4xl font-normal">{product.name}</h1>
        <p className="mb-5 text-sm uppercase tracking-[0.18em] text-stone-500">
          Style No. {product.publicStyleNo}
        </p>
        <dl className="mb-6 grid gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
          <div className="flex justify-between gap-4 border-t border-stone-200 pt-2">
            <dt>Collection</dt>
            <dd className="m-0 text-right text-stone-700">{product.category}</dd>
          </div>
          <div className="flex justify-between gap-4 border-t border-stone-200 pt-2">
            <dt>Colours</dt>
            <dd className="m-0 text-right text-stone-700">
              {product.colours.map((colour) => colour.name).join(', ')}
            </dd>
          </div>
        </dl>
        <div className="mb-6 grid gap-2">
          {product.colours.map((colour) => (
            <div
              key={colour.styleNumber}
              className="flex justify-between gap-4 rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm"
            >
              <span>{colour.name}</span>
              <span className="text-xs uppercase tracking-[0.16em] text-stone-500">
                {colour.styleNumber.split('-').at(-1)}
              </span>
            </div>
          ))}
        </div>
        <p className="mb-5 text-lg font-semibold text-stone-800">
          {product.price ? `£${product.price}` : null}
        </p>
        <p className="mb-6 text-lg leading-relaxed text-stone-700">{product.description}</p>
        <div className="border-l border-stone-300 pl-5">
          <p className="m-0 text-sm uppercase tracking-[0.24em] text-stone-500">
            Archive note
          </p>
          <p className="m-0 mt-2 font-display text-2xl italic text-stone-800">
            {product.note}
          </p>
        </div>
      </div>
    </div>
  )
}
