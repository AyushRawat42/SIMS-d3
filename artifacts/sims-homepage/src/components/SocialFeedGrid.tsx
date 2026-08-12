import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Facebook, Instagram, Youtube } from 'lucide-react';
import { SOCIAL_FEED_EMBEDS, SOCIAL_FEED_HEIGHT_PX } from '@/lib/social-feeds';
import { cn } from '@/lib/utils';

/** Taller than the viewport so we can animate a top→bottom scroll loop (cross-origin iframe can't be scrolled from our JS). */
const FACEBOOK_IFRAME_HEIGHT = 1600;
const FACEBOOK_SCROLL_PX = FACEBOOK_IFRAME_HEIGHT - SOCIAL_FEED_HEIGHT_PX;

function FeedCardShell({
  title,
  href,
  icon,
  accentClass,
  children,
}: {
  title: string;
  href: string;
  icon: React.ReactNode;
  accentClass: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-sims-border bg-sims-bg shadow-sm overflow-hidden flex flex-col h-full min-h-0">
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-sims-border/70 bg-white shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className={cn(
              'w-9 h-9 rounded-full flex items-center justify-center shrink-0',
              accentClass,
            )}
          >
            {icon}
          </div>
          <h3 className="font-bold text-sims-primary text-sm truncate">{title}</h3>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-sims-primary-2 hover:text-sims-primary shrink-0"
        >
          Open
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
      <div
        className="relative flex-1 bg-white w-full overflow-hidden"
        style={{ height: SOCIAL_FEED_HEIGHT_PX, minHeight: SOCIAL_FEED_HEIGHT_PX }}
      >
        {children}
      </div>
    </article>
  );
}

function EmbedPlaceholder({
  platform,
  steps,
}: {
  platform: string;
  steps: string[];
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center bg-sims-surface/80">
      <p className="text-sm font-semibold text-sims-primary mb-2">{platform} feed setup</p>
      <ol className="text-xs text-sims-text-muted leading-relaxed text-left space-y-1.5 max-w-[16rem] list-decimal list-inside">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

function FacebookFeed() {
  const { pageUrl, href, name } = SOCIAL_FEED_EMBEDS.facebook;
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = React.useState(false);

  const src =
    'https://www.facebook.com/plugins/page.php?' +
    new URLSearchParams({
      href: pageUrl,
      tabs: 'timeline',
      width: '500',
      height: String(FACEBOOK_IFRAME_HEIGHT),
      small_header: 'false',
      adapt_container_width: 'true',
      hide_cover: 'false',
      show_facepile: 'true',
    }).toString();

  return (
    <FeedCardShell
      title={name}
      href={href}
      icon={<Facebook className="w-4 h-4" aria-hidden="true" />}
      accentClass="bg-blue-50 text-blue-600"
    >
      <div
        className="absolute inset-0 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <motion.div
          className="absolute inset-x-0 top-0 w-full"
          style={{ height: FACEBOOK_IFRAME_HEIGHT }}
          animate={
            reduceMotion || paused
              ? { y: 0 }
              : { y: [0, -FACEBOOK_SCROLL_PX, 0] }
          }
          transition={
            reduceMotion || paused
              ? { duration: 0.3 }
              : {
                  duration: 48,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'loop',
                  times: [0, 0.92, 1],
                }
          }
        >
          <iframe
            title="SIMS Facebook page timeline"
            src={src}
            className="block w-full border-0"
            style={{ height: FACEBOOK_IFRAME_HEIGHT }}
            loading="lazy"
            allow="encrypted-media; clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>
      </div>
    </FeedCardShell>
  );
}

function InstagramFeed() {
  const { href, name, snapWidgetId, elfsightAppId, featuredPostUrl } =
    SOCIAL_FEED_EMBEDS.instagram;
  const hasSnap = Boolean(snapWidgetId.trim());
  const hasElfsight = Boolean(elfsightAppId.trim());
  const featured = featuredPostUrl.trim().replace(/\/$/, '');
  // Use /embed/ (not captioned) so video posts fill the card more like a player
  const featuredEmbedSrc = featured ? `${featured}/embed/` : null;

  React.useEffect(() => {
    if (!hasElfsight || hasSnap) return;
    const existing = document.querySelector('script[data-sims-elfsight]');
    if (existing) return;
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.dataset.simsElfsight = 'true';
    document.body.appendChild(script);
  }, [hasElfsight, hasSnap]);

  return (
    <FeedCardShell
      title={name}
      href={href}
      icon={<Instagram className="w-4 h-4" aria-hidden="true" />}
      accentClass="bg-pink-50 text-pink-600"
    >
      {hasSnap ? (
        <iframe
          title="SIMS Instagram feed"
          src={`https://snapwidget.com/embed/${snapWidgetId.trim()}`}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          scrolling="no"
          allow="autoplay; encrypted-media; clipboard-write"
        />
      ) : hasElfsight ? (
        <div className="absolute inset-0 overflow-auto p-1">
          <div className={`elfsight-app-${elfsightAppId.trim()}`} data-elfsight-app-lazy />
        </div>
      ) : featuredEmbedSrc ? (
        <iframe
          title="SIMS Instagram featured post"
          src={featuredEmbedSrc}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          scrolling="no"
          allow="autoplay; encrypted-media; clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <EmbedPlaceholder
          platform="Instagram"
          steps={[
            'Create a free SnapWidget (or Elfsight) Instagram feed',
            'Or paste a public post URL into featuredPostUrl',
            'Edit src/lib/social-feeds.ts → instagram.snapWidgetId / featuredPostUrl',
          ]}
        />
      )}
    </FeedCardShell>
  );
}

function YouTubeFeed() {
  const { href, name, uploadsPlaylistId, featuredVideoId } = SOCIAL_FEED_EMBEDS.youtube;
  const playlist = uploadsPlaylistId.trim();
  const video = featuredVideoId.trim();

  // Muted autoplay + loop (browsers require mute for autoplay; loop needs playlist= for single videos)
  let embedSrc: string | null = null;
  if (playlist) {
    const params = new URLSearchParams({
      list: playlist,
      autoplay: '1',
      mute: '1',
      loop: '1',
      playsinline: '1',
      rel: '0',
    });
    embedSrc = `https://www.youtube.com/embed/videoseries?${params.toString()}`;
  } else if (video) {
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: video,
      playsinline: '1',
      rel: '0',
    });
    embedSrc = `https://www.youtube.com/embed/${encodeURIComponent(video)}?${params.toString()}`;
  }

  return (
    <FeedCardShell
      title={name}
      href={href}
      icon={<Youtube className="w-4 h-4" aria-hidden="true" />}
      accentClass="bg-red-50 text-red-600"
    >
      {embedSrc ? (
        <iframe
          title="SIMS YouTube videos"
          src={embedSrc}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <EmbedPlaceholder
          platform="YouTube"
          steps={[
            'In YouTube Studio, copy your Channel ID (starts with UC…)',
            'Change UC → UU to get the uploads playlist ID',
            'Paste it in src/lib/social-feeds.ts → youtube.uploadsPlaylistId',
          ]}
        />
      )}
    </FeedCardShell>
  );
}

/**
 * Three equal-height live social cards: Facebook · Instagram · YouTube
 */
export function SocialFeedGrid({ className }: { className?: string }) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch', className)}>
      <FacebookFeed />
      <InstagramFeed />
      <YouTubeFeed />
    </div>
  );
}
