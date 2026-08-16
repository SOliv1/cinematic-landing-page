# Digital Resource Care / Low-Impact Atmosphere Pass

## Purpose

Create a future Seasonal.Studio project focused on reducing the invisible resource cost of the website and its atmospheric components.

The aim is not to make broad claims such as "carbon neutral" without evidence. The aim is to measure, reduce, document, and then consider a credible contribution or offset route if appropriate.

## Why It Matters

Resources are precious, especially water. Digital work has material costs through hosting, data centres, API calls, image generation, video, JavaScript, fonts, and repeated page loads.

Seasonal.Studio should treat digital atmosphere with the same care it gives to emotional atmosphere: gentle, intentional, and aware of what it consumes.

## Initial Questions

- What is the current page weight of key pages?
- Which assets are largest: images, scripts, CSS, fonts, or generated media?
- Which animations are essential to the experience?
- Can atmospheric effects stay cinematic while using lighter CSS and fewer assets?
- Does the site respect `prefers-reduced-motion`?
- Can the live weather/API layer be called only when needed?
- Which hosting or offset approach is credible enough to mention publicly?

## Practical Audit

- Measure key pages with Lighthouse, WebPageTest, or Website Carbon Calculator.
- Record total transferred bytes, image weight, JavaScript weight, CSS weight, and font weight.
- Identify unused or duplicated CSS.
- Check image dimensions and compression.
- Check whether images below the fold are lazy-loaded.
- Check whether animations pause or soften for reduced-motion users.
- Review live weather/API calls and avoid unnecessary background polling.

## Improvement Ideas

- Compress and resize large images.
- Lazy-load non-critical images and routes.
- Self-host or subset fonts where useful.
- Remove old demo CSS that is no longer used.
- Add `prefers-reduced-motion` fallbacks for shimmer, particles, carousel movement, and atmospheric transitions.
- Keep live weather opt-in rather than automatic.
- Consider a small public "Digital Resource Care" note once measurements exist.

## Possible Public Wording

Seasonal.Studio is exploring lower-impact digital atmosphere: lighter assets, intentional motion, opt-in live data, and careful measurement before making sustainability claims.

## Later Decision

Once the site has been measured and optimised, decide whether to add:

- a short sustainability note,
- a transparent page-weight/resource note,
- a verified hosting statement,
- or a credible climate/water contribution link.

## Status

Planned for a future project. Not yet measured, optimised, or publicly claimed.
