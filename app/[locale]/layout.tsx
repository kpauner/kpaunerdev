import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navigation from "@/components/navigation";
import { cn } from "@/lib/utils";
import { cera } from "@/lib/fonts";
import Providers from "@/components/query-client-provider";

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

  return (
    <html lang={locale} className="bg-black" suppressHydrationWarning>
      <body className={cn("grow scroll-smooth", cera.variable)}>
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
              <main className="flex flex-col grow max-w-screen-xl mx-auto px-6 py-12">
                {children}
              </main>
            </NextIntlClientProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
