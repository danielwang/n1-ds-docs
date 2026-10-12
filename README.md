# N1 DS Docs

A documentation website built with [Docusaurus](https://docusaurus.io/) (TypeScript). Content is written in
Markdown, the sidebar is generated automatically from the `docs/` folder, and the site is deployed to
GitHub Pages via GitHub Actions.

> **Note:** This repository is configured for `https://danielwang.github.io/n1-ds-docs/`. If you fork or
> rename this repository, update `url`, `baseUrl`, `organizationName`, and `projectName` in
> [`docusaurus.config.ts`](./docusaurus.config.ts), and the `git clone` URL below, to match.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) 20.x or later (the version Docusaurus currently supports and
  the one used by the deployment workflow)
- [npm](https://www.npmjs.com/) 10.x or later (bundled with Node.js)
- Git

## Local installation and development

```bash
git clone https://github.com/danielwang/n1-ds-docs.git
cd n1-ds-docs
npm install
npm start
```

`npm start` launches a local dev server at `http://localhost:3000/` with hot reload — most edits (including
to Markdown files) appear instantly without a manual refresh.

## Production builds

```bash
npm run build
```

This type-checks and bundles the site into static HTML/CSS/JS in the `build/` directory. `build/` is not
committed to source control (see `.gitignore`); it is regenerated on every deployment.

To preview the production build locally before deploying:

```bash
npm run serve
```

Other useful scripts:

```bash
npm run typecheck   # Run the TypeScript compiler in check-only mode
npm run clear        # Clear the Docusaurus build cache
```

## Adding documentation pages

1. Add a new Markdown file under [`docs/`](./docs) (nest it in a subfolder to group it with related pages,
   e.g. `docs/guides/`).
2. Add frontmatter with at least a `title` (and optionally `sidebar_position` to control ordering):

   ```md
   ---
   title: My New Page
   sidebar_position: 3
   ---

   # My New Page

   Page content goes here.
   ```

3. That's it — the sidebar in [`sidebars.ts`](./sidebars.ts) is configured to auto-generate navigation from
   the `docs/` folder structure, so no manual sidebar entry is required. To group several pages under a
   collapsible category, add a `_category_.json` file to that subfolder (see
   [`docs/guides/_category_.json`](./docs/guides/_category_.json) for an example).
4. Link between docs using relative paths (e.g. `[Getting Started](../getting-started.md)`) so links keep
   working regardless of the site's base URL.
5. Place images and other static files in [`static/`](./static) and reference them with a root-relative
   path, e.g. `/img/my-image.png` — Docusaurus automatically rewrites these for the configured `baseUrl`
   when they appear in Markdown.

## How GitHub Pages deployment works

- The site is configured for a GitHub **project page**: `url: 'https://danielwang.github.io'` and
  `baseUrl: '/n1-ds-docs/'` in [`docusaurus.config.ts`](./docusaurus.config.ts).
- [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) runs on every push to the `main` branch
  (and can be triggered manually via "Run workflow"). It installs dependencies, runs `npm run build`, and
  publishes the `build/` output using GitHub's native Pages deployment actions
  (`actions/upload-pages-artifact` + `actions/deploy-pages`) — no `gh-pages` branch or committed build
  output is required.
- In the repository settings, under **Settings → Pages**, set **Source** to **GitHub Actions**. After the
  first successful workflow run, the site will be available at `https://danielwang.github.io/n1-ds-docs/`.

## Project structure

```
docs/                   Documentation pages (Markdown), sidebar auto-generated from this folder
src/pages/               Standalone React pages (e.g. the homepage)
src/components/          Reusable React components used by pages
src/css/custom.css       Global theme customizations (keeps Docusaurus's light/dark Infima theme)
static/                  Static assets (images, favicon) copied as-is into the build output
docusaurus.config.ts    Site configuration (title, navbar, footer, GitHub Pages settings, etc.)
sidebars.ts             Sidebar configuration (auto-generated from docs/)
.github/workflows/      CI/CD: build and deploy to GitHub Pages
```
