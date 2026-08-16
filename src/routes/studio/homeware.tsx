import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/homeware')({
  component: () => (
    <StudioPageLayout
      title="Homeware"
      subtitle="Atmospheric objects for rooms, rituals, and quiet interiors."
    />
  ),
})
