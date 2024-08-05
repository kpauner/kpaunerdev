import React from "react";
import { Icons } from "../icons";
// import { SectionLayout } from "./page-layout";
// import { List } from "./lists";

type FooterProps = {};

export default async function Footer({}: FooterProps) {
  return (
    <div
      className="relative h-[400px] bg-violet-900 w-full"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed bottom-0 w-full h-[400px] ">
        <div className="py-24">
          {/* <List
            data={posts}
            title="Trust & Legal"
            showTitle={false}
            orientation="horizontal"
            className="text-violet-50 lowercase mx-auto max-w-screen-sm items-center pb-4"
          /> */}
          <div className="flex flex-col justify-center items-center gap-4">
            <Icons.logo className="h-16 fill-violet-100" />
            <ul className="flex gap-4">
              <li>
                <Icons.twitch className="size-8 fill-violet-100" />
              </li>
              <li>
                <Icons.youtube className="size-8 fill-violet-100" />
              </li>
              <li>
                <Icons.twitterx className="size-8 fill-violet-100" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
