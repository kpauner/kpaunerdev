import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/posts")({
  component: Posts,
});

function Posts() {
  return <div className="p-2">Hello from Posts!</div>;
}
