import React from 'react';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';

export const metadata = {
  title: 'Sushila Institute of Medical Sciences | Nursing College in Dehradun',
  description: 'A premier nursing and paramedical college located in Dehradun, Uttarakhand offering B.Sc Nursing, GNM, Post Basic B.Sc Nursing, and paramedical courses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body>{children}</body>
    </html>
  );
}
