# StrideVault — Shoe Landing Website

A complete, responsive one-page shoe website built with Next.js 16 and Tailwind CSS.

## Sections included

- Hero section with clear call-to-actions
- Featured shoes product grid
- Benefits/value proposition cards
- Customer testimonials
- Contact section
- Footer with key navigation links

## Local development

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment (GitHub Pages)

This repository includes a workflow at `.github/workflows/deploy-pages.yml`.

- On push to `main` (or `feature/shoe-landing-site`), GitHub Actions builds and deploys the site.
- The expected live URL is:

`https://kakarmobin226-byte.github.io/kh/`

### If Pages is not enabled yet

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, select **Source: GitHub Actions**.
3. Push commits to `main` (or manually run the workflow).
