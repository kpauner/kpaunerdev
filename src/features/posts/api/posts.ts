import type { PostRecord, PostTypes } from "@/types/posts"
import { pb } from "@/lib/pocketbase"

export async function getPostsApi(): Promise<PostRecord> {
  const list = await pb.collection("posts").getList<PostTypes>(1, 50, {
    sort: "-created",
    expand: "categories",
    // Limit returned fields to reduce payload size
    fields: "id,collectionName,title,slug,created,featuredImage,excerpt,categories",
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

export async function getPostsByCategoriesApi(categories: string[]): Promise<PostTypes[]> {
  if (!categories.length) {
    const list = await getPostsApi()
    return list.items
  }

  // PocketBase filter: match any category id in the array
  const orExpr = categories.map((id) => `(categories.id ?= "${id}")`).join(" || ")
  const list = await pb.collection("posts").getList<PostTypes>(1, 50, {
    filter: orExpr,
    fields: "id,collectionName,title,slug,created,featuredImage,excerpt,categories",
    sort: "-created",
  })
  return list.items
}
