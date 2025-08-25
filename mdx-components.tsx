import type { MDXComponents } from "mdx/types"
import defaultComponents from "fumadocs-ui/mdx"
import HeaderHighImpact from "@/features/docs/components/header-high-impact"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
  }
}
