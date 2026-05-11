import { createFileRoute } from '@tanstack/react-router'
import AtmosphericBanner from '@/components/AtmosphericBanner'
import StudioLayout from '@/components/StudioLayout'
import { StudioPageLayout } from '@/components/StudioPageLayout'


export const Route = createFileRoute('/studio/interiors')({
  component: () => (
    <StudioPageLayout
      title="Interiors"
      subtitle="My services, framed as cinematic digital interiors."
    >
      <StudioLayout title="The Studio ▾ Interiors">
        <AtmosphericBanner
          src="/images/orbs/glowing-orb-translucent-chamber16x9.png"
          title="The Translucent Chamber"
          alt="The glowing orb translucent chamber with soft reflections in mist"
        />

        <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_rgba(255,220,180,0.12),_transparent_70%)]">

      <header className="relative mb-28 pt-28 pb-24 px-6 md:px-12">

        {/* Warm Atmospheric Wash — no edges, no fade */}
        <div
          className="
            absolute inset-0
            -z-10
            bg-[radial-gradient(circle_at_40%_20%,_rgba(255,200,150,0.12),_transparent_85%)]
            opacity-90
          "
        />

        {/* Soft Glow — extremely diffused */}
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[32rem] h-[32rem]
            rounded-full
            bg-[rgba(255,220,180,0.08)]
            blur-[140px]
            -z-10
          "
        />

        <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight mb-10">
          Interiors
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed text-white/80">
          I design from the interior out.
        </p>

      </header>

      <section className="mb-32">
        <div
          className="
            rounded-3xl
            backdrop-blur-xl
            bg-white/15
            border border-white/10
            shadow-[0_0_50px_-12px_rgba(255,200,150,0.25)]
            p-10 md:p-14
          "
        >
          <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
            Interiors
          </h3>

          <div className="space-y-1 leading-tight">
            <p>Interior first.</p>
            <p>Essence leads.</p>
            <p>Form follows truth.</p>
            <p>Rooms, thresholds, atmospheres shaped for clarity and light.</p>
          </div>
        </div>
      </section>

      <section className="space-y-24"></section>
      <section className="space-y-24">

      {/* Rooms */}
        <div
          className="
            group
            rounded-3xl
            backdrop-blur-xl
            bg-white/15
            border border-white/10
            shadow-[0_0_40px_-12px_rgba(255,200,150,0.25)]
            p-10 md:p-14
            transition-all duration-500
            hover:bg-white/20
            hover:shadow-[0_0_55px_-10px_rgba(255,200,150,0.35)]
            hover:-translate-y-1
          "
        >
          <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
            Rooms
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Each app is a room with its own interior truth, shaped for clarity and calm. Nothing extra.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">Just the essence.</p>
        </div>

      {/* Warm Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C89A5A]/30 to-transparent"></div>

        {/* Thresholds */}
        <div
          className="
            group
            rounded-3xl
            backdrop-blur-xl
            bg-white/15
            border border-white/10
            shadow-[0_0_40px_-12px_rgba(255,200,150,0.25)]
            p-10 md:p-14
            transition-all duration-500
            hover:bg-white/20
            hover:shadow-[0_0_55px_-10px_rgba(255,200,150,0.35)]
            hover:-translate-y-1
          "
        >
          <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
            Thresholds
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Movement between spaces should feel natural. Thresholds guide the pace and keep the experience coherent.
          </p>
        </div>

              {/* Warm Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C89A5A]/30 to-transparent"></div>

            {/* Atmospheres */}
        <div
          className="
            group
            rounded-3xl
            backdrop-blur-xl
            bg-white/15
            border border-white/10
            shadow-[0_0_40px_-12px_rgba(255,200,150,0.25)]
            p-10 md:p-14
            transition-all duration-500
            hover:bg-white/20
            hover:shadow-[0_0_55px_-10px_rgba(255,200,150,0.35)]
            hover:-translate-y-1
          "
        >
          <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
            Atmospheres
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Light, colour, and tone shift gently through the day. Atmosphere is the
            quiet presence that holds the room; warm, alive, and always in motion.
          </p>
        </div>

      </section>

        </div>
      </StudioLayout>
    </StudioPageLayout>

    ),
  })
