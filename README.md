# REVIONrx — Brand site prototype

Pharmacy-grade PDRN × EGF skincare brand site. Built with Next.js 16 (App Router, Turbopack) and Tailwind CSS v4.

## Pages

- `/` — Landing (hero, science, clinical, 3-product lineup, routine, pharmacy band)
- `/products/mask` — Origin Rejuvenating Mask
- `/products/cream` — Origin Rejuvenating Cream
- `/products/sunscreen` — Origin Rejuvenating Moisture Sun Cream

Copy is ported from the in-progress Korean→English translation of the original REVIONrx detail pages (see Figma `EN_Copy_*` frames).

## Brand mapping

- **EGF refills** (FILL — surface, epidermis)
- **PDRN seals** (LOCK — depth, dermis)
- Pharmacy-exclusive distribution
- Clinical trial reference: OATC Skin Clinical Trial Center, Dec 15–16 2025, n=22

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run lint
```

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS 4
- TypeScript 5
- Fonts: Inter (body), Playfair Display (display)
