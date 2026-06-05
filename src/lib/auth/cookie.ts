import { AUTH_COOKIE_KEY } from "@/lib/auth/constants"
import { pb } from "@/lib/pocketbase"

const cookieOptions = {
  httpOnly: false,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
}

export function syncAuthCookie() {
  if (typeof document === "undefined") return
  document.cookie = pb.authStore.exportToCookie(cookieOptions)
}

export function clearAuthCookie() {
  if (typeof document === "undefined") return
  pb.authStore.clear()
  document.cookie = pb.authStore.exportToCookie({
    ...cookieOptions,
    maxAge: 0,
  })
}

export function loadAuthFromCookie(cookieHeader?: string) {
  pb.authStore.loadFromCookie(cookieHeader ?? "", AUTH_COOKIE_KEY)
}
