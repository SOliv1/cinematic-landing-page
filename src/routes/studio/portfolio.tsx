import { Link, createFileRoute } from "@tanstack/react-router";

const DAILY_REFLECTIONS_URL = "/daily-reflections";
const CENTRE_NOTES_URL = "/centre-notes";
const CINEMATIC_HOME_GLOW_URL = "/cinematic-home-glow";
const WEATHER_ATMOSPHERE_URL = "/weather-atmosphere";
const MOODS_BOARD_REFLECTIONS_FAMILY_URL = "/moods-board";
const STUDIO_ABOUT_URL = "/studio/about";

export const Route = createFileRoute("/studio/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio - Seasonal.Studio" },
      {
        name: "description",
        content:
          "Featured Seasonal.Studio portfolio work, including calm, cinematic digital products and web experiences.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  function withStudioReturn(url: string): string {
    return url;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-20 space-y-20">

        {/* Header */}
        <header className="space-y-4 portfolio-header">
          <h1 className="text-3xl font-semibold tracking-tight">
            Featured Work
          </h1>
          <p className="text-slate-300 leading-relaxed max-w-xl">
            Seasonal.Studio is a place for cinematic digital interiors, work shaped with rhythm, emotional clarity, and a sense of architectural stillness.
            Each project explores how software can feel spacious, human, and quietly intelligent.
            Whether clinical, retail, or reflective, every interface is built with the same Seasonal ethos:
            clarity, gentleness, and a respect for the pace of real life.</p>

          <p className="text-slate-300 leading-relaxed max-w-xl">
            This portfolio gathers selected creations that express that ethos in practice; digital spaces designed to move softly, communicate clearly, and support the needs of their users.
          </p>
          <Link
            to="/studio/about"
            className="inline-flex items-center text-sm text-slate-300 hover:text-slate-50 transition"
          >
            Back to About
          </Link>
          <div className="portfolio-header-divider" aria-hidden="true" />
        </header>

        {/* Lumen Appointment Planner */}
        <section className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Lumen Appointment Planner</h2>
            <p className="text-slate-300 leading-relaxed max-w-xl">
              A calm, role‑aware clinical system designed to bring clarity,
              reassurance, and rhythm back into the flow of care. Built with
              atmospheric UI, structured queues, and gentle motion.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="portfolio-swatch portfolio-swatch--tall portfolio-swatch--planner-emerald" />
            <div className="portfolio-swatch portfolio-swatch--tall portfolio-swatch--planner-sky" />
            <div className="portfolio-swatch portfolio-swatch--tall portfolio-swatch--planner-amber" />
          </div>

          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
            Emerald for clinical focus. Sky for patient reassurance. Amber for
            administrative coordination. Three colours, three moods, three
            responsibilities — held together in one coherent flow.
          </p>

          <a
            href="https://serene-care-sync-0n69.onrender.com"
            className="inline-flex items-center rounded-xl bg-slate-50 text-slate-900 px-5 py-2.5 font-medium hover:bg-slate-200 transition"
          >
            View Appointment Planner
          </a>
        </section>

        {/* Vintage Notes */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Vintage Notes</h2>
            <p className="text-slate-300 leading-relaxed max-w-xl">
              Vintage Notes is a warm, analogue writing interior shaped in deep rosewood tones.
              It feels like a quiet room at dusk — soft, reflective, and gently textured.
              Each page moves with the rhythm of memory: warm shadows, slow pacing, and a sense of emotional stillness.

              The rosewood palette brings depth and presence to the space.
              It turns writing into a cinematic act, unhurried, warm, and human.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="portfolio-swatch portfolio-swatch--rosewood-deep" />
            <div className="portfolio-swatch portfolio-swatch--rosewood-wine" />
            <div className="portfolio-swatch portfolio-swatch--rosewood-dusk" />
          </div>

          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Vintage Notes is where thoughts settle, stories gather, and the year unfolds in quiet colour.
          </p>

          <a
            href="https://boutique-house-production-751b.up.railway.app/products/?collection=vintage_notes"
            className="inline-flex items-center rounded-xl bg-slate-50 text-slate-900 px-5 py-2.5 font-medium hover:bg-slate-200 transition" target="_blank" rel="noopener noreferrer"
          >
            View Vintage Notes
          </a>
        </section>

        {/* Boutique House */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Boutique House</h2>
            <p className="text-slate-300 leading-relaxed max-w-xl">
              Boutique House is a curated living environment shaped around warmth, texture, and quiet discovery.
              It blends vintage finds with atmospheric homeware, creating a digital interior that feels livedin and cinematic.
              Every object is placed like a scene: amber light, rosewood accents, soft slate shadows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="portfolio-swatch portfolio-swatch--boutique-amber" />
            <div className="portfolio-swatch portfolio-swatch--boutique-rose" />
            <div className="portfolio-swatch portfolio-swatch--boutique-slate" />
          </div>

          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
            This is retail as a home, slow, tactile, and story driven.
            Boutique House invites wandering rather than scrolling, letting visitors move through rooms instead of menus.
            A gentle, curated space where domestic mood becomes design.
          </p>

          <a
            href="https://boutique-house-production-751b.up.railway.app"
            className="inline-flex items-center rounded-xl bg-slate-50 text-slate-900 px-5 py-2.5 font-medium hover:bg-slate-200 transition" target="_blank" rel="noopener noreferrer"
          >
            Visit Boutique House
          </a>
        </section>

        <div className="about-apps-panel">
            <ul className="about-apps-grid">

              <li title="Explore the emotional language that connects all Seasonal.Studio apps.">
                <strong>Mood-Lexicon</strong>
                <p>Browse a clear, simple vocabulary of moods. Each mood links to the wider reflections family.</p>
                <div className="about-app-center">
                  <a href="https://mood-lexicon-production.up.railway.app" className="ghost-button" target="_blank" rel="noopener noreferrer">View Mood-Lexicon → </a>
                </div>
              </li>


              <li title="A daily prompt for personal reflection. Private, simple, and focused.">
                <strong>Daily Reflections</strong>
                <p>Start or end your day with a meaningful journaling prompt. Personal and private.</p>
                <div className="about-app-center">
                  <a href={withStudioReturn(DAILY_REFLECTIONS_URL)} className="ghost-button" target="_blank" rel="noopener noreferrer">View Daily Reflections → </a>
                </div>
              </li>

              <li title="Capture a thought, hold it briefly, and let it pass.">
                <strong>Centre Notes</strong>
                <p>Write a thought, hold it tightly, let it pass.</p>
                <div className="about-app-center">
                  <a href={withStudioReturn(CENTRE_NOTES_URL)} className="ghost-button" target="_blank" rel="noopener noreferrer">View Centre Notes → </a>
                </div>
              </li>

              <li title="Reflect with the rhythm of the year. Track moods and thoughts seasonally.">
                <strong>Seasonal Mind Space</strong>
                <p>Reflect with the rhythm of the year. Track your moods and thoughts seasonally.</p>
                <div className="about-app-center">
                  <a href="/seasonal-mind-space" className="ghost-button" target="_blank" rel="noopener noreferrer">View Seasonal Mind Space → </a>
                </div>
              </li>

              <li title="Create a reflective home mood. Personalise it to your taste and space.">
                <strong>Cinematic Home Glow</strong>
                <p>Create a reflective home mood. This app can be personalised to your taste and space.</p>
                <div className="about-app-center">
                  <a href={withStudioReturn(CINEMATIC_HOME_GLOW_URL)} className="ghost-button" target="_blank" rel="noopener noreferrer">View Cinematic Home Glow → </a>
                </div>
              </li>

              <li title="Let today’s sky shape today’s reflection. Weather activation coming soon.">
                <strong>Weather Atmosphere</strong>
                <p>Let today’s sky shape today’s reflection. (Weather activation coming soon!)</p>
                <div className="about-app-center">
                  <a href={withStudioReturn(WEATHER_ATMOSPHERE_URL)} className="ghost-button" target="_blank" rel="noopener noreferrer">View Weather Atmosphere → </a>
                </div>
              </li>

              <li title="Curate your emotional landscape with a personal visual moods board.">
                <strong>Moods Board</strong>
                <p>Curate your emotional landscape with a personal, visual moods board.</p>
                <div className="about-app-center">
                  <a href={withStudioReturn(MOODS_BOARD_REFLECTIONS_FAMILY_URL)} className="ghost-button" target="_blank" rel="noopener noreferrer">View Moods Board → </a>
                </div>
              </li>

              <li title="Explore my work, ethos, and creative process across apps and design projects.">
                <strong>Other Projects & Websites — Portfolio & Studio</strong>
                <p>Discover more about my work, ethos, and creative process.</p>
                <div className="about-app-center">
                  <a href={withStudioReturn(STUDIO_ABOUT_URL)} className="ghost-button" target="_blank" rel="noopener noreferrer">Stay Here → </a>
                  <Link to="/studio/portfolio" className="ghost-button">Visit Portfolio → </Link>
                </div>
              </li>
            </ul>
        </div>




        {/* §7 — Other Projects */}
        <section className="about-projects">
          <h2 className="about-section-label">Other Projects &amp; Websites</h2>
          <div className="about-projects-panel">
            <ul className="about-projects-grid">
              <li>
                <strong>Portfolio &amp; Studio</strong>
                <p>Discover more about my work, ethos, and creative process.</p>
                <div className="about-app-center">
                  <Link to="/studio/portfolio" className="ghost-button">Visit Portfolio</Link>
                </div><a className="project-link-btn ghost-button" href="/">Visit Main Site</a>
              </li>
            </ul>
          </div>
        </section>

        {/* §8 — Closing Note */}
        <section className="about-closing">
         <p className="about-closing-note">
          This site is a living project, updated thoughtfully as my work grows.
         </p>
        </section>

        {/* Add more projects here */}
      </div>
    </div>
  );
}
