"use client"
import React from "react"
import { useGetPosts } from "@/features/posts/hooks/use-get-posts"
import { PostsGrid } from "@/features/posts/components/posts-grid"
import Header from "@/components/layout/header"
import { PageLayout } from "@/components/layout/page-layout"
import Footer from "@/components/layout/footer"
import { useTranslations } from "next-intl"

export const PageContent = () => {
  const { data, isLoading, error } = useGetPosts()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>

  return (
    <div>
      <Header />
      <main className="grow">
        <PageLayout as="section" className="space-y-8 ">
          <PostsGrid posts={data?.items ?? []} />
        </PageLayout>
      </main>
    </div>
  )
}
