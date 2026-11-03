import React from 'react';

export interface CourseSchemaProps {
  courseName: string;
  description: string;
  providerName?: string;
  providerSameAs?: string;
  courseMode?: string;
  locationName?: string;
}

export function CourseSchema({
  courseName,
  description,
  providerName = 'Sushila Institute of Medical Sciences',
  providerSameAs = 'https://sims.college',
  courseMode = 'Onsite',
  locationName = 'SIMS Campus Dehradun',
}: CourseSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description,
    provider: {
      '@type': 'CollegeOrUniversity',
      name: providerName,
      sameAs: providerSameAs,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode,
      location: {
        '@type': 'Place',
        name: locationName,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default CourseSchema;
