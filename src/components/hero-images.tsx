export type TimeOfDay = 'morning' | 'day' | 'evening' | 'night';

export interface HeroImage {
  src: string;
  alt: string;
  position?: string;
  fit?: 'cover' | 'contain';
  timeOfDay?: TimeOfDay; // optional, defaults to all
}

const localHeroImages: Array<HeroImage> = [
  {
    src: '/images/carousel/seasonal-studio-cinematic-glow.png',
    alt: 'Atmospheric gradient artwork symbolising calm, slow-tech digital experiences.',
    position: 'center',
    fit: 'contain',
  },
  {
    src: '/images/seasonalStudio-orbCollection.png',
    alt: 'Seasonal.Studio orb collection artwork with cinematic mood and glow.',
    position: 'center',
    timeOfDay: 'day',
  },
  {
    src: '/images/safe-Harbour.png',
    alt: 'Safe Harbour scene with reflective light and calm, atmospheric composition.',
    position: 'center',
    timeOfDay: 'morning',
  },
  {
    src: '/images/Sun‑BreakOrb.png',
    alt: 'A sun-break orb image with luminous seasonal light and depth.',
    position: 'center',
    timeOfDay: 'day',
  },
  {
    src: '/images/reflections-door-of-wonder-banner.png',
    alt: 'Reflections Door of Wonder banner with cinematic portal-like lighting.',
    position: 'center',
    timeOfDay: 'evening',
  },
  {
    src: '/images/reflections-features15.png',
    alt: 'Reflections feature image fifteen with atmospheric, editorial styling.',
    position: 'center',
    timeOfDay: 'day',
  },
  {
    src: '/images/reflections-features16.png',
    alt: 'Reflections feature image sixteen with cinematic composition and texture.',
    position: 'center',
    timeOfDay: 'evening',
  },
  {
    src: '/images/reflections-features20.png',
    alt: 'Reflections feature image twenty with soft lighting and seasonal contrast.',
    position: 'center',
    timeOfDay: 'night',
  },
  {
    src: '/images/hero/soft-Breeze-Orb.png',
    alt: 'A glowing orb of light breaking through a green forest path',
    position: 'center 58%',
    timeOfDay: 'day',
  },
  {
    src: '/images/hero/hero-4.png',
    alt: 'A pale glowing orb shining between winter forest trees',
    position: 'center 48%',
    timeOfDay: 'day',
  },
  {
    src: '/images/orbs/glowing-orb-translucent-chamber16x9.png',
    alt: 'A glowing translucent orb suspended in a luminous chamber',
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
  {
    src: '/images/hero/soft-Breeze-Orb.png',
    alt: 'A glowing orb in a soft breeze on a forest path',
    position: 'center 58%',
    timeOfDay: 'day',
  }
];

const cloudinaryHeroImages: Array<HeroImage> = [
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1777123244/Sandbox/rqpjnc16awydk81lcb01.jpg',
    alt: 'A Cloudinary hosted hero image',
    position: 'center',
    timeOfDay: 'evening',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1777374490/lightBulb-reflections_hxw7tp.jpg',
    alt: 'Another Cloudinary hosted hero image',
    position: 'center',
    timeOfDay: 'day',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1779536199/and-machines-p9Of0dvgvcs-unsplash_1_i2xgpa.jpg',
    alt: 'Yet another Cloudinary hosted hero image',
    position: 'center',
    timeOfDay: 'day',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1777373439/Sandbox/ec4w8wkzmvhx9wckamxv.png',
    alt: 'Yet another Cloudinary hosted hero image',
    position: 'center',
    timeOfDay: 'evening',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1775136063/Sandbox/rebckt233tkaxpe9znve.jpg',
    alt: 'Yet another Cloudinary hosted hero image',
    position: 'center',
    timeOfDay: 'night',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1779537880/stephanie-klepacki-NZlMckfh7Ng-unsplash_eicffw.jpg',
    alt: 'Yet another Cloudinary hosted hero image',
    position: 'center',
    timeOfDay: 'morning',
  },
  {
    src: 'https://res.cloudinary.com/dwpvbtoad/image/upload/v1779537876/Tidal-Blue-Orb_iuqlyw.png',
    alt: 'Yet another Cloudinary hosted hero image',
    position: 'center',
    timeOfDay: 'morning',
  }



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
