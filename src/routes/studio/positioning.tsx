import { createFileRoute } from "@tanstack/react-router";
import AtmosphericBanner from "@/components/AtmosphericBanner";
import StudioLayout from "@/components/StudioLayout";
import { StudioPageLayout } from "@/components/StudioPageLayout";

export const Route = createFileRoute("/studio/positioning")({
  component: PositioningPage,
});

function PositioningPage() {
  return (
    <StudioPageLayout
      title="Positioning"
      subtitle="My strategic identity and value proposition."
    >
      <StudioLayout title="The Studio ▾ Positioning">
        <AtmosphericBanner
          src="/images/orbs/glowingOrbAboveSereneHorizon.png"
          title="The Mirror Plane"
          alt="The Mirror Plane, pale orb above a reflective plane in cool dusk light"
        />

        <div className="space-y-10">
          <div className="space-y-2">
            <p>Every project begins with a centre;</p>
            <p>a place to stand, to see, to begin.</p>
          </div>

          <div className="h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

          <div className="space-y-2">
            <p>Positioning is the quiet architecture</p>
            <p>beneath the work, the stance, the shape;</p>
            <p>the way it meets the world.</p>
          </div>

          <div className="h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

          <div className="space-y-2">
            <p>We listen for tone, rhythm, and natural strength;</p>
            <p>the place where the project feels most itself.</p>
          </div>

          <div className="h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

          <div className="space-y-2">
            <p>No pressure. No performance.</p>
            <p>Only clarity, alignment,</p>
            <p>and a quiet sense of direction.</p>
          </div>

          <div className="h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

          <div className="space-y-2">
            <p>Positioning isn’t about claiming space;</p>
            <p>it’s recognising the space already held and shaping it with intention.</p>
          </div>

          <div className="h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

          <div className="space-y-2">
            <p>Together, we find the position</p>
            <p>that feels grounded, natural, and true.</p>
          </div>
        </div>
      </StudioLayout>
    </StudioPageLayout>
  );
}
