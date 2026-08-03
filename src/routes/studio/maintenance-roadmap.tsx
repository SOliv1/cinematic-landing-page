import { createFileRoute, Link } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/maintenance-roadmap')({
  component: MaintenanceRoadmapPage,
})

function MaintenanceRoadmapPage() {
  return (
    <StudioPageLayout
      title="Maintenance Roadmap"
      subtitle="How Seasonal.Studio approaches updates, compatibility, and product care."
    >
      <section className="licensing">
        <header className="page-header">
          <h1>Maintenance Roadmap</h1>
          <p className="subtitle">A practical view of how licensed materials are looked after.</p>
        </header>

        <section className="intro">
          <p>
            Seasonal.Studio products are designed as calm, durable digital systems.
            Maintenance focuses on preserving clarity, compatibility, accessibility, and
            the intended atmosphere of each release.
          </p>
        </section>

        <section>
          <h2>Current Priorities</h2>
          <ul>
            <li>documentation for licence holders</li>
            <li>small compatibility refinements for modern web environments</li>
            <li>accessibility and responsive behaviour reviews</li>
            <li>clearer setup notes for atmospheric interaction modules</li>
          </ul>
        </section>

        <section>
          <h2>Planned Improvements</h2>
          <ul>
            <li>expanded integration examples</li>
            <li>additional seasonal presets</li>
            <li>more precise support and maintenance package options</li>
            <li>licence-holder guidance for customisation boundaries</li>
          </ul>
        </section>

        <section>
          <h2>Maintenance Boundaries</h2>
          <p>
            Roadmap items are directional and may change. Maintenance does not include
            unlimited custom work, platform-specific rebuilds, or guaranteed third-party
            compatibility unless agreed in writing.
          </p>
          <p>
            For licence and support boundaries, see the{' '}
            <Link to="/studio/terms">Terms & Conditions</Link> and{' '}
            <Link to="/studio/support">Support Policy</Link>.
          </p>
        </section>
      </section>
    </StudioPageLayout>
  )
}
