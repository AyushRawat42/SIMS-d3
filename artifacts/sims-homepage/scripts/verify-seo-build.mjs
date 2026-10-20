import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist', 'public');
const origin = 'https://www.sims.college';

const REQUIRED_BLOG_SLUGS = [
  'paramedical-career-scope-bmlt-bsc-mrit-uttarakhand',
  'hostel-life-campus-safety-medical-college-dehradun',
  'inside-sims-dehradun-photo-facility-tour-nursing-labs-campus',
  'bpt-uttarakhand-eligibility-career-scope-salary-after-12th-pcb',
  'post-basic-bsc-nursing-vs-msc-nursing-career-upgrade',
];

const MONEY_URLS = [
  `${origin}/`,
  `${origin}/programs/bsc-nursing`,
  `${origin}/programs/bpt`,
  `${origin}/programs/gnm`,
  `${origin}/programs/post-basic-bsc-nursing`,
];

function walkHtml(dir, found = []) {
  if (!fs.existsSync(dir)) return found;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, found);
    else if (entry.name === 'index.html' || entry.name.endsWith('.html')) {
      if (/^google[a-z0-9]+\.html$/i.test(entry.name)) continue;
      found.push(full);
    }
  }
  return found;
}

function routeFromFile(file) {
  const rel = path.relative(distDir, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  return `/${rel.replace(/\/index\.html$/, '')}`;
}

function expectedCanonical(route) {
  return route === '/' ? `${origin}/` : `${origin}${route}`;
}

function count(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

function attr(html, pattern) {
  const match = html.match(pattern);
  return match?.[1] ?? '';
}

function parseJsonLd(html) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  const errors = [];
  for (const block of blocks) {
    try {
      JSON.parse(block[1]);
    } catch (error) {
      errors.push(error instanceof Error ? error.message : 'invalid JSON');
    }
  }
  return { count: blocks.length, errors };
}

const files = walkHtml(distDir);
if (files.length === 0) {
  console.error(`No HTML files in ${distDir}. Run the Vite build first.`);
  process.exit(1);
}

const rows = [];
let failures = 0;

for (const file of files.sort()) {
  const html = fs.readFileSync(file, 'utf8');
  const route = routeFromFile(file);
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map((match) => match[1]);
  const jsonLd = parseJsonLd(html);
  const title = attr(html, /<title>([^<]*)<\/title>/);
  const description = attr(html, /<meta name="description" content="([^"]*)"/);
  const ogImage = attr(html, /<meta property="og:image" content="([^"]*)"/);
  const expected = expectedCanonical(route);
  const issues = [];
  if (canonicals.length !== 1) issues.push(`canonical x${canonicals.length}`);
  else if (canonicals[0] !== expected) issues.push(`canonical ${canonicals[0]}`);
  else if (/[?#]/.test(canonicals[0]) || (route !== '/' && canonicals[0].endsWith('/'))) {
    issues.push('canonical not clean');
  }
  if (jsonLd.count < 1) issues.push('missing JSON-LD');
  if (jsonLd.errors.length) issues.push(`JSON-LD ${jsonLd.errors[0]}`);
  if (!title) issues.push('missing title');
  if (!description) issues.push('missing description');
  if (!ogImage) issues.push('missing og:image');
  if (issues.length) failures += 1;
  rows.push({
    route,
    canonical: canonicals.length === 1 ? 'ok' : String(canonicals.length),
    jsonLd: jsonLd.errors.length ? 'invalid' : String(jsonLd.count),
    title: title ? 'ok' : 'missing',
    description: description ? 'ok' : 'missing',
    ogImage: ogImage ? 'ok' : 'missing',
    issues: issues.join('; ') || 'pass',
  });
}

const pad = (value, width) => String(value).padEnd(width);
console.log('\nSEO build audit');
console.log(
  [
    pad('route', 42),
    pad('canonical', 10),
    pad('json-ld', 8),
    pad('title', 8),
    pad('description', 12),
    pad('og:image', 9),
    'result',
  ].join(' '),
);
for (const row of rows) {
  console.log(
    [
      pad(row.route, 42),
      pad(row.canonical, 10),
      pad(row.jsonLd, 8),
      pad(row.title, 8),
      pad(row.description, 12),
      pad(row.ogImage, 9),
      row.issues,
    ].join(' '),
  );
}

const sitemapPath = path.join(distDir, 'sitemap.xml');
const robotsPath = path.join(distDir, 'robots.txt');
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
const robots = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';
const sitemapIssues = [];
if (!sitemap) sitemapIssues.push('dist/public/sitemap.xml missing');
if (!robots.includes('Sitemap:')) sitemapIssues.push('dist/public/robots.txt missing Sitemap');
for (const slug of REQUIRED_BLOG_SLUGS) {
  const loc = `${origin}/blog/${slug}`;
  if (!sitemap.includes(`<loc>${loc}</loc>`)) sitemapIssues.push(`sitemap missing ${loc}`);
  const block = sitemap.split('<url>').find((chunk) => chunk.includes(loc));
  if (block && !/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(block)) {
    sitemapIssues.push(`missing lastmod for ${loc}`);
  }
}
if (!sitemap.includes(`${origin}/programs/bsc-nursing`)) sitemapIssues.push('sitemap missing course pages');
if (!sitemap.includes(`${origin}/about`)) sitemapIssues.push('sitemap missing static pages');

console.log(`\nPages scanned: ${rows.length}. Failures: ${failures}.`);
if (sitemapIssues.length) {
  console.log('Sitemap / robots:');
  for (const issue of sitemapIssues) console.log(`  - ${issue}`);
} else {
  console.log('Sitemap includes static pages, course pages, and the required blog posts with lastmod.');
}

console.log('\nTop 5 money URLs for Google Search Console Request Indexing:');
for (const url of MONEY_URLS) console.log(`  ${url}`);

if (failures > 0 || sitemapIssues.length > 0) process.exit(1);
