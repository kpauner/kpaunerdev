import type { ReactNode } from "react"
import { source } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/notebook"
// import "fumadocs-ui/style.css"
import { baseOptions } from "../layout.config"

export const metadata = {
  title: "Documentation",
}

// Force dynamic rendering for the layout too
export const dynamic = "force-dynamic"

export default function Layout({
  params,
  children,
}: {
  params: { locale: string }
  children: ReactNode
}) {
  return (
    <>
      <DocsLayout tree={source.pageTree} {...baseOptions} sidebar={{ prefetch: false }}>
        {children}
      </DocsLayout>
    </>
  )
}
