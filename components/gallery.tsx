"use client";

import { useCategories, useProjects } from "@/db/queries";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ProjectRecord, ProjectTypes } from "@/lib/types";
import { useLocale } from "next-intl";
import Link from "next/link";

type GalleryProps = {
  locale: string;
};

export default function Gallery({ locale }: GalleryProps) {
  const { data, error, isLoading } = useProjects();
  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesIsLoading,
  } = useCategories();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ProjectTypes | null>(null);

  console.log("DATA", data);
  console.log(categories);

  // Create a mapping of category IDs to titles
  const categoryMap = useMemo(() => {
    if (!categories) return {};
    return categories.items.reduce((acc, category) => {
      acc[category.id] = category.title;
      return acc;
    }, {} as Record<string, string>);
  }, [categories]);

  // Replace category IDs with titles in the data items
  const processedData = useMemo(() => {
    if (!data || !categoryMap) return null;
    return data.items.map((item) => ({
      ...item,
      categories: item.categories.map(
        (categoryId) => categoryMap[categoryId] || categoryId
      ),
    }));
  }, [data, categoryMap]);

  //TODO PLACE VIDEO EXTENSIONS IN A CONFIG FILE
  const isVideo = (fileName: string) => {
    const videoExtensions = ["mp4", "webm", "ogg"];
    const extension = fileName.split(".").pop()?.toLowerCase();
    return videoExtensions.includes(extension!);
  };
  const openDrawer = (item: ProjectTypes) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  if (isLoading || categoriesIsLoading) return <div>Loading...</div>;
  if (error || categoriesError) return <div>Error loading data</div>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {processedData?.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden group aspect-w-16 aspect-h-9"
            onClick={() => openDrawer(item)}
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
      <GalleryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        item={selectedItem}
      />
    </>
  );
}

function GalleryDrawer({
  isOpen,
  onClose,
  item,
}: {
  isOpen: boolean;
  onClose: () => void;
  item: ProjectTypes | null;
}) {
  const locale = useLocale();
  if (!item) return null;
  const localizedDescription =
    item[`description_${locale}` as keyof typeof item] || "";

  const isVideo = (fileName: string) => {
    const videoExtensions = ["mp4", "webm", "ogg"];
    const extension = fileName.split(".").pop()?.toLowerCase();
    return videoExtensions.includes(extension!);
  };
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="dark:bg-[#0C09CA]">
        <SheetHeader className="pb-8">
          <SheetTitle className="uppercase text-6xl pb-2 font-black">
            {item.title}
          </SheetTitle>
          <SheetDescription className="dark:text-white">
            {localizedDescription}
          </SheetDescription>
        </SheetHeader>
        <div>
          {isVideo(item.featured_img) ? (
            <video
              src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_img}`}
              className="w-full"
              controls
            />
          ) : (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_img}`}
              alt={item.title}
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          )}
          {/* Add more details about the item here */}
          <div className="mt-8 flex flex-row flex-wrap gap-2 tracking-wide justify-between items-center">
            <ul className="list-none flex flex-row flex-wrap gap-2 tracking-wide capitalize">
              {item.categories.map((category: string, index: number) => (
                <li
                  key={index}
                  className="text-sm  border  border-white/20 rounded-full p-3 hover:bg-black/10"
                >
                  {category}
                </li>
              ))}
            </ul>
            <Link
              className="bg-white text-dark-blue rounded-full p-3"
              href={item.project_url}
            >
              Go to project
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
