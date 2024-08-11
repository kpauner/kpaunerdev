"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cva } from "class-variance-authority";
import { useTranslations } from "next-intl";
import { ReactNode, forwardRef, useRef } from "react";

type PageLayoutProps = {
  as?: React.ElementType;
  title?: string;
  description?: string;
  size?: "default" | "sm" | "md";
  variant?: "default" | "page";
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const pageLayoutVariants = cva("flex grow flex-col mx-auto px-6 py-12", {
  variants: {
    variant: {
      default: "max-w-screen-xl",
      page: "max-w-screen-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
  ({
    as: Comp = "main",
    title,
    description,
    size = "md",
    variant = "default",
    className,
    children,
    ...restProps
  }) => {
    const ref = useRef(null);

    useGSAP(() => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut" },
        );
      }
    }, []);
    return (
      <Comp
        ref={ref}
        className={cn(pageLayoutVariants({ variant, className }))}
        {...restProps}
      >
        {(title || description) && (
          <div className="relative flex grow flex-col pb-14">
            {title && (
              <h1
                className={cn(
                  "text-4xl font-black uppercase leading-none tracking-tight text-white md:text-[8rem]",
                )}
              >
                {title}
              </h1>
            )}

            {description && (
              <div className="pt-12">
                <p className="text-2xl text-white">{description}</p>
              </div>
            )}
          </div>
        )}
        <div className="text-foreground md:text-lg">{children}</div>
      </Comp>
    );
  },
);

PageLayout.displayName = "PageLayout";

type ComponentLayoutProps = {
  as?: React.ElementType;
  title?: string;
  description?: string;
  categories?: string[];
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const ComponentLayout = forwardRef<HTMLDivElement, ComponentLayoutProps>(
  ({
    as: Comp = "section",
    title,
    description,
    className,
    children,
    categories,
    ...restProps
  }) => {
    return (
      <Comp
        className={cn(
          "grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-8",
          className,
        )}
        {...restProps}
      >
        {(title || description) && (
          <div className="relative col-span-2 flex grow flex-col pb-6">
            {title && (
              <h1
                className={cn(
                  "text-xl font-black uppercase leading-none tracking-tight text-white md:text-2xl",
                )}
              >
                {title}
              </h1>
            )}

            {description && (
              <div className="pt-4">
                <p className="text-base text-foreground">{description}</p>
              </div>
            )}
            {categories && (
              <div className="pt-4">
                <p className="text-sm italic text-foreground">
                  {categories.map((category) => category).join(", ")}
                </p>
              </div>
            )}
          </div>
        )}
        <div className="relative col-span-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-foreground/30 bg-muted/30 p-4 text-foreground md:text-lg">
          {children}
        </div>
      </Comp>
    );
  },
);

ComponentLayout.displayName = "ComponentLayout";

export { PageLayout, ComponentLayout };
