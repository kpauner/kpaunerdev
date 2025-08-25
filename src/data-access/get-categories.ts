import { env } from "@/lib/env"
import { StackRecord } from "@/types/stacks"

export async function getCategories(): Promise<StackRecord> {
  const categories = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/api/collections/categories/records`,
  ).then((res) => res.json())
  return categories
}
