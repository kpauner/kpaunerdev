"use client"

import React from "react"
import Link from "next/link"
import { some } from "@/config/navigation"
import { useContactSheet } from "@/hooks/use-contact-sheet"
import { Icons } from "../icons"
import { cn } from "@/lib/utils"
import { PageLayout } from "./page-layout"

type FooterProps = {
  title: string
}

export default function Footer({ title }: FooterProps) {
  const contactSheet = useContactSheet()
  return (
    <>
      <PageLayout as="footer" className="pb-6 md:pb-6 lg:pb-12">
        <h2 className="font-cinzel text-center text-7xl font-thin uppercase italic tracking-wider">
          {title}
        </h2>
        <div className="py-6">
          <Icons.arrowdown className="mx-auto  w-16 fill-foreground dark:fill-white " />
        </div>

        <footer className="grid grid-cols-1 place-content-center gap-8 text-muted-foreground md:grid-cols-3 md:flex-row">
          <div className="flex items-center">
            <Icons.logo className="mx-auto w-16 fill-muted-foreground dark:fill-muted-foreground md:mx-0" />
          </div>
          <div className="flex items-center justify-center gap-4 ">
            {some.map((item, index) => (
              <Link key={index} href={item.href} className="flex items-center gap-2">
                <item.icon className={cn("aspect-square size-4", item.className)} />
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center  md:justify-end">
            <small className="text-right text-sm">
              © kpauner {new Date().getFullYear()} <br />
              All rights reserved
            </small>
          </div>
        </footer>
      </PageLayout>
    </>
  )
}
