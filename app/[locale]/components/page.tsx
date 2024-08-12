import { useTranslations } from "next-intl";
import { ComponentLayout, PageLayout } from "@/components/layout/page-layout";
import ToolbarExpandable from "@/components/preview/toolbar-expandable";

type Props = {
  params: { locale: string };
};

export default function Components({ params: { locale } }: Props) {
  const t = useTranslations("components-page");

  return (
    <>
      <PageLayout
        title={t("title")}
        description={t("description")}
        className="space-y-8"
      >
        <ComponentLayout
          title="Gallery"
          description="Various copy and paste components for your next project, made with react, tailwind and gsap."
          categories={["tailwindcss", "gsap"]}
        >
          <ToolbarExpandable />
        </ComponentLayout>
        <ComponentLayout
          title="Gallery"
          description="Various copy and paste components for your next project, made with react, tailwind and gsap."
          categories={["tailwindcss", "gsap"]}
        >
          <ToolbarExpandable />
        </ComponentLayout>
      </PageLayout>
    </>
  );
}
