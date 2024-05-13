type Project = {
  id: number;
  titleEN: string;
  titleDA: string;
  descriptionEN: string;
  descriptionDA: string;
  body: string;
};

export type Projects = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Project[];
};

// TODO POST TYPES
type Post = {
  id: number;
  titleEN: string;
  titleDA: string;
  descriptionEN: string;
  descriptionDA: string;
  body: string;
};

export type Posts = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Post[];
};
