import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/positioning')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studio/positioning"!</div>
}
