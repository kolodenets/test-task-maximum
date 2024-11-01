import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photobank.maximum.expert",
        port: "",
        pathname: "/photo/fotobankN/**",
      },
    ],
  },
};

export default nextConfig;
