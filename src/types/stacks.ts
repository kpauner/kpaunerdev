export type StackTypes = {
  id: string
  created: string
  updated: string
  collectionId: string
  collectionName: string
  title: string
  slug: string
  icon: string
  description: string
}

export type StackRecord = {
  page: number
  perPage: number
  totalItems: number
  totalPages: number
  items: StackTypes[]
}
