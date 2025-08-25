import type { ReactNode } from "react"
import { source } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/notebook"
// import "fumadocs-ui/style.css"
import { baseOptions } from "../layout.config"

export const metadata = {
  title: "Documentation",
}

export default async function Layout({
  params,
  children,
}: {
  params: { locale: string }
  children: ReactNode
}) {
  const pageTree = source.pageTree
  return (
    <>
      <DocsLayout tree={pageTree} {...baseOptions} sidebar={{ prefetch: false }}>
        {children}
      </DocsLayout>
    </>
  )
}
