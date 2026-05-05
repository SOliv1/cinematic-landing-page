import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/depth-levels')({
  component: () => (
    <StudioPageLayout
      title="Depth Levels"
      subtitle="My pricing tiers, framed as layers of involvement."
    />
  ),
})
