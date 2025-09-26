import { defineNitroPlugin } from "nitropack/runtime";
import { PostHogPlugin } from "posthog-node";

export default defineNitroPlugin(
  PostHogPlugin({
    apiKey: "phc_raG2H9V246hkNZk6K89DZGG98qQyPrKKlicifGlpOXA",
    host: "https://us.i.posthog.com",
  })
);
