import localFont from "next/font/local";
import { Cinzel } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

export const cera = localFont({
  variable: "--font-cera",
  src: [
    {
      path: "../public/fonts/Cera-Pro-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Cera-Pro-Medium.woff2",
      weight: "500",
    },
  ],
});
