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
  (
    {
      as: Comp = "main",
      title,
      description,
      size = "md",
      variant = "default",
      className,
      children,
      ...restProps
    },
    ref
  ) => {
    const titleRef = useRef(null);

    useGSAP(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" }
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
          <div ref={titleRef} className="relative flex grow flex-col pb-14">
            {title && (
              <h1
                className={cn(
                  "text-4xl font-black leading-none tracking-tight text-white md:text-[8rem] uppercase"
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
        <div className="text-gray-400 md:text-lg">{children}</div>
      </Comp>
    );
  }
);

PageLayout.displayName = "PageLayout";

export { PageLayout };
