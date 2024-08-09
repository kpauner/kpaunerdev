import { useTranslations } from "next-intl";

import Gallery from "@/components/gallery";
import { PageLayout } from "@/components/layout/page-layout";

type Props = {
  params: { locale: string };
};

export default function Components({ params: { locale } }: Props) {
  const t = useTranslations("components-page");

  return (
    <>
      <PageLayout title={t("title")} description={t("description")}>
        Coming soon to an internet near you.
      </PageLayout>
    </>
  );
}
