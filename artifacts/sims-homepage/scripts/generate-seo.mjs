import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const server = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const mod = await server.ssrLoadModule('/src/lib/seo/emit-public-files.ts');
  mod.writeSeoFiles(path.join(root, 'public'));
  const manifest = await server.ssrLoadModule('/src/lib/seo/write-prerender-manifest.ts');
  manifest.writePrerenderManifest(path.join(root, '.seo', 'manifest.json'));
} finally {
  await server.close();
}
