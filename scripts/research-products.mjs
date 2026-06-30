import { mkdir, writeFile } from 'node:fs/promises';

const CHECKED_AT = '2026-06-30';
const AFFILIATE_TAG = 'epic05e-21';
const OUT_DIR = 'tmp/amazon-research';
const PRODUCT_JSON = `${OUT_DIR}/selected-products.json`;

const headers = {
  'accept-language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
  'user-agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36'
};

const categories = [
  {
    category: 'Lernspielzeug',
    queries: [
      'VTech Lernspielzeug Kinder',
      'Ravensburger tiptoi Lernspielzeug Kinder',
      'HABA Lernspielzeug Kinder',
      'Clementoni Galileo Lernspielzeug Kinder'
    ],
    accept: ['VTech', 'tiptoi', 'Ravensburger', 'HABA', 'Clementoni', 'Kosmos', 'Galileo']
  },
  {
    category: 'Konstruktionsspielzeug / Bausteine',
    queries: [
      'LEGO Classic Bausteine Kinder',
      'LEGO DUPLO Bausteine Kinder',
      'Eichhorn Constructor Kinder',
      'PLAYMOBIL Bau Spielzeug Kinder'
    ],
    accept: ['LEGO', 'DUPLO', 'Eichhorn', 'PLAYMOBIL', 'Plus-Plus', 'Hubelino']
  },
  {
    category: 'Kreativ- und Bastelspielzeug',
    queries: [
      'Ravensburger Malen nach Zahlen Kinder',
      'Play-Doh Knete Kinder',
      'SES Creative Bastelset Kinder',
      'Aquabeads Bastelset Kinder'
    ],
    accept: ['Ravensburger', 'Play-Doh', 'SES', 'Aquabeads', 'Clementoni', 'Craze', 'Spirograph']
  },
  {
    category: 'Brettspiele und Familienspiele',
    queries: [
      'Ravensburger Familienspiel Kinder',
      'HABA Brettspiel Kinder',
      'Kosmos Spiel Kinder',
      'Mattel UNO Kinderspiel'
    ],
    accept: ['Ravensburger', 'HABA', 'Kosmos', 'Mattel', 'UNO', 'Hasbro', 'Asmodee', 'Schmidt']
  },
  {
    category: 'Puzzle und Denkspiele',
    queries: [
      'Ravensburger Puzzle Kinder',
      'Clementoni Puzzle Kinder',
      'SmartGames Denkspiel Kinder',
      'ThinkFun Logikspiel Kinder'
    ],
    accept: ['Ravensburger', 'Clementoni', 'SmartGames', 'ThinkFun', 'tiptoi', 'Kosmos', 'HABA']
  },
  {
    category: 'Outdoor-Spielzeug',
    queries: [
      'HUDORA Outdoor Spielzeug Kinder',
      'BIG Bobby Car Kinder',
      'Simba Sandspielzeug Kinder',
      'Schildkroet Outdoor Spielzeug Kinder'
    ],
    accept: ['HUDORA', 'BIG', 'Simba', 'Schildkröt', 'Schildkroet', 'Waboba', 'AquaPlay', 'molten']
  },
  {
    category: 'Fahrzeuge / RC / Spielzeugautos',
    queries: [
      'Carrera FIRST Kinder',
      'Hot Wheels Spielzeugautos Kinder',
      'BRIO Bahn Kinder',
      'Bruder Fahrzeug Kinder',
      'SIKU Spielzeugauto Kinder'
    ],
    accept: ['Carrera', 'Hot Wheels', 'BRIO', 'Bruder', 'SIKU', 'Dickie', 'Majorette']
  },
  {
    category: 'Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug',
    queries: [
      'Theo Klein Kinderküche',
      'Hape Kinderküche Kaufladen',
      'Eichhorn Kaufladen Kinder',
      'Small Foot Werkzeugbank Kinder',
      'PLAYMOBIL Rollenspiel Kinder'
    ],
    accept: ['Theo Klein', 'Hape', 'Eichhorn', 'Small Foot', 'PLAYMOBIL', 'Smoby', 'Barbie']
  },
  {
    category: 'Baby- und Kleinkindspielzeug',
    queries: [
      'Fisher-Price Baby Spielzeug',
      'VTech Baby Spielzeug',
      'HABA Babyspielzeug',
      'Lamaze Baby Spielzeug',
      'Ravensburger ministeps'
    ],
    accept: ['Fisher-Price', 'VTech', 'HABA', 'Lamaze', 'Ravensburger', 'ministeps', 'Oball', 'Chicco']
  },
  {
    category: 'Geschenkideen / Trendspielzeug / Audio- und Figurenwelt',
    queries: [
      'tonies Toniebox Figuren Kinder',
      'Schleich Tiere Kinder',
      'PAW Patrol Spielzeug Kinder',
      'Spin Master Kinetic Sand Kinder',
      'Pokemon Spielzeug Kinder'
    ],
    accept: ['tonies', 'Tonies', 'Schleich', 'PAW Patrol', 'Paw Patrol', 'Spin Master', 'Kinetic Sand', 'Pokemon', 'Pokémon']
  }
];

