import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/unlock-more')({
  component: UnlockMorePage,
})

const features = [
  { label: 'Daily prompt', free: 'Included', premium: 'Included' },
  { label: 'Saved reflections', free: 'Limited', premium: 'Unlimited' },
  { label: 'Modules', free: '1-2', premium: 'All' },
  { label: 'Seasonal packs', free: 'Not included', premium: 'Included' },
  { label: 'Custom themes and audio', free: 'Not included', premium: 'Included' },
  { label: 'Export journal', free: 'Not included', premium: 'Included' },
  { label: 'Lock/private mode', free: 'Not included', premium: 'Included' },
  { label: 'One-off packs', free: 'Not included', premium: 'Available to purchase' },
]

const packs = [
  {
    title: 'Winter Reflection Pack',
    summary: 'Slow prompts for rest, restorative rituals, and making meaning in the darker months.',
  },
  {
    title: 'New Year Reset',
    summary: 'A gentle reset for intentions, boundaries, and choosing what you want to carry forward.',
  },
  {
    title: 'Autumn Glow',
    summary: 'Seasonal prompts for harvest energy, endings, warmth, and small creative returns.',
  },
  {
    title: 'Self-Love Month',
    summary: 'Reflective exercises for tenderness, self-trust, and kinder inner language.',
  },
  {
    title: 'Creativity Reset',
    summary: 'Playful prompts and visual cues for finding your creative rhythm again.',
  },
]

function FeatureValue({ value }: { value: string }) {
  const included = value === 'Included'
  const excluded = value === 'Not included'

  return (
    <span
      className={
        included
          ? 'unlockmore-status unlockmore-status--included'
          : excluded
            ? 'unlockmore-status unlockmore-status--excluded'
            : undefined
      }
    >
      {included ? 'Yes' : excluded ? 'No' : value}
    </span>
  )
}

function UnlockMorePage() {
  const [openPack, setOpenPack] = useState(packs[0].title)

  return (
    <StudioPageLayout title="Unlock More" subtitle="Gentle upgrades for deeper reflection">
      <main className="unlockmore-page fade-in">
        <section className="unlockmore-intro">
          <p className="unlockmore-kicker">Studio upgrades</p>
          <h2 className="unlockmore-title">Unlock More Mindful Moments</h2>
          <p className="unlockmore-lead">
            Start simple, stay private, and upgrade only if it feels right. No ads,
            no pressure, just more ways to reflect, create, and grow.
          </p>
        </section>

        <section className="unlockmore-table" aria-label="Free and premium feature comparison">
          <table className="unlockmore-pricing-table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Free</th>
                <th scope="col">Premium</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.label}>
                  <th scope="row">{feature.label}</th>
                  <td data-label="Free">
                    <FeatureValue value={feature.free} />
                  </td>
                  <td data-label="Premium">
                    <FeatureValue value={feature.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="unlockmore-packs">
          <p className="unlockmore-section-label">One-off Reflection Packs</p>
          <ul className="unlockmore-packs-list">
            {packs.map((pack) => (
              <li key={pack.title}>
                <button
                  type="button"
                  className="unlockmore-pack-button"
                  aria-expanded={openPack === pack.title}
                  aria-controls={`pack-${pack.title.toLowerCase().replaceAll(' ', '-')}`}
                  onClick={() => setOpenPack((current) => current === pack.title ? '' : pack.title)}
                >
                  {pack.title}
                </button>
                <p
                  id={`pack-${pack.title.toLowerCase().replaceAll(' ', '-')}`}
                  className="unlockmore-pack-summary"
                  hidden={openPack !== pack.title}
                >
                  {pack.summary}
                </p>
              </li>
            ))}
          </ul>
          <p className="unlockmore-note">
            Each pack includes unique prompts, visuals, and seasonal inspiration.
            More coming soon.
          </p>
        </section>

        <section className="unlockmore-cta">
          <p>
            Ready to unlock more?{' '}
            <Link to="/studio/work-with-me">Contact me</Link> for early access or
            questions.
          </p>
        </section>
      </main>
    </StudioPageLayout>
  )
}
