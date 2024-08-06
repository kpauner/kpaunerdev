import { PageLayout } from "@/components/layout/page-layout";
import { useCategories } from "@/db/queries";
import React from "react";

type Props = {};

export default async function AboutPage({}: Props) {
  const categories = await useCategories();
  return (
    <PageLayout
      title="About"
      description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quia! lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quia! lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quia! "
      variant="page"
    >
      <pre>categories: {JSON.stringify(categories)}</pre>
    </PageLayout>
  );
}
