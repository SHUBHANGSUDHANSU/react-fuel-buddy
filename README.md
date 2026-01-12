# React Fuel Buddy

A React + Vite clone of the FuelBuddy marketing website, rebuilt as a single-page app with local routes and static assets.

## Features

- Client-side routing for all public pages
- Local assets in `public/` and `src/assets/`
- Formspree integration for contact/quote forms
- Vercel-ready SPA deployment

## Tech Stack

- React
- Vite
- React Router

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`.

## Build

```bash
npm run build
npm run preview
```

## Routes

Main routes are defined in `src/App.jsx`, including:

- `/`
- `/about-us`
- `/leadership-team`
- `/careers`
- `/solutions/buddy-can`
- `/solutions/smart-tank`
- `/solutions/diesel-on-tap`
- `/solutions/fb-vault`
- `/our-blog`
- `/awards-recognition`
- `/contact-us`
- `/privacy-policy`
- `/terms-conditions`
- `/order-fuel`

## Forms

Forms submit via Formspree to `https://formspree.io/f/xkoowlbe`.
Pages wired:

- Contact Us
- About Us
- Buddy Can
- Smart Tank
- DOT (Diesel on Tap)
- FB Vault

## Deployment (Vercel)

The project includes `vercel.json` to rewrite all routes to `/` for SPA routing.

1. Push to GitHub.
2. Import the repo in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`

## Notes

If you add new routes, keep them in `src/App.jsx` and ensure Vercel rewrites remain in place.
