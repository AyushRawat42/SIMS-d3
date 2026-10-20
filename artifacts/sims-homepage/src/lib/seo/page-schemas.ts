import { getBlogPost, isBlogPostPublished } from '@/lib/blog-posts';
import { getCourseFaqs } from '@/lib/course-faqs';
import { getLabById } from '@/lib/labs';
import { getProgramBySlug } from '@/lib/programs';
import {
  blogPostingSchema,
  breadcrumbSchema,
  collegeSchema,
  courseSchema,
  faqPageSchema,
  type BreadcrumbCrumb,
  type JsonLdValue,
} from '@/lib/seo/schema';
import { cleanPathname } from '@/lib/seo/urls';

const PAGE_CRUMBS: Record<string, BreadcrumbCrumb[]> = {
  '/about': [
    { name: 'Home', path: '/' },
    { name: 'About SIMS', path: '/about' },
  ],
  '/vision-mission': [
    { name: 'Home', path: '/' },
    { name: 'Vision & Mission', path: '/vision-mission' },
  ],
  '/leadership': [
    { name: 'Home', path: '/' },
    { name: 'Leadership Talk', path: '/leadership' },
  ],
  '/awards-highlights': [
    { name: 'Home', path: '/' },
    { name: 'Awards & Highlights', path: '/awards-highlights' },
  ],
  '/admissions': [
    { name: 'Home', path: '/' },
    { name: 'Admissions', path: '/admissions' },
  ],
  '/nursing': [
    { name: 'Home', path: '/' },
    { name: 'Nursing', path: '/nursing' },
  ],
  '/blog': [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ],
  '/facilities': [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
  ],
  '/facilities/laboratories': [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Laboratories', path: '/facilities/laboratories' },
  ],
  '/facilities/hostel': [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Hostel', path: '/facilities/hostel' },
  ],
  '/facilities/transport': [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Transport', path: '/facilities/transport' },
  ],
  '/facilities/more': [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'More Facilities', path: '/facilities/more' },
  ],
  '/contact-us': [
    { name: 'Home', path: '/' },
    { name: 'Contact Us', path: '/contact-us' },
  ],
  '/life-at-sims': [
    { name: 'Home', path: '/' },
    { name: 'Life at SIMS', path: '/life-at-sims' },
  ],
};

/** JSON-LD blocks for a public route. Used by the prerender and by client navigations. */
export function schemasForPath(pathname: string): JsonLdValue[] {
  const path = cleanPathname(pathname);
  const schemas: JsonLdValue[] = [];

  if (path === '/' || path === '/about') {
    schemas.push(collegeSchema());
  }

  if (path.startsWith('/programs/')) {
    const program = getProgramBySlug(path.slice('/programs/'.length));
    if (!program) return schemas;
    schemas.push(courseSchema(program));
    const faqs = getCourseFaqs(program.slug);
    if (faqs?.length) schemas.push(faqPageSchema(faqs));
    schemas.push(
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Programs', path: '/#programs' },
        { name: program.shortName, path: `/programs/${program.slug}` },
      ]),
    );
    return schemas;
  }

  if (path.startsWith('/blog/') && path !== '/blog') {
    const post = getBlogPost(path.slice('/blog/'.length));
    if (!post || !isBlogPostPublished(post)) return schemas;
    schemas.push(blogPostingSchema(post));
    if (post.faqs.length) schemas.push(faqPageSchema(post.faqs));
    schemas.push(
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.breadcrumbLabel, path: `/blog/${post.slug}` },
      ]),
    );
    return schemas;
  }

  if (path.startsWith('/facilities/laboratories/')) {
    const lab = getLabById(path.slice('/facilities/laboratories/'.length));
    if (!lab) return schemas;
    schemas.push(
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Laboratories', path: '/facilities/laboratories' },
        { name: lab.title, path },
      ]),
    );
    return schemas;
  }

  const crumbs = PAGE_CRUMBS[path];
  if (crumbs) schemas.push(breadcrumbSchema(crumbs));
  return schemas;
}
