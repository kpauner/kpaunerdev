"use client"

import React from "react"
import Link from "next/link"
import { useContactSheet } from "@/hooks/use-contact-sheet"
import { Icons } from "../icons"
import { PageHeader } from "./page-layout"
import { ModeToggle } from "../mode-toggle"

export default function Header() {
  const contactSheet = useContactSheet()
  return (
    <PageHeader variant="default" className="!w-full">
      <div className="flex  items-center justify-between">
        <Link href="/">
          <Icons.logo className="h-6 w-full fill-black dark:fill-foreground" />
        </Link>

        <span
          className="flex cursor-pointer gap-2 text-foreground hover:underline"
          onClick={contactSheet.onOpen}
        >
          Get in touch
          <Icons.arrowupright className="mt-1 size-4" />
        </span>
        <ModeToggle />
      </div>
    </PageHeader>
  )
}
{
  /* <header className="w-full  py-8 lg:py-12">
      <div className=" mx-auto flex w-full max-w-screen-xl flex-col justify-between px-8 md:flex-row">
        <Link href="/">
          <Icons.logo className="h-6 w-full fill-black dark:fill-foreground" />
        </Link>

        <span
          className="flex cursor-pointer gap-2 font-cinzel  text-white hover:underline"
          onClick={contactSheet.onOpen}
        >
          Get in touch
          <Icons.arrowupright className="mt-1 size-4" />
        </span>
      </div>
    </header> */
}
