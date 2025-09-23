import { NitroApp } from "nitropack";
import { useRuntimeConfig } from "nitropack/runtime";
import { PostHog } from "posthog-node"; // Uncomment when enabling PostHog capture

export interface PosthogPluginConfig {
  apiKey?: string;
}

export function PosthogNitroAppPlugin(config: PosthogPluginConfig = {}) {
  return (nitroApp: NitroApp): void => {
    nitroApp.hooks.hook("error", async (error) => {
      const runtimeConfig = useRuntimeConfig();
      const apiKey = config.apiKey || runtimeConfig.posthog?.apiKey;

      const client = new PostHog(apiKey);

      console.log("Api key Is ", apiKey, "Capturing exception", error.message);
    });
  };
}
