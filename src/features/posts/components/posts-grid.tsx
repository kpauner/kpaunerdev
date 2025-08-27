"use client"

import { InView } from "@/components/core/in-view"
import { env } from "@/lib/env"
import type { PostTypes } from "@/types/posts"
import { motion } from "motion/react"
import { useLocale } from "next-intl"
import Link from "next/link"
import { Icons } from "@/components/icons"

export function PostsGrid({ posts }: { posts: PostTypes[] }) {
  const locale = useLocale()

  return (
    <div className="h-full w-full overflow-hidden">
      <div className="pb-18 flex items-end justify-center">
        <div className="flex flex-col gap-20">
          {posts.map((post, index) => {
            const isEven = index % 2 === 0
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
                  <div className={`flex gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                    <Link href={`/${locale}/posts/${post.slug}`} className="w-1/2">
                      {isImage ? (
                        <img
                          src={fileUrl}
                          alt={`${post.slug} image`}
                          className="w-full object-contain"
                        />
                      ) : (
                        <video className="w-full object-contain" controls muted loop>
                          <source src={fileUrl} />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </Link>

                    <div className="w-1/2 space-y-4">
                      <Link
                        href={`/${locale}/posts/${post.slug}`}
                        className="group inline-flex items-center gap-2"
                      >
                        <h2 className="text-2xl font-bold uppercase tracking-wide">{post.title}</h2>
                        <Icons.arrowupright className="size-8 transition-transform duration-300 group-hover:rotate-45" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </InView>
            )
          })}
        </div>
      </div>
    </div>
  )
}
