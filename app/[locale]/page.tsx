import { useTranslations } from "next-intl";
import PageLayout from "@/components/layout/page-layout";
import Navigation from "@/components/navigation";
import Gallery from "@/components/gallery";

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  const t = useTranslations("IndexPage");

  const items = [
    { label: "Home", active: true },
    { label: "About", active: false },
    { label: "Services", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <>
      <section className="flex justify-between items-center px-6 py-8">
        logo here
        <Navigation items={items} className="gap-4 flex  bg-teal-300" />
      </section>
      <PageLayout>
        <Gallery locale={locale} />
        {/* <Temp /> */}
      </PageLayout>
    </>
  );
}
