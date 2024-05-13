export type Project = {
  id: string;
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
  title: string;
  subheading: string;
  description: string;
  slug: string;
  featured_image: string;
  content: string;
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
