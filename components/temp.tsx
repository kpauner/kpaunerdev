"use client";

import { useProjects } from "@/db/queries";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function Temp({}: Props) {
  const t1 = useTranslations("Error");
  const { data, error, isLoading } = useProjects();
  return (
    <div>
      {t1.rich("description", {
        p: (chunks) => <p className="mt-4">{chunks}</p>,
        retry: (chunks) => (
          <button
            className="text-white underline underline-offset-2"
            onClick={() => console.log("reload")}
            type="button"
          >
            {chunks}
          </button>
        ),
      })}
    </div>
  );
}
