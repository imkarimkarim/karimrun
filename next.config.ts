import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
