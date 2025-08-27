import PocketBase from "pocketbase"
import { env } from "./env"

export const pb = new PocketBase(env.NEXT_PUBLIC_API_URL)
// Disable auto-cancellation to avoid React 18 StrictMode double-invoke cancelling requests
pb.autoCancellation(false)
