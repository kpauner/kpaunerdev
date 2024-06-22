import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import PageLayout from "@/components/layout/page-layout";
import Temp from "@/components/temp";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <>
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <PageLayout>
        <p className="max-w-[590px]">
          {t.rich("description", {
            code: (chunks) => (
              <code className="font-mono text-white">{chunks}</code>
            ),
          })}
        </p>
        <Temp />
      </PageLayout>
    </>
  );
}
