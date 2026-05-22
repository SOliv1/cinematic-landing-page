export type TimeOfDay = 'morning' | 'day' | 'evening' | 'night';

export interface HeroImage {
  src: string;
  alt: string;
  position?: string;
  timeOfDay?: TimeOfDay; // optional, defaults to all
}

const localHeroImages: Array<HeroImage> = [
  {
    src: '/images/hero/hero-3.jpg',
    alt: 'A glowing orb of light breaking through a green forest path',
    position: 'center 58%',
    timeOfDay: 'morning',
  },
  {
    src: '/images/hero/hero-4.png',
    alt: 'A pale glowing orb shining between winter forest trees',
    position: 'center 48%',
    timeOfDay: 'day',
  },
  {
    src: '/images/orbs/glowing-orb-translucent-chamber16x9.png',
    alt: 'A glowing translucent orb suspended in a quiet chamber',
    position: 'center',
    timeOfDay: 'evening',
  },
  {
    src: '/images/orbs/glowingOrbAboveSereneHorizon.png',
    alt: 'A glowing orb above a serene horizon',
    position: 'center',
    timeOfDay: 'day',
  },
  {
    src: '/images/orbs/originOfLight.png',
    alt: 'An origin point of light glowing in a seasonal atmosphere',
    position: 'center',
    timeOfDay: 'night',
  },
  {
    src: '/images/orbs/the-three-orbs-16x9.png',
    alt: 'Three luminous seasonal orbs arranged in a wide cinematic frame',
    position: 'center',
    timeOfDay: 'evening',
  },
];

const cloudinaryHeroImages: Array<HeroImage> = [
  // Add Cloudinary delivery URLs here after copying them from the Media Library.
  // The previously guessed hero-images/hero-*.jpg URLs return 404, so they are
  // intentionally not included in the active rotation.
];

export const heroImages = [...localHeroImages, ...cloudinaryHeroImages];

export const fallbackHeroImage = localHeroImages[0];

// Helper to get current time of day
export function getCurrentTimeOfDay(date = new Date()): TimeOfDay {
  const hour = date.getHours();
  if (hour >= 5 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 17) return 'day';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}

// Get hero images for a given time of day
export function getHeroImagesForTimeOfDay(timeOfDay: TimeOfDay): HeroImage[] {
  // If no images for this time, fallback to all
  const filtered = heroImages.filter(img => !img.timeOfDay || img.timeOfDay === timeOfDay);
  return filtered.length > 0 ? filtered : heroImages;
}