import React from "react"
import { notFound } from "next/navigation"
import PrismLoader from "@/components/prism-loader"
import { getPostBySlug } from "@/data-access/posts"
import { getCategories } from "@/data-access/get-categories"
import { PageLayout } from "@/components/layout/page-layout"
import Image from "next/image"
import { env } from "@/lib/env"
import Header from "@/components/layout/header"
import { source } from "@/lib/source"

// Force dynamic rendering since we're checking for docs pages
export const dynamic = "force-dynamic"

type PostPageProps = {
  params: {
    slug: string
    locale: string
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params
  const postPromise = getPostBySlug(slug)
  const categoriesPromise = getCategories()
  const [post, categories] = await Promise.all([postPromise, categoriesPromise])
  const postStacks = categories.items
    .filter((item) => post?.stack?.includes(item.id))
    .map((item) => item.title)

  if (!post) {
    return notFound()
  }

  // Check if a docs page exists for this slug
  const docsPage = source.getPage([slug])
  const docsUrl = docsPage ? `/docs/${slug}` : undefined

  // Construct the full image URL
  const imageUrl = `${env.NEXT_PUBLIC_API_URL}/api/files/posts/${post.id}/${post.featuredImage}`

  return (
    <>
      <Header />

      <PageLayout
        variant="post"
        title={post.title}
        description="Examples of indie games that might fit this category include simple puzzles, creative tools, or immersive sensory experiences with minimal input, such as the The Forest Project by Aalto University"
        docsUrl={docsUrl}
      >
        <Image
          unoptimized
          src={imageUrl}
          alt={post.title}
          width={1000}
          height={1000}
          className="h-auto w-full"
        />
        <div
          className="prose mx-auto max-w-screen-lg space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </PageLayout>
      <PrismLoader />
    </>
  )
}
