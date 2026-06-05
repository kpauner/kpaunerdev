import { pb } from "@/lib/pocketbase"
import {
  clearAuthCookie,
  loadAuthFromCookie,
  syncAuthCookie,
} from "@/lib/auth/cookie"
import type { AuthUser } from "@/features/auth/types/auth.types"

async function resolveUser(recordId: string, fallback: AuthUser): Promise<AuthUser> {
  try {
    return (await pb.collection("users").getOne(recordId)) as AuthUser
  } catch {
    return fallback
  }
}

export async function login(email: string, password: string): Promise<AuthUser> {
  const authData = await pb.collection("users").authWithPassword(email, password)
  syncAuthCookie()
  return authData.record as AuthUser
}

export async function fetchCurrentUser(): Promise<AuthUser | null> {
  if (typeof document !== "undefined") {
    loadAuthFromCookie(document.cookie)
  }

  if (!pb.authStore.isValid || !pb.authStore.record) {
    return null
  }

  return resolveUser(pb.authStore.record.id, pb.authStore.record as AuthUser)
}

export function logout() {
  clearAuthCookie()
}

type AuthStoreSetter = (partial: {
  user: AuthUser | null
  isLoading: boolean
}) => void

let isSubscribed = false

export function subscribeToAuthChanges(set: AuthStoreSetter) {
  if (isSubscribed || typeof window === "undefined") {
    return () => undefined
  }

  isSubscribed = true

  return pb.authStore.onChange(async (token, model) => {
    if (token && model) {
      const user = await resolveUser(model.id, model as AuthUser)
      syncAuthCookie()
      set({ user, isLoading: false })
      return
    }

    clearAuthCookie()
    set({ user: null, isLoading: false })
  })
}
