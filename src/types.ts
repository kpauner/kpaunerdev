export type Project = {
  id: string;
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
  title: string;
  slug: string;
  featured_image: string;
  gallery: string[];
  stack: string[];
  expand: {
    stack: Category[];
  };
};

export type Projects = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Project[];
};

export type Category = {
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

export type Categories = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Category[];
};

export type NavItem = {
  name: string;
  href: string;
};

export type ProjectTranslation = {
  id: string;
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
  title: string;
  slug: string;
  language_code: string;
  subheading: string;
  description: string;
  expand: {
    project: Project;
  };
};

export type ProjectTranslationRecord = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: ProjectTranslation[];
};
