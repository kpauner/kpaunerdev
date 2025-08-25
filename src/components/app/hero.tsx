"use client"

import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useAnimationPlayedStore } from "@/hooks/store"
import { PageLayout } from "../layout/page-layout"

type HeroProps = {
  title1: string
  title2: string
  subtitle: string
}

export default function Hero({ title1, title2, subtitle }: HeroProps) {
  const componentRef = React.useRef<HTMLDivElement>(null)
  const played = useAnimationPlayedStore((state) => state.played)

  const renderLetters = (text: string) => {
    if (!text) return
    return text.split(" ").map((letter, index) => (
      <span key={index} className="text-animation leading-none opacity-0">
        {letter}
      </span>
    ))
  }

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.fromTo(
        ".text-animation",
        {
          y: 80,
          rotateZ: 3,
        },
        {
          y: 0,
          rotateZ: 0,
          duration: 0.8,
          delay: played ? 0 : 4.8,
          autoAlpha: 1,
          stagger: {
            amount: 0.5,
            grid: [1, 1],
            axis: "y",
            ease: "circk.inOut",
            from: "start",
          },
        },
      )
      tl.to(".icon", {
        opacity: 1,
        duration: 0.5,

        autoAlpha: 1,
      })
    },
    { scope: componentRef },
  )

  return (
    <>
      <PageLayout as="section" ref={componentRef} className="min-h-[20vh] py-10 md:py-12 lg:py-14">
        <div className="text-animation xl:text-7 md:8xl flex-wrap gap-x-10 pb-4  text-2xl font-bold uppercase text-primary sm:text-3xl md:text-5xl">
          <span className="flex flex-wrap gap-x-8 tracking-wide">
            {renderLetters(title1)}
            {renderLetters(title2)}
          </span>
        </div>
      </PageLayout>
    </>
  )
}
