# The Aesthetics Accountant

Static site for [theaestheticsaccountant.co.uk](https://www.theaestheticsaccountant.co.uk), built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS v4](https://tailwindcss.com/), deployed on Netlify.

## Development

Requires Node 22 (`nvm use`).

```sh
npm install
npm run dev     # http://localhost:8080 with live reload
npm run build   # outputs to _site/
```

## Structure

- `src/_data/` – site-wide details (`site.json`: phone, address, links), navigation (`nav.json`), homepage testimonials
- `src/_includes/layouts/` – `base.njk` (html shell) and `page.njk` (inner page: title bar, copy, image pair, CTA)
- `src/_includes/partials/` – header, footer, CTA, quote images, SVG icons
- `src/pages/` – one file per inner page; URLs match the old WordPress site (`/about-us/` etc.)
- `src/index.njk` – homepage
- `src/assets/css/main.css` – Tailwind entry point and brand tokens

### Brand

| Token | Colour | Use |
| --- | --- | --- |
| `navy` | `#091c60` | logo bar, feature strip, footer bottom |
| `navy-deep` | `#040e30` | menu bar, headline ink |
| `blush` | `#dbbbbe` | accent, hovers, footer top |
| `gold` | `#d2b472` | CTA buttons, hero text shadow |

Fonts: Cormorant Garamond (headings) and Open Sans (body), from Google Fonts.

## Contact form

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). Submissions appear in the Netlify dashboard under **Forms → contact**; set up email notifications there. Successful submissions land on `/thank-you/`.
