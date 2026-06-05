import { useAuthStore } from "@/features/auth/hooks/auth-store"

export function useAuth() {
  const user = useAuthStore((state) => state.user)
  const isLoading = useAuthStore((state) => state.isLoading)
  const isInitialized = useAuthStore((state) => state.isInitialized)
  const logout = useAuthStore((state) => state.logout)

  return {
    user,
    isLoading,
    isInitialized,
    isAuthenticated: Boolean(user),
    logout,
  }
}
