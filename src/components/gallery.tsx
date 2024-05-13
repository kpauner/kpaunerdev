import { Projects } from "@/types";
import { Separator } from "./ui/separator";
import { useCategories } from "@/queries";

type GalleryProps = {
  data: Projects;
};

export default function Gallery({ data }: GalleryProps) {
  const { data: categories } = useCategories();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {data.items.map((item) => {
        const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_image}`;
        return (
          <div key={item.id}>
            <img src={imageUrl} alt={item.title} />
            <div className="flex items-center justify-between gap-4">
              <span>{item.title}</span>
              <div className="flex flex-row flex-wrap gap-x-2">
                {item.stack.map((catId, i) => {
                  const category = categories?.find((cat) => cat.id === catId);
                  return <span key={i}>{category?.title}</span>;
                })}
              </div>
            </div>
            {item.title}
            <Separator className="bg-white/30" />
          </div>
        );
      })}
    </div>
  );
}
