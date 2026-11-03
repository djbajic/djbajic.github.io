import { load } from 'js-yaml';
import pubsRaw from './publications.yaml?raw';
import peopleRaw from './people.yaml?raw';
import fundersRaw from './funders.yaml?raw';
import collabRaw from './collaborators.yaml?raw';
import industryRaw from './industry.yaml?raw';
import teachingRaw from './teaching.yaml?raw';

export type Pub = {
  title: string; authors: string; journal: string; year: number; doi: string;
  image: string | null; summary: string; highlight: boolean; theme: ThemeId; preprint: boolean;
};
export type Person = {
  name: string; role: string; title?: string; photo?: string; status: 'current' | 'alumni';
  bio?: string; years?: string; links?: Record<string, string>;
  honors?: string; now?: string; nowUrl?: string;
};
export type ThemeId = 'architecture' | 'assembly' | 'function' | 'models' | 'other';

export const pubs = (load(pubsRaw) as Pub[]).sort((a, b) => b.year - a.year);
export const people = load(peopleRaw) as Person[];
export type Funder = { name: string; full: string; logo?: string; label?: string; url?: string; grant?: string; height?: number };
export const funders = (load(fundersRaw) as Funder[]) ?? [];
export type Collaborator = { institution: string; place?: string; map?: [number, number]; logos?: string[]; people: { name: string; url?: string }[] };
export const collaborators = (load(collabRaw) as Collaborator[]) ?? [];
export type IndustryPartner = { name: string; place?: string; map?: [number, number]; url?: string; logo?: string; summary?: string };
export const industry = (load(industryRaw) as IndustryPartner[]) ?? [];
export type Teaching = {
  intro?: string; projects?: string;
  courses?: { title: string; short?: string; where?: string; detail?: string; summary?: string; url?: string }[];
  postgrad?: { title: string; short?: string; where?: string; role?: string; when?: string; summary?: string; url?: string }[];
  workshops?: { title: string; when?: string; where?: string; role?: string; summary?: string; url?: string }[];
};
export const teaching = (load(teachingRaw) as Teaching) ?? {};

export const site = {
  name: 'Model Communities Lab',
  affiliation: 'Industrial Microbiology · Dept. of Biotechnology · TU Delft',
  email: 'D.Bajic@tudelft.nl',
  section: 'Section Industrial Microbiology',
  // Homepage headline: one sentence; the second part is set in the color gradient.
  headline: ['How does the architecture of living systems', 'shape their ecology and evolution?'],
  statement: 'How does the architecture of living systems shape their ecology and evolution?',
  lede:
    'We build models that predictively link the architecture of complex living systems to their emergent ' +
    'function. For example, we ask how metabolic networks shape an organism’s phenotype, its evolution and its ecology, ' +
    'or how microbial interaction networks shape ecosystem function. We combine theory and computation ' +
    'with experiments in simple model communities. Increasingly, we take these models to real-world microbiomes in ' +
    'agriculture, bioremediation and industrial fermentation.',
  links: {
    scholar: 'https://scholar.google.com/citations?user=6tfrMqYAAAAJ',
    orcid: 'https://orcid.org/0000-0002-6716-7898',
    github: 'https://github.com/djbajic',
    bluesky: '',
  },
  address: ['Department of Biotechnology', 'Faculty of Applied Sciences, TU Delft', 'Van der Maasweg 9, 2629 HZ Delft', 'The Netherlands'],
};

export const nav = [
  { href: '/research/', label: 'Research' },
  { href: '/publications/', label: 'Publications' },
  { href: '/people/', label: 'People' },
  { href: '/teaching/', label: 'Teaching' },
  { href: '/join/', label: 'Join' },
  { href: '/contact/', label: 'Contact' },
];

/** The four questions = the research program. Colors come from the lab's figures. */
export const themes: {
  id: ThemeId; n: string; label: string; scale: string; color: string; question: string; short: string; body: string;
  figure: string; figAlt: string;
}[] = [
  {
    id: 'architecture', n: '01', label: 'Architecture', scale: 'Network', color: 'var(--c-cyan)',
    question: 'Is evolution of metabolism predictable?',
    short: 'How the metabolic context of mutations makes their effects combine in simple, predictable ways.',
    body:
      'Metabolic networks are not random wiring diagrams: thousands of reactions funnel through a small core of shared ' +
      'currencies and precursors. We study how this bow-tie architecture shapes which mutations matter, how their effects ' +
      'combine, and why fitness landscapes are so often simpler than their size suggests.',
    figure: 'sugarswap.webp', figAlt: 'Pathways from three substrates converging on a shared metabolic core',
  },
  {
    id: 'assembly', n: '02', label: 'Assembly', scale: 'Environment → Community', color: 'var(--c-olive)',
    question: 'Can the chemistry of an environment tell us which community will assemble?',
    short: 'Predicting community composition from the metabolic environment — and how it responds when we perturb it.',
    body:
      'The nutrients available to a community are among the strongest determinants of who ends up living in it. We assemble ' +
      'model communities in high throughput and in bioreactors, and pair them with metabolic models, to learn how composition ' +
      'follows from chemistry — and how to shift it with targeted metabolic interventions.',
    figure: 'crossfeeding.webp', figAlt: 'Cross-feeding network among five bacterial genera grown on glucose',
  },
  {
    id: 'function', n: '03', label: 'Function', scale: 'Community → Function', color: 'var(--c-magenta)',
    question: 'Can we engineer what a community does without mapping every interaction?',
    short: 'Borrowing global epistasis from fitness landscapes to predict and design community function.',
    body:
      'We develop statistical approaches, heavily inspired in the theory of fitness landscapes, to predict the function of communities' +
      ' from their composition. We use those predictions to design consortia for diverse applications, from food fermentation to agriculture.',
    figure: 'global_ep_summ.webp', figAlt: 'Functional effect of a focal species across ecological backgrounds',
  },
  {
    id: 'models', n: '04', label: 'Digital twins', scale: 'Genome → Ecosystem', color: 'var(--c-violet)',
    question: 'Can digital twins of microbial communities help us understand and engineer them?',
    short: 'Genome-scale, multi-species metabolic models that simulate communities in time and space.',
    body:
      'We develop genome-scale, multi-species metabolic models to simulate microbial communities in time and space.',
    figure: 'gpmap.webp', figAlt: 'Genotype–phenotype map linking metabolic networks to a phenotype landscape',
  },
];

export const pubsByTheme = (id: ThemeId) => pubs.filter((p) => p.theme === id);
export const selected = pubs.filter((p) => p.highlight);
export const shortJournal = (j: string) =>
  ({
    'Molecular Biology and Evolution': 'Mol. Biol. Evol.',
    'Proceedings of the National Academy of Sciences': 'PNAS',
    'Philosophical Transactions of the Royal Society B': 'Phil. Trans. R. Soc. B',
    'PLoS Computational Biology': 'PLoS Comput. Biol.',
    'Current Opinion in Biotechnology': 'Curr. Opin. Biotechnol.',
    'International Journal of Molecular Sciences': 'Int. J. Mol. Sci.',
    'npj Systems Biology and Applications': 'npj Syst. Biol. Appl.',
    'Frontiers in Microbiology': 'Front. Microbiol.',
    'Genome Biology and Evolution': 'Genome Biol. Evol.',
  })[j] ?? j;
