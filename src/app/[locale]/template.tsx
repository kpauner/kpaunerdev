"use client"

import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Template({ children }: { children: React.ReactNode }) {
  const container = React.useRef(null)

  useGSAP(
    () => {
      gsap.to(container.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        ease: "power1.inOut",
      })
    },
    { scope: container },
  )

  return (
    <>
      <div className="h-full opacity-0" ref={container}>
        {children}
      </div>
    </>
  )
}
