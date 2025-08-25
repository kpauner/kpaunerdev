import localFont from "next/font/local"
import { Cinzel } from "next/font/google"

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
})

export const saans = localFont({
  variable: "--font-saans",
  src: [
    {
      path: "../../public/fonts/SaansTRIAL-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/SaansTRIAL-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/SaansTRIAL-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SaansTRIAL-RegularItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
})

export const suisseintlmono = localFont({
  variable: "--font-suisseintlmono",
  src: [
    {
      path: "../../public/fonts/SuisseIntlMono-Thin-WebTrial.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/SuisseIntlMono-Regular-WebTrial.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/SuisseIntlMono-Bold-WebTrial.woff2",
      weight: "500",
      style: "normal",
    },
  ],
})

export const mangoGrotesque = localFont({
  src: "../../public/fonts/MangoGrotesque-Variable-TT.ttf",
  variable: "--font-mango",
})
