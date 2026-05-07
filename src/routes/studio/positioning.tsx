import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/positioning')({
  component: () => (
    <StudioPageLayout
      title="Positioning"
      subtitle="My strategic identity and value proposition."
    >
      <div className="positioning-page">

        <h1 className="positioning-header">
          The Studio ▾ Positioning
        </h1>


        <div className="positioning-wrapper">
          <div className="positioning-glow" />
          <div className="positioning-container">

            <div className="positioning-poem">
              <p>
                Every project begins with a centre.<br />
                A place to stand, to see clearly,<br />
                to understand what the work is becoming.
              </p>

              <p>
                Positioning is the quiet architecture beneath everything,<br />
                the stance, the shape,<br />
                the way your work meets the world.
              </p>

              <p>
                We look at the tone of your project,<br />
                its rhythm, its natural strengths,<br />
                and we find the place where it feels most itself.
              </p>

              <p>
                No pressure. No performance.<br />
                Just clarity, alignment,<br />
                and a quiet sense of direction.
              </p>

              <p>
                Positioning is not about claiming space.<br />
                It's about understanding the space you already hold,<br />
                and shaping it with intention.
              </p>

              <p>
                Together we'll find the position<br />
                that feels natural, grounded, and true.
              </p>
            </div>
          </div>
        </div>

      </div>
    </StudioPageLayout>
  ),
})
