"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "xl" | "lg" | "md" | "sm" | "xs" | "2xl"
  children: React.ReactNode
  className?: string
}

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,

          duration: 1.3,
          ease: "power2.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none none",
          },
        },
      )
    },
    { scope: headingRef },
  )
  return (
    <Comp
      ref={headingRef}
      className={clsx(
        "leading-none tracking-wider text-foreground",
        size === "2xl" && "text-[clamp(3rem,14vmin,14rem)]",
        size === "xl" && "text-[clamp(3rem,10vmin,10rem)]",
        size === "lg" && "text-7xl md:text-8xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        size === "xs" && "text-xs md:text-sm",
        className,
      )}
    >
      {children}
    </Comp>
  )
}
