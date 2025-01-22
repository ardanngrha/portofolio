import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ardanstorage.blob.core.windows.net',
      },
    ],
  },
};

export default nextConfig;
