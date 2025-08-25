import { docs, meta } from "../../.source"
import { createMDXSource } from "fumadocs-mdx"
import { loader } from "fumadocs-core/source"
import { i18n } from "@/i18n.config"

export const source = loader({
  languages: i18n.languages,
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
})
