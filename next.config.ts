import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pashm-project",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
