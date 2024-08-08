import { useTranslations } from "next-intl";

import Gallery from "@/components/gallery";
import { PageLayout } from "@/components/layout/page-layout";

type Props = {
  params: { locale: string };
};

export default function Components({ params: { locale } }: Props) {
  const t = useTranslations("IndexPage");

  return (
    <>
      <PageLayout
        title="under construction"
        description="Various copy and paste components using react, tailwind and gsap"
      >
        Coming soon to an internet near you.
      </PageLayout>
    </>
  );
}
