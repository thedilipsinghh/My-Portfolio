import type { NextConfig } from "next";
import { APP_URL } from "./app/constant/confi";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${APP_URL}/api/:path*`,
      },
    ];
  }
};

export default nextConfig;
