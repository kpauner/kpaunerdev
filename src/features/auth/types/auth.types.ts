import type { RecordModel } from "pocketbase"

export type AuthUser = RecordModel & {
  email: string
  name?: string
  avatar?: string
  /** PocketBase relation — subscriber account this user belongs to */
  client?: string
}

export type SignInInput = {
  email: string
  password: string
}