const forbidden = [
  'Blaster',
  'Pistole',
  'Gewehr',
  'Waffe',
  'Softair',
  'Messer',
  'Armbrust',
  'Bogen',
  'Dartpfeil',
  'Knaller',
  'Feuerwerk',
  'Chemie',
  'Chemielabor',
  'Schminke',
  'Make-up',
  'Tattoo'
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function cleanText(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseSearchResults(html) {
  const results = [];
  const itemRegex =
    /<div role="listitem" data-asin="([A-Z0-9]{10})"[\s\S]*?(?=<div role="listitem" data-asin=|$)/g;
  let match;

  while ((match = itemRegex.exec(html))) {
    const asin = match[1];
    const chunk = match[0];
    const titleMatch =
      chunk.match(/<h2[^>]*aria-label="([^"]+)"/) ||
      chunk.match(/<h2[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/);
    const imageAlt = chunk.match(/<img[^>]+alt="([^"]+)"/);
    const title = cleanText(titleMatch?.[1] || imageAlt?.[1] || '');
    const hasPrice = /a-price|a-offscreen/.test(chunk);

    if (asin && title) {
      results.push({ asin, title, hasPrice });
    }
  }

  return results;
}

function passesTextFilters(title, accept) {
  const normalizedTitle = title.toLowerCase();
  const accepted = accept.some((term) => normalizedTitle.includes(term.toLowerCase()));
  const blocked = forbidden.some((term) => normalizedTitle.includes(term.toLowerCase()));
  return accepted && !blocked;
}

function parseDetail(html) {
  const title = cleanText(html.match(/<span id="productTitle"[^>]*>([\s\S]*?)<\/span>/)?.[1] || '');
  const captcha = /captcha|Robot Check|Automated access/i.test(html);
  const missing =
    /Page Not Found|Suchen Sie etwas\?|Die von Ihnen gesuchte Seite wurde nicht gefunden/i.test(html);
  const hasBuySignal =
    /id="add-to-cart-button"|name="submit\.add-to-cart"|name="submit\.addToCart"|id="buy-now-button"|submit\.buy-now|add-to-cart-button|buy-now-button/i.test(
      html
    );
  return { title, captcha, missing, hasBuySignal };
}

async function fetchHtml(url) {
  const response = await fetch(url, { headers, redirect: 'follow' });
  const text = await response.text();
  return { status: response.status, text, url: response.url };
}

async function collectCandidates() {
  await mkdir(OUT_DIR, { recursive: true });
  const seen = new Set();
  const byCategory = new Map();

  for (const group of categories) {
    const categoryResults = [];
    console.log(`\n[search] ${group.category}`);

    for (const query of group.queries) {
      const url = `https://www.amazon.de/s?k=${encodeURIComponent(query)}`;
      const { status, text } = await fetchHtml(url);
      await writeFile(`${OUT_DIR}/search-${slugify(group.category)}-${slugify(query)}.html`, text);
      const parsed = parseSearchResults(text).filter((item) => passesTextFilters(item.title, group.accept));
      console.log(`  ${status} ${query}: ${parsed.length} passende Treffer`);

      for (const item of parsed) {
        if (!seen.has(item.asin)) {
          seen.add(item.asin);
          categoryResults.push({ ...item, category: group.category, query });
        }
      }

      await sleep(350);
    }

    byCategory.set(group.category, categoryResults);
  }

  return byCategory;
}

async function verifyProducts(byCategory) {
  const selected = [];

  for (const group of categories) {
    const candidates = interleaveByQuery(byCategory.get(group.category) || [], group.queries);
    const groupSelected = [];
    console.log(`\n[detail] ${group.category}: ${candidates.length} Kandidaten`);

    for (const candidate of candidates) {
      if (groupSelected.length >= 10) break;

      const affiliateUrl = `https://www.amazon.de/dp/${candidate.asin}?tag=${AFFILIATE_TAG}`;
      try {
        const { status, text } = await fetchHtml(affiliateUrl);
        await writeFile(`${OUT_DIR}/detail-${candidate.asin}.html`, text);
        const detail = parseDetail(text);
        const ready =
          status === 200 &&
          !detail.captcha &&
          !detail.missing &&
          detail.title &&
          detail.hasBuySignal &&
          passesTextFilters(`${candidate.title} ${detail.title}`, group.accept);
        console.log(
          `  ${ready ? 'READY' : 'SKIP '} ${candidate.asin} ${detail.title || candidate.title}`.slice(0, 180)
        );

        if (ready) {
          groupSelected.push({
            asin: candidate.asin,
            title: detail.title || candidate.title,
            category: group.category,
            affiliateUrl,
            affiliateStatus: 'ready',
            checkedAt: CHECKED_AT
          });
        }
      } catch (error) {
        console.log(`  ERROR ${candidate.asin} ${error.message}`);
      }

      await sleep(300);
    }

    selected.push(...groupSelected);
    console.log(`  -> ${groupSelected.length}/10 ausgewählt`);
  }

  await writeFile(PRODUCT_JSON, `${JSON.stringify(selected, null, 2)}\n`);
  console.log(`\n[done] ${selected.length} Produkte in ${PRODUCT_JSON}`);
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function interleaveByQuery(candidates, queries) {
  const buckets = new Map(queries.map((query) => [query, []]));

  for (const candidate of candidates) {
    if (!buckets.has(candidate.query)) {
      buckets.set(candidate.query, []);
    }
    buckets.get(candidate.query).push(candidate);
  }

  const interleaved = [];
  let index = 0;

  while ([...buckets.values()].some((items) => index < items.length)) {
    for (const query of buckets.keys()) {
      const candidate = buckets.get(query)[index];
      if (candidate) {
        interleaved.push(candidate);
      }
    }
    index += 1;
  }

  return interleaved;
}

const candidates = await collectCandidates();
await verifyProducts(candidates);
