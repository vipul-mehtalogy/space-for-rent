import type { NextConfig } from "next";

const repoName = "space-for-rent";

const nextConfig: NextConfig = {
  /* config options here */  
  output: "export",

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,

  images: {
    unoptimized: true
  }
};

export default nextConfig;
