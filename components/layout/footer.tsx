import React from "react";
import { Icons } from "../icons";
import { PageLayout } from "./page-layout";
import Link from "next/link";
// import { List } from "./lists";

type FooterProps = {};

export default async function Footer({}: FooterProps) {
  return (
    <div
      className="relative h-[120px]  w-full mt-20 font-cera uppercase font-black"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed bottom-0 w-full h-[120px] mx-auto">
        <PageLayout as="footer" className="py-12">
          <div
            className="flex flex-row justify-between
            items-center gap-4"
          >
            <h2 className="text-white text-xl">
              Fullstack Developer and Designer
            </h2>

            <ul className="flex gap-4">
              <li>
                <Link href="https://www.twitch.tv/kpaunerdev" target="_blank">
                  <Icons.twitch className="size-6 fill-violet-100" />
                </Link>
              </li>
              <li>
                <Icons.youtube className="size-6 fill-violet-100" />
              </li>
              <li>
                <Icons.twitterx className="size-6 fill-violet-100" />
              </li>
            </ul>
          </div>
        </PageLayout>
      </div>
    </div>
  );
}
