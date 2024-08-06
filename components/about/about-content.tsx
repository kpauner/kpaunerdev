"use client";

import { useCategories } from "@/db/queries";
import React from "react";
import Marquee from "../marquee";

type Props = {};

export default function AboutContent({}: Props) {
  const { data: categories, isLoading, error } = useCategories();
  return <>{categories && <Marquee content={categories.items} />}</>;
}
