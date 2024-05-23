import axios from "axios";
import { Categories, ProjectTranslationRecord, Projects } from "./types";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;
console.log(BASE_URL);
const instance = axios.create({
  baseURL: BASE_URL,
});

export async function getCategoryIds() {
  const response = await instance.get<Projects>("/collections/stacks/records");
  const data = response;
  return data;
}

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await instance.get<Projects>(
        "/collections/projects/records",
      );
      return data;
    },
  });
}

export function useProjectsTranslations() {
  return useQuery({
    queryKey: ["translations"],
    queryFn: async () => {
      const { data } = await instance.get<ProjectTranslationRecord>(
        "/collections/project_translations/records",
      );
      return data;
    },
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await instance.get<Categories>(
        "/collections/stacks/records",
      );
      return data.items;
    },
  });
}
