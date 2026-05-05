import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <StudioPageLayout title="About" subtitle="">
      <div className="about-page">

        {/* §1 — Opening Shot */}
        <section className="about-opening">
          <div className="about-opening-inner">
            <h1 className="about-name">Sara Jane Oliver</h1>
            <p className="about-roles">
              Software Developer&nbsp;&middot;&nbsp;Digital Experience Designer&nbsp;&middot;&nbsp;Brand &amp; Communications Specialist
            </p>
            <p className="about-location">London, UK</p>
            <p className="about-opening-line">A quiet introduction to who I am and how I think.</p>
          </div>
        </section>

        {/* §2 — Studio Philosophy */}
        <section className="about-philosophy">
          <div className="about-philosophy-inner">
            <p className="about-philosophy-line">I build digital experiences that breathe spaces shaped by light, rhythm, and emotional clarity.</p>
            <p className="about-philosophy-line">My work sits at the intersection of software, design, and storytelling, where atmosphere matters as much as function.</p>
            <p className="about-philosophy-line">I believe in products that feel lived-in, intuitive, and quietly cinematic.</p>
          </div>
        </section>

        {/* §3 — Professional Story (Three Rooms) */}
        <section className="about-story">
          <div className="about-room about-room-origins">
            <span className="about-room-label">Origins</span>
            <p className="about-room-text">My career began in the layered worlds of advertising, luxury retail, PR, property, and brand communications. These early years taught me how people respond to stories, environments, and emotional cues — lessons that still shape everything I create.</p>
          </div>
          <div className="about-room about-room-software">
            <span className="about-room-label">The Shift Into Software</span>
            <p className="about-room-text">In 2020, I stepped fully into software development, drawn to the precision and possibility of building interactive experiences. I trained in full-stack development and began crafting digital products that merge technical depth with atmospheric design.</p>
          </div>
          <div className="about-room about-room-fusion">
            <span className="about-room-label">The Fusion</span>
            <p className="about-room-text">Today, my work blends brand psychology, narrative clarity, and software engineering into a single practice. I design products that are functional, elegant, and emotionally resonant experiences that guide, comfort, and quietly transform.</p>
          </div>
        </section>

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

        {/* §6 — Closing Note */}
        <section className="about-closing">
          <p className="about-closing-line">I am building digital experiences that feel like places — quiet, atmospheric, and alive with intention.</p>
        </section>

      </div>
    </StudioPageLayout>
  )
}