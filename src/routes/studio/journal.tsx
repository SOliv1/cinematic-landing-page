import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/journal')({
  component: () => (
    <StudioPageLayout
      title="Journal"
      subtitle="Stories, references, sketches, and house notes."
    />
  ),
})
