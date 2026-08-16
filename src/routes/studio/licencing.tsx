import { Link, createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/licencing')({
  component: () => (
    <StudioPageLayout
      title="Licencing"
      subtitle="Usage, adaptation, and partnership terms for Seasonal.Studio work."
    >
      <section className="licensing">
        <header className="page-header">
          <h1>Licensing: Living Atmosphere</h1>
          <p className="subtitle">A calm, atmospheric interaction layer for digital experiences.</p>
        </header>

        <section className="intro">
          <p>
            Living Atmosphere brings seasonal ambience, cinematic transitions, and emotional pacing
            to any web app or studio environment. It's designed for creators who want their digital
            spaces to feel gentle, intentional, and alive.
          </p>
        </section>

        <section className="definition">
          <h2>What Living Atmosphere Is</h2>
          <ul>
            <li>seasonal tinting</li>
            <li>time-of-day ambience</li>
            <li>weather-aware shimmer</li>
            <li>cinematic transitions</li>
            <li>reflective pacing</li>
            <li>mood-aware UI behaviour</li>
            <li>calm, intentional interaction patterns</li>
          </ul>
          <p>
            A lightweight layer that sits inside your existing app or site, shaping how it feels
            rather than how it looks.
          </p>
        </section>

        <section className="function">
          <h2>What It Does</h2>
          <ul>
            <li>a sense of rhythm and emotional safety</li>
            <li>a calmer, more reflective user experience</li>
            <li>atmospheric transitions that feel cinematic</li>
            <li>seasonal intelligence that responds to time, light, and weather</li>
            <li>gentle pacing that supports wellbeing, journaling, and mindful interaction</li>
          </ul>
          <p>
            Designed for digital spaces that value clarity, warmth, and emotional resonance.
          </p>
        </section>

        <section className="audience">
          <h2>Who It's For</h2>
          <ul>
            <li>wellbeing apps</li>
            <li>journaling platforms</li>
            <li>mindfulness studios</li>
            <li>boutique creative agencies</li>
            <li>slow-tech communities</li>
            <li>atmospheric landing pages</li>
            <li>reflective digital spaces</li>
            <li>seasonal or nature-aligned brands</li>
          </ul>
          <p>
            If your work centres on calm, clarity, or emotional rhythm, Living Atmosphere adds
            depth without complexity.
          </p>
        </section>

        <section className="pricing">
          <h2>Licensing Options</h2>

          <section className="pricing-graphic" aria-label="Living Atmosphere pricing tiers">
            <div className="tier">
              <h3>Single-Use Licence</h3>
              <p>One app or one digital experience</p>
              <p className="price">£199-£499</p>
            </div>

            <div className="tier">
              <h3>Studio Licence</h3>
              <p>Unlimited use within one studio</p>
              <p className="price">£799-£1,500</p>
            </div>

            <div className="tier">
              <h3>Extended Commercial</h3>
              <p>Large-scale apps and subscription platforms</p>
              <p className="price">£2,000+</p>
            </div>
          </section>
        </section>

        <section className="demo">
          <h2>Demo</h2>
          <p>
            A small interactive demo is available to show Living Atmosphere in motion - seasonal
            tinting, cinematic transitions, and reflective pacing.
          </p>
          <Link className="licensing-demo-link" to="/studio/demo">
            View the demo
          </Link>
        </section>

        <section className="how-it-works">
          <h2>How Licensing Works</h2>
          <ol>
            <li>Choose your licence tier</li>
            <li>Receive the Living Atmosphere module</li>
            <li>Integrate it into your app or site</li>
            <li>Add ambience, rhythm, and cinematic behaviour with minimal setup</li>
          </ol>
          <p>Support is available for integration and customisation.</p>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>
            If you'd like to license Living Atmosphere or explore how it can support your digital
            space, you can reach out through the studio's contact page.
          </p>
          <p>A calm, atmospheric layer for digital experiences - available to license.</p>
        </section>
      </section>
    </StudioPageLayout>
  ),
})
