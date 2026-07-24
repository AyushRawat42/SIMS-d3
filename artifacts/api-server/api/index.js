// Vercel serverless entry — use the esbuild bundle so Vercel never typechecks src/*.ts
export { default } from "../dist/app.mjs";
