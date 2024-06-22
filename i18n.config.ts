export const i18n = {
  defaultLocale: "en",
  locales: ["en", "da", "ja"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
