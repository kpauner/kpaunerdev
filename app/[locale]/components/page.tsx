import { useTranslations } from "next-intl";
import PageLayout from "@/components/layout/page-layout";
import Gallery from "@/components/gallery";

type Props = {
  params: { locale: string };
};

export default function Components({ params: { locale } }: Props) {
  const t = useTranslations("IndexPage");

  return (
    <>
      <PageLayout
        title="under construction"
        description="Coming soon to an internet near you."
      ></PageLayout>
    </>
  );
}
