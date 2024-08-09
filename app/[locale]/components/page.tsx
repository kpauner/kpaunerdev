import { useTranslations } from "next-intl";

import Gallery from "@/components/gallery";
import { ComponentLayout, PageLayout } from "@/components/layout/page-layout";

type Props = {
  params: { locale: string };
};

export default function Components({ params: { locale } }: Props) {
  const t = useTranslations("components-page");

  return (
    <>
      <PageLayout title={t("title")} description={t("description")}>
        <ComponentLayout
          title="Gallery"
          description="Various copy and paste components for your next project, made with react, tailwind and gsap."
          categories={["tailwindcss", "gsap"]}
        >
          Coming soon to an internet near you.
        </ComponentLayout>
      </PageLayout>
    </>
  );
}
