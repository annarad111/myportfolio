# Ana-Maria Rădulescu — Portfolio

Horizontal-scroll portfolio built with Next.js (App Router), React and TypeScript.

- `/` — Editorial direction
- `/arcade` — Arcade direction

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — routes, layout, global styles
- `components/EditorialPortfolio.tsx`, `components/ArcadePortfolio.tsx` — the pages (props: `videoOlympian`, `videoMeteors`, `motion`, `smoothness`, `customCursor`, `runner`)
- `lib/hscroll.ts` — horizontal scroll + motion engine (reveals, parallax, cursor, ghost runner, video autoplay)
- `public/videos/` — gameplay videos. Add a Meteors & Rockets clip and pass it as `videoMeteors="/videos/meteors.mp4"`.

## Deploy

Push to GitHub and import the repo in Vercel.
