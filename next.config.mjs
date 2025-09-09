import createNextIntlPlugin from "next-intl/plugin"
import { createMDX } from "fumadocs-mdx/next"

const withNextIntl = createNextIntlPlugin()
const withMDX = createMDX({
  // Specify the config file path
  configPath: "source.config.ts",
})

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

export default withNextIntl(withMDX(nextConfig))
