import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/positioning')({
  component: () => (
    <StudioPageLayout
      title="Positioning"
      subtitle="My strategic identity and value proposition."
    />
  ),
})
