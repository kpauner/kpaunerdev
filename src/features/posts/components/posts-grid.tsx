"use client"

import { InView } from "@/components/core/in-view"
import { env } from "@/lib/env"
import type { PostTypes } from "@/types/posts"
import { motion } from "motion/react"
import { useLocale } from "next-intl"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

type PostsGridProps = {
  posts: PostTypes[]
  className?: string
}

export function PostsGrid({ posts, className }: PostsGridProps) {
  const locale = useLocale()

  return (
    <div className={cn("h-full overflow-hidden", className)}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const fileUrl = `${env.NEXT_PUBLIC_API_URL}/api/files/${post.collectionName}/${post.id}/${post.featuredImage}`
          const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(post.featuredImage)

          return (
            <InView
              key={post.id}
              viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className="w-full"
              >
                <Link href={`/${locale}/posts/${post.slug}`} className="group block">
                  <div className="space-y-4">
                    {/* Featured Image */}
                    <div className="aspect-video overflow-hidden rounded-lg">
                      {isImage ? (
                        <img
                          src={fileUrl}
                          alt={`${post.slug} image`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <video className="h-full w-full object-cover" controls muted loop>
                          <source src={fileUrl} />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold uppercase tracking-wide">{post.title}</h2>
                        <Icons.arrowupright className="size-6 transition-transform duration-300 group-hover:rotate-45" />
                      </div>
                      {post.excerpt && (
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            </InView>
          )
        })}
      </div>
    </div>
  )
}
