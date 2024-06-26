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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
      {data?.items?.map((item) => (
        <div
          key={item.id}
          className="relative group hover:cursor-pointer rounded-xl overflow-hidden  border border-white/10"
        >
          {isVideo(item.featured_img) ? (
            <video
              src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_img}`}
              width="1000"
              height="1000"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_img}`}
              width={1000}
              height={1000}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="text-sm w-full text-white bg-black/80 absolute top-0 right-0 p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 ">
            <div className="border-b border-dotted border-white py-2 flex justify-between items-center mb-4">
              <h3 className="font-medium uppcase text-xs uppercase tracking-wider">
                {item.title}
              </h3>
              <Icons.arrowupright className="w-4 h-4 fill-white" />
            </div>
            <p className="">
              {item[`description_${locale}` as keyof typeof item]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
