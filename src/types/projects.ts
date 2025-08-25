import { StackTypes } from "./stacks"

export type ProjectTypes = {
  id: string
  created: string
  updated: string
  collectionId: string
  collectionName: string
  title: string
  description_en: string
  description_da: string
  description_ja: string
  slug: string
  client: string
  featuredImage: string
  projectUrl: string
  gallery: string[]
  categories: string[]
  expand: {
    categories: StackTypes[]
  }
}

export type ProjectRecord = {
  page: number
  perPage: number
  totalItems: number
  totalPages: number
  items: ProjectTypes[]
}
