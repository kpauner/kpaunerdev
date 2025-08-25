import React from "react"
import { notFound } from "next/navigation"
import ImageGallery from "@/components/projects/image-gallery"
import { useLocale } from "next-intl"
import { StackRecord } from "@/types/stacks"
import { getCategories } from "@/data-access/get-categories"
import { getProjects } from "@/data-access/get-projects"
import { ProjectTypes } from "@/types/projects"
import { PageLayout } from "@/components/layout/page-layout"
import { List } from "@/components/layout/lists"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { formatDate } from "@/lib/utils"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { getTranslations } from "next-intl/server"

type ProjectPageProps = {
  params: {
    slug: string
    locale: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params
  const locale = useLocale()
  const t = await getTranslations("footer")
  const projects = await getProjects()
  const project = projects?.items.find((project: ProjectTypes) => project.slug === slug)
  const categories: StackRecord = await getCategories()

  if (!project) {
    return notFound()
  }

  const projectCategories = categories.items
    .filter((category) => project.categories.includes(category.id))
    .map((category) => category.title)
  const localizedDescription =
    (project[`description_${locale}` as keyof ProjectTypes] as string | undefined) ||
    project.description_en

  return (
    <>
      <Header />
      <PageLayout as="div" title={project.title} description={localizedDescription} variant="page">
        <section className="grid grid-cols-1 gap-16 pb-8 md:grid-cols-4">
          {/* <div className="flex flex-col gap-2 md:col-span-2">
            <div className="prose">{localizedDescription}</div>
            <div className="prose">
              <h2 className="pb-2 pt-4 font-sans text-3xl font-extrabold tracking-wide">Problem</h2>
              <p>{localizedProblem}</p>
            </div>
          </div> */}

          <List title="Stack" items={projectCategories} variant="default" className="" />
          <List title="Client" items={project.client || "Self"} variant="default" className="" />

          <List
            title="Date"
            items={formatDate(project.created)}
            variant="vertical"
            className="basis-1/4"
          />
          <Link
            href={project.projectUrl}
            target="_blank"
            className={buttonVariants({
              variant: "outline",
              size: "default",
              className: "border-border",
            })}
          >
            Go to website
            <Icons.arrowupright className="ml-auto size-6" />
          </Link>
        </section>
        <ImageGallery project={project} />
      </PageLayout>
      <Footer title={t("title")} />
    </>
  )
}
