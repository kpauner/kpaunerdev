"use client"
import { PostTypes } from "@/types/posts"
import { ProjectTypes } from "@/types/projects"
import Link from "next/link"
import React, { useEffect, useRef } from "react"
import { Icons } from "./icons"
import { env } from "@/lib/env"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useLocale } from "next-intl"

type ContentListProps = {
  data: ProjectTypes[] | PostTypes[]
  type: "projects" | "stacks" | "posts"
}

gsap.registerPlugin(ScrollTrigger)

export default function ContentList({ data, type }: ContentListProps) {
  const componentRef = useRef(null)
  const revealRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<Array<HTMLLIElement | null>>([])
  const lastMousePos = useRef({ x: 0, y: 0 })
  const [currentItem, setCurrentItem] = React.useState<null | number>(null)
  const locale = useLocale()

  useGSAP(
    () => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "power2.inOut",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        )
      })
    },
    { scope: componentRef },
  )

  useGSAP(
    () => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!revealRef.current) return
        const mousePos = { x: e.clientX, y: e.clientY + window.scrollY }
        const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2))

        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350
          const maxX = window.innerWidth - 530

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
            scale: 1,
            opacity: 1,
          })
        }
        lastMousePos.current = mousePos
      }
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    },
    { dependencies: [currentItem], scope: componentRef },
  )

  const contentMedia = data.map((item) => {
    const fallbackItemImage = "/public/images/fallback-image.png"
    const media =
      item.featuredImage && item.featuredImage.trim() !== ""
        ? item.featuredImage
        : fallbackItemImage
    const mediaUrl = `${env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${media}`
    const isVideo = /\.(mp4|webm|ogg)$/i.test(media)
    return { url: mediaUrl, isVideo }
  })

  const onMouseEnter = (index: number) => {
    setCurrentItem(index)
  }

  const onMouseLeave = () => {
    setCurrentItem(null)
  }

  return (
    <section ref={componentRef}>
      <span className="block h-px w-full bg-muted-foreground"></span>
      <ul className="relative flex flex-col " onMouseLeave={onMouseLeave}>
        {data.map((item, index) => (
          <li
            ref={(el) => {
              itemsRef.current[index] = el
            }}
            key={index}
            className="group list-item text-foreground opacity-0"
            onMouseEnter={() => onMouseEnter(index)}
          >
            <Link
              href={`${locale}/${type}/${item.slug}`}
              className="flex flex-col justify-between py-20 md:flex-row"
              aria-label={`link to ${item.title}`}
            >
              <div className="font-cinzel flex w-full items-center justify-between gap-4 text-[8rem] text-accent">
                <span className="hidden basis-1/12 text-[clamp(2rem,4vmin,4rem)] font-thin text-muted-foreground transition-all duration-300 group-hover:-translate-x-1 group-hover:text-foreground md:block">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h2 className="basis-full text-[clamp(2rem,8vmin,8rem)] font-normal uppercase text-accent transition-all duration-300 group-hover:-translate-x-1 group-hover:text-foreground">
                  {item.title}
                </h2>
                {/* {item.expand?.stack.length > 0 && (
                  <div className="hidden basis-6/12 flex-wrap gap-3 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground xl:flex">
                    {item.expand.stack.map((stack, index) => (
                      <span className="text-xs" key={index}>
                        {stack.title}
                      </span>
                    ))}
                  </div>
                )} */}
                <span className="ml-auto hidden basis-1/12 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground md:block">
                  <Icons.arrowupright className="ml-auto size-8" />
                </span>
              </div>
            </Link>
            <span className="block h-px w-full bg-muted-foreground"></span>
          </li>
        ))}
      </ul>

      {/* HOVER ELEMENTS */}

      {currentItem !== null && (
        <div
          className="hover-reveal pointer-events-none absolute left-0 top-0 z-20 aspect-video h-[300px] overflow-hidden rounded-lg"
          style={{
            opacity: 1,
            transform: "scale(1)",
            transition: "opacity 0.3s, transform 0.3s",
          }}
          ref={revealRef}
        >
          {contentMedia[currentItem].isVideo ? (
            <video
              src={contentMedia[currentItem].url}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
            />
          ) : (
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${contentMedia[currentItem].url})`,
              }}
            />
          )}
        </div>
      )}
    </section>
  )
}
