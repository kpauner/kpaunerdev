import ImageGallery from "@/components/image-gallery";
import PageTemplate from "@/components/layout/page-template";
import SectionTemplate from "@/components/layout/section-template";
import ProjectHeader from "@/components/project-header";
import { useProjects, useProjectsTranslations } from "@/queries";
import { Project } from "@/types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetails,
});

function ProjectDetails() {
  const { slug } = Route.useParams();

  const { data } = useProjectsTranslations();
  const { data: project } = useProjects();
  const translation = data?.items.find(
    (p) => p.slug === slug && p.language_code === "en",
  );
  const projectImages = project?.items.find((p) => p.slug === slug) as Project;

  if (!project || !translation) {
    return <h1>Project not found</h1>;
  }
  return (
    <PageTemplate>
      <SectionTemplate>
        <ProjectHeader
          title={translation?.title}
          description={translation?.description}
        />
      </SectionTemplate>
      <SectionTemplate>
        {projectImages && (
          <div className="flex flex-col gap-2 py-2">
            <ImageGallery project={projectImages || []} />
          </div>
        )}
      </SectionTemplate>
    </PageTemplate>
  );
}
