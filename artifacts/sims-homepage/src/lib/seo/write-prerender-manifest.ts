import fs from 'node:fs';
import path from 'node:path';
import { buildPageHead } from '@/lib/seo/metadata';
import { schemasForPath } from '@/lib/seo/page-schemas';
import { jsonLd } from '@/lib/seo/schema';
import { allSeoEntries } from '@/lib/seo/seo-catalog';

export function writePrerenderManifest(destFile: string) {
  const heads = allSeoEntries().map((entry) => ({
    ...buildPageHead(entry),
    jsonLd: schemasForPath(entry.path).map((node) => jsonLd(node)),
  }));
  fs.mkdirSync(path.dirname(destFile), { recursive: true });
  fs.writeFileSync(destFile, JSON.stringify(heads), 'utf8');
}
