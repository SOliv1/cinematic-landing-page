import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'


export const Route = createFileRoute('/studio/depth-levels')({
  component: () => (
    <StudioPageLayout
      title="Depth Levels"
      subtitle="My pricing tiers, framed as layers of involvement."
    >
      <main className="depth-page">
        {/* Radial twilight header */}
        <section className="depth-header">
          <div className="depth-header-orb" />
          <div className="depth-header-inner">
            <h1 className="depth-title">Depth Levels</h1>
            <p className="depth-subtitle">
              Four rooms. Four ways of working.
            </p>
            <p className="depth-reassurance">
              Some projects start softly. Some take shape with more structure.
              Some unfold over time. There's no hierarchy here,
              just the room that fits your project best.
            </p>
          </div>
        </section>

        {/* Rooms */}
        <section className="depth-rooms">
          {/* Room I – Surface */}
          <article className="depth-room depth-room--surface">
            <div className="depth-room-inner">
              <header className="depth-room-header">
                <h2 className="depth-room-title">Surface</h2>
                <p className="depth-room-price">£1,200 – £2,500</p>
              </header>
              <p className="depth-room-tagline">The lightest touch. A quiet beginning.</p>
              <p className="depth-room-body">
                A soft room for projects that want clarity without intensity.
                A gentle shaping, a warm introduction, a way to begin without
                pressure. Light, breathable, calm, a place where ideas can settle.
              </p>
            </div>
          </article>

          {/* Room II – Structure */}
          <article className="depth-room depth-room--structure">
            <div className="depth-room-inner">
              <header className="depth-room-header">
                <h2 className="depth-room-title">Structure</h2>
                <p className="depth-room-price">£3,000 – £6,000</p>
              </header>
              <p className="depth-room-tagline">Where form begins to appear.</p>
              <p className="depth-room-body">
                A room for shaping rhythm, proportion, and flow. We work together,
                steadily and openly, finding the architecture that feels true.
                Still gentle, still warm, just a little more defined.
              </p>
            </div>
          </article>

          {/* Room III – Essence */}
          <article className="depth-room depth-room--essence">
            <div className="depth-room-inner">
              <header className="depth-room-header">
                <h2 className="depth-room-title">Essence</h2>
                <p className="depth-room-price">£7,000 – £12,000</p>
              </header>
              <p className="depth-room-tagline">The interior breathes.</p>
              <p className="depth-room-body">
                A deeper room for projects that want atmosphere, story, and
                emotional resonance. Here the work becomes cinematic, warm,
                intentional, alive. Not heavier, just more present.
              </p>
            </div>
          </article>

          {/* Room IV – Continuum */}
          <article className="depth-room depth-room--continuum">
            <div className="depth-room-inner">
              <header className="depth-room-header">
                <h2 className="depth-room-title">Continuum</h2>
                <p className="depth-room-price">£15,000 – £25,000</p>
              </header>
              <p className="depth-room-tagline">A living interior.</p>
              <p className="depth-room-body">
                A quiet, ongoing relationship where the work evolves with the
                seasons. Not a commitment, a companionship. A room that grows,
                shifts, and deepens over time.
              </p>
            </div>
          </article>
        </section>

        {/* Closing line */}
        <section className="depth-closing">
          <p>
            Depth isn’t about going further, it’s about finding the room where
            your work can breathe.
          </p>
        </section>
      </main>
    </StudioPageLayout>
  ),
})
