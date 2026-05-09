import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/weather')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({ condition: 'clear' })
      },
    },
  },
})
