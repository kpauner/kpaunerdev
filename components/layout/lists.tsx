import React from "react";
// import Heading from "@/components/heading";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLocale } from "next-intl";

type ListProps = {
  title?: string;
  description?: string;
  data: any | null;
  showTitle?: boolean;
  className?: string;
  orientation?: "horizontal" | "vertical";
};

const List = ({
  data,
  title,
  showTitle,
  orientation,
  className,
}: ListProps) => {
  const locale = useLocale();
  if (!data) return null;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {showTitle && <h2>{title}</h2>}
      <ul
        className={cn(
          "flex flex-col gap-4",
          orientation === "horizontal" && "flex-row"
        )}
      >
        {data.items.map((item: any) => (
          <li key={item.id}>
            <Link
              href={`/${locale}/posts/${item.slug}`}
              className="hover:underline capitalize"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

List.displayName = "List";

export { List };
