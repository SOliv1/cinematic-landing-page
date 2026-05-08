import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/depth-levels')({
  component: () => (
    <StudioPageLayout
      title="Depth Levels"
      subtitle="Four levels of digital depth."
    >
      <main className="depth-layout">
        <header className="depth-header">
          <p className="depth-kicker">Studio · Depth Levels</p>
          <h1 className="depth-title">How deep we go</h1>
          <p className="depth-intro">
            Four levels of digital depth. From a simple threshold to a complete
            Seasonal system.
          </p>
        </header>

        <section className="depth-level">
          <div className="depth-pill">LEVEL 1 · THE THRESHOLD</div>
          <p className="depth-description">
            A simple, clear entry point designed to introduce the core idea with
            minimal structure and low cognitive load. This level focuses on
            light, clarity, and orientation. A single page or minimal layout
            that sets the tone without revealing the full interior.
          </p>

          <div className="depth-examples">
            <h3 className="depth-examples-title">Examples</h3>
            <ul>
              <li>Inspo · Home Cinematic</li>
              <li>Reflections · Glow (Preview)</li>
            </ul>
          </div>
        </section>

        <section className="depth-level">
          <div className="depth-pill">LEVEL 2 · THE QUIET ROOM</div>
          <p className="depth-description">
            A focused, minimal environment shaped for clarity and calm. A
            single, self contained interface with gentle atmosphere and a clear
            purpose. A quiet room designed for ease, presence, and emotional
            steadiness.
          </p>

          <div className="depth-examples">
            <h3 className="depth-examples-title">Examples</h3>
            <ul>
              <li>Reflections · Weather</li>
              <li>Reflections · Glow (Room)</li>
            </ul>
          </div>
        </section>

        <section className="depth-level">
          <div className="depth-pill">LEVEL 3 · THE INTERIOR STUDIO</div>
          <p className="depth-description">
            A crafted digital interior shaped with architectural depth,
            cinematic pacing, and a clear spatial logic. This level introduces
            multi page structure, a philosophy layer, atmospheric transitions,
            and global components that create a sense of place. A designed
            environment built for rhythm, focus, and atmosphere.
          </p>

          <div className="depth-featured">
            <h3 className="depth-featured-label">Featured example</h3>
            <h2 className="depth-featured-title">The Living Interface</h2>
            <p className="depth-featured-text">
              The Living Interface is a Level 3 Interior Studio. A crafted,
              cinematic, architectural digital environment with its own
              philosophy, atmosphere, and spatial logic. It demonstrates the
              full depth of this level. Multi page interior logic, a living
              navigation system, global components, and a designed sense of
              place. This is the benchmark for Level 3 work.
            </p>
          </div>

          <div className="depth-examples">
            <h3 className="depth-examples-title">Additional Level 3 examples</h3>
            <ul>
              <li>Reflections · Constellations</li>
              <li>Reflections · Studio App</li>
            </ul>
          </div>
        </section>

        <section className="depth-level">
          <div className="depth-pill">LEVEL 4 · THE SEASONAL SYSTEM</div>
          <p className="depth-description">
            A fully bespoke ecosystem designed for depth, continuity, and long
            form engagement. This level includes multi app logic, personalised
            behaviour, data flows, dashboards, and a coherent Seasonal system
            that adapts over time. A complete environment shaped for ongoing
            work and evolution.
          </p>

          <div className="depth-examples">
            <h3 className="depth-examples-title">Examples</h3>
            <ul>
              <li>Seasonal Suite (In Development)</li>
              <li>Reflections · System (Private)</li>
            </ul>
          </div>
        </section>
      </main>
    </StudioPageLayout>
  ),
})
