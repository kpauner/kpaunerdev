"use client"

import React from "react"
import { PageLayout } from "../layout/page-layout"
import RevealUp from "../reveal-up"

export default function HeroLowImpact({ title1, title2 }: { title1: string; title2: string }) {
  return (
    <PageLayout as="section" className="absolute inset-0 -z-10 flex h-screen flex-col justify-end">
      <RevealUp
        word={title1}
        className="block min-h-0 translate-y-[2rem] font-mango text-[12rem] font-bold uppercase leading-none text-primary"
        waitForLoader
      />
      <RevealUp
        word={title2}
        className="font-mango text-[12rem] font-bold uppercase leading-none text-primary"
        waitForLoader
        delay={0.3}
      />
    </PageLayout>
  )
}
