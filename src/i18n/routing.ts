import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "da", "ja"],
  defaultLocale: "da",
  localePrefix: "always",
})
