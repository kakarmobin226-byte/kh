import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "/kh";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? repoName : "",
  assetPrefix: isGithubActions ? `${repoName}/` : undefined,
};

export default nextConfig;
