# Model Communities Lab website (Astro redesign draft)

Homepage: the structure of the earlier variant A (network/epistasis/landscape triptych → four questions → approach → selected work → join) with the hero and typography of variant B (Inter Tight, gradient statement, scale ruler). Variant C was dropped.

Pages: `/`, `/research/`, `/publications/` (filterable by theme), `/people/`, `/join/`, `/contact/`.

## Run it

Requires Node ≥ 22.12.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

## Edit content (no code needed)

Full step-by-step guide: **EDITING.md**.

- `src/data/publications.yaml` — papers. `theme:` puts a paper under one of the four questions; `highlight: true` puts it in "Selected work". Your name is bolded automatically.
- `src/data/people.yaml` — team and alumni (`status: current | alumni`). Photos go in `public/img/team/`.
- `src/data/content.ts` — the headline, lede, the four questions and their text, and the links.
- `src/data/funders.yaml` + `public/img/funders/` — funding strip (homepage) and footer row.
- Figures: `public/img/pub/`.

## Design decisions

- **Palette from your figures**: cyan `#00a3cc`, olive `#7f9e00` and magenta `#a837c4` from the epistasis diagram, plus viridis from the landscape. Each research question owns one color everywhere.
- **Mark**: a bow-tie glyph — many inputs, a narrow core, many outputs.
- **Navigation**: all five destinations are always visible. There is no hamburger menu; on phones the row scrolls sideways.
- **Type**: Inter Tight for headings, Inter for text, IBM Plex Mono for labels (Newsreader italic only for the math in the epistasis figure).
- **Figures are native SVG/canvas** (`src/components/Fig*.astro`, `src/scripts/landscape.ts`, ~4 KB). They are sharp at any size, animate lightly, and respect "reduce motion".
- No news section and no tools page, as requested.

## Going live

1. Move this project to the root of the `djbajic.github.io` repo, replacing the Jekyll files. Keep the old site on a branch.
2. In GitHub → Settings → Pages → Source, choose **GitHub Actions**. Move `github-pages-deploy.yml` to `.github/workflows/deploy.yml` (I could not write into `.github/` remotely); it builds and deploys on every push to `main`.

## Please check (content I could not verify)

- **Funder logos**: add `nwo.svg` and `zeb.svg` to `public/img/funders/`; until then names are shown as text.
- **Headline**: "Metabolism has an architecture. We use it to predict and design microbial communities." This follows the metabolic-architecture positioning; edit it in `content.ts`.
- **Team roster** was copied from the old site (early 2025). The MSc students listed as current may have left, and new members are missing.
- **Publications stop at the old `publist.yml`** (last edited March 2025). The *Metabolic similarity…* bioRxiv entry may since have been published. Newer papers need adding.
- I corrected the old list's venue for *Balancing noise and plasticity…* from PNAS to **BMC Genomics** (the DOI 10.1186/1471-2164-13-343 is BMC Genomics).
- Two papers (NADH/NAD+ in iScience, transcriptional response in MBE 2020) are tagged `theme: other`, so they don't appear under the four questions.
- Theme 03 mentions applications "from electrosynthesis to agriculture". Remove "agriculture" if you'd rather not signal unpublished work yet.
- **Join page** text is generic (vacancies page, MSCA/Veni fellowships). Adjust it to what you actually offer.
- **Address**: Van der Maasweg 9, 2629 HZ Delft — please confirm.
- Research-card images reuse existing figures. Newer, higher-resolution figures (especially from the bow-tie paper) would lift variants C and the research page.
