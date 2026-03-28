# Engine 43 — CLAUDE.md

## Project overview

Website for Engine 43, a historic San Francisco firehouse (724 Brazil Ave, Excelsior District) turned creative community space. Featured in *The Princess Diaries* (2001).

**Domain:** engine43.org
**Framework:** Astro 5 (static site)
**Node:** 20.x via nvs (`nvs use node/20.20.0/x64`)
**Run dev server:** `npm run dev`

---

## Site structure

| Page | Path | Status |
|------|------|--------|
| Home | `/` | Live |
| Tourist / QR landing | `/tourist` | Live — primary focus |
| Firehouse Cats | `/cats` | Live |
| Screenprinting Classes | `/classes` | Placeholder |
| Listening Room | `/project/listening-room` | Placeholder |
| Firehouse History | `/history` | Exists, not linked in nav |
| Events | `/events` | Exists, not linked on tourist pages |

---

## Design system

**Fonts (Adobe Typekit):** `freight-big-pro` (serif/display), `p22-typewriter` (UI/mono)
**Palette:** Burgundy (`#471914`), warm brown (`#5C4A3D`), cream (`#F5F0E6`), warm beige accent
**Dark mode:** Auto via `prefers-color-scheme: dark` — full palette swap defined in `global.css`

**Section backgrounds** — alternate throughout pages:
- `.section-hero-bg` — sky photo + light gradient overlay (right-side up)
- `.section-hero-flipped` — sky photo + light gradient (flipped/inverted)
- `.hero-small` — solid gradient, white text — use for page hero headers

**Buttons:**
- `.btn` — primary, burgundy fill, white text
- `.btn-outline` / `.btn-secondary` — outline style (in dark mode, overridden to match `.btn` — see bottom of `global.css`)

---

## Key conventions

- CSS variables for all colors/spacing — defined in `:root` in `global.css`, overridden in `@media (prefers-color-scheme: dark)`
- Dark mode outline button override **must stay at the bottom** of `global.css` to win the cascade
- Alternating `section-hero-bg` / `section-hero-flipped` section backgrounds throughout pages
- `hideNav={true}` on Header suppresses the nav links (tourist, cats, classes, listening room pages)
- `hideLinks={true}` on Footer suppresses Quick Links section (same pages)
- When the full site is ready, remove `hideNav` and `hideLinks` props from those pages

---

## Image optimization

Tourist and cat images use Astro's `<Image>` component from `astro:assets`:
- Files live in `src/assets/tourist/` and `src/assets/tourist/cats/`
- Import each image and pass to `<Image>` with `widths` and `sizes` for responsive srcset
- Astro auto-converts to WebP at build time
- `sharp` is installed as a devDependency for the image pipeline

**Do not put optimized images in `public/`** — they won't be processed.

Gallery images: `widths={[400, 800]}`, `sizes="(max-width: 640px) 100vw, 50vw"`
Full-width images: `widths={[400, 800, 1200]}`, `sizes="(max-width: 640px) 100vw, 90vw"`

---

## Components

| Component | Props of note |
|-----------|--------------|
| `Header.astro` | `hideNav?: boolean` |
| `Footer.astro` | `hideLinks?: boolean` |
| `ButtondownSignup.astro` | `heading`, `description`, `buttonText`, `variant`, `tag` (Buttondown tag for subscriber segmentation) |

**Buttondown list:** `Couzteau` — use `tag="listening-room"` for listening room signups.

---

## Layouts

- `BaseLayout.astro` — standard pages; accepts `hideNav`, `hideLinks`
- `TouristLayout.astro` — tourist/QR landing; has `hideNav` and `hideLinks` hardcoded on

---

## Content docs

- `docs/site requirements.md` — full site spec and content structure
- `docs/tourist-page-content.md` — tourist page content brief
- `docs/engine43-requirements.md` — additional requirements
- `docs/screenprinting-classes-content.md` — screenprinting page brief

---

## Etsy shop

URL: `https://www.etsy.com/shop/Engine43ArtStore`
Brand name: **Mia & Fat Louie's** (named after *The Princess Diaries* characters)

---

## Social

- Instagram: `https://www.instagram.com/engine43artstudio`
- Facebook: `https://www.facebook.com/EngineArtStudio43`

---

## Contact

- Screenprinting inquiries: `screenprinting@engine43.org`
