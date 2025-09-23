import { eventHandler, createError } from "h3";

export default eventHandler((event) => {
  // This route intentionally throws an error for testing purposes
  throw new Error("Test error");
});
