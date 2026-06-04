
import { createFileRoute } from '@tanstack/react-router'
import { ManifestoCard } from '../../components/manifesto/ManifestoCard'
import { ManifestoGallery } from '../../components/manifesto/ManifestoGallery'
import { StudioPageLayout } from '../../components/StudioPageLayout'
import StudioLayout from '../../components/StudioLayout'

export const Route = createFileRoute('/studio/manifesto')({
  component: () => (
    <StudioPageLayout
      title="Manifesto"
      subtitle="My Seasonal principles guide everything I create."
    >
      <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
        Tranquil, thoughtfully designed digital spaces for those who value reflection and a slower, more intentional way of living.
      </h2>
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

        {/* 2. VISUAL ANCHOR IMAGE */}
        <section className="manifesto-image mb-32">

          <img
            src="/images/sunBeamOrb.png"
            alt="Seasonal Manifesto Orb"
            className="w-full max-w-3xl mx-auto rounded-3xl shadow-lg opacity-90"
          />

          <div className="manifesto-lightbeam" aria-hidden="true"></div>
          <div className="manifesto-orb-bg" aria-hidden="true"></div>

        </section>

        <ManifestoGallery>
          <ManifestoCard
            title="The Seasonal Ethos"
            lines={[
              'Technology should breathe, not demand.',
              'Interfaces should feel like places, not products.',
              'Digital spaces should offer calm, not noise.',
              'Light matters. Rhythm matters. Seasonality matters.',
            ]}
            drawerTitle="The deeper philosophy"
            drawerText="My work is guided by the belief that clarity is a form of kindness. Technology should not accelerate the mind, it should steady it.
                I build spaces that honour attention, protect emotional safety, and create room for reflection.
                Seasonality gives structure to this work: a reminder that everything has a rhythm, a cycle, a moment to rise and a moment to rest.
                My ethos is simple: digital life should feel human, gentle, and alive."
          />

          <ManifestoCard
            title="The Aesthetic Language"
            lines={[
              'I work with orbs because they hold light.',
              'I work with gradients because they hold emotion.',
              'I work with seasons because they hold rhythm.',
              'I work with space because it holds the self.',
            ]}
            drawerTitle="How I build atmosphere"
            drawerText="My aesthetic is rooted in softness and intention.
                Orbs act as anchors, quiet suns that centre the experience.
                Gradients create emotional temperature: warmth, coolness, clarity, dusk.
                Motion is slow, cinematic, and deliberate.
                Negative space is not emptiness; it is breath.
                Every visual choice is made to create an atmosphere where the user can think, feel, and return to themselves."
          />

          <ManifestoCard
            title="The Purpose"
            lines={[
              'I create digital spaces that feel alive.',
              'To offer clarity in a world of overwhelm.',
              'To build tools that support reflection, not distraction.',
              'To make technology feel more appealing and human again.',
            ]}
            drawerTitle="What I hope you feel"
            drawerText="My work is not about productivity, it is about presence.
                I want my apps to feel like stepping into a quiet room where your thoughts can land softly.
                A place where you can breathe, organise, imagine, or simply be.
                If you leave feeling clearer, calmer, or more connected to yourself, then the purpose has been fulfilled.
                These are not apps to rush through; they are spaces to inhabit."
          />

          <ManifestoCard
            title="The Artistic Practice"
            lines={[
              'I used to paint with pigment.',
              'Now I paint with light.',
              'My canvases are interfaces.',
              'My brushstrokes are gradients, orbs, and motion.',
            ]}
            drawerTitle="My story as an artist"
            drawerText="I come from a world of drawing and painting, a world of colour, texture, and quiet observation.
                That artistic instinct never left; it simply changed medium.
                Now I create through code, shaping digital spaces with the same care I once gave to paper and canvas.
                My apps are my studio.
                My interfaces are my artworks.
                This is my way of bringing beauty, calm, and meaning into the digital world."
          />

          <ManifestoCard
            title="The Invitation"
            lines={[
              'Enter gently.',
              'Move slowly.',
              'Let the interface breathe.',
              'Let the seasons guide you.',
            ]}
            drawerTitle="Begin the journey"
            drawerText="You are invited to explore at your own pace.
                Open the drawers that call to you.
                Follow the colours, the light, the rhythm.
                Let the Seasonal Suite be a companion, a quiet architecture for your inner world.
                This is a living interface, shaped for reflection, clarity, and a softer way of being online."
          />



          {/* Add the remaining cards here */}
        </ManifestoGallery>

        <section className="manifesto-conclusion">
        </section>
      </StudioLayout>
    </StudioPageLayout>
  ),
})
