import app from "./app";
import { logger } from "./lib/logger";

// Vercel loads the Express app as a serverless handler (src/app.ts).
// Never call listen() or require PORT in that environment.
if (process.env.VERCEL === "1") {
  // no-op: Vercel invokes the default export from src/app.ts
} else {
  const rawPort = process.env["PORT"];

  if (!rawPort) {
    throw new Error(
      "PORT environment variable is required but was not provided.",
    );
  }

  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  app.listen(port, (err) => {
    if (err) {
      logger.error({ err }, "Error listening on port");
      process.exit(1);
    }

    logger.info({ port }, "Server listening");
  });
}
