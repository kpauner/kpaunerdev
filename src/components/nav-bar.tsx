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
  const tl = useRef<GSAPTimeline>();

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(
          ".menu",
          {
            duration: 1,
            opacity: 1,
            height: "60vh", // change this to 100vh for full-height menu
            ease: "expo.inOut",
            display: "block",
            top: "64px",
          },
          "<",
        )
        .to(".line1", { rotation: 45, y: 4 }, "<")
        .to(".line3", { rotation: -45, y: -4 }, "<")
        .from(
          ".links",
          {
            duration: 1,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            ease: "expo.inOut",
          },
          "-=0.5",
        );

      tl.current.reverse();
    },
    { scope: container },
  );

  const toggleTimeline = contextSafe(() => {
    if (tl.current) {
      tl.current.reversed(!tl.current.reversed());
    }
  });

  return (
    <>
      <div ref={container} className="fixed left-0 top-0 z-10 w-full">
        <section className="nav-bar mx-auto flex h-20 max-w-screen-xl items-center justify-between px-6">
          <div className="">
            <Icons.logo className="h-6 fill-white" />
          </div>
          <button
            type="button"
            className="z-[999] flex flex-col gap-1"
            onClick={() => {
              toggleTimeline();
            }}
          >
            <span className="line1 z-50 block h-1 w-6  bg-white"></span>
            <span className="line3 - z-50 block h-1 w-6  bg-white"></span>
          </button>
        </section>

        <div className="menu -top-100% absolute right-0 hidden h-0 w-full opacity-0">
          {items && (
            <div className="mx-auto  h-full w-full max-w-screen-xl px-6 text-6xl text-black">
              <span className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg bg-white p-6">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={toggleTimeline}
                    className="links  w-full text-center [&.active]:font-bold"
                  >
                    {item.name}
                  </Link>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
