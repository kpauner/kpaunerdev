import PocketBase from "pocketbase"
import { AUTH_COOKIE_KEY } from "@/lib/auth/constants"

export function isAuthenticatedRequest(cookieHeader: string | null) {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_API_URL)
  pb.authStore.loadFromCookie(cookieHeader ?? "", AUTH_COOKIE_KEY)
  return pb.authStore.isValid
}
