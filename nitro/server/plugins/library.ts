import { defineNitroPlugin } from "nitropack/runtime";
import { PosthogNitroAppPlugin } from "posthog-node";

export default defineNitroPlugin(
  PosthogNitroAppPlugin({
    apiKey: "phc_VXlGk6yOu3agIn0h7lTmSOECAGWCtJonUJDAN4CexlJ",
    host: "http://localhost:8010",
  })
);
