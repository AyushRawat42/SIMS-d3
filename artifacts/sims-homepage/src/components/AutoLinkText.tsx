/**
 * <AutoLinkText>
 *
 * Parses a string of plain text and replaces first occurrences of known
 * course keywords with internal <Link> elements, according to the central
 * COURSE_LINK_ENTRIES map in @/lib/course-links.
 *
 * Safety guardrails (enforced here at the component level):
 *  - Only the FIRST occurrence of each unique keyword per <AutoLinkText>
 *    instance is linked (i.e., per paragraph / text block you wrap).
 *  - The `excludePath` prop prevents linking to the current page's own
 *    program (self-link prevention).
 *  - This component should NOT be used inside headings, nav items,
 *    interactive buttons, or elements already containing <a> tags.
 *    The caller is responsible for that boundary.
 *
 * Usage:
 *   <AutoLinkText excludePath="/programs/bsc-nursing">
 *     {paragraph}
 *   </AutoLinkText>
 *
 *   // Or wrap an entire array of paragraphs:
 *   {ABOUT_INTRO.map((para) => (
 *     <p key={para.slice(0, 48)}>
 *       <AutoLinkText excludePath={currentPath}>{para}</AutoLinkText>
 *     </p>
 *   ))}
 */

import React from 'react';
import { Link } from 'wouter';
import { buildCoursePatterns, type CoursePattern } from '@/lib/course-links';

// Build patterns once at module load time (not on every render)
const COURSE_PATTERNS: CoursePattern[] = buildCoursePatterns();

interface AutoLinkTextProps {
  children: string;
  /**
   * The canonical path of the current page (e.g. "/programs/bsc-nursing").
   * Any keyword that would link to this path is skipped (no self-linking).
   */
  excludePath?: string;
  /** Extra className applied to every generated link */
  linkClassName?: string;
}

/**
 * Splits `text` into an array of strings and React Link elements,
 * replacing the first occurrence of each matching course keyword.
 */
function parseWithCourseLinks(
  text: string,
  excludePath: string | undefined,
  linkClassName: string,
): React.ReactNode[] {
  // Track which paths have already been linked in this text block
  const linkedPaths = new Set<string>();
  // Track which keyword regexes have already fired
  const usedKeywords = new Set<RegExp>();

  type Segment =
    | { type: 'text'; value: string }
    | { type: 'link'; text: string; path: string; key: string };

  let segments: Segment[] = [{ type: 'text', value: text }];

  for (const { regex, path } of COURSE_PATTERNS) {
    // Skip if this path is the current page (self-link guard)
    if (excludePath && path === excludePath) continue;
    // Skip if we already linked to this path (first-occurrence per path)
    if (linkedPaths.has(path)) continue;
    // Skip if this exact regex was already applied (shouldn't happen, but guard)
    if (usedKeywords.has(regex)) continue;

    let matched = false;

    const nextSegments: Segment[] = [];

    for (const seg of segments) {
      if (seg.type !== 'text' || matched) {
        nextSegments.push(seg);
        continue;
      }

      // Reset regex state before each test
      regex.lastIndex = 0;
      const m = regex.exec(seg.value);

      if (!m) {
        nextSegments.push(seg);
        continue;
      }

      // Found a match — split into before / link / after
      const before = seg.value.slice(0, m.index);
      const matchedText = m[0];
      const after = seg.value.slice(m.index + matchedText.length);

      if (before) nextSegments.push({ type: 'text', value: before });
      nextSegments.push({
        type: 'link',
        text: matchedText,
        path,
        key: `${path}-${m.index}`,
      });
      if (after) nextSegments.push({ type: 'text', value: after });

      matched = true;
      linkedPaths.add(path);
      usedKeywords.add(regex);
    }

    segments = nextSegments;
  }

  // Convert to React nodes
  return segments.map((seg, i) => {
    if (seg.type === 'text') return seg.value;
    return (
      <Link
        key={seg.key}
        href={seg.path}
        className={linkClassName}
        // Prevent text-selection drag on the link from bubbling to a
        // parent interactive element (e.g. a card <Link>)
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {seg.text}
      </Link>
    );
  });
}

export function AutoLinkText({
  children,
  excludePath,
  linkClassName = 'text-sims-primary-2 font-medium underline underline-offset-2 decoration-sims-primary-2/40 hover:text-sims-primary hover:decoration-sims-primary/60 transition-colors',
}: AutoLinkTextProps) {
  if (!children) return null;

  const nodes = parseWithCourseLinks(children, excludePath, linkClassName);

  // If nothing was replaced, return a plain text node (no wrapper span)
  if (nodes.length === 1 && typeof nodes[0] === 'string') {
    return <>{nodes[0]}</>;
  }

  return <>{nodes}</>;
}
