# Site image assets

## Production runtime

Only **`optimized/`** is used by the app:

- Responsive WebP variants (640 / 1024 / 1600 / full)
- Imported through `@assets/optimized/…` in `artifacts/sims-homepage/src/lib/responsive-images.generated.ts`
- Rendered with `OptimizedImage` (heroes, galleries, lightbox)

## Originals

Original JPG/PNG/JPEG masters live in **`archive/original-images/`** for backup and regeneration. They are not referenced by the Vite app build.
