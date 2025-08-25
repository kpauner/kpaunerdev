"use client"

import { InView } from "@/components/core/in-view"
import { env } from "@/lib/env"
import { PostTypes } from "@/types/posts"
import { ProjectTypes } from "@/types/projects"
import { motion } from "motion/react"
import { useLocale } from "next-intl"
import Link from "next/link"
import { Separator } from "./ui/separator"
import { StackRecord, StackTypes } from "@/types/stacks"
import { useMemo } from "react"
import { Icons } from "./icons"

type InViewImagesGridProps = {
  data: ProjectTypes[]
  type: "projects"
  categories: StackTypes[]
}

export function InViewImagesGrid({ data, type, categories }: InViewImagesGridProps) {
  const locale = useLocale()

  const categoryMap = useMemo(() => {
    return new Map(categories.map((cat) => [cat.id, cat.title]))
  }, [categories])

  const getCategoryTitles = (categoryIds: string[]) => {
    return categoryIds
      .map((id) => categoryMap.get(id))
      .filter(Boolean)
      .join(", ")
  }

  return (
    <div className="h-full w-full overflow-hidden">
      <div className="pb-18 flex items-end justify-center">
        <div className="flex flex-col gap-20">
          {data.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <InView
                key={index}
                viewOptions={{ once: true, margin: "0px 0px -100px 0px" }}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,
                      filter: "blur(10px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="w-full"
                >
                  <div className={`flex  gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                    {/* Media section */}
                    <Link href={`/${locale}/projects/${item.slug}`} className="w-1/2">
                      {item.featuredImage.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                        <img
                          src={`${env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featuredImage}`}
                          alt={`Image placeholder from cosmos.so, index:${index}`}
                          className="w-full object-contain"
                        />
                      ) : (
                        <video className="w-full object-contain" controls muted loop>
                          <source
                            src={`${env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featuredImage}`}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </Link>

                    {/* Text section */}
                    <div className="w-1/2 space-y-4">
                      <Link
                        href={`/${locale}/projects/${item.slug}`}
                        className="group inline-flex items-center gap-2"
                      >
                        <h2 className="text-2xl font-bold uppercase tracking-wide">
                          {item.title || "No title available"}
                        </h2>
                        <Icons.arrowupright className="size-8 transition-transform duration-300 group-hover:rotate-45" />
                      </Link>
                      {item.description_en && (
                        <p className=" dark:text-gray-300">{item.description_en}</p>
                      )}
                      {item.categories && (
                        <p className="text-sm tracking-wide text-muted-foreground">
                          {getCategoryTitles(item.categories)}
                        </p>
                      )}
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
