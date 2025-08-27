import { env } from "@/lib/env"
import { ProjectTypes } from "@/types/projects"
import Image from "next/image"
import React from "react"

type GallerySource = {
  id: string
  slug: string
  collectionName: string
  gallery: string[]
}

export default function ImageGallery({ project }: { project: GallerySource }) {
  const isImage = (fileName: string) => {
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"]
    const fileExtension = fileName.split(".").pop()?.toLowerCase()
    return imageExtensions.includes(fileExtension || "")
  }

  return (
    <div className="relative mx-auto flex w-full flex-col gap-6">
      {project.gallery.map((file, i) => {
        const fileUrl = `${env.NEXT_PUBLIC_API_URL}/api/files/${project.collectionName}/${project.id}/${file}`

        return isImage(file) ? (
          <Image
            key={i}
            width={1536}
            height={400}
            src={fileUrl}
            alt={`${project.slug} image`}
            className="w-full object-cover"
          />
        ) : (
          <video key={i} width="100%" height="auto" controls className="w-full object-cover">
            <source src={fileUrl} type={`video/${file.split(".").pop()}`} />
            Your browser does not support the video tag.
          </video>
        )
      })}
    </div>
  )
}
