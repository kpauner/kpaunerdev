"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Heading from "../layout/heading";

type HeroProps = {
  title?: string;
};

export default function Hero({ title }: HeroProps) {
  const container = useRef<HTMLDivElement>(null);

  const text1 = "Fullstack ";
  const text2 = "developer";

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".text-animation",
        {
          y: 80,
        },
        {
          y: 0,
          duration: 0.8,
          autoAlpha: 1,
          stagger: {
            amount: 0.5,
            grid: [1, 1],
            axis: "y",
            ease: "circk.inOut",
            from: "start",
          },
        },
      );
      tl.to(".icon", {
        opacity: 1,
        duration: 0.5,

        autoAlpha: 1,
      });
    },
    { scope: container },
  );
  return (
    <section
      ref={container}
      className="flex h-[60vh] w-full flex-col justify-end space-y-6 py-8"
    >
      {title ? (
        <Heading
          as="h2"
          size="xl"
          className="flex max-w-screen-lg flex-col gap-4 font-sans font-medium "
        >
          <span className="text-animation opacity-0">{title}</span>
        </Heading>
      ) : (
        <Heading
          as="h2"
          size="xl"
          className="flex max-w-screen-lg flex-col gap-4 font-sans font-medium "
        >
          <span className="text-animation opacity-0">{text1}</span>
          <span className="text-animation opacity-0">{text2}</span>
        </Heading>
      )}
    </section>
  );
}
