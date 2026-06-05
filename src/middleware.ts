import createIntlMiddleware from "next-intl/middleware"
import { type NextRequest, NextResponse } from "next/server"
import { isAuthenticatedRequest } from "@/lib/auth/middleware"
import { routing } from "./i18n/routing"

const intlMiddleware = createIntlMiddleware(routing)

function getLocale(pathname: string) {
  const segment = pathname.split("/")[1]
  return routing.locales.includes(segment as (typeof routing.locales)[number])
    ? segment
    : routing.defaultLocale
}

function getPathWithoutLocale(pathname: string) {
  const locale = getLocale(pathname)
  const prefix = `/${locale}`

  if (pathname === prefix) return "/"
  if (pathname.startsWith(`${prefix}/`)) {
    return pathname.slice(prefix.length)
  }

  return pathname
}

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathWithoutLocale = getPathWithoutLocale(pathname)
  const locale = getLocale(pathname)
  const isAuthenticated = isAuthenticatedRequest(request.headers.get("cookie"))

  if (pathWithoutLocale.startsWith("/dashboard") && !isAuthenticated) {
    return NextResponse.redirect(new URL(`/${locale}/signin`, request.url))
  }

  if (pathWithoutLocale.startsWith("/signin") && isAuthenticated) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url))
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: [
    "/(en|da|ja)/:path*",
    "/",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
}
