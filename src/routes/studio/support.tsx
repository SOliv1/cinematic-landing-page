import { createFileRoute, Link } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/support')({
  component: SupportPage,
})

function SupportPage() {
  return (
    <StudioPageLayout
      title="Support"
      subtitle="Support policy for Seasonal.Studio licences, digital products, and studio work."
    >
      <section className="licensing">
        <header className="page-header">
          <h1>Support Policy</h1>
          <p className="subtitle">Clear boundaries for help, maintenance, and custom work.</p>
        </header>

        <section className="intro">
          <p>
            Support is available for licensed Seasonal.Studio materials and agreed studio
            work. The exact support included depends on your licence tier, project scope,
            or written agreement.
          </p>
        </section>

        <section>
          <h2>What Support Can Include</h2>
          <ul>
            <li>setup guidance for supplied digital materials</li>
            <li>reasonable integration questions</li>
            <li>documentation clarification</li>
            <li>bug reports relating to Seasonal.Studio supplied files</li>
            <li>licence-scope questions before implementation</li>
          </ul>
        </section>

        <section>
          <h2>What Is Separate</h2>
          <ul>
            <li>bespoke development or design customisation</li>
            <li>third-party platform debugging</li>
            <li>major framework migrations</li>
            <li>ongoing maintenance retainers</li>
            <li>new features beyond the original licence or scope</li>
          </ul>
        </section>

        <section>
          <h2>Response Times</h2>
          <p>
            Response times are agreed per licence or project. Where no custom support plan is
            in place, enquiries are handled as studio availability allows.
          </p>
        </section>

        <section>
          <h2>Before You Purchase</h2>
          <p>
            If you need a specific implementation path, platform guarantee, or maintenance
            arrangement, please confirm that before purchasing a licence.
          </p>
          <p>
            Support is subject to the <Link to="/studio/terms">Terms & Conditions</Link> and
            the relevant licence agreement.
          </p>
        </section>
      </section>
    </StudioPageLayout>
  )
}
