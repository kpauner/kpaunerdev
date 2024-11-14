import React from "react";
import { PageLayout } from "@/components/layout/page-layout";

type ProjectsPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params: { slug } }: ProjectsPageProps) {
  return (
    <PageLayout title="ProjectPage" description="ProjectPage">
      <h1>ProjectPage</h1>
      <p>{slug}</p>
    </PageLayout>
  );
}
