import { NitroApp } from "nitropack";
import { useRuntimeConfig } from "nitropack/runtime";
import { PostHog } from "posthog-node";

export function PosthogNitroAppPlugin(nitroApp: NitroApp): void {
  nitroApp.hooks.hook("error", async (error) => {
    const config = useRuntimeConfig();

    const client = new PostHog(config.posthog.apiKey);

    console.log("config", config);
    console.log(`Intercepted error from plugin`, error.message);
  });
}
