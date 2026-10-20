import { getPublishedBlogPosts } from '@/lib/blog-posts';
import { LABS, LABORATORIES_PAGE } from '@/lib/labs';
import {
  HOSTEL_PAGE,
  MORE_FACILITIES_PAGE,
  TRANSPORT_PAGE,
} from '@/lib/facilities-pages';
import { PROGRAMS } from '@/lib/programs';
import {
  blogPostSeo,
  contentSeo,
  FALLBACK_KEYWORDS,
  programSeo,
  registeredSeoEntries,
  type SeoEntry,
} from '@/lib/seo/meta-registry';

/**
 * Every public route that should emit a prerendered head and Open Graph image.
 * Hand-tuned registry rows win over derived copy.
 */
export function allSeoEntries(): SeoEntry[] {
  const byPath = new Map<string, SeoEntry>();

  const derived: SeoEntry[] = [
    contentSeo({
      path: '/facilities/laboratories',
      seoTitle: LABORATORIES_PAGE.metaTitle,
      seoDescription: LABORATORIES_PAGE.metaDescription,
      keywords: FALLBACK_KEYWORDS,
    }),
    contentSeo({
      path: '/facilities/hostel',
      seoTitle: HOSTEL_PAGE.metaTitle,
      seoDescription: HOSTEL_PAGE.metaDescription,
      keywords: FALLBACK_KEYWORDS,
    }),
    contentSeo({
      path: '/facilities/transport',
      seoTitle: TRANSPORT_PAGE.metaTitle,
      seoDescription: TRANSPORT_PAGE.metaDescription,
      keywords: FALLBACK_KEYWORDS,
    }),
    contentSeo({
      path: '/facilities/more',
      seoTitle: MORE_FACILITIES_PAGE.metaTitle,
      seoDescription: MORE_FACILITIES_PAGE.metaDescription,
      keywords: FALLBACK_KEYWORDS,
    }),
    ...PROGRAMS.map((program) => programSeo(program)),
    ...LABS.map((lab) =>
      contentSeo({
        path: `/facilities/laboratories/${lab.id}`,
        seoTitle: lab.metaTitle,
        seoDescription: lab.metaDescription,
        keywords: FALLBACK_KEYWORDS,
      }),
    ),
    ...getPublishedBlogPosts().map((post) => blogPostSeo(post)),
  ];

  for (const entry of derived) byPath.set(entry.path, entry);
  for (const entry of registeredSeoEntries()) byPath.set(entry.path, entry);

  return [...byPath.values()];
}
