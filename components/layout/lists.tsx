import { cn } from "@/lib/utils";

type ListProps = {
  title?: string;
  description?: string;
  data: any | null;
  showTitle?: boolean;
  className?: string;
  orientation?: "horizontal" | "vertical";
};

const List = ({ data, orientation, className }: ListProps) => {
  if (!data) return null;
  return (
    <ul
      className={cn(
        "flex flex-col gap-8",
        orientation === "horizontal" && "flex-row",
        className
      )}
    >
      {data.map((item: any) => (
        <li key={item.id} className="flex flex-col gap-2">
          <div className="text-sm font-black uppercase tracking-wide text-white flex gap-2">
            <span>{item.year}</span>/<span>{item.title}</span>
          </div>
          <p className="leading-5">{item.description}</p>
          <div className="text-sm font-black uppercase tracking-wide text-white">
            {item.business}
          </div>
        </li>
      ))}
    </ul>
  );
};

List.displayName = "List";

export { List };
