"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import horizontalLoop from "../lib/horizontalloop";

type MarqueeItem = {
  value: string;
  image: string;
};

type MarqueeProps = {
  content: MarqueeItem[];
};

export default function Marquee({ content }: MarqueeProps) {
  const container = useRef<HTMLDivElement>(null);

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
        <div key={item.value} className="marquee relative h-8 shrink-0 w-48">
          <Image src={item.image} alt={item.value} fill className="w-48" />
        </div>
      ))}
      <div className="absolute left-0 top-0 h-full w-full z-10 flex justify-between">
        <span className="bg-gradient-to-r from-background to-opacity-0 inline-block h-full w-28"></span>
        <span className="bg-gradient-to-l from-background to-opacity-0 inline-block h-full w-28"></span>
      </div>
    </div>
  );
}
