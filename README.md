# Cinematic Landing Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/2f3fb7d7-237c-4eb0-9df9-20c5e2772b70/deploy-status)](https://app.netlify.com/projects/cinematic-landing-page/deploys)  [![Deploy to Netlify](https://github.com/SOliv1/cinematic-landing-page/actions/workflows/netlify-deploy.yml/badge.svg)](https://github.com/SOliv1/cinematic-landing-page/actions/workflows/netlify-deploy.yml)

[![CinematicLanding: ](CinematicLanding.png)](https://soliv1.github.io/)
View Live [Here](https://cinematic-landing-page.netlify.app/)


## Seasonal

An interactive portfolio/marketing application with a cinematic landing page that adapts its visual mood to the current season. Built with TanStack Start and deployed on Netlify.

## What it is

A landing page designed as a quiet gallery foyer — soft atmospheric gradients, translucent glass panels, and a breathing orb that pulses gently. The palette shifts automatically based on the time of year: blush rose in spring, warm cream in summer, amber in autumn, lavender in winter.

## SEO Launch Checklist

- [x] Add title and meta description to Home and About pages
- [x] Use one H1 per page on Home and About
- [x] Add alt text to key images
- [x] Use primary keywords naturally in visible copy
- [x] Add OpenGraph and Twitter preview tags
- [x] Add `public/sitemap.xml`
- [x] Add `public/robots.txt`
- [ ] Submit `https://seasonal.studio/sitemap.xml` in [Google Search Console](https://search.google.com/search-console/welcome) after deployment. Use Search Console to verify ownership, request indexing, and monitor how Google reads Seasonal.Studio.

### Home Page Keywords

- [x] atmospheric web design
- [x] cinematic web apps
- [x] independent UK studio

### About Page Keywords

- [x] slow-tech digital experiences
- [x] React and Django developer
- [x] countryside-based independent studio

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Fonts | Cormorant Garamond (display) + Outfit (body) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000). For full Netlify feature emulation (functions, identity, edge):

```bash
npx netlify dev
```

This runs at [http://localhost:8888](http://localhost:8888).

## Design

- **Hero** — translucent pearl panel floating over drifting atmospheric blobs, with a pulsing orb and whisper-weight typography
- **Features** — asymmetric grid with glass cards that reveal on scroll
- **Quote** — full-width atmospheric break, typeset in Cormorant Garamond
- **Seasonal detection** — palette auto-selects based on the current month at render time
