import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/moodboard')({
  component: () => (
    <StudioPageLayout
      title="Moodboard"
      subtitle="Textures, palettes, silhouettes, and visual references."
    />
  ),
})
