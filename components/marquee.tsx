"use client";

import { useEffect, useRef, useState } from "react";
import horizontalLoop from "@/lib/horizontalloop";
import { CategoryTypes } from "@/lib/types";
import { motion } from "framer-motion";
import MarqueeAnimation from "./marquee-anim";

type MarqueeItem = {
  value: string;
  image: string;
};

type MarqueeProps = {
  content: CategoryTypes[];
};

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

export default function Marquee({ content }: MarqueeProps) {
  const container = useRef<HTMLDivElement>(null);
  const [svgContents, setSvgContents] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchSvgs = async () => {
      const svgs: { [key: string]: string } = {};
      for (const item of content) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.icon}`,
        );
        svgs[item.id] = await response.text();
      }
      setSvgContents(svgs);
    };

    fetchSvgs();
  }, [content]);

  return (
    <div
      ref={container}
      className="relative flex w-full overflow-x-hidden py-12"
    >
      <MarqueeAnimation>
        {content.map((item) => (
          <div
            className="track relative h-8 w-24 shrink-0 whitespace-nowrap will-change-transform"
            key={item.id}
          >
            {svgContents[item.id] && (
              <div
                dangerouslySetInnerHTML={{ __html: svgContents[item.id] }}
                className="h-full w-full [&_svg]:h-full [&_svg]:w-full [&_svg_path]:fill-white"
              />
            )}
          </div>
        ))}
      </MarqueeAnimation>
    </div>
  );
}
