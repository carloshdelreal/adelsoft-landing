# Adelsoft Landing Page

Bilingual (EN/ES) marketing site for Adelsoft Web Development, built with **Next.js static export** so each route ships real HTML (including Open Graph tags for WhatsApp/social previews).

## Prerequisites

- Node.js 20+
- npm 9+

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm start` / `npm run dev` — Next.js development server
- `npm run build` — static export to `out/`
- `npm run preview` — serve the `out/` folder locally
- `npm run deploy` — build and publish `out/` to GitHub Pages

## Routes

| English | Spanish |
|---------|---------|
| `/en/` | `/es/` |
| `/en/schedule/` | `/es/agendar/` |
| `/en/thankyou/` | `/es/gracias/` |

Each of these paths is a pre-rendered HTML file with its own title, description, and `og:*` tags.

## Project Structure

- `/src/app` — Next.js App Router pages + metadata
- `/src/views` — page compositions (home, schedule, thank-you)
- `/src/components` — UI sections
- `/src/data` — bilingual copy (`data.json`)
- `/public` — static CSS, fonts, images

## Stack

- Next.js 15 (`output: "export"`)
- React 18
- Smooth Scroll
- Bootstrap 3 CSS (legacy grid/styles)

## License

See the LICENSE file in the repository root.
