// src/features/posts/hooks/use-get-posts.ts
import { useQuery } from "@tanstack/react-query"
import { getPostsApi, getPostsByCategoriesApi } from "@/features/posts/api/posts"
import type { PostTypes } from "@/types/posts"
export const postsQueryKey = (cats: string[] = []) => ["posts", { cats }] as const

export function useGetPostsFiltered(categories: string[]) {
  return useQuery<PostTypes[], Error>({
    queryKey: postsQueryKey(categories),
    queryFn: async () =>
      categories.length
        ? getPostsByCategoriesApi(categories) // Promise<PostTypes[]>
        : (await getPostsApi()).items, // Promise<PostTypes[]>
    staleTime: 60_000,
  })
}
