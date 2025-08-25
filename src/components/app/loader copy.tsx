"use client"

import { useAnimationPlayedStore } from "@/hooks/store"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

export default function Loader() {
  const animationStore = useAnimationPlayedStore()
  const loaderRef = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          animationStore.hasPlayed()
        },
      })

      tl.to("#counter", {
        innerText: 100,
        duration: 1.5,
        ease: "expo.inOut",
        snap: "innerText",
      })

      tl.to("#counter", {
        y: -50,
        duration: 0.3,
        ease: "circ.in",
        delay: 0.4,
        autoAlpha: 0,
      })

      tl.to(".bar", {
        height: "0",
        delay: 0.5,
        duration: 0.8,
        stagger: {
          amount: 1,
          grid: [2, 1],
          axis: "y",
          ease: "circk.inOut",
          from: "center",
        },
        ease: "power2.inOut",
      })
    },
    { scope: loaderRef },
  )

  return (
    <div ref={loaderRef} className="h-0">
      <div className="fixed left-0  top-0 z-50 flex">
        {Array.from({ length: 10 }, (_, index) => (
          <span key={index} className="bar block h-screen w-[10vw] bg-background"></span>
        ))}
        <h2
          id="counter"
          className="fixed bottom-20 right-24  z-10 flex items-center justify-center font-sans text-7xl font-extrabold text-white"
        >
          0
        </h2>
      </div>
    </div>
  )
}
