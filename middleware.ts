import createMiddleware from "next-intl/middleware";
import { i18n } from "./i18n.config";

export default createMiddleware({
  locales: i18n.locales,

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|da|ja)/:path*"],
};
