import { fetchPosts } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

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
