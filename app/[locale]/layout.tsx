import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navigation from "@/components/navigation";
import { cn } from "@/lib/utils";
import { cera, cinzel } from "@/lib/fonts";
import Providers from "@/components/query-client-provider";
import { Icons } from "@/components/icons";
import Footer from "@/components/layout/footer";
import Link from "next/link";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const items = [
    { label: "Home", href: "" },
    { label: "Components", href: "/components" },
    { label: "About", href: "/about" },
    // { label: "Contact", href: "/contact" },
  ];

  return (
    <html lang={locale} className="bg-primary" suppressHydrationWarning>
      <body
        className={cn("grow scroll-smooth", cera.variable, cinzel.variable)}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          // defaultTheme="system"
          // enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <NextIntlClientProvider messages={messages}>
              <div className="bg-[#ff0c3a] p-2 text-center text-xs font-medium uppercase">
                Looking for my main site? Check out{" "}
                <a
                  href="https://kpauner.com"
                  className="underline underline-offset-2"
                  target="_blank"
                >
                  kpauner.com
                </a>
              </div>
              <section className="mx-auto flex max-w-screen-xl flex-col items-center justify-between px-6 pb-2 pt-16 sm:flex-row">
                <Link href="/">
                  <Icons.logo className="h-12 w-28 fill-white" />
                </Link>
                <Navigation items={items} className="flex gap-4" />
              </section>
              {children}
              <Footer />
            </NextIntlClientProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
