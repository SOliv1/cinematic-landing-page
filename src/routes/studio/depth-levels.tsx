import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/depth-levels')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studio/depth-levels"!</div>
}
