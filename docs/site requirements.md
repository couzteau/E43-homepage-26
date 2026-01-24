# Engine 43 Website Requirements

## Overview

Website for Engine 43, a historic San Francisco firehouse turned creative space, hosting art markets, events, and multiple creative businesses.

**Domain:** engine43.org

---

## Brands

### Engine 43
The venue and event space. Historic firehouse in San Francisco's Excelsior district. Featured in the movie *The Princess Diaries* (2001).

### Mia & Fat Louie
The Etsy store / retail brand for art and crafts. Name references *The Princess Diaries* — Mia Thermopolis (main character) and Fat Louie (her orange tabby cat).

---

## Tech Stack

- **Framework:** Astro (static site)
- **Content:** Markdown with frontmatter
- **Hosting:** Cloudflare Pages or Netlify
- **Forms:** Native platform forms or third-party embed (Buttondown, Mailchimp)
- **Design Style:** Bohemian / artistic - organic typography, muted earthy tones, handcrafted feel

---

## Site Structure

### Pages

| Page | Description |
|------|-------------|
| Home | Landing page, upcoming events highlight, intro to the space |
| Upcoming Events | Filtered list of future events |
| Past Events | Archive of past events with photos |
| Firehouse History | The building's history, Princess Diaries connection |
| Visit / Tourist Landing | QR code entry point for selfie visitors |
| Massage | Business page for massage practice |
| Jewelry | Business page for roommate's jewelry |
| Art & Screenprint | Business page for painting/screenprinting |
| Coffee | Business page for coffee roasting |
| Mia & Fat Louie | Etsy store info/link |

### Entry Points

1. **Main site (engine43.org)** — Events-forward, for the existing community (market signups, newsletter subscribers)
2. **Tourist landing (engine43.org/visit)** — QR code on fence, focused on firehouse history and Princess Diaries connection, funnels to email signup

---

## Content Structure

```
/src/content/
  events/
    YYYY-MM-DD-event-name.md
  businesses/
    massage.md
    jewelry.md
    art.md
    coffee.md
  pages/
    history.md
    visit.md
    mia-and-fat-louie.md
```

### Event Frontmatter

```yaml
---
title: "Winter Art Market"
date: 2025-01-25
endDate: 2025-01-25  # optional, for multi-day events
time: "11am - 5pm"
location: "Engine 43"
image: "./winter-market-2025.jpg"
description: "Short description for listings"
tags: ["market", "art", "crafts"]
---
```

---

## Features

### Email Signup
- Embed third-party form (Buttondown, Mailchimp, or ConvertKit)
- Appears on home page and tourist landing
- Single list for now, can segment later

### SMS Notifications
- Deferred. Add later if needed via Twilio or similar.

### Event Filtering
- Automatic past/future split based on event date
- Optional tag-based filtering

### Image Optimization
- Use Astro's built-in image optimization
- Gallery component for past events

---

## Businesses

| Business | Owner | Description |
|----------|-------|-------------|
| Massage | Wife | Massage therapy practice |
| Art & Screenprint | Wife | Painting and screenprinting |
| Jewelry | Roommate | Handmade jewelry |
| Coffee Roasting | Jochen | Coffee roasting |
| Mia & Fat Louie (Etsy) | Collective | Art, crafts, prints — links to Etsy store |

---

## Future Considerations

- Massage booking integration (if needed)
- Coffee pre-orders / inventory
- Event RSVP with capacity limits
- Instagram feed embed
- Blog / news section

---

## Notes

- Keep it simple, static-first
- Add server-side functionality only when a real need emerges
- Content should be easy for non-technical users to update (markdown files)