import { createFileRoute } from '@tanstack/react-router'
import SeasonalCookies from '@/pages/legal/Cookies'

export const Route = createFileRoute('/legal/cookies')({
  component: SeasonalCookies,
})
