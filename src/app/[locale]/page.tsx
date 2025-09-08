import { getPosts } from "@/data-access/posts"
import { getProjects } from "@/data-access/get-projects"
import { getCategories } from "@/data-access/get-categories"
import { getTranslations } from "next-intl/server"
import ScrollList from "@/components/scroll-list"
import { PageLayout } from "@/components/layout/page-layout"
import { InViewImagesGrid } from "@/components/in-view-image-grid"
import Divider from "@/components/divider"
import HeroLowImpact from "@/components/app/hero-low-impact"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { PostsGrid } from "@/features/posts/components/posts-grid"
import { ChartLineDots } from "@/components/chart-line-dots"

type HomeProps = {
  params: { locale: string }
}

export default async function Home({ params }: HomeProps) {
  const t = await getTranslations("landing")
  const tFooter = await getTranslations("footer")
  const categoriesPromise = getCategories()
  const postsPromise = getPosts()
  const projectsPromise = getProjects()
  const [categories, projects, posts] = await Promise.all([
    categoriesPromise,
    projectsPromise,
    postsPromise,
  ])

  return (
    <>
      {/* <Hero title1={t("titlep1")} title2={t("titlep2")} subtitle={t("subtitle")} /> */}

      <Header />
      <main className="grow">
        <HeroLowImpact title1={t("title.title1")} title2={t("title.title2")} />

        <PageLayout as="section" className="space-y-8 pt-[100vh] ">
          <Divider
            title={t("stacks-title")}
            description={t("stacks")}
            descriptionClassName=""
            className="pb-16"
          />
        </PageLayout>

        <ScrollList stack={categories} className="pb-32" />

        {/* <PageLayout as="section" className="space-y-8 py-32">
          <Divider
            title={t("latest-posts.title")}
            description={t("latest-posts.description")}
            descriptionClassName="max-w-3xl"
            className="pb-16"
          />
          <div className="min-w-0 flex-1">
            <PostsGrid posts={posts.items} className="w-full" />
          </div>
        </PageLayout> */}

        <PageLayout as="section" className="space-y-8 py-32">
          {/* {posts.items.length > 1 && (
        <Bounded className="bg-secondary">
          <Heading size="lg" as="h3" className="pb-16 uppercase">
            {t("latest-articles")}
          </Heading>
          <ContentList data={posts.items} type="posts" />
        </Bounded>
      )} */}

          <Divider
            title={t("selected-works.title")}
            description={t("selected-works.description")}
            descriptionClassName="max-w-3xl"
            className="pb-16"
          />
          {/* <pre className="whitespace-pre-wrap rounded bg-gray-100 p-4">
            {JSON.stringify(projects, null, 2)}
          </pre> */}
          <InViewImagesGrid data={projects.items} type="projects" categories={categories.items} />
        </PageLayout>
      </main>
      <Footer title={tFooter("title")} />
    </>
  )
}
