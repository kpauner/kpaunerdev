"use client";

import { useProjects } from "@/db/queries";
import React from "react";

type GalleryProps = {
  locale: string;
};

export default function Gallery({ locale }: GalleryProps) {
  const { data, error, isLoading } = useProjects();
  return (
    <div>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div>
        {data?.items?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item[`description_${locale}` as keyof typeof item]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
