# Original images (archive)

Full-resolution source photos and logos used to generate the site’s responsive WebP assets.

## Production

The SIMS website **does not** load these files at runtime. Production pages import optimized WebP variants from `attached_assets/optimized/` via `responsive-images.generated.ts` and the `OptimizedImage` component (including lightbox `fullSrc`, which is a ~1920w WebP).

## Why keep this folder

- Backup of original masters
- Input for regeneration: `pnpm optimize-images` (and logo helper scripts under `scripts/`)

## Regenerating optimized assets

1. Keep or add originals here (`archive/original-images/…`)
2. Ensure the filename is listed in `attached_assets/optimized/sources.json` (or referenced so the optimizer picks it up)
3. Run `pnpm optimize-images` from the repo root

Logo helpers also read from this archive:

- `node scripts/optimize-logo.mjs`
- `node scripts/make-logo-transparent.mjs`
- `node scripts/make-logo-watermark.mjs`
