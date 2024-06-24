"use client";

import { useProjects } from "@/db/queries";
import Image from "next/image";
import React from "react";
import { Icons } from "./icons";

type GalleryProps = {
  locale: string;
};

export default function Gallery({ locale }: GalleryProps) {
  const { data, error, isLoading } = useProjects();
  console.log(data);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-12">
      {data?.items?.map((item) => (
        <div key={item.id} className="relative group hover:cursor-pointer">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_img}`}
            width={1000}
            height={1000}
            alt={item.title}
          />
          <div className="border-b border-dotted border-white py-2 flex justify-between items-center">
            <h3 className="font-medium uppcase text-xs uppercase tracking-wider">
              {item.title}
            </h3>
            <Icons.arrowupright className="w-4 h-4 fill-white" />
          </div>
          <p className="text-sm text-white bg-black/80 absolute top-0 right-0 p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 ">
            {item[`description_${locale}` as keyof typeof item]}
          </p>
        </div>
      ))}
    </div>
  );
}
