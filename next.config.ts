import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dodostatic.net",
        port: "",
        pathname: "/image/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "cdn.dodostatic.net",
        port: "",
        pathname: "/static/Img/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
