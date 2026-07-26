import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

/**
 * Builds a transparent, web-ready SIMS logo from logo.jpeg:
 * - soft white→alpha keying (cleaner edges than hard threshold)
 * - trims any leftover empty margin
 * - writes PNG source + responsive WebP variants
 */
const INPUT = 'archive/original-images/logo.jpeg';
const OUT_PNG = 'archive/original-images/logo-transparent.png';
const OUT_DIR = 'attached_assets/optimized';

/** Fully opaque below this; fully transparent at/above WHITE_HIGH */
const WHITE_LOW = 220;
const WHITE_HIGH = 248;

function whiteToAlpha(r, g, b) {
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  // Only key near-neutral lights (avoid punching holes in pale logo fills)
  if (max - min > 28) return 255;
  if (min >= WHITE_HIGH) return 0;
  if (min <= WHITE_LOW) return 255;
  const t = (min - WHITE_LOW) / (WHITE_HIGH - WHITE_LOW);
  return Math.round(255 * (1 - t));
}

async function makeTransparentPng(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    data[i + 3] = whiteToAlpha(data[i], data[i + 1], data[i + 2]);
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 0 })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const pngBuf = await makeTransparentPng(INPUT);
await fs.writeFile(OUT_PNG, pngBuf);

const meta = await sharp(pngBuf).metadata();
console.log(`logo-transparent.png ${meta.width}x${meta.height} alpha=${meta.hasAlpha} ${pngBuf.length}B`);

const sizes = [
  { name: 'logo-transparent-640.webp', width: 640 },
  { name: 'logo-transparent-1024.webp', width: 1024 },
  { name: 'logo-transparent-1600.webp', width: 1600 },
  { name: 'logo-transparent-full.webp', width: 1600 },
];

for (const { name, width } of sizes) {
  const targetW = Math.min(width, meta.width ?? width);
  const outPath = path.join(OUT_DIR, name);
  await sharp(pngBuf)
    .resize({ width: targetW, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100, effort: 6 })
    .toFile(outPath);
  const st = await fs.stat(outPath);
  console.log(`wrote ${name} ${st.size}B`);
}

console.log(JSON.stringify({ width: meta.width, height: meta.height }));
