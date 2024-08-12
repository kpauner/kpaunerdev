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
import { ProjectTypes } from "@/lib/types";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Icons } from "./icons";

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

  const categoryMap = useMemo(() => {
    if (!categories) return {};
    return categories.items.reduce(
      (acc, category) => {
        acc[category.id] = category.title;
        return acc;
      },
      {} as Record<string, string>,
    );
  }, [categories]);

  const processedData = useMemo(() => {
    if (!data || !categoryMap) return null;
    return data.items.map((item) => ({
      ...item,
      categories: item.categories.map(
        (categoryId) => categoryMap[categoryId] || categoryId,
      ),
    }));
  }, [data, categoryMap]);

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
  console.log("ERR", error);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {processedData?.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-video overflow-hidden rounded-lg"
            onClick={() => openDrawer(item)}
          >
            <div className="h-full w-full transition-transform duration-300 group-hover:scale-110">
              {isVideo(item.featured_img) ? (
                <video
                  src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_img}`}
                  className="h-full w-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              ) : (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_img}`}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  width={1000}
                  height={1000}
                />
              )}
            </div>
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
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
      <SheetContent side="right" className="dark:bg-primary">
        <SheetHeader className="pb-8">
          <SheetTitle className="pb-2 text-6xl font-black uppercase">
            {item.title}
          </SheetTitle>
          <SheetDescription className="text-xl dark:text-foreground">
            {localizedDescription}
          </SheetDescription>
          <div className="mt-8 flex flex-row flex-wrap items-center justify-between gap-2 pt-4 tracking-wide">
            <ul className="flex list-none flex-row flex-wrap gap-2 text-sm capitalize tracking-wider">
              {item.categories.map((category: string, index: number) => (
                <li
                  key={index}
                  className="text-medium rounded-full border border-white/80 px-2 py-1"
                >
                  {category}
                </li>
              ))}
            </ul>
            {item.project_url && (
              <Link
                className="flex items-center gap-2 rounded-full bg-white p-3 text-secondary hover:bg-white/80 hover:underline"
                href={item.project_url}
                target="_blank"
              >
                To project{" "}
                <Icons.arrowupright className="inline-block size-6 pt-1 hover:underline" />
              </Link>
            )}
          </div>
        </SheetHeader>

        {item.gallery.map((image: string, index: number) => (
          <div
            key={index}
            className="mt-8 flex flex-row flex-wrap items-center justify-between gap-2 tracking-wider"
          >
            {isVideo(item.featured_img) ? (
              <video
                src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${image}`}
                className="w-full"
                controls
              />
            ) : (
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${image}`}
                alt={item.title}
                width={1000}
                height={1000}
                className="h-auto w-full"
              />
            )}
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
}
