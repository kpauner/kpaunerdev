import { StackTypes } from "./stacks"

export type PostTypes = {
  id: string
  created: string
  updated: string
  collectionId: string
  collectionName: string
  title: string
  subheading: string
  description: string
  excerpt: string
  slug: string
  featuredImage: string
  content: string
  stack: string[]
  categories: string[]
  expand: {
    stack: StackTypes[]
  }
}

export type PostRecord = {
  page: number
  perPage: number
  totalItems: number
  totalPages: number
  items: PostTypes[]
}
