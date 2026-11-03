import React from 'react';
import { CourseSchema } from '@/components/seo/CourseSchema';

const NURSING_PROGRAMS: Record<
  string,
  { name: string; description: string }
> = {
  'bsc-nursing': {
    name: 'B.Sc. Nursing',
    description:
      'Comprehensive 4-year B.Sc. Nursing degree program in Dehradun at Sushila Institute of Medical Sciences with clinical training and modern simulation laboratories.',
  },
  'gnm': {
    name: 'GNM',
    description:
      '3-year General Nursing and Midwifery (GNM) diploma program in Dehradun providing hands-on bedside patient care and hospital clinical rotations.',
  },
  'post-basic-bsc-nursing': {
    name: 'Post Basic B.Sc. Nursing',
    description:
      '2-year Post Basic B.Sc. Nursing program in Dehradun designed for registered GNM nurses seeking career advancement and leadership roles.',
  },
};

export default function ProgramPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = NURSING_PROGRAMS[params.slug] || {
    name: params.slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' '),
    description: `Leading healthcare degree program in Dehradun at Sushila Institute of Medical Sciences.`,
  };

  return (
    <main>
      <CourseSchema
        courseName={program.name}
        description={program.description}
      />
      <article>
        <h1>{program.name}</h1>
        <p>{program.description}</p>
      </article>
    </main>
  );
}
