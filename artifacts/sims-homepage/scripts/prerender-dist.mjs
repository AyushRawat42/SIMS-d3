import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const PILLS = ['INC & HNBUMU Affiliated', 'Chakrata Road, Dehradun', 'Admissions Open'];

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrapTitle(title) {
  const words = title.split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > 28 && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function pillSvg(label, x, y) {
  const width = Math.round(label.length * 15.5 + 36);
  return `
    <rect x="${x}" y="${y}" width="${width}" height="44" rx="22" fill="#E7F0F8"/>
    <text x="${x + width / 2}" y="${y + 29}" text-anchor="middle" fill="#0C234B" font-family="sans-serif" font-size="20" font-weight="600">${escapeXml(label)}</text>`;
}

export function ogSvg(title) {
  const lines = wrapTitle(title);
  const titleSvg = lines
    .map(
      (line, index) =>
        `<text x="72" y="${250 + index * 68}" fill="#FFFFFF" font-family="sans-serif" font-size="52" font-weight="700">${escapeXml(line)}</text>`,
    )
    .join('');
  let pillX = 72;
  const pills = PILLS.map((label) => {
    const chunk = pillSvg(label, pillX, 520);
    pillX += Math.round(label.length * 15.5 + 36) + 16;
    return chunk;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0C234B"/>
  <rect x="0" y="0" width="1200" height="12" fill="#1E5288"/>
  <text x="72" y="120" fill="#E7F0F8" font-family="sans-serif" font-size="28" font-weight="600">Sushila Institute of Medical Sciences</text>
  <text x="72" y="168" fill="#9FB4C9" font-family="sans-serif" font-size="22">Dehradun</text>
  ${titleSvg}
  ${pills}
</svg>`;
}

function upsertTag(html, pattern, tag) {
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace('</head>', `    ${tag}\n  </head>`);
}

export function injectHead(html, head) {
  const og = head.openGraph;
  const tw = head.twitter;
  let next = html.replace(/<!-- seo-last-updated: [^>]*-->\s*/g, '');
  next = upsertTag(next, /<title>[\s\S]*?<\/title>/, `<title>${escapeXml(head.title)}</title>`);
  const metas = [
    [`<meta name="description" content="${escapeXml(head.description)}" />`, /<meta name="description"[^>]*>/],
    [`<meta name="keywords" content="${escapeXml(head.keywords)}" />`, /<meta name="keywords"[^>]*>/],
    [`<link rel="canonical" href="${escapeXml(head.canonical)}" />`, /<link rel="canonical"[^>]*>/],
    [`<meta property="og:title" content="${escapeXml(og.title)}" />`, /<meta property="og:title"[^>]*>/],
    [`<meta property="og:description" content="${escapeXml(og.description)}" />`, /<meta property="og:description"[^>]*>/],
    [`<meta property="og:url" content="${escapeXml(og.url)}" />`, /<meta property="og:url"[^>]*>/],
    [`<meta property="og:site_name" content="${escapeXml(og.siteName)}" />`, /<meta property="og:site_name"[^>]*>/],
    [`<meta property="og:locale" content="${escapeXml(og.locale)}" />`, /<meta property="og:locale"[^>]*>/],
    [`<meta property="og:type" content="${escapeXml(og.type)}" />`, /<meta property="og:type"[^>]*>/],
    [`<meta property="og:image" content="${escapeXml(og.image)}" />`, /<meta property="og:image" [^>]*>/],
    [`<meta property="og:image:width" content="${og.imageWidth}" />`, /<meta property="og:image:width" [^>]*>/],
    [`<meta property="og:image:height" content="${og.imageHeight}" />`, /<meta property="og:image:height" [^>]*>/],
    [`<meta property="og:image:alt" content="${escapeXml(og.imageAlt)}" />`, /<meta property="og:image:alt" [^>]*>/],
    [`<meta name="twitter:card" content="${escapeXml(tw.card)}" />`, /<meta name="twitter:card"[^>]*>/],
    [`<meta name="twitter:title" content="${escapeXml(tw.title)}" />`, /<meta name="twitter:title"[^>]*>/],
    [`<meta name="twitter:description" content="${escapeXml(tw.description)}" />`, /<meta name="twitter:description"[^>]*>/],
    [`<meta name="twitter:image" content="${escapeXml(tw.image)}" />`, /<meta name="twitter:image"[^>]*>/],
  ];
  for (const [tag, pattern] of metas) next = upsertTag(next, pattern, tag);
  next = next.replace(/<script type="application\/ld\+json" data-seo-jsonld="1">[\s\S]*?<\/script>\s*/g, '');
  const jsonLd = Array.isArray(head.jsonLd) ? head.jsonLd : [];
  if (jsonLd.length) {
    const blocks = jsonLd
      .map((raw) => `    <script type="application/ld+json" data-seo-jsonld="1">${raw}</script>`)
      .join('\n');
    next = next.replace('</head>', `${blocks}\n  </head>`);
  }
  const stamp = `<!-- seo-last-updated: ${head.lastUpdated} -->`;
  if (!next.includes(stamp)) next = next.replace('</head>', `    ${stamp}\n  </head>`);
  return next;
}

function htmlFile(outDir, pathname) {
  if (pathname === '/') return path.join(outDir, 'index.html');
  return path.join(outDir, pathname.replace(/^\//, ''), 'index.html');
}

function imageFile(outDir, imageUrl) {
  const pathname = new URL(imageUrl).pathname;
  return path.join(outDir, pathname.replace(/^\//, ''));
}

export async function prerenderDist(outDir, manifestFile) {
  const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
  const heads = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));

  for (const head of heads) {
    const svg = ogSvg(head.openGraph.title);
    const pngPath = imageFile(outDir, head.openGraph.image);
    fs.mkdirSync(path.dirname(pngPath), { recursive: true });
    await sharp(Buffer.from(svg)).png().toFile(pngPath);

    const file = htmlFile(outDir, head.path);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const source = head.path === '/' ? template : template;
    fs.writeFileSync(file, injectHead(source, head), 'utf8');
  }
}
