import Gallery from "@/components/gallery";
import Heading from "@/components/layout/heading";
import PageTemplate from "@/components/layout/page-template";
import SectionTemplate from "@/components/layout/section-template";
import Hero from "@/components/marketing/hero";
import { Separator } from "@/components/ui/separator";
import { useProjects } from "@/queries";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, error, status } = useProjects();

  console.log(data);
  return (
    <PageTemplate>
      <Hero />
      <SectionTemplate>
        <div className="space-y-4 py-12">
          <Separator className="bg-white/30" />
          <div className="flex items-center justify-between gap-4">
            <Heading
              as="h2"
              size="xs"
              className="font-neue font-thin uppercase tracking-widest text-white"
            >
              Featured Projects
            </Heading>
            <span>01</span>
          </div>
        </div>
        {status === "pending" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <Gallery data={data} />
          </>
        )}

        <pre>
          <code>{JSON.stringify(data?.items, null, 2)}</code>
        </pre>
      </SectionTemplate>
    </PageTemplate>
  );
}
