"use client"

import React, { useEffect, useRef, useState } from "react"
import { env } from "@/lib/env"
import { StackRecord } from "@/types/stacks"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { cn } from "@/lib/utils"
import { SvgImporter } from "./svg-importer"

gsap.registerPlugin(ScrollTrigger)

type ScrollListProps = {
  stack: StackRecord
  className?: string
}

export default function ScrollList({ stack, className }: ScrollListProps) {
  const componentRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      })

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400)
          },
        },
        {
          x: (index) => {
            return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400)
          },
          ease: "power1.inOut",
        },
      )
    },
    { scope: componentRef },
  )

  return (
    <>
      <section ref={componentRef} className={cn("space-y-8 overflow-hidden", className)}>
        {Array.from({ length: 2 }, (_, index) => (
          <div
            key={index}
            className={cn(
              "tech-row flex items-center justify-center gap-12",
              index % 2 !== 0 ? "flex-row-reverse" : "",
            )}
          >
            {stack.items.map((item, index) => (
              <div
                key={index}
                className="tech-item flex max-w-max flex-shrink-0 items-center gap-4"
                aria-label={item.title}
              >
                <SvgImporter
                  src={`${env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.icon}`}
                  className="flex h-12 items-center justify-center fill-white object-cover dark:fill-white"
                  aria-label={item.title}
                />

                <p className=" text-6xl font-bold uppercase tracking-tight">{item.title}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  )
}
