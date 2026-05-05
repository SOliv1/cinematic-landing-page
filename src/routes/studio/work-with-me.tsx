import { createFileRoute } from '@tanstack/react-router'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/work-with-me')({
  component: () => (
    <StudioPageLayout
      title="Work With Me"
      subtitle="A soft, atmospheric contact page."
    />
  ),
})
