import { withPostHogConfig } from "@posthog/nextjs-config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPostHogConfig(nextConfig, {
  personalApiKey: "phx_YZZHl8xzLkCWHSpVahmkggLGaS6gmSxCNmH26N0RUGZnqAs", // Personal API Key
  envId: "2", // Environment ID
  host: "http://localhost:8010", // (optional), defaults to https://us.posthog.com
  sourcemaps: {
    // (optional)
    enabled: true, // (optional) Enable sourcemaps generation and upload, default to true on production builds
    project: "my-application", // (optional) Project name, defaults to repository name
    version: "1.0.0", // (optional) Release version, defaults to current git commit
    deleteAfterUpload: true, // (optional) Delete sourcemaps after upload, defaults to true
  },
});
