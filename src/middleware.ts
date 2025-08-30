import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  matcher: [
    // Enable internationalization for all locales
    "/(en|da|ja)/:path*",

    // Enable internationalization for the root path
    "/",

    // Exclude Next.js internal files and API routes
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
}
