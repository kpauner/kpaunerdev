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
      <PageLayout className="mx-auto text-center">
        <p className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-[9rem] font-cinzel">
          Work in
        </p>

        <p className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-[9rem] font-cinzel">
          Progress
        </p>
      </PageLayout>
    </>
  );
}
