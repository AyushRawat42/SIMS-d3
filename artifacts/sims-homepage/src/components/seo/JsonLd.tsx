import { jsonLd, type JsonLdValue } from '@/lib/seo/schema';

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />
  );
}
