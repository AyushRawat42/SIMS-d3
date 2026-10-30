import { STARTING_SESSION_FEES_INR } from '@/lib/programs';
import { ogImagePath } from '@/lib/seo/metadata';
import { SAME_AS_URLS } from '@/lib/seo/profiles';
import { ORGANIZATION_ID, SITE_ORIGIN, absoluteUrl, canonicalUrl } from '@/lib/seo/urls';

export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbCrumb = {
  name: string;
  path: string;
};

export type CourseSchemaInput = {
  slug: string;
  name: string;
  duration: string;
  level: string;
  metaDescription: string;
};

export type BlogPostingSchemaInput = {
  title: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  slug: string;
  keywords: string[];
};

export { ORGANIZATION_ID };

export function jsonLd(data: JsonLdValue): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function collegeSchema(): JsonLdValue {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    '@id': ORGANIZATION_ID,
    name: 'Sushila Institute of Medical Sciences (SIMS)',
    alternateName: 'SIMS Dehradun',
    url: SITE_ORIGIN,
    telephone: ['+91-9759761244', '+91-9759761243', '+91-9759761241'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sheeshambara, Sighniwala, Central Hope Town, Chakrata Road, Selaqui',
      addressLocality: 'Dehradun',
      addressRegion: 'Uttarakhand',
      postalCode: '248197',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3456,
      longitude: 77.8712,
    },
    parentOrganization: {
      '@type': 'CollegeOrUniversity',
      name: 'Hemwati Nandan Bahuguna Uttarakhand Medical Education University (HNBUMU)',
      url: 'https://hnbumu.ac.in/',
    },
    memberOf: [
      { '@type': 'Organization', name: 'Indian Nursing Council (INC)' },
      { '@type': 'Organization', name: 'Uttarakhand Nurses and Midwives Council' },
      { '@type': 'Organization', name: 'Uttarakhand Paramedical Council' },
    ],
    sameAs: SAME_AS_URLS,
  };
}

const WORKLOAD_BY_SLUG: Record<string, string> = {
  'bsc-nursing': 'P4Y',
  bpt: 'P4Y6M',
  gnm: 'P3Y',
  bmlt: 'P3Y',
  bmrit: 'P3Y',
  'post-basic-bsc-nursing': 'P2Y',
};

/** ISO 8601 duration. Named programmes use the published workload; others parse the duration string. */
export function courseWorkload(duration: string, slug?: string): string {
  if (slug && WORKLOAD_BY_SLUG[slug]) return WORKLOAD_BY_SLUG[slug];
  const years = duration.match(/(\d+)/);
  const months = /6\s*months/i.test(duration) ? 6 : 0;
  if (!years) return 'P1Y';
  return months ? `P${years[1]}Y${months}M` : `P${years[1]}Y`;
}

export function courseSchema(program: CourseSchemaInput): JsonLdValue {
  const url = canonicalUrl(`/programs/${program.slug}`);
  const price = STARTING_SESSION_FEES_INR[program.slug];
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.name,
    description: program.metaDescription,
    url,
    courseCode: program.slug,
    educationalCredentialAwarded: program.name,
    educationalLevel: program.level,
    provider: {
      '@type': 'CollegeOrUniversity',
      '@id': ORGANIZATION_ID,
      name: 'Sushila Institute of Medical Sciences (SIMS)',
      url: SITE_ORIGIN,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      courseWorkload: courseWorkload(program.duration, program.slug),
    },
    offers: {
      '@type': 'Offer',
      category: 'Tuition & Admission Fees',
      priceCurrency: 'INR',
      ...(typeof price === 'number' ? { price } : {}),
      availability: 'https://schema.org/InStock',
      url,
    },
  };
}

export function faqPageSchema(faqs: FaqItem[]): JsonLdValue {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(crumbs: BreadcrumbCrumb[]): JsonLdValue {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function blogPostingSchema(post: BlogPostingSchemaInput): JsonLdValue {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    image: canonicalUrl(ogImagePath(`/blog/${post.slug}`)),
    author: {
      '@type': 'Organization',
      name: 'Sushila Institute of Medical Sciences',
      url: SITE_ORIGIN,
    },
    publisher: {
      '@type': 'CollegeOrUniversity',
      '@id': ORGANIZATION_ID,
      name: 'Sushila Institute of Medical Sciences (SIMS)',
      url: SITE_ORIGIN,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
      url,
    },
    keywords: post.keywords.join(', '),
  };
}
