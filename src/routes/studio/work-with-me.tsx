import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/work-with-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studio/work-with-me"!</div>
}
