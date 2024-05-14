import { Icons } from "./icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { NavItem } from "@/types";

type NavBarProps = {
  items: NavItem[];
};

export default function NavBar({ items }: NavBarProps) {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef();

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(".nav", {
          y: "-30px",
          autoAlpha: 0,
          ease: "power2.inOut",
        })
        .to(".bar", {
          height: "0",
          delay: 0.2,
          duration: 0.4,
          stagger: {
            amount: 1,
            grid: [2, 1],
            axis: "y",
            ease: "circk.inOut",
            from: "start",
          },
          ease: "power2.inOut",
        });
    },
    { scope: container },
  );

  const toggleTimeline = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
  });

  return (
    <div className="fixed left-0 right-0 top-0 z-20 w-full ">
      <div className="flex w-full max-w-screen-2xl justify-between gap-2  p-6">
        <Icons.logo className="h-6 fill-white" />
        <div className="flex items-center gap-2">
          <div ref={container} className="h-0">
            <button
              className="fixed right-6 top-6 z-50 text-white"
              onClick={toggleTimeline}
            >
              Toggle
            </button>
            <div className="fixed left-0 top-0 z-40 flex">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className="bar block h-screen w-[20vw] bg-black"
                ></span>
              ))}
              {items && (
                <nav className="nav fixed left-0 top-0 z-40 flex h-full w-full flex-col items-center justify-center text-white opacity-100">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={toggleTimeline}
                      className=" [&.active]:font-bold"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
