import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navigation from "@/components/navigation";
import { cn } from "@/lib/utils";
import { cera } from "@/lib/fonts";

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
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("grow scroll-smooth", cera.variable)}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          // defaultTheme="system"
          // enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
