import createNextIntlPlugin from "next-intl/plugin"
import { createMDX } from "fumadocs-mdx/next"

const withNextIntl = createNextIntlPlugin()
const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kpaunercom.up.railway.app",
        pathname: "/api/files/**",
      },
    ],
  },
}

export default withMDX(withNextIntl(nextConfig))
