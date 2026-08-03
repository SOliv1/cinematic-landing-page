import { Link, createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/licencing')({
  component: StudioLicencingPage,
})

function StudioLicencingPage() {
  return (
    <StudioPageLayout
      title="Licensing"
      subtitle="Clear licensing, calm support, and long-term care for Living Atmosphere."
    >
      <main className="licencing-page">
        <section className="licencing-hero">
          <div className="licencing-hero-inner">
            <h1>Living Atmosphere Licensing</h1>
            <p>
              Bring Seasonal.Studio's cinematic atmosphere into your own digital space.
              Clear licensing. Calm support. No hidden complexity.
            </p>
          </div>
        </section>

        <section className="licencing-intro">
          <div className="licencing-intro-inner">
            <h2>How licensing works</h2>
            <p>
              The Living Atmosphere is licensed per project. You keep the engine forever.
              Support and updates are available in simple tiers.
            </p>
            <div className="licencing-cta-row">
              <Link to="/studio/demo" className="btn-primary">
                View Atmosphere Demo
              </Link>
              <Link to="/studio/terms" className="btn-ghost">
                View full Terms & Conditions
              </Link>
            </div>
          </div>
        </section>

        <section className="licencing-tiers">
          <h2>Licence tiers</h2>
          <p>Choose the level of support and refinement that matches your project.</p>

          <div className="licencing-tier-grid">
            <article className="licencing-tier-card">
              <h3>Atmosphere Basic</h3>
              <p className="tier-price">£199-£499 per project</p>
              <ul>
                <li>Perpetual licence for one website or app</li>
                <li>Core Living Atmosphere engine</li>
                <li>90 days bug-fix support</li>
                <li>Required attribution: "Atmospheric engine by Seasonal.Studio"</li>
              </ul>
              <Link className="btn-secondary" to="/studio/work-with-me#studio-contact-form">
                Request Basic Licence
              </Link>
            </article>

            <article className="licencing-tier-card">
              <h3>Atmosphere Studio</h3>
              <p className="tier-price">£799-£1,500 per project</p>
              <ul>
                <li>Perpetual licence for one website or app</li>
                <li>Refined configuration and integration guidance</li>
                <li>6 months bug-fix support + minor updates</li>
                <li>Optional attribution</li>
              </ul>
              <Link className="btn-secondary" to="/studio/work-with-me#studio-contact-form">
                Request Studio Licence
              </Link>
            </article>

            <article className="licencing-tier-card">
              <h3>Atmosphere Cinematic</h3>
              <p className="tier-price">£2,000+ per project</p>
              <ul>
                <li>Perpetual licence for one flagship experience</li>
                <li>Custom tuning of moods, seasons and transitions</li>
                <li>12 months bug-fix support + feature updates</li>
                <li>Priority support and implementation calls</li>
              </ul>
              <Link className="btn-secondary" to="/studio/work-with-me#studio-contact-form">
                Request Cinematic Licence
              </Link>
            </article>
          </div>
        </section>

        <section className="licencing-support">
          <h2>Support and maintenance</h2>
          <p>
            Every licence includes a defined support period. You can renew support annually
            without losing your licence.
          </p>

          <div className="licencing-support-grid">
            <div>
              <h3>Support periods</h3>
              <ul>
                <li>Basic: 90 days bug-fix support</li>
                <li>Studio: 6 months bug-fix + minor updates</li>
                <li>Cinematic: 12 months bug-fix + feature updates</li>
              </ul>
            </div>
            <div>
              <h3>Renewal options</h3>
              <ul>
                <li>Basic: £49/year support renewal</li>
                <li>Studio: £149/year support renewal</li>
                <li>Cinematic: £299/year support renewal</li>
                <li>3-year continuity plans with loyalty pricing</li>
              </ul>
            </div>
          </div>

          <nav className="licencing-links" aria-label="Licensing resources">
            <Link to="/studio/support">How Support Works</Link>
            <Link to="/studio/maintenance-roadmap">Maintenance Roadmap</Link>
            <Link to="/studio/terms">View full Terms & Conditions</Link>
          </nav>
        </section>

        <section className="licencing-contact">
          <h2>Talk to Seasonal.Studio</h2>
          <p>
            For bespoke licensing, multi-project agreements or agency partnerships,
            contact us with a short outline of your project.
          </p>
          <p className="licencing-email">
            Email: <a href="mailto:support@seasonal.studio">support@seasonal.studio</a>
          </p>
        </section>
      </main>
    </StudioPageLayout>
  )
}
