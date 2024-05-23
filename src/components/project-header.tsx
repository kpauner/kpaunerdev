import React from "react";
import Heading from "./layout/heading";
import { cn } from "@/lib/utils";

type ProjectHeaderProps = {
  title: string;
  description: string;
  className?: string;
};

export default function ProjectHeader({
  title,
  description,
  className,
}: ProjectHeaderProps) {
  return (
    <section className={cn("h-[30vh] space-y-4 py-12", className)}>
      <Heading as="h1" size="lg" className="font-sans font-medium">
        {title}
      </Heading>
      <p className="max-w-screen-sm text-xl text-muted-foreground">
        {description}
      </p>
    </section>
  );
}
