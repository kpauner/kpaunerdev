import localFont from "next/font/local";

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
