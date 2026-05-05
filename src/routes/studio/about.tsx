import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studio/about"!</div>
}
