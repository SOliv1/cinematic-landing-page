import { createFileRoute } from '@tanstack/react-router'
import SeasonalTerms from '@/pages/legal/Terms'

export const Route = createFileRoute('/legal/terms')({
  component: SeasonalTerms,
})
