import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resorts/mist-meadows",
        destination: "/resorts/geo-greens",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
