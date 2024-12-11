import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/karim-cv.pdf",
        permanent: false,
      },
    ];
  },
  output: "export",
};

export default nextConfig;
