import { pino } from "pino";

// Vercel serverless: never use worker-thread transports (pino-pretty).
// They crash the isolate with MODULE_NOT_FOUND / worker exited → FUNCTION_INVOCATION_FAILED.
const isServerless = process.env.VERCEL === "1";
const usePrettyTransport =
  !isServerless && process.env.NODE_ENV !== "production";

export const logger = pino({
  level: process.env.LOG_LEVEL ?? "info",
  redact: [
    "req.headers.authorization",
    "req.headers.cookie",
    "res.headers['set-cookie']",
  ],
  ...(usePrettyTransport
    ? {
        transport: {
          target: "pino-pretty",
          options: { colorize: true },
        },
      }
    : {}),
});
