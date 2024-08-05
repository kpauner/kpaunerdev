import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navigation from "@/components/navigation";
import { cn } from "@/lib/utils";
import { cera, cinzel } from "@/lib/fonts";
import Providers from "@/components/query-client-provider";
import { Icons } from "@/components/icons";
import Footer from "@/components/layout/footer";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const items = [
    { label: "Home", href: "" },
    { label: "Components", href: "/components" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <html lang={locale} className="bg-black" suppressHydrationWarning>
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
              <div className="bg-[#ff0c3a] font-medium text-xs uppercase text-center p-2">
                Looking for my main site? Check out{" "}
                <a
                  href="https://kpauner.com"
                  className="underline underline-offset-2"
                  target="_blank"
                >
                  kpauner.com
                </a>
              </div>
              <section className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto px-6 pt-16 pb-2">
                <Icons.logo className="w-28 h-12 fill-white" />
                <Navigation items={items} className="gap-4 flex" />
              </section>
              <main className="flex flex-col grow max-w-screen-xl mx-auto px-6 py-12">
                {children}
              </main>
              <Footer />
            </NextIntlClientProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
