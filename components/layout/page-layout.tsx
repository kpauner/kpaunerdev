import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
};

export default function PageLayout({
  children,
  title,
  description,
  className,
}: Props) {
  // const t = useTranslations('PageLayout');

  return (
    <div className={cn("flex grow flex-col", className)}>
      {title && description && (
        <div className="relative flex grow flex-col">
          {title && (
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              {title}
            </h1>
          )}
          <div className="mt-auto grid grid-cols-1 gap-4 pt-20 md:grid-cols-2 lg:gap-12">
            {description && (
              <div className="col-span-1">
                <p className="text-lg text-white">{description}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
    </div>
  );
}
