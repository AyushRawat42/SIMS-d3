/**
 * Live social feed embeds for Contact Us → “Connect With Us”.
 *
 * Chosen approach (easiest / no OAuth / no backend):
 * - Facebook  → Official Page Plugin iframe (public page URL only)
 * - YouTube   → Official playlist / videoseries iframe (uploads playlist ID)
 * - Instagram → 3rd-party iframe widget (SnapWidget recommended; Elfsight optional)
 *   Instagram has no free official “profile feed” embed without expiring API tokens.
 *
 * This project is Vite + React (not Next.js). Iframes need no next/script.
 * Elfsight (if used) loads its platform script once via useEffect.
 */
import { SITE_CONTENT } from '@/lib/site-content';

export const SOCIAL_FEED_EMBEDS = {
  facebook: {
    name: 'Facebook',
    href: SITE_CONTENT.social.facebook,
    /**
     * Official Facebook Page Plugin — paste your public Page URL if it ever changes.
     * Generator: https://developers.facebook.com/docs/plugins/page-plugin
     * No app ID or access token required for a public page.
     */
    pageUrl: SITE_CONTENT.social.facebook,
  },
  instagram: {
    name: 'Instagram',
    href: SITE_CONTENT.social.instagram,
    /**
     * Easiest no-API Instagram feed: SnapWidget (free tier).
     * 1. Sign up at https://snapwidget.com
     * 2. Create an Instagram Grid / Feed widget for @simscollegedehradun
     * 3. Copy the numeric widget ID from the embed code (…/embed/XXXXXX)
     * 4. Paste that ID below as snapWidgetId
     *
     * Alternative — Elfsight Instagram Feed:
     * 1. Create a widget at https://elfsight.com
     * 2. Paste the app id from class="elfsight-app-xxxxxxxx-xxxx-…" into elfsightAppId
     * 3. Leave snapWidgetId empty when using Elfsight
     *
     * Temporary fallback (no widget needed):
     * Paste any public post/reel URL from Instagram → Share → Copy link
     * Example: https://www.instagram.com/p/SHORTCODE/ or /reel/SHORTCODE/
     * Official embed iframe is used (no OAuth / no expiring tokens).
     */
    snapWidgetId: '' as string, // e.g. '123456'
    elfsightAppId: '' as string, // e.g. 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    // Temporary single-post fallback until SnapWidget / Elfsight is configured
    featuredPostUrl: 'https://www.instagram.com/p/DbxjT-NoES3/' as string,
  },
  youtube: {
    name: 'YouTube',
    href: SITE_CONTENT.social.youtube,
    /**
     * Official YouTube playlist embed (no API key).
     * How to get your uploads playlist ID:
     * 1. Open YouTube Studio → Content, or your channel page
     * 2. Channel ID looks like UCxxxxxxxx… (YouTube Studio → Settings → Channel → Advanced)
     * 3. Uploads playlist ID = same string with UC replaced by UU (UUxxxxxxxx…)
     * 4. Paste that UU… value into uploadsPlaylistId below
     *
     * Optional: until the playlist ID is set, featuredVideoId shows a single video embed.
     * Paste any public video ID from https://www.youtube.com/watch?v=VIDEO_ID
     */
    uploadsPlaylistId: '' as string, // e.g. 'UUNzztrlc53KQ13j35ry1HbQ' (UC → UU of channel ID)
    // Temporary single-video fallback until uploadsPlaylistId is set
    featuredVideoId: 'bJ-2-B_-x9A' as string,
  },
} as const;

/** Shared embed viewport height so all three cards stay visually aligned */
export const SOCIAL_FEED_HEIGHT_PX = 420;
