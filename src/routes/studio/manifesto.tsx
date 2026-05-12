import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'
import StudioLayout from '@/components/StudioLayout'

export const Route = createFileRoute('/studio/manifesto')({
  component: () => (
    <StudioPageLayout
      title="Manifesto"
      subtitle="My Seasonal principles, my philosophy."
    >
      <StudioLayout title="The Studio ▾ Manifesto">
        <section className="mb-32">
          <div className="
            rounded-3xl
            backdrop-blur-xl
            bg-white/10
            border border-white/10
            shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]
            p-10 md:p-14
          ">
            <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6">
              The Architectural Law
            </h1>

            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4 leading-snug">
              Life is the structure.<br />
              Truth is the interior.<br />
              Love is the light.
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Structure holds. Interior reveals. Light completes.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              The material view notices what is visible.<br />
              The interior view understands what is true.
            </p>
          </div>
        </section>
      </StudioLayout>
    </StudioPageLayout>
  ),
})
