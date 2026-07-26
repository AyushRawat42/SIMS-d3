import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

/**
 * Converts logo.jpeg into a transparent watermark PNG, then WebP variants.
 * Near-white pixels become alpha so the mark works on light/dark surfaces
 * (footer still uses a light plate for contrast with the dark navy artwork).
 */
const INPUT = 'archive/original-images/logo.jpeg';
const WATERMARK_PNG = 'archive/original-images/logo-watermark.png';
const OUT_DIR = 'attached_assets/optimized';

const WHITE_THRESHOLD = 245; // RGB channels >= this → transparent

async function toTransparentWatermark(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  if (channels < 4) throw new Error('Expected RGBA buffer');

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const pngBuf = await toTransparentWatermark(INPUT);
await fs.writeFile(WATERMARK_PNG, pngBuf);

const meta = await sharp(pngBuf).metadata();
console.log(`watermark png: ${meta.width}x${meta.height}, ${pngBuf.length} bytes`);

const sizes = [
  { name: 'logo-watermark-640.webp', width: 640 },
  { name: 'logo-watermark-1024.webp', width: 1024 },
  { name: 'logo-watermark-1600.webp', width: 1600 },
  { name: 'logo-watermark-full.webp', width: 1600 },
];

for (const { name, width } of sizes) {
  const targetW = Math.min(width, meta.width);
  const outPath = path.join(OUT_DIR, name);
  await sharp(pngBuf)
    .resize({ width: targetW, withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 100, effort: 5 })
    .toFile(outPath);
  const st = await fs.stat(outPath);
  console.log(`wrote ${name} ${st.size} bytes`);
}

console.log(
  JSON.stringify({
    width: meta.width,
    height: meta.height,
  }),
);
