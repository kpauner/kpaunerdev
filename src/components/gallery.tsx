import { Projects } from "@/types";
import { useCategories } from "@/queries";
import { Icons } from "./icons";

type GalleryProps = {
  data: Projects;
};

export default function Gallery({ data }: GalleryProps) {
  const { data: categories } = useCategories();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {data.items.map((item, index) => {
        const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/${item.collectionName}/${item.id}/${item.featured_image}`;
        return (
          <div key={item.id}>
            <img src={imageUrl} alt={item.title} />
            <div className="flex flex-col gap-2 py-2">
              <div className="flex justify-between border-b border-dotted border-white pb-2 font-neue text-[0.7rem] font-medium uppercase tracking-wider">
                <h2 className="">{item.title}</h2>
                <span>0{index + 1}</span>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-row flex-wrap gap-x-2 text-[0.6rem] uppercase text-muted-foreground">
                  {item.stack.map((catId, i) => {
                    const category = categories?.find(
                      (cat) => cat.id === catId,
                    );
                    return <span key={i}>{category?.title}</span>;
                  })}
                </div>
                <Icons.arrowupright className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
