import { useTranslations } from "next-intl";
import PageLayout from "@/components/layout/page-layout";
import Navigation from "@/components/navigation";
import Gallery from "@/components/gallery";
import { Icons } from "@/components/icons";

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
      <section className="flex justify-between items-center">
        <Icons.logo className="w-24 fill-white" />
        <Navigation items={items} className="gap-4 flex" />
      </section>
      <PageLayout description="Small gallery of me messing around with web technologies">
        <Gallery locale={locale} />
        {/* <Temp /> */}
      </PageLayout>
    </>
  );
}
