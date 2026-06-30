import { mkdir, readFile, writeFile } from 'node:fs/promises';

const input = 'src/data/toyProducts.ts';
const outDir = 'public/toy-product-images';

const palettes = [
  ['#f5b84b', '#5bb4d8', '#ef765f', '#8fd4b8', '#6f7fd6'],
  ['#ffcf6e', '#77c6d8', '#ef8a72', '#9ccf77', '#7267c9'],
  ['#f2a65a', '#83b7e2', '#ef6f6c', '#a6d6a1', '#6d8dd6'],
  ['#ffd166', '#4fb3c4', '#f07167', '#90be6d', '#6c7bd9'],
  ['#f7c45f', '#76b7d6', '#ee7a68', '#9ed9c3', '#7b6ed6']
];

const source = await readFile(input, 'utf8');
const jsonMatch = source.match(/export const toyProducts = ([\s\S]*?) satisfies ToyProduct\[];/);
if (!jsonMatch) {
  throw new Error('Could not find toyProducts JSON in src/data/toyProducts.ts');
}

const products = JSON.parse(jsonMatch[1]);
await mkdir(outDir, { recursive: true });

for (const product of products) {
  const filename = `${outDir}/${product.slug}.svg`;
  await writeFile(filename, renderProductImage(product));
}

console.log(`Wrote ${products.length} product images to ${outDir}`);

function renderProductImage(product) {
  const seed = hash(product.asin);
  const palette = palettes[seed % palettes.length];
  const shapeSet = categoryShape(product.category, seed, palette);
  const accent = palette[(seed + 2) % palette.length];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="720" viewBox="0 0 960 720" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(product.imageAlt)}</title>
  <desc id="desc">Lokales neutrales Studio-Mockup ohne Markenlogo, Preise oder Shop-Elemente.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fffaf1"/>
      <stop offset="1" stop-color="#f4f8fb"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="45%" r="55%">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.18"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="28" stdDeviation="22" flood-color="#233044" flood-opacity="0.18"/>
    </filter>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#233044" flood-opacity="0.14"/>
    </filter>
    <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="960" height="720" fill="url(#bg)"/>
  <rect width="960" height="720" fill="url(#halo)"/>
  <ellipse cx="480" cy="616" rx="300" ry="44" fill="#1f2d3d" opacity="0.10"/>
  <g filter="url(#shadow)">
    ${shapeSet}
  </g>
  <g opacity="0.35">
    <circle cx="${110 + (seed % 80)}" cy="${115 + (seed % 50)}" r="18" fill="${palette[0]}"/>
    <circle cx="${800 - (seed % 70)}" cy="${120 + (seed % 70)}" r="12" fill="${palette[1]}"/>
    <path d="M802 546l16 31 34 5-25 24 6 34-31-16-31 16 6-34-25-24 34-5z" fill="${palette[2]}"/>
  </g>
