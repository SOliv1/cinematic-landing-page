import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/garden')({
  component: () => (
    <StudioPageLayout
      title="Garden"
      subtitle="Outdoor notes, seasonal planting, and weathered beauty."
    />
  ),
})
