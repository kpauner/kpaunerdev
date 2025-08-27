import type { Metadata } from "next"
import { mangoGrotesque, saans, suisseintlmono } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Loader from "@/components/app/loader"
import { ThemeProvider } from "@/lib/providers/theme-provider"
import { RootProvider } from "fumadocs-ui/provider"
import OverlayProvider from "@/lib/providers/overlay-provider"
import QueryProvider from "@/lib/providers/query-provider"

export const metadata: Metadata = {
  title: "kpauner",
  description: "I design and develop web applications.",
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased ",
          suisseintlmono.variable,
          saans.variable,
          mangoGrotesque.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <QueryProvider>
            <RootProvider theme={{ enabled: true }}>
              <OverlayProvider>{children}</OverlayProvider>
              <Loader />
            </RootProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
