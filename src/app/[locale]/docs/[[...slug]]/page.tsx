import { source } from "@/lib/source"
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import defaultMdxComponents from "fumadocs-ui/mdx"
import { metadataImage } from "@/lib/metadata"

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

export async function generateStaticParams() {
  try {
    const params = source.generateParams()
    console.log("Generated static params for docs:", params)
    return params
  } catch (error) {
    console.error("Error generating static params:", error)
    // If generation fails, return empty array to avoid build errors
    return []
  }
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  return metadataImage.withImage(page.slugs, {
    title: page.data.title,
    description: page.data.description,
  })
}
