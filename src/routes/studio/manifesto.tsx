import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/manifesto')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studio/manifesto"!</div>
}
