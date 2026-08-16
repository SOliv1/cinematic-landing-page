export interface Product {
  id: number
  name: string
  image: string
  pairImage: string
  sketchImage: string
  modelImage: string
  description: string
  shortDescription: string
  era: string
  category: string
  collectionCode: string
  publicStyleNo: string
  masterStyleCode: string
  styleNumber: string
  colour: string
  colours: Array<{
    name: string
    styleNumber: string
  }>
  note: string
  price?: number
  comingSoon?: boolean
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Meadow Skirt Set',
    image: '/placeholder.png',
    pairImage: '/placeholder.png',
    sketchImage: '/placeholder.png',
    modelImage: '/placeholder.png',
    description:
      'A remembered countryside skirt and soft matching piece, drawn from early archive sketches and summers long ago.',
    shortDescription: 'A countryside skirt remembered from summers long ago.',
    era: '1980-81 archive',
    category: 'The Early Sketch Collection',
    collectionCode: 'ES',
    publicStyleNo: 'ES–001',
    masterStyleCode: 'BHVN-ES-001',
    styleNumber: 'BHVN-ES-001-LW',
    colour: 'Linen Whisper',
    colours: [
      { name: 'Linen Whisper', styleNumber: 'BHVN-ES-001-LW' },
      { name: 'Pale Cream', styleNumber: 'BHVN-ES-001-PC' },
      { name: 'Soft Meadow', styleNumber: 'BHVN-ES-001-SM' },
    ],
    note: 'A wardrobe drawn from memory.',
    price: 128,
    comingSoon: true,
  },
  {
    id: 2,
    name: 'Riviera Trouser Set',
    image: '/images/boutique-house/riviera-trouser-set.png',
    pairImage: '/images/boutique-house/riviera-trouser-set.png',
    sketchImage: '/images/boutique-house/riviera-trouser-set.png',
    modelImage: '/images/boutique-house/riviera-trouser-set.png',
    description:
      'Effortless wide-leg tailoring with a coastal ease, imagined as a quietly polished set made to outlast trends.',
    shortDescription: 'Soft tailoring with Riviera lightness and timeless ease.',
    era: '1980-81 archive',
    category: 'The Early Sketch Collection',
    collectionCode: 'ES',
    publicStyleNo: 'ES–002',
    masterStyleCode: 'BHVN-ES-002',
    styleNumber: 'BHVN-ES-002-LW',
    colour: 'Linen Whisper',
    colours: [
      { name: 'Linen Whisper', styleNumber: 'BHVN-ES-002-LW' },
      { name: 'Oyster', styleNumber: 'BHVN-ES-002-OY' },
      { name: 'Peacock Teal', styleNumber: 'BHVN-ES-002-PT' },
      { name: 'Midnight Ink', styleNumber: 'BHVN-ES-002-MI' },
    ],
    note: 'Quiet luxury, softly worn.',
    price: 148,
    comingSoon: true,
  },
  {
    id: 3,
    name: 'Poet Skirt Ensemble',
    image: '/images/boutique-house/poet-skirt-ensemble.png',
    pairImage: '/images/boutique-house/poet-skirt-ensemble.png',
    sketchImage: '/images/boutique-house/poet-skirt-ensemble.png',
    modelImage: '/images/boutique-house/poet-skirt-ensemble.png',
    description:
      'A romantic blouse and skirt ensemble inspired by favourite clothes, handwritten notes, and the feeling of being beautifully at ease.',
    shortDescription: 'A soft ensemble inspired by favourite clothes and old notes.',
    era: '1980-81 archive',
    category: 'The Early Sketch Collection',
    collectionCode: 'ES',
    publicStyleNo: 'ES–003',
    masterStyleCode: 'BHVN-ES-003',
    styleNumber: 'BHVN-ES-003-PC',
    colour: 'Pale Cream',
    colours: [
      { name: 'Pale Cream', styleNumber: 'BHVN-ES-003-PC' },
      { name: 'Ivory Silk', styleNumber: 'BHVN-ES-003-IS' },
      { name: 'Noir Shadow', styleNumber: 'BHVN-ES-003-NS' },
      { name: 'Dust Rose', styleNumber: 'BHVN-ES-003-DR' },
    ],
    note: 'Inspired by a blouse worn in Chelsea, 1987.',
    price: 136,
    comingSoon: true,
  },
]

export default products
