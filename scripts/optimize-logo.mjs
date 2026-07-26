import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const input = 'archive/original-images/logo.jpeg';
const outDir = 'attached_assets/optimized';

// Crop whitespace and overwrite source with clean high-quality JPEG
const buf = await sharp(input)
  .trim({ threshold: 12 })
  .jpeg({ quality: 92, mozjpeg: true })
  .toBuffer();
await fs.writeFile(input, buf);

const after = await sharp(input).metadata();
const origW = after.width;
const origH = after.height;
console.log(`source cropped: ${origW}x${origH}, ${buf.length} bytes`);

const sizes = [
  { name: 'logo-640.webp', width: 640 },
  { name: 'logo-1024.webp', width: 1024 },
  { name: 'logo-1600.webp', width: 1600 },
  { name: 'logo-full.webp', width: 1600 },
];

for (const { name, width } of sizes) {
  const targetW = Math.min(width, origW);
  const outPath = path.join(outDir, name);
  await sharp(input)
    .resize({ width: targetW, withoutEnlargement: true })
    .webp({ quality: 90, effort: 5 })
    .toFile(outPath);
  const st = await fs.stat(outPath);
  console.log(`wrote ${name} (${targetW}w) ${st.size} bytes`);
}

const defaultW = Math.min(1600, origW);
const defaultH = Math.round((origH / origW) * defaultW);
console.log(JSON.stringify({ width: defaultW, height: defaultH }));
