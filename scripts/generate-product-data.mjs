import { mkdir, readFile, writeFile } from 'node:fs/promises';

const INPUT = 'tmp/amazon-research/selected-products.json';
const OUTPUT = 'src/data/toyProducts.ts';

const categoryMeta = [
  {
    name: 'Lernspielzeug',
    slug: 'lernspielzeug',
    summary: 'Spielerisch lernen, ausprobieren und Wissen entdecken.',
    idealFor: 'Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.',
    whyGood:
      'Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.',
    safetyNote: 'Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.'
  },
  {
    name: 'Konstruktionsspielzeug / Bausteine',
    slug: 'konstruktionsspielzeug-bausteine',
    summary: 'Bauen, stecken, umbauen und eigene Ideen entwickeln.',
    idealFor: 'Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.',
    whyGood:
      'Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.',
    safetyNote: 'Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.'
  },
  {
    name: 'Kreativ- und Bastelspielzeug',
    slug: 'kreativ-bastelspielzeug',
    summary: 'Malen, kneten, gestalten und eigene Ergebnisse sichtbar machen.',
    idealFor: 'Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.',
    whyGood:
      'Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.',
    safetyNote: 'Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.'
  },
  {
    name: 'Brettspiele und Familienspiele',
    slug: 'brettspiele-familienspiele',
    summary: 'Gemeinsam spielen, Regeln verstehen und Abende strukturieren.',
    idealFor: 'Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.',
    whyGood:
      'Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.',
    safetyNote: 'Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.'
  },
  {
    name: 'Puzzle und Denkspiele',
    slug: 'puzzle-denkspiele',
    summary: 'Geduld, Mustererkennung und Logik spielerisch trainieren.',
    idealFor: 'Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.',
    whyGood:
      'Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.',
    safetyNote: 'Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.'
  },
  {
    name: 'Outdoor-Spielzeug',
    slug: 'outdoor-spielzeug',
    summary: 'Bewegung, Garten, Park und Spielideen für draußen.',
    idealFor: 'Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.',
    whyGood:
      'Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.',
    safetyNote: 'Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.'
  },
  {
    name: 'Fahrzeuge / RC / Spielzeugautos',
    slug: 'fahrzeuge-rc-spielzeugautos',
    summary: 'Autos, Bahnen, Fahrzeuge und kindgerechter Rennspaß.',
    idealFor: 'Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.',
    whyGood:
      'Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.',
    safetyNote: 'Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.'
  },
  {
    name: 'Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug',
    slug: 'rollenspiel-kinderkueche-kaufladen-werkzeug',
    summary: 'Alltag nachspielen, sprechen, sortieren und Rollen ausprobieren.',
    idealFor: 'Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.',
    whyGood:
      'Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.',
    safetyNote: 'Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.'
  },
  {
    name: 'Baby- und Kleinkindspielzeug',
    slug: 'baby-kleinkindspielzeug',
    summary: 'Greifen, fühlen, hören, sortieren und erste Ursache-Wirkung-Erlebnisse.',
    idealFor: 'Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.',
    whyGood:
      'Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.',
    safetyNote: 'Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.'
  },
  {
    name: 'Geschenkideen / Trendspielzeug / Audio- und Figurenwelt',
    slug: 'geschenkideen-trendspielzeug-audio-figurenwelt',
    summary: 'Figuren, Hörwelten, Sammlerstücke und beliebte Geschenkideen.',
    idealFor: 'Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.',
    whyGood:
      'Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.',
    safetyNote: 'Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.'
  }
];

