// src/features/categories/hooks/use-get-categories.ts
import { useQuery } from "@tanstack/react-query"
import { getCategories } from "@/data-access/get-categories"

export function useGetCategories() {
  return useQuery({ queryKey: ["categories"], queryFn: getCategories, staleTime: 5 * 60_000 })
}
