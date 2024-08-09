import { useTranslations } from "next-intl";
import { PageLayout } from "@/components/layout/page-layout";
import { Paragraph } from "@/components/ui/paragraph";
import { Input } from "@/components/ui/input";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  params: { locale: string };
};

export default function ContactPage({ params: { locale } }: Props) {
  const t = useTranslations("contact-page");

  return (
    <>
      <PageLayout title={t("title")} description={t("description")}>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          <div className="md:col-span-2">
            <Paragraph variant="quote">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              atque tempore, debitis laudantium eum.
            </Paragraph>
          </div>
          <div className="md:col-span-4 space-y-6">
            <form className="space-y-6">
              <FormItem>
                <FormLabel formItemId="name">Name</FormLabel>
                <Input name="name" id="name" placeholder="Name" />
              </FormItem>
              <FormItem>
                <FormLabel formItemId="email">Email</FormLabel>
                <Input name="email" id="email" placeholder="Email" />
              </FormItem>
              <FormItem>
                <FormLabel formItemId="message">Message</FormLabel>
                <Textarea name="message" id="message" placeholder="Message" />
              </FormItem>
              <FormItem className="flex justify-end">
                <Button size="lg" type="submit" className="w-full md:w-36">
                  Send
                </Button>
              </FormItem>
            </form>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
