import { useTranslations } from "next-intl";

import Gallery from "@/components/gallery";
import { PageLayout } from "@/components/layout/page-layout";

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
        className=""
      >
        <Gallery locale={locale} />
        {/* <Temp /> */}
      </PageLayout>
    </>
  );
}
