// src/features/posts/components/posts-filter-sidebar.tsx
"use client"
import { useMemo } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useGetCategories } from "../hooks/use-get-categories"
import { useGetPostsFiltered } from "../hooks/use-get-posts-filtered"
import { cn } from "@/lib/utils"

export function PostsFilterSidebar() {
  const { data } = useGetCategories()
  const categories = data?.items ?? []
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const selected = useMemo(
    () => new Set((searchParams.get("categories") ?? "").split(",").filter(Boolean)),
    [searchParams],
  )

  // Get all posts to find which categories actually have content
  const { data: postsData } = useGetPostsFiltered([])
  const posts = postsData ?? []

  // Get unique category IDs that actually have posts
  const activeCategoryIds = useMemo(() => {
    const allCategoryIds = posts.flatMap((post) => post.categories || [])
    return new Set(allCategoryIds)
  }, [posts])

  // Filter categories to only show active ones
  const activeCategories = categories.filter((cat) => activeCategoryIds.has(cat.id))

  const toggle = (id: string) => {
    const next = new Set(selected)
    next.has(id) ? next.delete(id) : next.add(id)
    const value = Array.from(next).join(",")
    const params = new URLSearchParams(searchParams.toString())
    if (value) params.set("categories", value)
    else params.delete("categories")
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <aside className="w-64 space-y-3">
      {/* <h3 className="text-sm font-semibold uppercase tracking-wide">Filter</h3> */}
      <div className="space-y-2">
        {activeCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => toggle(c.id)}
            className={cn(
              "w-full rounded-md px-3 py-2 text-left text-sm transition-all duration-200",
              selected.has(c.id)
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {c.title}
          </button>
        ))}
      </div>
    </aside>
  )
}
