export interface HeroImage {
  src: string
  alt: string
  position?: string
}

const localHeroImages: Array<HeroImage> = [
  {
    src: '/images/hero/hero-3.jpg',
    alt: 'A glowing orb of light breaking through a green forest path',
    position: 'center 58%',
  },
  {
    src: '/images/hero/hero-4.png',
    alt: 'A pale glowing orb shining between winter forest trees',
    position: 'center 48%',
  },
  {
    src: '/images/orbs/glowing-orb-translucent-chamber16x9.png',
    alt: 'A glowing translucent orb suspended in a quiet chamber',
    position: 'center',
  },
  {
    src: '/images/orbs/glowingOrbAboveSereneHorizon.png',
    alt: 'A glowing orb above a serene horizon',
    position: 'center',
  },
  {
    src: '/images/orbs/originOfLight.png',
    alt: 'An origin point of light glowing in a seasonal atmosphere',
    position: 'center',
  },
  {
    src: '/images/orbs/the-three-orbs-16x9.png',
    alt: 'Three luminous seasonal orbs arranged in a wide cinematic frame',
    position: 'center',
  },
]

const cloudinaryHeroImages: Array<HeroImage> = [
  // Add Cloudinary delivery URLs here after copying them from the Media Library.
  // The previously guessed hero-images/hero-*.jpg URLs return 404, so they are
  // intentionally not included in the active rotation.
]

export const heroImages = [...localHeroImages, ...cloudinaryHeroImages]

export const fallbackHeroImage = localHeroImages[0]

export function getHeroImage(date = new Date()) {
  const index = (date.getDate() - 1) % heroImages.length

  return heroImages[index] ?? fallbackHeroImage
}
