import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Heading from "./layout/heading";

type ListDisplayProps = {
  items: {
    title: string;
    description: string;
  }[];
  title: string;
};

gsap.registerPlugin(useGSAP);
export default function ListDisplay({ items, title }: ListDisplayProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(container.current, {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="opacity-0">
      {title && (
        <Heading
          as="h2"
          size="sm"
          className="font-eiko uppercase tracking-widest text-white"
        >
          {title}
        </Heading>
      )}
      <div className="flex justify-between">
        {items && (
          <div className="grid w-full grid-cols-1 divide-y border-dashed border-white/30 ">
            {items.map((item, i) => {
              return (
                <div key={i} className="flex justify-between py-4">
                  <div>{item.title}</div>
                  <p className="flex items-center text-right text-[0.6rem] uppercase text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
