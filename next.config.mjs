import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.kpauner.com",
        pathname: "/api/files/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
