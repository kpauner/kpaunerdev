import { z } from "zod";

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

// KEEP INCASE OF CONTACT FORM
export const ContactFormSchema = z.object({
  name: z.string().min(1).max(50).optional(),
  email: z.string().email().optional(),
  message: z.string().min(1).max(500).optional(),
});
