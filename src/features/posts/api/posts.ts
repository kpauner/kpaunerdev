import type { PostRecord, PostTypes } from "@/types/posts"
import { pb } from "@/lib/pocketbase"

export async function getPostsApi(): Promise<PostRecord> {
  const list = await pb.collection("posts").getList<PostTypes>(1, 50, {
    sort: "-created",
    expand: "stack",
    // Limit returned fields to reduce payload size
    fields: "id,collectionName,title,slug,created,featuredImage,excerpt,expand.stack",
  })
  // PocketBase returns list-like structure; adapt to your existing PostRecord
  return {
    page: list.page,
    perPage: list.perPage,
    totalItems: list.totalItems,
    totalPages: list.totalPages,
    items: list.items,
  }
}

export async function getPostBySlugApi(slug: string): Promise<PostTypes | null> {
  const result = await pb.collection("posts").getList<PostTypes>(1, 1, {
    filter: `slug="${slug}"`,
    expand: "stack",
  })
  return result.items[0] ?? null
}
