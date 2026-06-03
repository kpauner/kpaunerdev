"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn, truncateText } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import React from "react";

export default function Breadcrumbs() {
  const pathname = usePathname() || "";
  const locale = useLocale();
  // Remove locale from pathname since it's already included
  const paths = pathname
    .split("/")
    .filter((path) => path !== "" && path !== locale);
  const maxLength = 10;
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {paths.map((path, i) => {
          const isLast = i === paths.length - 1;
          const displayedPath = truncateText(path, maxLength);

          // Build the href by reconstructing the path up to this point
          const href = `/${locale}/${paths.slice(0, i + 1).join("/")}`;

          return (
            <React.Fragment key={path}>
              {isLast ? (
                <BreadcrumbPage>{displayedPath}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link
                        href={href}
                        className={cn(
                          "text-neutral-500",
                          isLast && "text-neutral-900"
                        )}
                      >
                        {displayedPath}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