</svg>
`;
}

function categoryShape(category, seed, palette) {
  if (category.includes('Lernspielzeug')) return learning(seed, palette);
  if (category.includes('Konstruktionsspielzeug')) return construction(seed, palette);
  if (category.includes('Kreativ')) return creative(seed, palette);
  if (category.includes('Brettspiele')) return boardGame(seed, palette);
  if (category.includes('Puzzle')) return puzzle(seed, palette);
  if (category.includes('Outdoor')) return outdoor(seed, palette);
  if (category.includes('Fahrzeuge')) return vehicles(seed, palette);
  if (category.includes('Rollenspielzeug')) return roleplay(seed, palette);
  if (category.includes('Baby')) return baby(seed, palette);
  return gifts(seed, palette);
}

function learning(seed, p) {
  return `
    <g transform="translate(185 92)">
      <rect x="90" y="80" width="500" height="390" rx="42" fill="${p[0]}"/>
      <rect x="128" y="118" width="424" height="276" rx="28" fill="#f9fcff"/>
      <circle cx="340" cy="432" r="20" fill="#ffffff" opacity="0.85"/>
      <g filter="url(#softShadow)">
        <circle cx="250" cy="250" r="98" fill="${p[1]}"/>
        <path d="M250 155c32 50 32 140 0 190M155 250h190M187 190c38 20 88 20 126 0M187 310c38-20 88-20 126 0" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round"/>
        <rect x="390" y="178" width="104" height="36" rx="18" fill="${p[2]}"/>
        <rect x="390" y="238" width="126" height="36" rx="18" fill="${p[3]}"/>
        <rect x="390" y="298" width="84" height="36" rx="18" fill="${p[4]}"/>
      </g>
    </g>`;
}

function construction(seed, p) {
  const offset = seed % 18;
  return `
    <g transform="translate(145 130)">
      ${brick(70, 250, 250, 120, p[0])}
      ${brick(250, 155 - offset, 250, 120, p[1])}
      ${brick(430, 250, 250, 120, p[2])}
      ${brick(165, 350, 250, 120, p[3])}
      ${brick(345, 445 - offset, 250, 120, p[4])}
    </g>`;
}

function brick(x, y, w, h, fill) {
  const studs = [0.24, 0.5, 0.76];
  return `
    <g>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="${fill}"/>
      <rect x="${x + 12}" y="${y + 10}" width="${w - 24}" height="${h - 20}" rx="18" fill="url(#shine)"/>
      ${studs
        .map((s) => `<ellipse cx="${x + w * s}" cy="${y + 12}" rx="31" ry="13" fill="#fff" opacity="0.35"/>`)
        .join('')}
      ${studs
        .map((s) => `<ellipse cx="${x + w * s}" cy="${y + 34}" rx="31" ry="18" fill="${fill}"/>`)
        .join('')}
    </g>`;
}

function creative(seed, p) {
  return `
    <g transform="translate(165 90)">
      <rect x="130" y="105" width="420" height="430" rx="32" fill="#ffffff"/>
      <rect x="166" y="142" width="348" height="268" rx="22" fill="${p[0]}" opacity="0.18"/>
      <circle cx="270" cy="252" r="68" fill="${p[1]}"/>
      <path d="M334 326c46-96 122-120 166-72-52 16-84 50-110 104z" fill="${p[2]}"/>
      <rect x="124" y="468" width="432" height="68" rx="26" fill="${p[3]}"/>
      <g transform="rotate(-28 535 232)">
        <rect x="492" y="74" width="44" height="360" rx="22" fill="#38465a"/>
        <path d="M492 95c6-50 38-50 44 0z" fill="${p[4]}"/>
        <path d="M492 405c8 58 36 58 44 0z" fill="#f3c68a"/>
      </g>
    </g>`;
}

function boardGame(seed, p) {
  return `
    <g transform="translate(150 110)">
      <rect x="160" y="90" width="390" height="260" rx="34" fill="${p[0]}"/>
      <rect x="190" y="122" width="330" height="196" rx="26" fill="#fff" opacity="0.28"/>
      <path d="M210 155h95v70h-95zM330 155h95v70h-95zM210 245h95v48h-95zM330 245h95v48h-95z" fill="#fff" opacity="0.75"/>
      <rect x="92" y="355" width="530" height="118" rx="30" fill="#fff"/>
      <circle cx="210" cy="414" r="35" fill="${p[1]}"/>
      <circle cx="306" cy="414" r="35" fill="${p[2]}"/>
      <circle cx="402" cy="414" r="35" fill="${p[3]}"/>
      <rect x="492" y="386" width="84" height="58" rx="18" fill="${p[4]}"/>
    </g>`;
}

function puzzle(seed, p) {
  return `
    <g transform="translate(170 112)">
      <rect x="120" y="118" width="440" height="370" rx="36" fill="#ffffff"/>
      <path d="M155 170h142c-7 25 8 52 36 52s43-27 36-52h142v118c-27-7-54 9-54 37s27 44 54 37v86H369c7-27-9-54-37-54s-44 27-37 54H155V330c27 7 54-9 54-37s-27-44-54-37z" fill="${p[0]}"/>
      <path d="M300 170h69c7 25-8 52-36 52s-43-27-33-52z" fill="${p[1]}"/>
      <path d="M155 256c27-7 54 9 54 37s-27 44-54 37z" fill="${p[2]}"/>
      <path d="M511 288c-27-7-54 9-54 37s27 44 54 37z" fill="${p[3]}"/>
      <path d="M295 448c-7-27 9-54 37-54s44 27 37 54z" fill="${p[4]}"/>
    </g>`;
}

function outdoor(seed, p) {
  return `
    <g transform="translate(170 110)">
      <circle cx="250" cy="365" r="110" fill="${p[0]}"/>
      <path d="M172 294c55 28 102 26 157-8M157 382c72-28 139-28 209 0" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round" opacity="0.82"/>
      <rect x="415" y="150" width="42" height="275" rx="21" fill="#38465a"/>
      <rect x="355" y="132" width="164" height="42" rx="21" fill="${p[1]}"/>
      <rect x="315" y="430" width="250" height="50" rx="25" fill="${p[2]}"/>
      <circle cx="360" cy="492" r="42" fill="#fff"/>
      <circle cx="360" cy="492" r="24" fill="${p[3]}"/>
      <circle cx="520" cy="492" r="42" fill="#fff"/>
      <circle cx="520" cy="492" r="24" fill="${p[4]}"/>
    </g>`;
}

function vehicles(seed, p) {
  return `
    <g transform="translate(145 160)">
      <path d="M145 300c40-95 115-145 220-145h155c74 0 135 61 135 135v72H120z" fill="${p[0]}"/>
      <path d="M275 182h95v86H220c15-38 33-66 55-86zM397 182h112c37 0 68 24 83 86H397z" fill="#eaf7ff"/>
      <rect x="110" y="338" width="560" height="70" rx="35" fill="${p[1]}"/>
      <circle cx="248" cy="414" r="65" fill="#2f3a4d"/>
      <circle cx="248" cy="414" r="33" fill="#fff"/>
      <circle cx="540" cy="414" r="65" fill="#2f3a4d"/>
      <circle cx="540" cy="414" r="33" fill="#fff"/>
      <path d="M98 486c138-58 442-58 602 0" fill="none" stroke="${p[2]}" stroke-width="18" stroke-linecap="round"/>
    </g>`;
}

function roleplay(seed, p) {
  return `
    <g transform="translate(170 96)">
      <rect x="130" y="170" width="430" height="330" rx="36" fill="${p[0]}"/>
      <rect x="166" y="205" width="150" height="112" rx="22" fill="#fff" opacity="0.86"/>
      <rect x="348" y="205" width="176" height="112" rx="22" fill="#fff" opacity="0.86"/>
      <circle cx="230" cy="392" r="48" fill="${p[1]}"/>
      <circle cx="440" cy="392" r="48" fill="${p[2]}"/>
      <rect x="95" y="496" width="500" height="54" rx="27" fill="${p[3]}"/>
      <path d="M620 175c-72 44-72 156 0 200" fill="none" stroke="${p[4]}" stroke-width="28" stroke-linecap="round"/>
      <circle cx="620" cy="175" r="28" fill="${p[4]}"/>
    </g>`;
}

function baby(seed, p) {
  return `
    <g transform="translate(175 100)">
      <circle cx="310" cy="295" r="170" fill="${p[0]}"/>
      <circle cx="235" cy="225" r="62" fill="${p[1]}"/>
      <circle cx="385" cy="225" r="62" fill="${p[2]}"/>
      <circle cx="310" cy="312" r="78" fill="#fff" opacity="0.45"/>
      <circle cx="278" cy="286" r="14" fill="#2f3a4d"/>
      <circle cx="342" cy="286" r="14" fill="#2f3a4d"/>
      <path d="M270 340c24 30 56 30 80 0" fill="none" stroke="#2f3a4d" stroke-width="12" stroke-linecap="round"/>
      <g transform="translate(455 318)">
        <circle cx="82" cy="82" r="72" fill="none" stroke="${p[3]}" stroke-width="34"/>
        <rect x="42" y="142" width="80" height="145" rx="40" fill="${p[4]}"/>
      </g>
    </g>`;
}

function gifts(seed, p) {
  return `
    <g transform="translate(170 102)">
      <rect x="154" y="176" width="330" height="300" rx="52" fill="${p[0]}"/>
      <rect x="190" y="214" width="258" height="130" rx="34" fill="#fff" opacity="0.30"/>
      <circle cx="320" cy="408" r="36" fill="#fff" opacity="0.84"/>
      <path d="M540 250c65 0 118 52 118 117s-53 118-118 118-118-53-118-118 53-117 118-117z" fill="${p[1]}"/>
      <circle cx="505" cy="346" r="13" fill="#2f3a4d"/>
      <circle cx="575" cy="346" r="13" fill="#2f3a4d"/>
      <path d="M506 399c25 20 43 20 68 0" fill="none" stroke="#2f3a4d" stroke-width="10" stroke-linecap="round"/>
      <path d="M260 152l60-76 60 76M215 152h210" fill="none" stroke="${p[2]}" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="120" y="492" width="510" height="56" rx="28" fill="${p[3]}"/>
    </g>`;
}

function hash(value) {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) >>> 0;
  }
  return result;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
