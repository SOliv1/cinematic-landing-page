import { createFileRoute } from '@tanstack/react-router'
import SeasonalPrivacy from '@/pages/legal/Privacy'

export const Route = createFileRoute('/legal/privacy')({
  component: SeasonalPrivacy,
})
