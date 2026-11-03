/**
 * Centralized course auto-linking configuration.
 *
 * Each entry defines one or more keyword variants that should be auto-linked
 * to the corresponding program detail page.  The `keywords` array is ordered
 * longest-first so that more-specific phrases match before shorter
 * abbreviations (e.g. "Post Basic B.Sc Nursing" before "B.Sc Nursing").
 *
 * Rules applied by <AutoLinkText>:
 *  - Word-boundary matching (no partial-word hits).
 *  - Case-insensitive where noted with the `caseInsensitive` flag.
 *  - Only the FIRST occurrence of each unique keyword per text block is
 *    linked, to avoid visual clutter.
 *  - Never linked inside headings, existing anchors, nav items, or buttons.
 *  - The current page's own course is excluded from auto-linking (self-link
 *    prevention) via the `excludeOnPath` prop.
 */

export interface CourseLinkEntry {
  /** Canonical path for the program page */
  path: string;
  /**
   * Keyword variants ordered longest → shortest. The regex engine tries
   * them in order, so more-specific phrases win over abbreviations.
   */
  keywords: string[];
  /** Whether matching should be case-insensitive (default: false) */
  caseInsensitive?: boolean;
}

export const COURSE_LINK_ENTRIES: CourseLinkEntry[] = [
  // ── Nursing (most specific first) ────────────────────────────────────────
  {
    path: '/programs/msc-nursing',
    keywords: [
      'M.Sc. Nursing',
      'M.Sc Nursing',
      'MSc Nursing',
      'M.Sc. (Nursing)',
    ],
  },
  {
    path: '/programs/post-basic-bsc-nursing',
    keywords: [
      'Post Basic B.Sc. Nursing',
      'Post Basic B.Sc Nursing',
      'Post-Basic B.Sc. Nursing',
      'Post-Basic B.Sc Nursing',
      'P.B. B.Sc Nursing',
      'P.B. B.Sc. Nursing',
      'PB B.Sc Nursing',
      'Post Basic BSc Nursing',
    ],
  },
  {
    path: '/programs/bsc-nursing',
    keywords: [
      'B.Sc. Nursing',
      'B.Sc Nursing',
      'BSc Nursing',
      'B.Sc.(N)',
      'Bachelor of Science in Nursing',
    ],
  },
  {
    path: '/programs/gnm',
    keywords: [
      'General Nursing and Midwifery',
      'General Nursing & Midwifery',
      'GNM',
    ],
  },

  // ── Allied Health ─────────────────────────────────────────────────────────
  {
    path: '/programs/bpt',
    keywords: [
      'Bachelor of Physiotherapy',
      'B.P.T.',
      'BPT',
    ],
  },
  {
    path: '/programs/bmlt',
    keywords: [
      'Bachelor of Medical Laboratory Technology',
      'Medical Laboratory Technology',
      'BMLT',
      'B.MLT',
    ],
  },
  {
    path: '/programs/bmrit',
    keywords: [
      'Bachelor of Medical Radiology and Imaging Technology',
      'Medical Radiology and Imaging Technology',
      'BMRIT',
      'B.MRIT',
      'B.Sc. MRIT',
      'B.Sc MRIT',
    ],
  },
  {
    path: '/programs/b-optometry',
    keywords: [
      'Bachelor of Optometry',
      'B.Optometry',
      'B. Optometry',
      'B.Sc. Optometry',
    ],
  },
  {
    path: '/programs/bott',
    keywords: [
      'Bachelor of Operation Theatre Technology',
      'Operation Theatre Technology',
      'BOTT',
      'B.OTT',
    ],
  },
  {
    path: '/programs/baslp',
    keywords: [
      'Bachelor of Audiology and Speech-Language Pathology',
      'Audiology and Speech-Language Pathology',
      'BASLP',
      'B.ASLP',
    ],
  },

  // ── Life Sciences (PG) ────────────────────────────────────────────────────
  {
    path: '/programs/msc-microbiology',
    keywords: [
      'M.Sc. Medical Microbiology',
      'M.Sc Medical Microbiology',
      'MSc Medical Microbiology',
      'M.Sc. Microbiology',
      'M.Sc Microbiology',
    ],
  },
  {
    path: '/programs/msc-medical-biochemistry',
    keywords: [
      'M.Sc. Medical Biochemistry',
      'M.Sc Medical Biochemistry',
      'MSc Medical Biochemistry',
      'M.Sc. Biochemistry',
      'M.Sc Biochemistry',
    ],
  },
];

/**
 * Build a combined regex that matches any known course keyword.
 * Returns an array of { pattern, path } pairs, sorted so that the
 * longest keyword patterns come first (greediest match wins).
 */
export interface CoursePattern {
  regex: RegExp;
  path: string;
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function buildCoursePatterns(): CoursePattern[] {
  const patterns: CoursePattern[] = [];

  for (const entry of COURSE_LINK_ENTRIES) {
    // Sort keywords longest-first within each entry
    const sorted = [...entry.keywords].sort((a, b) => b.length - a.length);

    for (const kw of sorted) {
      const flags = entry.caseInsensitive ? 'gi' : 'g';
      // Use word boundaries; escape dots, brackets, etc.
      const pattern = new RegExp(`\\b${escapeRegex(kw)}\\b`, flags);
      patterns.push({ regex: pattern, path: entry.path });
    }
  }

  return patterns;
}
