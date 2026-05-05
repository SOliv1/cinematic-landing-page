import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/manifesto')({
  component: () => (
    <StudioPageLayout
      title="Manifesto"
      subtitle="My Seasonal principles, my philosophy."
    />
  ),
})
