import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/why-seasonal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studio/why-seasonal"!</div>
}
