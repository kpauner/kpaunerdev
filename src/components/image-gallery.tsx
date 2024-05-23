import { Project } from "@/types";

export default function ImageGallery({ project }: { project: Project }) {
  const isImage = (fileName: string) => {
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    const fileExtension = fileName.split(".").pop()?.toLowerCase();
    return imageExtensions.includes(fileExtension || "");
  };

  console.log("WAAH", project);

  return (
    <div className="relative mx-auto flex w-full flex-col gap-6">
      {project.gallery.map((file, i) => {
        const fileUrl = `${import.meta.env.VITE_API_URL}/api/files/${project.collectionName}/${project.id}/${file}`;

        return isImage(file) ? (
          <img
            key={i}
            width={1536}
            height={400}
            src={fileUrl}
            alt={`${project.slug} image`}
            className="w-full object-cover"
          />
        ) : (
          <video
            key={i}
            width="100%"
            height="auto"
            controls
            className="w-full object-cover"
          >
            <source src={fileUrl} type={`video/${file.split(".").pop()}`} />
            Your browser does not support the video tag.
          </video>
        );
      })}
    </div>
  );
}
