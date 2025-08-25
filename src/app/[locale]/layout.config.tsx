import { Icons } from "@/components/icons"
import Link from "next/link"
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <Link href="/" className="flex items-center">
        <Icons.logo className="ml-2 h-4 w-full fill-black dark:fill-foreground" />
      </Link>
    ),
  },
  // links: [
  //   {
  //     text: "Documentation",
  //     url: "/docs",
  //     active: "nested-url",
  //   },
  // ],
}
