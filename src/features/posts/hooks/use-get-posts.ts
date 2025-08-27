import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query"
import { getPostsApi } from "@/features/posts/api/posts"
import type { PostRecord } from "@/types/posts"

export const postsQueryKey = ["posts"] as const

export function useGetPosts(
  options?: Omit<
    UseQueryOptions<PostRecord, Error, PostRecord, typeof postsQueryKey>,
    "queryKey" | "queryFn"
  >,
): UseQueryResult<PostRecord, Error> {
  return useQuery<PostRecord, Error, PostRecord, typeof postsQueryKey>({
    queryKey: postsQueryKey,
    queryFn: getPostsApi,
    staleTime: 60 * 1000,
    ...options,
  })
}
