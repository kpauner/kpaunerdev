import React from "react";
import { Icons } from "../icons";
import { PageLayout } from "./page-layout";
import Link from "next/link";
// import { List } from "./lists";

type FooterProps = {};

export default async function Footer({}: FooterProps) {
  return (
    <div
      className="font-cera relative mt-20 h-[120px] w-full font-black uppercase"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed bottom-0 mx-auto h-[120px] w-full">
        <PageLayout as="footer" className="py-12">
          <div className="flex flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl text-white">
                Fullstack Developer and Designer
              </h2>
              <ul className="flex gap-4 text-xs">
                <li>
                  <Link href="https://www.twitch.tv/kpaunerdev" target="_blank">
                    twitch
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/kpauner"
                    target="_blank"
                  >
                    linkedin
                  </Link>
                </li>
                <li>
                  <Link href="mailto:kp@kpauner.com" target="_blank">
                    kp@kpauner.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="text-white">© 2024 · kpauner</div>
              <div className="self-end text-xs">All rights reserved</div>
            </div>
          </div>
        </PageLayout>
      </div>
    </div>
  );
}
