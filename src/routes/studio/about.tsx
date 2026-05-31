import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/about')({
  head: () => ({
    meta: [
      { title: 'About Seasonal.Studio — Independent UK Web Studio for Calm, Cinematic Design' },
      {
        name: 'description',
        content: 'Seasonal.Studio is a countryside-based independent studio crafting calm, cinematic, and nature-inspired slow-tech digital experiences. Led by a React and Django developer.',
      },
      { property: 'og:title', content: 'About Seasonal.Studio — Independent UK Web Studio for Calm, Cinematic Design' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://seasonal.studio/studio/about' },
      {
        property: 'og:description',
        content: 'Seasonal.Studio is a countryside-based independent studio crafting calm, cinematic, and nature-inspired slow-tech digital experiences. Led by a React and Django developer.',
      },
      { property: 'og:image', content: 'https://seasonal.studio/og/seasonal-studio-preview.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'About Seasonal.Studio — Independent UK Web Studio for Calm, Cinematic Design' },
      {
        name: 'twitter:description',
        content: 'Seasonal.Studio is a countryside-based independent studio crafting calm, cinematic, and nature-inspired slow-tech digital experiences. Led by a React and Django developer.',
      },
      { name: 'twitter:image', content: 'https://seasonal.studio/og/seasonal-studio-preview.png' },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <StudioPageLayout
      title="A small studio for calm, cinematic digital experiences."
      subtitle="Seasonal.Studio is a countryside-based independent studio shaped by nature-inspired design, slow-tech digital experiences, and the craft of a React and Django developer."
    >
      <div className="about-page">

        {/* §1 — Opening Shot */}
        <section className="about-opening">
          <div className="about-opening-inner">
            <h2 className="about-name">Sara Jane Oliver</h2>
            <p className="about-roles">
              Software Developer&nbsp;&middot;&nbsp;Digital Experience Designer&nbsp;&middot;&nbsp;Brand &amp; Communications Specialist
            </p>
            <p className="about-location">Independent web studio, UK</p>
            <p className="about-opening-line">An introduction to the person, place, and slow-tech digital experiences behind Seasonal.Studio.</p>
          </div>
        </section>

        {/* §2 — Studio Philosophy */}
        <section className="about-philosophy">
          <div className="about-philosophy-inner">
            <p className="about-philosophy-line">I design calm, cinematic digital experiences that feel clear, thoughtfully paced, and quietly useful.</p>
            <p className="about-philosophy-line">As a React and Django developer, my work brings together visual atmosphere, narrative, and nature-inspired spaces that invite reflection.</p>
            <p className="about-philosophy-line">I aim for products that are intuitive, welcoming, memorable, and rooted in a slow-tech design philosophy.</p>
          </div>
        </section>

        {/* §3 — Professional Story (Three Rooms) */}
        <section className="about-story">
          <div className="about-room about-room-origins">
            <span className="about-room-label">Origins</span>
            <p className="about-room-text">I began in advertising, retail, PR, property, and brand communications; work that taught me how people respond to stories and environments. That understanding still shapes what I create.</p>
          </div>
          <div className="about-room about-room-software">
            <span className="about-room-label">The Shift Into Software</span>
            <p className="about-room-text">In 2020, I shifted into software development and trained in full‑stack work, creating digital experiences that merge technical depth with atmospheric design.</p>
          </div>
          <div className="about-room about-room-fusion">
            <span className="about-room-label">The Fusion</span>
            <p className="about-room-text">Today, I combine brand psychology, clear storytelling, and software engineering to build digital experiences that are both practical and emotionally engaging.</p>
          </div>
        </section>


        <p className="about-centered-note">
          I am building digital experiences that feel like places; quiet, atmospheric, and alive with intention.
        </p>

        <p className="about-centered-note">
          If you’re looking for my creations, they’re gathered quietly further down.
        </p>

        {/* §4 — Competencies */}
        <section className="about-competencies-section">
          <h2 className="about-section-label">Competencies</h2>
          <div className="about-pills">
            <div className="about-pill">
              <span className="about-pill-title">Full-Stack Web Development</span>
              <span className="about-pill-desc">Creating responsive, elegant, atmospheric digital products.</span>
            </div>
            <div className="about-pill">
              <span className="about-pill-title">Digital Experience Design</span>
              <span className="about-pill-desc">Crafting interfaces that feel cinematic, intuitive, and emotionally paced.</span>
            </div>
            <div className="about-pill">
              <span className="about-pill-title">Brand Identity &amp; Creative Direction</span>
              <span className="about-pill-desc">Shaping visual language, tone, and conceptual architecture.</span>
            </div>
            <div className="about-pill">
              <span className="about-pill-title">Communication &amp; Storytelling</span>
              <span className="about-pill-desc">Translating complex ideas into clarity, mood, and meaning.</span>
            </div>
            <div className="about-pill">
              <span className="about-pill-title">Property &amp; Spatial Visualisation</span>
              <span className="about-pill-desc">Bringing physical environments to life through digital interpretation.</span>
            </div>
            <div className="about-pill about-pill-quote">
              &ldquo;I design for the feeling a space leaves behind.&rdquo;
            </div>
          </div>
        </section>

        {/* §5 — Selected Collaborations */}
        <section className="about-collaborations">
          <h2 className="about-section-label">Selected Collaborations</h2>
          <div className="about-collab-panel">
            <ul className="about-collab-grid">
              <li>KUK Marketing</li>
              <li>Hyde Park &amp; Belgravia Property Consultants</li>
              <li>The Belgravia Society</li>
              <li>Sarah Farrugia &amp; Co.</li>
              <li>Belgravia Residents Association</li>
              <li>Yves Delorme</li>
              <li>Inference Consultants</li>
              <li>English Speaking Union</li>
              <li>DBMB (Sydney &amp; Hong Kong)</li>
              <li>Cartier (Sydney)</li>
            </ul>
          </div>
        </section>


        {/* §6 — Explore My Apps */}
        <section className="about-apps">
          <h2 className="about-section-label">Explore My Apps</h2>
          <div className="about-apps-panel">
            <ul className="about-apps-grid">
              <li>
                <strong>Daily Reflections</strong>
                <p>Start or end your day with a meaningful journaling prompt. Personal and private.</p>
                <div className="about-app-center">
                  <a href="https://soliv1.github.io/Daily-Reflections-App/" className="ghost-button" target="_blank" rel="noopener noreferrer">Try App</a>
                </div>
              </li>
              <li>
                <strong>Seasonal Mind Space</strong>
                <p>Reflect with the rhythm of the year. Track your moods and thoughts seasonally.</p>
                <div className="about-app-center">
                  <a href="https://soliv1.github.io/Seasonal-mind-space/" className="ghost-button" target="_blank" rel="noopener noreferrer">Try App</a>
                </div>
              </li>
              <li>
                <strong>Cinematic Home Glow</strong>
                <p>Create a reflective home mood. This app can be personalised to your taste and space.</p>
                <div className="about-app-center">
                  <a href="https://inspo-home-cinematic.onrender.com/" className="ghost-button" target="_blank" rel="noopener noreferrer">Try App</a>
                </div>
              </li>
              <li>
                <strong>Weather Atmosphere</strong>
                <p>Let today’s sky shape today’s reflection. (Weather activation coming soon!)</p>
                <div className="about-app-center">
                  <a href="https://reflections-weather-atmosphere.netlify.app/" className="ghost-button" target="_blank" rel="noopener noreferrer">Try App</a>
                </div>
              </li>
              <li>
                <strong>Moods Board</strong>
                <p>Coming soon: Curate your emotional landscape with a personal, visual moods board.</p>
                <span className="app-download-btn app-coming-soon">Coming Soon</span>
              </li>
            </ul>
          </div>
        </section>

        {/* §7 — Other Projects */}
        <section className="about-projects">
          <h2 className="about-section-label">Other Projects &amp; Websites</h2>
          <div className="about-projects-panel">
            <ul className="about-projects-grid">
              <li>
                <strong>Portfolio &amp; Studio</strong>
                <p>Discover more about my work, ethos, and creative process.</p>
                <div className="about-app-center">
                  <a href="https://soliv1.github.io/Daily-Reflections-App/" className="ghost-button" target="_blank" rel="noopener noreferrer">Try App</a>
                </div><a className="project-link-btn ghost-button" target="_blank" rel="noopener noreferrer" href="/">Visit Main Site</a>
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

      </div>
    </StudioPageLayout>
  )
}
