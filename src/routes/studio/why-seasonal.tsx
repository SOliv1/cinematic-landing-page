import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/why-seasonal')({
  component: () => (
    <StudioPageLayout
      title="Why Seasonal"
      subtitle="My competitive differentiators, why these interiors feel different."
    />
  ),
})
