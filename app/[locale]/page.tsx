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
        title="Another playground"
        description="Small projects, components,  various and experiments"
      >
        <Gallery locale={locale} />
        {/* <Temp /> */}
      </PageLayout>
    </>
  );
}
