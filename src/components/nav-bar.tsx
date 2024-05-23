import { Icons } from "./icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { NavItem } from "@/types";
import { Separator } from "./ui/separator";

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
        <section className="nav-bar mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6">
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

        <div className="menu top-100% absolute right-0  h-0 w-full max-w-md p-6 opacity-0">
          {items && (
            <nav className="flex h-full flex-1 flex-col justify-around rounded-lg bg-white px-8 text-4xl text-black">
              {items.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  // onClick={toggleTimeline}
                  className="links bg-amber-300 [&.active]:font-bold"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </>
  );
}
