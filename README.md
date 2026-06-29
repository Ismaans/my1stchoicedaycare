# My 1st Choice Family Daycare — Website

A responsive, accessible marketing website for **My 1st Choice Family Daycare**, a
licensed Virginia family child care home in the Belle Haven Meadows area of
Alexandria, VA, owned and operated by Farrah Deeba.

Built with **React + Vite + Tailwind CSS v4** and **React Router**.

## Pages

- **Home** — hero, trust strip, welcome, testimonials, closing CTA
- **About** — owner bio, philosophy, expanded trust & safety (with VA license lookup)
- **Programs** — age groups, care options, curriculum (STREAMin3, Learning Beyond Paper)
- **Gallery** — responsive captioned photo grid
- **Contact** — inquiry form, contact details, hours, payment & enrollment notes

## Getting started

```bash
npm install
npm run dev      # start the local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Customizing content

Most reusable business details live in one file:

- `src/data/site.js` — name, owner, phone, area, hours, licensing, nav links

## Replacing placeholder photos

All images currently use `placehold.co` placeholders. To use real photos:

1. Drop your images in `public/` (e.g. `public/photos/play-area.jpg`).
2. In `src/components/ui.jsx` (the `Photo` component) and `src/pages/Gallery.jsx`,
   replace the placeholder `src` URLs with your real image paths
   (e.g. `/photos/play-area.jpg`).
3. Keep the descriptive `alt` text accurate for accessibility.

## Wiring up the contact form

The contact form (`src/pages/Contact.jsx`) supports [Formspree](https://formspree.io):

1. Create a free Formspree form and copy its form ID.
2. Set `const FORMSPREE_ID = 'yourFormId'` near the top of `src/pages/Contact.jsx`.

Until an ID is set, the form falls back to opening the visitor's email client with
the entered details pre-filled. (No email address is published anywhere on the site;
add one to the footer/contact details later when ready.)

## Design notes

- **Color palette** is defined as design tokens in `src/index.css` (`@theme`):
  cream `#FAF8F4`, mist `#CBD7DD`, maroon `#7C2A35`, sand `#D9C8A9`,
  ink `#2C4047`, blush `#FBE3E6`.
- **Fonts**: Bricolage Grotesque (headings) + Hanken Grotesk (body), loaded in
  `index.html`.
- Respects `prefers-reduced-motion`.
