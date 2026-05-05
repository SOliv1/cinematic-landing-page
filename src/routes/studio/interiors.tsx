import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/interiors')({
  component: () => (
    <StudioPageLayout
      title="Interiors"
      subtitle="My services, framed as cinematic digital interiors."
    />
  ),
})
