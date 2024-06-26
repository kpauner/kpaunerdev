import { useTranslations } from "next-intl";
import PageLayout from "@/components/layout/page-layout";
import Gallery from "@/components/gallery";

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  const t = useTranslations("IndexPage");

  return (
    <>
      <PageLayout
        title="no more boring stock"
        description="The best free stock photos and royalty free images. Powered by robots everywhere."
      >
        <Gallery locale={locale} />
        {/* <Temp /> */}
      </PageLayout>
    </>
  );
}
