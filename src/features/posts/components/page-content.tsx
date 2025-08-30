"use client"
import React, { useMemo } from "react"
import { useGetPostsFiltered } from "@/features/posts/hooks/use-get-posts-filtered"
import { PostsGrid } from "@/features/posts/components/posts-grid"
import Header from "@/components/layout/header"
import { PostsFilterSidebar } from "./posts-filter-sidebar"
import { useSearchParams } from "next/navigation"
import Footer from "@/components/layout/footer"
import { useTranslations } from "next-intl"
import { PageLayout } from "@/components/layout/page-layout"

export const PageContent = () => {
  const sp = useSearchParams()
  const cats = useMemo(() => (sp.get("categories") ?? "").split(",").filter(Boolean), [sp])
  const { data, isLoading, error } = useGetPostsFiltered(cats)
  const tFooter = useTranslations("footer")

  return (
    <>
      <Header />

      <PageLayout as="section" variant="default">
        <div className="flex flex-col gap-8 md:flex-row">
          <PostsFilterSidebar />
          <div className="min-w-0 flex-1">
            {isLoading && <div>Loading...</div>}
            {error && <div>Failed to load: {(error as Error).message}</div>}
            {!isLoading && !error && <PostsGrid posts={data ?? []} className="w-full" />}
          </div>
        </div>
      </PageLayout>
      <Footer title={tFooter("title")} />
    </>
  )
}
