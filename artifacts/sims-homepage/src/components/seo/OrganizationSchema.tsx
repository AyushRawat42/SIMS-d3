import React from 'react';
import { SAME_AS_URLS } from '@/lib/seo/profiles';

export interface OrganizationSchemaProps {
  name?: string;
  alternateName?: string;
  url?: string;
  logo?: string;
  description?: string;
  addressLocality?: string;
  addressRegion?: string;
  addressCountry?: string;
  areaServed?: string;
  sameAs?: string[];
}

export function OrganizationSchema({
  name = 'Sushila Institute of Medical Sciences',
  alternateName = 'SIMS Dehradun',
  url = 'https://sims.college',
  logo = 'https://sims.college/logo.png',
  description = 'A premier nursing and paramedical college located in Dehradun, Uttarakhand.',
  addressLocality = 'Dehradun',
  addressRegion = 'Uttarakhand',
  addressCountry = 'IN',
  areaServed = 'Dehradun',
  sameAs = SAME_AS_URLS,
}: OrganizationSchemaProps = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name,
    alternateName,
    url,
    logo,
    description,
    address: {
      '@type': 'PostalAddress',
      addressLocality,
      addressRegion,
      addressCountry,
    },
    areaServed,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default OrganizationSchema;
