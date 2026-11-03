# Editing the website

Almost everything you will ever change lives in **four data files**. You only need to touch page files (`.astro`) for fixed wording on a specific page.

```
_redesign/
├── src/data/
│   ├── content.ts          ← lab name, headline, intro text, the 4 research questions, links, e-mail, address
│   ├── publications.yaml   ← papers
│   ├── people.yaml         ← team + alumni
│   └── funders.yaml        ← funding logos/names
├── public/img/
│   ├── pub/                ← figures for papers and research themes
│   ├── team/               ← people photos
│   └── funders/            ← funder logos (NWO, ZEB, …)
├── public/CV_Djordje_Bajic.pdf
└── src/pages/*.astro       ← page-specific fixed text (Join, Contact, homepage sections)
```

## 0. Preview while you edit

```bash
cd /home/bajic/Nextcloud/djbajic.github.io/_redesign
npm install          # once
npm run dev          # open http://localhost:4321 — the page reloads every time you save a file
```

If you make a mistake (e.g. broken YAML), the browser shows an error overlay naming the file and line. Fix it and save again.

## 1. What you see → where to change it

| On the site | File | What to edit |
|---|---|---|
| Lab name (header, footer, tab title) | `src/data/content.ts` | `name:` |
| Homepage headline (2 lines) | `src/data/content.ts` | `headline: ['line 1', 'line 2']` — line 2 is the gradient one |
| Homepage intro paragraph | `src/data/content.ts` | `lede:` |
| The four research questions (homepage list + Research page) | `src/data/content.ts` | `themes:` → `question`, `short` (homepage), `body` (Research page), `figure` |
| E-mail, address, Scholar/ORCID/GitHub | `src/data/content.ts` | `email`, `address`, `links` |
| Menu items | `src/data/content.ts` | `nav:` |
| Papers, "Selected work" cards | `src/data/publications.yaml` | see §2 |
| Team and alumni | `src/data/people.yaml` | see §3 |
| "Supported by" strip + footer funding row | `src/data/funders.yaml` + `public/img/funders/` | see §4 |
| Teaching page | `src/data/teaching.yaml` | see §4c |
| Friends and collaborators (People page), industry partners (homepage) | `src/data/collaborators.yaml`, `src/data/industry.yaml` + `public/img/partners/` | see §4b |
| Captions of the three homepage figures, Theory/Models/Experiments, "Curious about…" block | `src/pages/index.astro` | plain text in the HTML |
| Join page text | `src/pages/join.astro` | plain text |
| Contact page layout | `src/pages/contact.astro` | (data itself comes from `content.ts`) |
| Research page intro sentence | `src/pages/research.astro` | plain text under the `<h1>` |
| Colors | `src/styles/global.css` | the `--c-…` lines at the top |
| CV | `public/CV_Djordje_Bajic.pdf` | replace the file (keep the name) |

In `content.ts`, only edit the text **between the quotes**. If your text contains an apostrophe, write it as `’` (typographic) or escape it: `'don\'t'`.

## 2. Add or change a paper — `src/data/publications.yaml`

Copy an existing block and edit it. Order doesn't matter (the site sorts by year).

```yaml
- title: Your new paper title
  authors: 'A. Author*, D. Bajić#, B. Author'   # * equal contribution, # corresponding
  journal: Nature Microbiology
  year: 2026
  doi: 10.1038/s41564-026-01234-5                 # no https://doi.org/ prefix
  image: newpaper.webp                            # optional; file in public/img/pub/ — or null
  summary: One sentence for the homepage card.    # optional, shown only if highlight is true
  highlight: true                                 # true = appears in "Recent findings" on the homepage
  theme: architecture                             # architecture | assembly | function | models | other
  preprint: false                                 # true for bioRxiv etc.
```

- `theme` decides which of the four questions the paper appears under (Research page, filters on the Publications page). `other` shows it only in the full list.
- The homepage shows **all** papers with `highlight: true` — keep it to 4 (one row).
- Your name is bolded automatically (anything matching "Bajić"/"Bajic").

## 3. People — `src/data/people.yaml`

```yaml
- name: New Person
  role: PhD candidate
  photo: newperson.webp        # optional; file in public/img/team/ — without it, initials are shown
  status: current              # current | alumni
  bio: >-
    One or two sentences. The ">-" lets you write over several lines.
```

- When someone leaves: change `status: current` → `status: alumni` and add `years: 2023–2026`.
- Alumni lines also take `honors: cum laude` (shown as a small tag) and `now: Company or position` + `nowUrl: https://…` (shown as "→ currently …", linked). Delete `now:` to hide that part.
- Photos: square-ish, at least 600 px. Any format works; `.webp` or `.jpg` is fine.
- The first entry is always shown as the PI block.

## 4. Funding — `src/data/funders.yaml`

1. Download each funder's official logo (NWO press/brand page; ask the ZEB program office for theirs). Prefer an SVG, horizontal, transparent background.
2. Save it to `public/img/funders/` as `nwo.svg` / `zeb.svg` (or any name — then update `logo:`).
3. `label:` puts text next to the logo (used for "Zero Emission Biotechnology Program" next to the TU Delft Biotechnology logo).
4. Optionally fill in `grant:` with the grant name/number; it appears under the logo on the homepage.

```yaml
- name: NWO
  full: Dutch Research Council (NWO)
  logo: nwo.svg
  url: https://www.nwo.nl/en
  grant: 'NWO XS · OCENW.XS.123'
```

Logos render in grayscale and turn to color on hover, so they sit quietly next to each other. Until a logo file exists, the name is shown as text instead. Add a new funder by copying a block; delete one by removing its block.

## 4b. Collaborators and industry partners

- **Friends and collaborators** (People page, between team and alumni): `src/data/collaborators.yaml`. One block per institution with `institution`, `place`, `logos` (files in `public/img/partners/`, one or more) and `people` (each with `name` and `url`; leave `url: ''` for no link). Order on the page = order in the file. Missing logo file → the institution name is shown as text in its place.
- **Industry partners** (homepage cards under "Supported by"): `src/data/industry.yaml` — `name`, `place`, `url`, `logo` (file in `public/img/partners/`), `summary` (one sentence on the card).
- **Map** (People page, below the collaborators): every entry in both files with `map: [lat, lon]` gets a point. Points within Europe appear in the Europe panel; Delft is the hub all lines start from. Positions are approximate — nudge them apart if two points overlap.

## 4c. Teaching page

`src/data/teaching.yaml`: `intro`, `courses` (big cards: `title`, `short`, `where`, `detail`, `summary`, `url`), `workshops` (list, newest first: `title`, `when`, `where`, `role`, `summary`, `url`) and `projects` (text next to the student-project counts, which are counted automatically from the alumni in `people.yaml`).

## 5. YAML pitfalls (the only way to break things)

- **Indentation** is meaningful: two spaces, never tabs. Every field of an entry lines up under `title`/`name`.
- Put text in quotes if it contains `: `, `#`, or starts with `*`, `'`, `[`. Authors with `*`/`#` → always quote.
- Inside single quotes, an apostrophe is written twice: `'Sánchez''s lab'`.

## 6. Publish

Once the project replaces the Jekyll site in the `djbajic.github.io` repo (see README "Going live"):

```bash
git add -A
git commit -m "Add new paper"
git push
```

GitHub builds and publishes automatically in ~1 minute (Actions tab shows progress). You can also edit any of the data files directly on github.com (pencil icon) and commit there — same result, no local setup needed.
