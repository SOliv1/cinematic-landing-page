import { createFileRoute } from "@tanstack/react-router";
import AtmosphericBanner from "@/components/AtmosphericBanner";
import SeasonalCard from "@/components/SeasonalCard";
import { StudioPageLayout } from "@/components/StudioPageLayout";
import StudioNavBar from "@/components/StudioNavBar";

export const Route = createFileRoute("/studio/why-seasonal")({
  component: WhySeasonalPage,
});

function WhySeasonalPage() {
  return (
    <StudioPageLayout
      title="Why Seasonal"
      subtitle="A studio shaped by rhythm, architecture, and emotional clarity."
    >
      <div className="positioning-page why-seasonal-page">
        <h1 className="positioning-header">The Studio ▾ Why Seasonal</h1>

        <div className="positioning-wrapper why-seasonal-wrapper">
          <div className="positioning-glow" />

          <div className="positioning-container why-seasonal-container">
            <StudioNavBar />

            <AtmosphericBanner
              src="/images/orbs/originOfLight.png"
              title="The Origin Light"
              alt="The Origin Light — atmospheric glowing orb in warm dusk haze"
            />

            <div className="why-seasonal-grid">
              <SeasonalCard>
                <p>Most studios build brands.</p>
                <p>Seasonal builds places — digital interiors with atmosphere, rhythm, and emotional clarity.</p>
                <p>Not branding theatre. Architectural strategy for people who want depth, not noise.</p>
              </SeasonalCard>

              <SeasonalCard>
                <p>The industry sells “big brand energy.” Seasonal offers interior alignment.</p>
                <p>You don’t need to shout. You need to stand where your work feels most itself.</p>
                <p>Positioning as a centre, not a claim.</p>
              </SeasonalCard>

              <SeasonalCard>
                <p>Your work shouldn’t feel like a website. It should feel like a room you can walk into.</p>
                <p>Warm dusk gradients. Soft architectural beams. Negative space that breathes. Typography like a whisper.</p>
                <p>These aren’t screens. They’re interiors.</p>
              </SeasonalCard>

              <SeasonalCard>
                <p>Most studios move fast. Seasonal moves with intention.</p>
                <p>A seasonal rhythm. A gentle pace. A way of working that supports the work.</p>
                <p>No pressure. No performance. Clarity at the right tempo.</p>
              </SeasonalCard>

              <SeasonalCard>
                <p>Clients don’t just get a brand. They get a place where their work feels safe, seen, understood.</p>
                <p>Design as care. Strategy as listening. Architecture as emotional clarity.</p>
              </SeasonalCard>

              <SeasonalCard>
                <p>Seasonal is for people who want depth, meaning, resonance — a home for their work.</p>
                <p>Not noise. Not spectacle. Not a brand mask.</p>
                <p>Digital interiors that feel natural, grounded, and true.</p>
                <p>A place to stand.</p>
              </SeasonalCard>
            </div>
          </div>
        </div>
      </div>
    </StudioPageLayout>
  );
}
