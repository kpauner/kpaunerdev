import { docs } from "../../.source"
import { loader } from "fumadocs-core/source"
import { routing } from "@/i18n/routing"

export const source = loader({
  languages: routing.locales,
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
})
