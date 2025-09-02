import { PostRecord, PostTypes } from "@/types/posts"
import { env } from "@/lib/env"
import { cache } from "react"

export const getPostBySlug = cache(async (slug: string): Promise<PostTypes> => {
  const post = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/api/collections/posts/records?filter=(slug='${slug}')`,
  ).then((res) => res.json())

  // PocketBase returns items array even for filtered queries
  return post?.items?.[0]
})

export const getPosts = cache(async (): Promise<PostRecord> => {
  const posts = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/api/collections/posts/records?filter=(isPublished=true)`,
  ).then((res) => res.json())
  return posts
})
