import { defineNitroPlugin } from "nitropack/runtime";

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook("error", async (error, context) => {
    console.log("Error stack within app plugin", error);

    console.log("Error cause within app plugin", error.cause);

    console.log("Error context within app plugin", context);
  });
});
