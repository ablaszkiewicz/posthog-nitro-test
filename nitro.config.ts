import { defineNitroConfig } from "nitropack/config";

// https://nitro.build/config
export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",
  imports: false,
  plugins: ["plugins/test.ts"],
  runtimeConfig: {
    posthog: {
      apiKey: "this is test api key",
    },
  },
});