const ageGroups = ['Baby', '1-3 Jahre', '3-5 Jahre', '6-8 Jahre', '9+ Jahre'];

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function inferAge(title) {
  const normalized = title.replace(',', '.');
  const monthMatch = normalized.match(/ab\s*(\d+)\s*(?:Monat|Monaten|M\+)/i);
  const yearMatch = normalized.match(/ab\s*(\d+)\s*(?:Jahr|Jahren|Jahre|\+)/i);
  const rangeMatch = normalized.match(/(\d+)\s*[-–]\s*(\d+)\s*(?:Jahr|Jahren|Jahre)/i);

  if (/ab Geburt|0 Monate|Neugeborene|Newborn/i.test(title)) {
    return { hint: 'Ab Geburt laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.', groups: ['Baby'] };
  }

  if (monthMatch) {
    const months = Number(monthMatch[1]);
    const group = months < 12 ? 'Baby' : '1-3 Jahre';
    return {
      hint: `Ab ${months} Monaten laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.`,
      groups: [group]
    };
  }

  if (rangeMatch) {
    const from = Number(rangeMatch[1]);
    const to = Number(rangeMatch[2]);
    return {
      hint: `${from}-${to} Jahre laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.`,
      groups: groupsForAge(from, to)
    };
  }

  if (yearMatch) {
    const from = Number(yearMatch[1]);
    return {
      hint: `Ab ${from} Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.`,
      groups: groupsForAge(from, Math.max(from, from + 2))
    };
  }

  return {
    hint: 'Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.',
    groups: ['3-5 Jahre']
  };
}

function groupsForAge(from, to) {
  const groups = [];
  if (from <= 0) groups.push('Baby');
  if (from <= 3 && to >= 1) groups.push('1-3 Jahre');
  if (from <= 5 && to >= 3) groups.push('3-5 Jahre');
  if (from <= 8 && to >= 6) groups.push('6-8 Jahre');
  if (to >= 9 || from >= 9) groups.push('9+ Jahre');
  return groups.length ? groups : ['3-5 Jahre'];
}

function shortDescription(title, meta) {
  const compactTitle = title.replace(/\s+/g, ' ').trim();
  return `${compactTitle} ist eine passende Spielzeugidee aus dem Bereich ${meta.name}. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.`;
}

const researched = JSON.parse(await readFile(INPUT, 'utf8'));
const products = researched.map((item, index) => {
  const meta = categoryMeta.find((category) => category.name === item.category);
  const age = inferAge(item.title);
  const slug = `${String(index + 1).padStart(3, '0')}-${slugify(item.title)}`;

  return {
    id: `toy-${String(index + 1).padStart(3, '0')}`,
    title: item.title,
    slug,
    category: item.category,
    shortDescription: shortDescription(item.title, meta),
    idealFor: meta.idealFor,
    ageHint: age.hint,
    ageGroups: age.groups,
    whyGood: meta.whyGood,
    affiliateUrl: item.affiliateUrl,
    affiliateStatus: item.affiliateStatus,
    image: `/toy-product-images/${slug}.svg`,
    imageAlt: `Neutrales Studio-Mockup zu ${meta.name}`,
    safetyNote: meta.safetyNote,
    asin: item.asin,
    checkedAt: item.checkedAt
  };
});

const file = `export const affiliateTag = 'epic05e-21';

export const toyCategoryMeta = ${JSON.stringify(categoryMeta, null, 2)} as const;

export const toyAgeGroups = ${JSON.stringify(ageGroups, null, 2)} as const;

export type ToyCategory = (typeof toyCategoryMeta)[number]['name'];
export type ToyAgeGroup = (typeof toyAgeGroups)[number];
export type AffiliateStatus = 'ready' | 'placeholder';

export type ToyProduct = {
  id: string;
  title: string;
  slug: string;
  category: ToyCategory;
  shortDescription: string;
  idealFor: string;
  ageHint: string;
  ageGroups: ToyAgeGroup[];
  whyGood: string;
  affiliateUrl: string;
  affiliateStatus: AffiliateStatus;
  image: string;
  imageAlt: string;
  safetyNote?: string;
  asin: string;
  checkedAt: string;
};

export const toyProducts = ${JSON.stringify(products, null, 2)} satisfies ToyProduct[];

export const readyToyProducts = toyProducts.filter((product) => product.affiliateStatus === 'ready');
export const placeholderToyProducts = toyProducts.filter((product) => product.affiliateStatus === 'placeholder');

export function getProductsByCategory(category: ToyCategory) {
  return toyProducts.filter((product) => product.category === category);
}
`;

await mkdir('src/data', { recursive: true });
await writeFile(OUTPUT, file);
console.log(`Wrote ${products.length} products to ${OUTPUT}`);
