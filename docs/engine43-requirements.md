# Engine 43 Website Requirements

## Overview

Website for Engine 43, a historic San Francisco firehouse turned creative space, hosting art markets, events, and multiple creative businesses.

**Domain:** engine43.org

---

## Brands

### Engine 43
The venue and event space. Historic firehouse in San Francisco's Excelsior district. Featured in the movie *The Princess Diaries* (2001).

### Chez Mia & Fat Louie
The Etsy store / retail brand for art and crafts. Name references *The Princess Diaries* — Mia Thermopolis (main character) and Fat Louie (her orange tabby cat).

---

## Tech Stack

- **Framework:** Astro (static site)
- **Content:** Markdown with frontmatter
- **Hosting:** Cloudflare Pages or Netlify
- **Forms:** Native platform forms or third-party embed (Buttondown, Mailchimp)

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
| Massage | Project page for massage practice |
| Jewelry | Project page for roommate's jewelry |
| Art & Screenprint | Project page for painting/screenprinting |
| Listening Room | Project page for the listening room / hi-fi sessions |
| Music & Mixes | DJ mixes and music productions by Jochen |
| Chez Mia & Fat Louie | Etsy store info/link |

### Entry Points

1. **Main site (engine43.org)** — Events-forward, for the existing community (market signups, newsletter subscribers)
2. **Tourist landing (engine43.org/visit)** — QR code on fence, focused on firehouse history and Princess Diaries connection, funnels to email signup

---

## Tourist Page Content Structure

The tourist page is specifically for Princess Diaries fans who scan the QR code on the fence. Goal: give them the inside scoop, share our values, and convert them to newsletter subscribers / potential event attendees.

### 1. Hero Section
Welcome message acknowledging why they're here:
- "You found the Princess Diaries firehouse"
- Address: 724 Brazil Ave, Excelsior District
- Brief context: firehouse since 1912, Mia's home since 2001, community space today

### 2. Inside the Firehouse (Gallery)
What tourists want to see — the inside they can't always access:
- The fire pole (still works)
- The spiral staircase
- The Princess Tower (now an art studio) — views from the top
- 4-6 photos max

### 3. The Door: "Resist Much, Obey Little"
Feature the door artwork prominently. Content themes:
- Princess Mia (pre-transformation, wild hair) alongside Princess Leia
- "Princesses can be rebels" message
- Installed during first Trump administration, still relevant
- Community solidarity: looking out for immigrant neighbors
- Encourage visitors to photograph and share — amplifies the message on social media

### 4. Holy Moly Christmas Market Feature
Our biggest annual event — use this to convert tourists to return visitors:
- Brief description: holiday market, local artists, live music
- Emphasize growth: "lines around the block last year"
- Feature the drone photo (aerial shot showing crowds, tower, neighborhood)
- Tease next date: "December 2026 date TBA"
- Direct tie to newsletter signup

### 5. Community & Mission
Transition from resistance message to what we're building:
- Engine 43 as gathering place (art markets, music, neighbors)
- "Strong communities protect democracy"
- Invitation to be part of it

### 6. Calls to Action

**Primary: Newsletter Signup**
> "Want to know when Holy Moly tickets drop? Or catch our next art market? Sign up for event updates."

**Secondary: Mia & Fat Louie's (Etsy)**
- Brief explanation of the name (yes, *that* Mia and her cat)
- Link to Etsy store

**Tertiary: Listening Room (low-key)**
- Not prominently advertised to general Princess Diaries crowd
- Small text link at bottom: "Interested in our listening room sessions? Learn more"
- Discoverable for the right people, not broadcast to everyone

### 7. Sign-off
Warm invitation to return:
- "We host markets, music, and community events throughout the year"
- "The door's open — sometimes literally"

---

## Content Structure

```
/src/content/
  events/
    YYYY-MM-DD-event-name.md
  projects/
    massage.md
    jewelry.md
    art.md
    listening-room.md
    music-mixes.md
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
- **CTA messaging:** Lead with Holy Moly as the hook — "Be the first to know when Holy Moly tickets drop" + general event updates
- Consider separate listening room list later (not advertised broadly)

### SMS Notifications
- Deferred. Add later if needed via Twilio or similar.

### Event Filtering
- Automatic past/future split based on event date
- Optional tag-based filtering

### Image Optimization
- Use Astro's built-in image optimization
- Gallery component for past events

---

## Featured Events

### Holy Moly Christmas Market
Our flagship annual event, held every December. Key details:
- Largest event of the year, growing annually
- 2025 market had lines around the block
- Local artists, handmade goods, live music
- Transforms the firehouse and spills onto Brazil Ave
- **Marketing asset:** Drone photo showing crowds, tower, neighborhood context
- Consider dedicated landing page (`/holymoly`) for vendor applications, schedule, past years
- Primary hook for newsletter signups on tourist page

---

## Projects

| Project | Owner | Description |
|---------|-------|-------------|
| Massage | Carolin | Massage therapy practice |
| Art & Screenprint | Carolin | Painting and screenprinting |
| Jewelry | Roommate | Handmade jewelry |
| Listening Room | Jochen | Hi-fi listening sessions, curated music experiences |
| Music & Mixes | Jochen | DJ mixes, productions, links to external platforms (Mixcloud, SoundCloud, etc.) |
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
