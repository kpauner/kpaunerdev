import Heading from "@/components/layout/heading";
import PageTemplate from "@/components/layout/page-template";
import SectionTemplate from "@/components/layout/section-template";
import Hero from "@/components/marketing/hero";
import { Separator } from "@/components/ui/separator";
import { fetchPosts } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const query = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  return (
    <PageTemplate>
      <Hero />
      <Separator className="bg-white/30" />
      <div className="flex items-center justify-between gap-4">
        <Heading
          as="h2"
          size="xs"
          className="font-neue font-thin uppercase tracking-widest text-white"
        >
          About
        </Heading>
        <span>01</span>
      </div>
      <SectionTemplate className="bg-amber-400/30">
        <pre>
          <code>{JSON.stringify(query, null, 2)}</code>
        </pre>
      </SectionTemplate>
    </PageTemplate>
  );
}
