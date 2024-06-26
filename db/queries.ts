import { useQuery } from "@tanstack/react-query";
import { ProjectRecord } from "@/lib/types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const INSTANCE_URL = axios.create({ baseURL: API_URL });

export const getProjects = async () => {
  return await INSTANCE_URL.get<ProjectRecord>(
    "/api/collections/projects/records"
  );
};

//QUERIES

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await getProjects();
      return response.data;
    },
  });
}
