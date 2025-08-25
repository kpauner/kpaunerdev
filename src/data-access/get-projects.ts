import { env } from "@/lib/env"
import { ProjectRecord } from "@/types/projects"

export async function getProjects(): Promise<ProjectRecord> {
  const projects = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/api/collections/projects/records?expand=categories&filter=(isPublished=true)`,
  ).then((res) => res.json())
  return projects
}
