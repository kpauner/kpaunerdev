export type CategoryTypes = {
  id: string;
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
};

export type CategoryRecord = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: CategoryTypes[];
};

export type ProjectTypes = {
  id: string;
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
  title: string;
  description_en: string;
  description_da: string;
  description_ja: string;
  slug: string;
  featured_img: string;
  project_url: string;
  gallery: string[];
  categories: string[];

  is_published: boolean;
};

export type ProjectRecord = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: ProjectTypes[];
};
