import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

async function fetchPosts() {
  const response = await fetch("http://127.0.0.1:8787/api/posts");
  const data = await response.json();
  return data;
}

function Index() {
  const query = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <div>
        <pre>
          <code>{JSON.stringify(query, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}
