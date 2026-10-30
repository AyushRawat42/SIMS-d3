import { copyFile, mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagePath = path.join(appRoot, 'src', 'pages', 'life-at-sims.tsx');
const sourceDirectory = path.resolve(appRoot, '..', '..', 'attached_assets', 'optimized');
const publicDirectory = path.join(appRoot, 'public', 'attached_assets', 'optimized');
const imageSizes = ['640', '1024', '1600', 'full'];

const pageSource = await readFile(pagePath, 'utf8');
const imageNames = [
  ...new Set(
    [...pageSource.matchAll(/\bname:\s*'([^']+)'/g)].map((match) => match[1]),
  ),
];

if (imageNames.length === 0) {
  throw new Error(`No gallery image names found in ${pagePath}`);
}

await mkdir(publicDirectory, { recursive: true });

for (const imageName of imageNames) {
  for (const size of imageSizes) {
    const filename = `${imageName}-${size}.webp`;
    const sourcePath = path.join(sourceDirectory, filename);
    const destinationPath = path.join(publicDirectory, filename);

    try {
      await copyFile(sourcePath, destinationPath);
    } catch (error) {
      throw new Error(`Unable to stage Life at SIMS image "${filename}"`, {
        cause: error,
      });
    }
  }
}

console.log(`Staged ${imageNames.length * imageSizes.length} Life at SIMS WebP assets.`);
