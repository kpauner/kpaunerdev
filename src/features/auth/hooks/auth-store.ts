import { create } from "zustand"
import {
  fetchCurrentUser,
  logout as logoutApi,
  subscribeToAuthChanges,
} from "@/features/auth/api/auth"
import type { AuthUser } from "@/features/auth/types/auth.types"

interface AuthStore {
  user: AuthUser | null
  isLoading: boolean
  isInitialized: boolean
  initialize: () => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isLoading: true,
  isInitialized: false,

  initialize: async () => {
    if (get().isInitialized) return

    subscribeToAuthChanges((partial) => set(partial))

    try {
      const user = await fetchCurrentUser()
      set({ user, isLoading: false, isInitialized: true })
    } catch {
      set({ user: null, isLoading: false, isInitialized: true })
    }
  },

  logout: () => {
    logoutApi()
    set({ user: null, isLoading: false })
  },
}))
