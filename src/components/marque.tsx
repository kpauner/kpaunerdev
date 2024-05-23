"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { cn } from "@/lib/utils";
import { SvgImporter } from "@/components/svg-importer";
import { Category } from "@/types";

gsap.registerPlugin(ScrollTrigger);

type ScrollListProps = {
  data: Category[];
  className?: string;
};

export default function Marque({ data, className }: ScrollListProps) {
  const componentRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        },
      );
    },
    { scope: componentRef },
  );

  return (
    <>
      <section
        ref={componentRef}
        className={cn("space-y-8 overflow-hidden py-32", className)}
      >
        {Array.from({ length: 2 }, (_, index) => (
          <div
            key={index}
            className={cn(
              "tech-row flex items-center justify-center gap-12",
              index % 2 !== 0 ? "flex-row-reverse" : "",
            )}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="tech-item flex max-w-max flex-shrink-0 items-center gap-4"
                aria-label={item.title}
              >
                <SvgImporter
                  src={`${import.meta.env.BASE_URL}/api/files/${item.collectionName}/${item.id}/${item.icon}`}
                  className="flex h-12 items-center justify-center object-cover"
                  aria-label={item.title}
                />

                <p className=" text-6xl font-bold uppercase tracking-tight">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
