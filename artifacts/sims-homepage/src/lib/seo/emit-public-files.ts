import fs from 'node:fs';
import path from 'node:path';
import { getPublishedBlogPosts } from '@/lib/blog-posts';
import { LABS } from '@/lib/labs';
import { PROGRAMS } from '@/lib/programs';
import { SITE_ORIGIN, canonicalUrl } from '@/lib/seo/urls';

type ChangeFreq = 'weekly' | 'monthly';

type SitemapEntry = {
  path: string;
  priority: number;
  changefreq: ChangeFreq;
  lastmod: string;
};

const STATIC_PATHS = [
  '/',
  '/about',
  '/vision-mission',
  '/leadership',
  '/awards-highlights',
  '/admissions',
  '/nursing',
  '/blog',
  '/facilities',
  '/facilities/laboratories',
  '/facilities/hostel',
  '/facilities/transport',
  '/facilities/more',
  '/contact-us',
  '/life-at-sims',
];

function classify(pathname: string): { priority: number; changefreq: ChangeFreq } {
  if (pathname === '/' || pathname.startsWith('/programs/')) {
    return { priority: 1, changefreq: 'weekly' };
  }
  if (pathname === '/admissions' || pathname === '/contact-us') {
    return { priority: 0.9, changefreq: 'weekly' };
  }
  return { priority: 0.7, changefreq: 'monthly' };
}

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function collectSitemapEntries(today: string): SitemapEntry[] {
  const paths = [
    ...STATIC_PATHS,
    ...PROGRAMS.map((program) => `/programs/${program.slug}`),
    ...LABS.map((lab) => `/facilities/laboratories/${lab.id}`),
  ];

  const entries: SitemapEntry[] = paths.map((pathname) => ({
    path: pathname,
    ...classify(pathname),
    lastmod: today,
  }));

  for (const post of getPublishedBlogPosts()) {
    const lastmod = /^\d{4}-\d{2}-\d{2}/.test(post.updatedAt) ? post.updatedAt.slice(0, 10) : today;
    entries.push({
      path: `/blog/${post.slug}`,
      ...classify(`/blog/${post.slug}`),
      lastmod,
    });
  }

  return entries;
}

export function renderSitemap(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(canonicalUrl(entry.path))}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function renderRobots(): string {
  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Disallow: /_next/',
    'Disallow: /admin/',
    'Disallow: /thank-you',
    'Disallow: /*?utm_',
    'Disallow: /*?gclid=',
    'Disallow: /*?fbclid=',
    'Disallow: /*?ref=',
    '',
    `Sitemap: ${SITE_ORIGIN}/sitemap.xml`,
    '',
  ].join('\n');
}

export function writeSeoFiles(publicDir: string, today = new Date().toISOString().slice(0, 10)) {
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), renderSitemap(collectSitemapEntries(today)), 'utf8');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), renderRobots(), 'utf8');
}
