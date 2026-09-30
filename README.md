# Barça Hub — Més que un club

A fan-made FC Barcelona fan hub landing page, built as a React learning project with Vite. Dark, editorial, matchday-inspired design (black + purple + gold) — no backend, no auth, just React state and static mock data.

## Features

- **Hero** — compact editorial intro, no generic SaaS banner
- **Member card** — collectible soci/ID card (black + purple + gold)
- **Starting XI** — interactive 4-3-3 tactical pitch; click a starter to select him
- **Bench + comparison** — pick a substitute, compare 6 stat categories (Pace, Shooting, Passing, Dribbling, Defending, Physical), then **Replace Player** to swap him into the XI (old starter drops to the bench)
- **Matches** — 6-fixture ledger: 4 La Liga, 1 Champions League, 1 Copa del Rey
- **Responsive** — pitch tokens scale, comparison/fixtures stack on mobile

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # serve the production build
npm run lint     # eslint check
```

## Project structure

```
src/
  App.jsx              # owns lineup/bench/selection state
  main.jsx
  App.css              # THE single stylesheet (all styling lives here)
  index.css            # minimal reset only
  data/
    players.js         # squad: names, numbers, positions, stats, slots
    playerImages.js    # ONE variable per player photo — edit links here
    matches.js         # fixture list data
  components/
    Navbar, Hero, MemberCard, Pitch, PlayerToken,
    Bench, Comparison, Matches, Footer,
    SectionHeading, SafeImage (image-with-fallback)
public/images/         # drop-in local files (logo, pitch, member avatar)
```

## Editing the data (learning-friendly)

- **Squad** → `src/data/players.js` (names, numbers, positions, `x`/`y` pitch coordinates, stats)
- **Player photos** → `src/data/playerImages.js` (e.g. `export const pedri = "https://..."`)
- **Fixtures** → `src/data/matches.js` (`status: "played"` shows a score, `"scheduled"` shows date/venue)
- **Styling** → everything is in `src/App.css` (design tokens at the top under `:root`)

## Images

- Player portraits are external links (Wikimedia Commons, editable in `playerImages.js`); broken links fall back to initials automatically
- Local drop-ins in `public/images/`: `club-logo.png`, `pitch.jpg`, `members/member-avatar.jpg`

## Disclaimer

Fan-made project created for learning purposes. Not affiliated with FC Barcelona.
