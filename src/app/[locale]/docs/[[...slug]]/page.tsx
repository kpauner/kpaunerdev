import { source } from "@/lib/source"
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import defaultMdxComponents from "fumadocs-ui/mdx"
import { metadataImage } from "@/lib/metadata"

// Force dynamic rendering to avoid DYNAMIC_SERVER_USAGE error
export const dynamic = "force-dynamic"

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  try {
    const params = await props.params
    console.log("Docs page params:", params)

    const page = source.getPage(params.slug)
    if (!page) {
      console.log("No page found for slug:", params.slug)
      notFound()
    }

    const MDX = page.data.body

    return (
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX components={{ ...defaultMdxComponents }} />
        </DocsBody>
      </DocsPage>
    )
  } catch (error) {
    console.error("Error in docs page:", error)
    notFound()
  }
}

// Removed generateStaticParams since we're using dynamic rendering

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return metadataImage.withImage(page.slugs, {
    title: page.data.title,
    description: page.data.description,
  })
}
