import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL}/:path*`,
      },
    ];
  },
  // allowedDevOrigins 추가 필요
  allowedDevOrigins: ["10.0.2.2"],
};

export default nextConfig;
