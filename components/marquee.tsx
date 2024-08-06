"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import horizontalLoop from "@/lib/horizontalloop";
import { CategoryTypes } from "@/lib/types";
import { env } from "process";

type MarqueeItem = {
  value: string;
  image: string;
};

type MarqueeProps = {
  content: CategoryTypes[];
};

export default function Marquee({ content }: MarqueeProps) {
  const container = useRef<HTMLDivElement>(null);

  const [svgContents, setSvgContents] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchSvgs = async () => {
      const svgs: { [key: string]: string } = {};
      for (const item of content) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionName}/${item.id}/${item.icon}`
        );
        svgs[item.id] = await response.text();
      }
      setSvgContents(svgs);
    };

    fetchSvgs();
  }, [content]);

  useGSAP(
    () => {
      const loop = horizontalLoop(".marquee", {
        speed: 0.3,
        repeat: -1,
        paddingRight: 24,
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="w-full h-full min-h-24 flex items-center justify-center  overflow-x-hidden gap-x-6 relative"
    >
      {content.map((item) => (
        <div key={item.id} className="marquee relative h-8 shrink-0 w-24 ">
          {svgContents[item.id] && (
            <div
              dangerouslySetInnerHTML={{ __html: svgContents[item.id] }}
              className="w-full h-full [&_svg]:w-full [&_svg]:h-full [&_svg_path]:fill-white "
            />
          )}
        </div>
      ))}
      <div className="absolute left-0 top-0 h-full w-full z-10 flex justify-between">
        <span className="bg-gradient-to-r from-black to-opacity-0 inline-block h-full w-28"></span>
        <span className="bg-gradient-to-l from-black to-opacity-0 inline-block h-full w-28"></span>
      </div>
    </div>
  );
}
