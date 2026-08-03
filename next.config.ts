import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryBasePath = isGitHubPages ? "/kiaan-robotics-website" : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: repositoryBasePath,
  assetPrefix: repositoryBasePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
