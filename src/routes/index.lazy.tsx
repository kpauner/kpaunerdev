import Heading from "@/components/layout/heading";
import PageTemplate from "@/components/layout/page-template";
import SectionTemplate from "@/components/layout/section-template";
import Hero from "@/components/marketing/hero";
import { Separator } from "@/components/ui/separator";
import { useProjects } from "@/queries";
import { createLazyFileRoute } from "@tanstack/react-router";
import { about } from "@/config/profile";
import ListDisplay from "@/components/list-display";
import ContentList from "@/components/content-list";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, error, status } = useProjects();

  console.log("DATA", data);
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
          <div className="ml-auto w-full md:max-w-md">
            {about.hobbies && (
              <ListDisplay title="Hobbies" items={about.hobbies} />
            )}
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
              Hobbies
            </Heading>
            <span>02</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Heading as="h3" size="md" className="font-neue font-thin">
            UX—Entrepreneurship—UX—Japanese—Eu/acc
          </Heading>
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
            <ContentList data={data.items} type="projects" />
          </>
        )}
      </SectionTemplate>
    </PageTemplate>
  );
}
