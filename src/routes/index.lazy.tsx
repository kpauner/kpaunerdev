import Gallery from "@/components/gallery";
import Heading from "@/components/layout/heading";
import PageTemplate from "@/components/layout/page-template";
import SectionTemplate from "@/components/layout/section-template";
import Hero from "@/components/marketing/hero";
import { Separator } from "@/components/ui/separator";
import { useProjects } from "@/queries";
import { createLazyFileRoute } from "@tanstack/react-router";
import { about } from "@/config/profile";
import ListDisplay from "@/components/list-display";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, error, status } = useProjects();

  console.log(data);
  return (
    <PageTemplate>
      <Hero />
      <SectionTemplate className="h-screen">
        <div className="space-y-4 py-12">
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
        </div>
        <div className="">
          <div className="ml-auto w-full  md:max-w-md">
            <ListDisplay title="Hobbies" items={about.hobbies} />
          </div>
        </div>
      </SectionTemplate>
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
            <span>02</span>
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
      </SectionTemplate>
    </PageTemplate>
  );
}
