import AboutContent from "@/components/about/about-content";
import Heading from "@/components/layout/heading";
import { List } from "@/components/layout/lists";
import { PageLayout } from "@/components/layout/page-layout";
import { Separator } from "@/components/ui/separator";
import { listItems } from "@/config/constants";
import React from "react";

type Props = {};

export default async function AboutPage({}: Props) {
  return (
    <PageLayout
      title="About"
      description="Fullstack developer with a passion for crafting robust, user-centric web applications. Based in Odense, I thrive on turning complex problems into elegant solutions. My interest spans both front-end and back-end technologies (although both written in Javascript), with a keen eye for UI/UX design from my background in graphic design."
      variant="default"
    >
      <AboutContent />
      <div className="grid grid-cols-1 gap-16 pt-16 md:grid-cols-2">
        <div className="space-y-4">
          <Heading as="h2" size="sm" className="">
            Experience
          </Heading>
          <Separator className="dark:bg-white" />
          <List data={listItems} orientation="vertical" />
        </div>
        <div className="space-y-4">
          <Heading as="h2" size="sm" className="">
            Current
          </Heading>
          <Separator className="dark:bg-white" />
          <p className="text-4xl italic leading-10 tracking-wide text-white">
            Currently creating micro-saas projects in the streaming space.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
