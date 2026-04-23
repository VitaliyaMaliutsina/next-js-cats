import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.media.tumblr.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
