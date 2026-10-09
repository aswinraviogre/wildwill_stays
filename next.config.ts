import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resorts/mist-meadows",
        destination: "/resorts/geo-greens",
        permanent: true,
      },
      {
        source: "/resorts/crocolake-hut",
        destination: "/resorts/whispering-woods",
        permanent: true,
      },
      {
        source: "/resorts/crocolake-hut-resort",
        destination: "/resorts/whispering-woods",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
