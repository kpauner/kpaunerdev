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

  //TODO PLACE VIDEO EXTENSIONS IN A CONFIG FILE
  const isVideo = (fileName: string) => {
    const videoExtensions = ["mp4", "webm", "ogg"];
    const extension = fileName.split(".").pop()?.toLowerCase();
    return videoExtensions.includes(extension!);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.items?.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden group aspect-w-16 aspect-h-9"
        >
          <div className="transition-transform duration-300 group-hover:scale-110 w-full h-full">
            {isVideo(item.featured_img) ? (
              <video
                src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_img}`}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_img}`}
                alt={item.title}
                className="object-cover w-full h-full"
                width={1000}
                height={1000}
              />
            )}
          </div>
          <div className="absolute inset-0 bg-black/50 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
