import { pb } from "@/lib/pocketbase"
import { CategoriesTypes } from "../types/categories.types"

export async function getCategoriesApi(): Promise<CategoriesTypes[]> {
  const list = await pb.collection("categories").getList<CategoriesTypes>(1, 50, {
    sort: "-created",
    // Limit returned fields to reduce payload size
    fields: "id,title,slug,icon,description,isActive,created,updated",
  })
  return list.items
}
