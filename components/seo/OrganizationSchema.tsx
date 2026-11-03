import React from 'react';

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
  sameAs = [
    'https://www.instagram.com/simscollegedehradun',
    'https://www.facebook.com/sushilainstituteofmedicalsciences',
    'https://www.youtube.com/@SIMSDEHRADUN',
    'https://collegedunia.com/college/63800-sushila-institute-of-medical-sciences-dehradun',
  ],
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
