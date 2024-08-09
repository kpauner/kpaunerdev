import { useTranslations } from "next-intl";
import { PageLayout } from "@/components/layout/page-layout";

type Props = {
  params: { locale: string };
};

export default function ContactPage({ params: { locale } }: Props) {
  const t = useTranslations("index-page");

  return (
    <>
      <PageLayout
        title="under construction"
        description="Various copy and paste components using react, tailwind and gsap"
      >
        {t.rich("description", {
          guidelines: (chunks) => <strong>{chunks}</strong>,
        })}
      </PageLayout>
    </>
  );
}
