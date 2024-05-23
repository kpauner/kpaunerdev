import { Link } from "@tanstack/react-router";
import React, { useRef } from "react";
import { Icons } from "./icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Project } from "@/types";
import { useCategories } from "@/queries";

type ContentListProps = {
  data: Project[];
  type: "projects" | "stacks" | "posts";
};

export default function ContentList({ data, type }: ContentListProps) {
  const componentRef = useRef(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const [currentItem, setCurrentItem] = React.useState<null | number>(null);
  const { data: categories } = useCategories();

  console.log(data);
  useGSAP(
    () => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!revealRef.current) return;
        const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
        const speed = Math.sqrt(
          Math.pow(mousePos.x - lastMousePos.current.x, 2),
        );

        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 420;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
            scale: 1,
            opacity: 1,
          });
        }
        lastMousePos.current = mousePos;
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { dependencies: [currentItem], scope: componentRef },
  );

  const contentImages = data.map((item) => {
    const fallbackItemImage = "/public/images/fallback-image.png";
    const image =
      item.featured_image && item.featured_image.trim() !== ""
        ? item.featured_image
        : fallbackItemImage;
    const imageUrl = `${import.meta.env.VITE_API_URL}/api/files/${item.collectionName}/${item.id}/${image}`;

    return imageUrl;
  });

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
  };

  const onMouseLeave = () => {
    setCurrentItem(null);
  };

  return (
    <section ref={componentRef} className="space-y-4">
      <span className="block h-px w-full bg-primary/50"></span>
      <ul className="relative flex flex-col" onMouseLeave={onMouseLeave}>
        {data.map((item, index) => (
          <li
            key={index}
            className="group list-item text-foreground "
            onMouseEnter={() => onMouseEnter(index)}
          >
            <Link
              to={`/${type}/${item.slug}`}
              className="flex flex-col justify-between py-10 md:flex-row"
              aria-label={`link to ${item.title}`}
            >
              <div className="font-spacegrotesk flex w-full items-center justify-between gap-4">
                <span className="hidden basis-1/12 text-3xl font-bold transition-all duration-300 group-hover:-translate-x-1 group-hover:text-foreground md:block">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="basis-4/12 text-2xl font-bold uppercase transition-all duration-300 group-hover:-translate-x-1 group-hover:text-foreground">
                  {item.title}
                </span>
                {item.stack.length > 0 && (
                  <div className="hidden basis-6/12 flex-wrap gap-3 text-xs transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground md:flex">
                    {item.stack.map((catId, i) => {
                      const category = categories?.find(
                        (cat) => cat.id === catId,
                      );
                      return <span key={i}>{category?.title}</span>;
                    })}
                  </div>
                )}

                <span className="ml-auto basis-1/12 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                  <Icons.arrowupright className="ml-auto size-16" />
                </span>
              </div>
            </Link>
            <span className="block h-px w-full bg-primary/50"></span>
          </li>
        ))}
      </ul>

      {/* HOVER ELEMENTS */}

      {currentItem !== null && (
        <div
          className="hover-reveal pointer-events-none absolute left-0 top-0 z-20 h-[400px] w-[500px] scale-0 rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
          style={{
            backgroundImage:
              currentItem !== null ? `url(${contentImages[currentItem]})` : "",
          }}
          ref={revealRef}
        ></div>
      )}
    </section>
  );
}
