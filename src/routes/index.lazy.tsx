import Heading from "@/components/layout/heading";
import PageTemplate from "@/components/layout/page-template";
import SectionTemplate from "@/components/layout/section-template";
import Hero from "@/components/marketing/hero";
import { Separator } from "@/components/ui/separator";
import { useCategories, useProjects } from "@/queries";
import { createLazyFileRoute } from "@tanstack/react-router";
import ContentList from "@/components/content-list";
import Footer from "@/components/footer";
import { Icons } from "@/components/icons";
import Marque from "@/components/marque";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, error, status } = useProjects();
  const { data: categories } = useCategories();

  console.log("DATA", data);
  return (
    <PageTemplate>
      <Hero />

      <Separator className="mb-8 mt-20 bg-white" />

      <SectionTemplate>
        <div className="flex flex-col space-y-48">
          <div className="flex justify-between gap-4">
            <Icons.arrowupright className="hidden h-12 w-12 text-primary md:block" />

            <Heading
              as="h2"
              size="md"
              className="basis-full font-sans font-medium  md:basis-3/4"
            >
              On your marks. Get set. Go-to-market. Quickly launch your company
              past the competition.
            </Heading>
          </div>
        </div>
      </SectionTemplate>
      <Marque data={categories || []} className="" />
      <SectionTemplate>
        <div className=" flex flex-col justify-between gap-4 md:flex-row">
          <Heading as="h2" size="md" className="pb-20">
            On your marks.
          </Heading>
          <div className="basis-full font-sans font-medium  md:basis-3/4">
            {status === "pending" ? (
              "Loading..."
            ) : status === "error" ? (
              <span>Error: {error.message}</span>
            ) : (
              <>
                <ContentList data={data.items} type="projects" />
              </>
            )}
          </div>
        </div>
      </SectionTemplate>
      <Footer />
    </PageTemplate>
  );
}
