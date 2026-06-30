export const affiliateTag = 'epic05e-21';

export const toyCategoryMeta = [
  {
    "name": "Lernspielzeug",
    "slug": "lernspielzeug",
    "summary": "Spielerisch lernen, ausprobieren und Wissen entdecken.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht."
  },
  {
    "name": "Konstruktionsspielzeug / Bausteine",
    "slug": "konstruktionsspielzeug-bausteine",
    "summary": "Bauen, stecken, umbauen und eigene Ideen entwickeln.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden."
  },
  {
    "name": "Kreativ- und Bastelspielzeug",
    "slug": "kreativ-bastelspielzeug",
    "summary": "Malen, kneten, gestalten und eigene Ergebnisse sichtbar machen.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen."
  },
  {
    "name": "Brettspiele und Familienspiele",
    "slug": "brettspiele-familienspiele",
    "summary": "Gemeinsam spielen, Regeln verstehen und Abende strukturieren.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers."
  },
  {
    "name": "Puzzle und Denkspiele",
    "slug": "puzzle-denkspiele",
    "summary": "Geduld, Mustererkennung und Logik spielerisch trainieren.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern."
  },
  {
    "name": "Outdoor-Spielzeug",
    "slug": "outdoor-spielzeug",
    "summary": "Bewegung, Garten, Park und Spielideen für draußen.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden."
  },
  {
    "name": "Fahrzeuge / RC / Spielzeugautos",
    "slug": "fahrzeuge-rc-spielzeugautos",
    "summary": "Autos, Bahnen, Fahrzeuge und kindgerechter Rennspaß.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen."
  },
  {
    "name": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "slug": "rollenspiel-kinderkueche-kaufladen-werkzeug",
    "summary": "Alltag nachspielen, sprechen, sortieren und Rollen ausprobieren.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein."
  },
  {
    "name": "Baby- und Kleinkindspielzeug",
    "slug": "baby-kleinkindspielzeug",
    "summary": "Greifen, fühlen, hören, sortieren und erste Ursache-Wirkung-Erlebnisse.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden."
  },
  {
    "name": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "slug": "geschenkideen-trendspielzeug-audio-figurenwelt",
    "summary": "Figuren, Hörwelten, Sammlerstücke und beliebte Geschenkideen.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten."
  }
] as const;

export const toyAgeGroups = [
  "Baby",
  "1-3 Jahre",
  "3-5 Jahre",
  "6-8 Jahre",
  "9+ Jahre"
] as const;

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

export const toyProducts = [
  {
    "id": "toy-001",
    "title": "VTech Interaktiver Videoglobus - Lernglobe mit Bildschirm ab 7 Jahren",
    "slug": "001-vtech-interaktiver-videoglobus-lernglobe-mit-bildschirm-ab-7-jahren",
    "category": "Lernspielzeug",
    "shortDescription": "VTech Interaktiver Videoglobus - Lernglobe mit Bildschirm ab 7 Jahren ist eine passende Spielzeugidee aus dem Bereich Lernspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "ageHint": "Ab 7 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre",
      "9+ Jahre"
    ],
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "affiliateUrl": "https://www.amazon.de/dp/B07TL5CM69?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/001-vtech-interaktiver-videoglobus-lernglobe-mit-bildschirm-ab-7-jahren.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Lernspielzeug",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.",
    "asin": "B07TL5CM69",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-002",
    "title": "VTech Mein 100-Wörter-Buch – Interaktives Bilderbuch, Deutsch-Englisch",
    "slug": "002-vtech-mein-100-worter-buch-interaktives-bilderbuch-deutsch-englisch",
    "category": "Lernspielzeug",
    "shortDescription": "VTech Mein 100-Wörter-Buch – Interaktives Bilderbuch, Deutsch-Englisch ist eine passende Spielzeugidee aus dem Bereich Lernspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "affiliateUrl": "https://www.amazon.de/dp/B079VR2R1X?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/002-vtech-mein-100-worter-buch-interaktives-bilderbuch-deutsch-englisch.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Lernspielzeug",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.",
    "asin": "B079VR2R1X",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-003",
    "title": "VTech Abenteuer Lernlenkrad – Interaktives LCD-Steuer für Kinder 3-7",
    "slug": "003-vtech-abenteuer-lernlenkrad-interaktives-lcd-steuer-fur-kinder-3-7",
    "category": "Lernspielzeug",
    "shortDescription": "VTech Abenteuer Lernlenkrad – Interaktives LCD-Steuer für Kinder 3-7 ist eine passende Spielzeugidee aus dem Bereich Lernspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "affiliateUrl": "https://www.amazon.de/dp/B0CX9DP15R?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/003-vtech-abenteuer-lernlenkrad-interaktives-lcd-steuer-fur-kinder-3-7.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Lernspielzeug",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.",
    "asin": "B0CX9DP15R",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-004",
    "title": "VTech Professor Schreibfix - Schreibtafel Lernen 4-8 Jahre",
    "slug": "004-vtech-professor-schreibfix-schreibtafel-lernen-4-8-jahre",
    "category": "Lernspielzeug",
    "shortDescription": "VTech Professor Schreibfix - Schreibtafel Lernen 4-8 Jahre ist eine passende Spielzeugidee aus dem Bereich Lernspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "ageHint": "4-8 Jahre laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "affiliateUrl": "https://www.amazon.de/dp/B0BXP8XRFH?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/004-vtech-professor-schreibfix-schreibtafel-lernen-4-8-jahre.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Lernspielzeug",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.",
    "asin": "B0BXP8XRFH",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-005",
    "title": "VTech Codi Mal-Roboter – Lernroboter zum Zeichnen & Codieren, 4-8 Jahre",
    "slug": "005-vtech-codi-mal-roboter-lernroboter-zum-zeichnen-codieren-4-8-jahre",
    "category": "Lernspielzeug",
    "shortDescription": "VTech Codi Mal-Roboter – Lernroboter zum Zeichnen & Codieren, 4-8 Jahre ist eine passende Spielzeugidee aus dem Bereich Lernspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "ageHint": "4-8 Jahre laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "affiliateUrl": "https://www.amazon.de/dp/B09W2SZYXY?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/005-vtech-codi-mal-roboter-lernroboter-zum-zeichnen-codieren-4-8-jahre.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Lernspielzeug",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.",
    "asin": "B09W2SZYXY",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-006",
    "title": "VTech 2-in-1 Touch-Laptop – Lerncomputer für Kinder 3-6 Jahre",
    "slug": "006-vtech-2-in-1-touch-laptop-lerncomputer-fur-kinder-3-6-jahre",
    "category": "Lernspielzeug",
    "shortDescription": "VTech 2-in-1 Touch-Laptop – Lerncomputer für Kinder 3-6 Jahre ist eine passende Spielzeugidee aus dem Bereich Lernspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "ageHint": "3-6 Jahre laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "affiliateUrl": "https://www.amazon.de/dp/B07P8ZP3NG?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/006-vtech-2-in-1-touch-laptop-lerncomputer-fur-kinder-3-6-jahre.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Lernspielzeug",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.",
    "asin": "B07P8ZP3NG",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-007",
    "title": "VTech Peppas Lernlaptop - Lerncomputer mit ABC-Tastatur, 3-6 Jahre",
    "slug": "007-vtech-peppas-lernlaptop-lerncomputer-mit-abc-tastatur-3-6-jahre",
    "category": "Lernspielzeug",
    "shortDescription": "VTech Peppas Lernlaptop - Lerncomputer mit ABC-Tastatur, 3-6 Jahre ist eine passende Spielzeugidee aus dem Bereich Lernspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "ageHint": "3-6 Jahre laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "affiliateUrl": "https://www.amazon.de/dp/B09W2S51H8?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/007-vtech-peppas-lernlaptop-lerncomputer-mit-abc-tastatur-3-6-jahre.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Lernspielzeug",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.",
    "asin": "B09W2S51H8",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-008",
    "title": "VTech Mein Erster Musik-Player – Kinder MP3 Player mit Bluetooth, 40 Lieder",
    "slug": "008-vtech-mein-erster-musik-player-kinder-mp3-player-mit-bluetooth-40-lieder",
    "category": "Lernspielzeug",
    "shortDescription": "VTech Mein Erster Musik-Player – Kinder MP3 Player mit Bluetooth, 40 Lieder ist eine passende Spielzeugidee aus dem Bereich Lernspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "affiliateUrl": "https://www.amazon.de/dp/B09W2VRTCK?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/008-vtech-mein-erster-musik-player-kinder-mp3-player-mit-bluetooth-40-lieder.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Lernspielzeug",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.",
    "asin": "B09W2VRTCK",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-009",
    "title": "VTech Baby Lern- und Musiktablet, 8 Spiele, Altersgerecht 2-5 Jahre",
    "slug": "009-vtech-baby-lern-und-musiktablet-8-spiele-altersgerecht-2-5-jahre",
    "category": "Lernspielzeug",
    "shortDescription": "VTech Baby Lern- und Musiktablet, 8 Spiele, Altersgerecht 2-5 Jahre ist eine passende Spielzeugidee aus dem Bereich Lernspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "ageHint": "2-5 Jahre laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "affiliateUrl": "https://www.amazon.de/dp/B09NL21H5V?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/009-vtech-baby-lern-und-musiktablet-8-spiele-altersgerecht-2-5-jahre.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Lernspielzeug",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.",
    "asin": "B09NL21H5V",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-010",
    "title": "VTech Baby Musik-Player Karaoke mit Mikrofon für Kinder 2-5",
    "slug": "010-vtech-baby-musik-player-karaoke-mit-mikrofon-fur-kinder-2-5",
    "category": "Lernspielzeug",
    "shortDescription": "VTech Baby Musik-Player Karaoke mit Mikrofon für Kinder 2-5 ist eine passende Spielzeugidee aus dem Bereich Lernspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Wörter, Zahlen, Musik, Technik oder erste Wissenswelten spielerisch entdecken möchten.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Eine beliebte Auswahl für Familien, die Lernmomente in den Alltag einbauen möchten, ohne dass Spielspaß zu kurz kommt.",
    "affiliateUrl": "https://www.amazon.de/dp/B0DY85DBNV?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/010-vtech-baby-musik-player-karaoke-mit-mikrofon-fur-kinder-2-5.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Lernspielzeug",
    "safetyNote": "Achte immer auf die Altersangabe des Herstellers und nutze elektronische Lernspiele altersgerecht.",
    "asin": "B0DY85DBNV",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-011",
    "title": "LEGO 10696 Classic Mittelgroße Bausteine-Box, Bausteine mit Aufbewahrungsbox für Kinder, Geschenk für Jungen und Mädchen ab 4 Jahren",
    "slug": "011-lego-10696-classic-mittelgrosse-bausteine-box-bausteine-mit-aufbewahrungsbox-fur",
    "category": "Konstruktionsspielzeug / Bausteine",
    "shortDescription": "LEGO 10696 Classic Mittelgroße Bausteine-Box, Bausteine mit Aufbewahrungsbox für Kinder, Geschenk für Jungen und Mädchen ab 4 Jahren ist eine passende Spielzeugidee aus dem Bereich Konstruktionsspielzeug / Bausteine. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "affiliateUrl": "https://www.amazon.de/dp/B00NVDP3ZU?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/011-lego-10696-classic-mittelgrosse-bausteine-box-bausteine-mit-aufbewahrungsbox-fur.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Konstruktionsspielzeug / Bausteine",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.",
    "asin": "B00NVDP3ZU",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-012",
    "title": "LEGO Classic Große Bausteine-Box, Konstruktionsspielzeug für Mädchen und Jungen mit Aufbewahrungsbox, enthält Bunte Steine, Reifen, Türen, etc. in 33 Farben, Geschenk für Kinder ab 4 Jahren 10698",
    "slug": "012-lego-classic-grosse-bausteine-box-konstruktionsspielzeug-fur-madchen-und-jungen-",
    "category": "Konstruktionsspielzeug / Bausteine",
    "shortDescription": "LEGO Classic Große Bausteine-Box, Konstruktionsspielzeug für Mädchen und Jungen mit Aufbewahrungsbox, enthält Bunte Steine, Reifen, Türen, etc. in 33 Farben, Geschenk für Kinder ab 4 Jahren 10698 ist eine passende Spielzeugidee aus dem Bereich Konstruktionsspielzeug / Bausteine. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "affiliateUrl": "https://www.amazon.de/dp/B00PY3EYQO?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/012-lego-classic-grosse-bausteine-box-konstruktionsspielzeug-fur-madchen-und-jungen-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Konstruktionsspielzeug / Bausteine",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.",
    "asin": "B00PY3EYQO",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-013",
    "title": "Lego Classic Bausteine Box Mittelgroß + Grüne Platte: Aufbewahrungsboxen & Bauplatte Bundle, Steinebox mit Baseplate für Kinder ab 4 Jahre",
    "slug": "013-lego-classic-bausteine-box-mittelgross-grune-platte-aufbewahrungsboxen-bauplatte",
    "category": "Konstruktionsspielzeug / Bausteine",
    "shortDescription": "Lego Classic Bausteine Box Mittelgroß + Grüne Platte: Aufbewahrungsboxen & Bauplatte Bundle, Steinebox mit Baseplate für Kinder ab 4 Jahre ist eine passende Spielzeugidee aus dem Bereich Konstruktionsspielzeug / Bausteine. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "affiliateUrl": "https://www.amazon.de/dp/B0D5BX1RGR?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/013-lego-classic-bausteine-box-mittelgross-grune-platte-aufbewahrungsboxen-bauplatte.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Konstruktionsspielzeug / Bausteine",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.",
    "asin": "B0D5BX1RGR",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-014",
    "title": "LEGO Classic Kreative Fahrzeuge, Bausteine-Set für Bunte Modellautos inkl. LKW, Polizeiauto und Baufahrzeuge, Baubare Spielzeug-Autos für Kinder, Geschenk für Jungs und Mädchen ab 5 Jahren 11036",
    "slug": "014-lego-classic-kreative-fahrzeuge-bausteine-set-fur-bunte-modellautos-inkl-lkw-pol",
    "category": "Konstruktionsspielzeug / Bausteine",
    "shortDescription": "LEGO Classic Kreative Fahrzeuge, Bausteine-Set für Bunte Modellautos inkl. LKW, Polizeiauto und Baufahrzeuge, Baubare Spielzeug-Autos für Kinder, Geschenk für Jungs und Mädchen ab 5 Jahren 11036 ist eine passende Spielzeugidee aus dem Bereich Konstruktionsspielzeug / Bausteine. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "ageHint": "Ab 5 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "affiliateUrl": "https://www.amazon.de/dp/B0CFW22SBY?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/014-lego-classic-kreative-fahrzeuge-bausteine-set-fur-bunte-modellautos-inkl-lkw-pol.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Konstruktionsspielzeug / Bausteine",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.",
    "asin": "B0CFW22SBY",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-015",
    "title": "LEGO Classic Mittelgroße Bausteine-Box, Konstruktionsspielzeug & Classic Grüne Bauplatte, quadratische Grundplatte mit 32x32 Noppen als Basis für Konstruktionen und für weitere Sets 11023",
    "slug": "015-lego-classic-mittelgrosse-bausteine-box-konstruktionsspielzeug-classic-grune-bau",
    "category": "Konstruktionsspielzeug / Bausteine",
    "shortDescription": "LEGO Classic Mittelgroße Bausteine-Box, Konstruktionsspielzeug & Classic Grüne Bauplatte, quadratische Grundplatte mit 32x32 Noppen als Basis für Konstruktionen und für weitere Sets 11023 ist eine passende Spielzeugidee aus dem Bereich Konstruktionsspielzeug / Bausteine. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "affiliateUrl": "https://www.amazon.de/dp/B0BTWWSZC6?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/015-lego-classic-mittelgrosse-bausteine-box-konstruktionsspielzeug-classic-grune-bau.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Konstruktionsspielzeug / Bausteine",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.",
    "asin": "B0BTWWSZC6",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-016",
    "title": "LEGO Classic Bausteine Box + Platten grün, blau und weiß, Starterset für Kinder ab 4 Jahren",
    "slug": "016-lego-classic-bausteine-box-platten-grun-blau-und-weiss-starterset-fur-kinder-ab-",
    "category": "Konstruktionsspielzeug / Bausteine",
    "shortDescription": "LEGO Classic Bausteine Box + Platten grün, blau und weiß, Starterset für Kinder ab 4 Jahren ist eine passende Spielzeugidee aus dem Bereich Konstruktionsspielzeug / Bausteine. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "affiliateUrl": "https://www.amazon.de/dp/B0D5BWF4CY?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/016-lego-classic-bausteine-box-platten-grun-blau-und-weiss-starterset-fur-kinder-ab-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Konstruktionsspielzeug / Bausteine",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.",
    "asin": "B0D5BWF4CY",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-017",
    "title": "LEGO 10713 Classic Bausteine Starterkoffer – Farben Sortieren mit Aufbewahrungsbox, kreatives Geschenk, Kinderspielzeug für Mädchen und Jungen ab 4 Jahren",
    "slug": "017-lego-10713-classic-bausteine-starterkoffer-farben-sortieren-mit-aufbewahrungsbox",
    "category": "Konstruktionsspielzeug / Bausteine",
    "shortDescription": "LEGO 10713 Classic Bausteine Starterkoffer – Farben Sortieren mit Aufbewahrungsbox, kreatives Geschenk, Kinderspielzeug für Mädchen und Jungen ab 4 Jahren ist eine passende Spielzeugidee aus dem Bereich Konstruktionsspielzeug / Bausteine. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "affiliateUrl": "https://www.amazon.de/dp/B075GQ87PV?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/017-lego-10713-classic-bausteine-starterkoffer-farben-sortieren-mit-aufbewahrungsbox.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Konstruktionsspielzeug / Bausteine",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.",
    "asin": "B075GQ87PV",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-018",
    "title": "Lego Classic Bausteine Box Mittelgroß + Blaue Platte: Aufbewahrungsboxen & Platten Bundle, Steinebox Mit Bauplatte für Kinder Ab 4 Jahre - Starterset Kombi",
    "slug": "018-lego-classic-bausteine-box-mittelgross-blaue-platte-aufbewahrungsboxen-platten-b",
    "category": "Konstruktionsspielzeug / Bausteine",
    "shortDescription": "Lego Classic Bausteine Box Mittelgroß + Blaue Platte: Aufbewahrungsboxen & Platten Bundle, Steinebox Mit Bauplatte für Kinder Ab 4 Jahre - Starterset Kombi ist eine passende Spielzeugidee aus dem Bereich Konstruktionsspielzeug / Bausteine. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "affiliateUrl": "https://www.amazon.de/dp/B0D5BXTY61?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/018-lego-classic-bausteine-box-mittelgross-blaue-platte-aufbewahrungsboxen-platten-b.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Konstruktionsspielzeug / Bausteine",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.",
    "asin": "B0D5BXTY61",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-019",
    "title": "LEGO Steine 2x4 Bunt, 100 Stück - Einzelne LEGO Bausteine XXL, Grundbausteine für Legoplatten und Bausteine Classic Box, 8er Legosteine Classic ab 4 Jahre | Basic Bricks (3001)",
    "slug": "019-lego-steine-2x4-bunt-100-stuck-einzelne-lego-bausteine-xxl-grundbausteine-fur-le",
    "category": "Konstruktionsspielzeug / Bausteine",
    "shortDescription": "LEGO Steine 2x4 Bunt, 100 Stück - Einzelne LEGO Bausteine XXL, Grundbausteine für Legoplatten und Bausteine Classic Box, 8er Legosteine Classic ab 4 Jahre | Basic Bricks (3001) ist eine passende Spielzeugidee aus dem Bereich Konstruktionsspielzeug / Bausteine. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "affiliateUrl": "https://www.amazon.de/dp/B0D3F9KSPD?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/019-lego-steine-2x4-bunt-100-stuck-einzelne-lego-bausteine-xxl-grundbausteine-fur-le.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Konstruktionsspielzeug / Bausteine",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.",
    "asin": "B0D3F9KSPD",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-020",
    "title": "Lego® Bausteine Steine bunt gemischt - 200 Stück - Basic Classic Steine - Konstruktionspielzeug, Lernspielzeug zur Entwicklung und zum Lernen für Kinder ab 3 Jahre",
    "slug": "020-lego-bausteine-steine-bunt-gemischt-200-stuck-basic-classic-steine-konstruktions",
    "category": "Konstruktionsspielzeug / Bausteine",
    "shortDescription": "Lego® Bausteine Steine bunt gemischt - 200 Stück - Basic Classic Steine - Konstruktionspielzeug, Lernspielzeug zur Entwicklung und zum Lernen für Kinder ab 3 Jahre ist eine passende Spielzeugidee aus dem Bereich Konstruktionsspielzeug / Bausteine. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne bauen, sortieren, konstruieren und eigene Modelle erfinden.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Bausteine und Konstruktionssets sind für viele Kinder interessant, weil sie freies Spielen und Konzentration verbinden.",
    "affiliateUrl": "https://www.amazon.de/dp/B01EGHKQ4M?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/020-lego-bausteine-steine-bunt-gemischt-200-stuck-basic-classic-steine-konstruktions.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Konstruktionsspielzeug / Bausteine",
    "safetyNote": "Für jüngere Kinder sollten verschluckbare Kleinteile vermieden werden.",
    "asin": "B01EGHKQ4M",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-021",
    "title": "Ravensburger CreArt 27774 - Bunte Einhornwelt - Malen nach Zahlen Einhörner für Kinder ab 5 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen",
    "slug": "021-ravensburger-creart-27774-bunte-einhornwelt-malen-nach-zahlen-einhorner-fur-kind",
    "category": "Kreativ- und Bastelspielzeug",
    "shortDescription": "Ravensburger CreArt 27774 - Bunte Einhornwelt - Malen nach Zahlen Einhörner für Kinder ab 5 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen ist eine passende Spielzeugidee aus dem Bereich Kreativ- und Bastelspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "ageHint": "Ab 5 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "affiliateUrl": "https://www.amazon.de/dp/B077XDK8VK?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/021-ravensburger-creart-27774-bunte-einhornwelt-malen-nach-zahlen-einhorner-fur-kind.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Kreativ- und Bastelspielzeug",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.",
    "asin": "B077XDK8VK",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-022",
    "title": "Ravensburger CreArt 12023125 - Verliebte Otter - Malen nach Zahlen für Kinder ab 7 Jahren, Malset mit Rahmen, Pinsel, Acrylfarben, Geschenk für Mädchen und Jungen",
    "slug": "022-ravensburger-creart-12023125-verliebte-otter-malen-nach-zahlen-fur-kinder-ab-7-j",
    "category": "Kreativ- und Bastelspielzeug",
    "shortDescription": "Ravensburger CreArt 12023125 - Verliebte Otter - Malen nach Zahlen für Kinder ab 7 Jahren, Malset mit Rahmen, Pinsel, Acrylfarben, Geschenk für Mädchen und Jungen ist eine passende Spielzeugidee aus dem Bereich Kreativ- und Bastelspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "ageHint": "Ab 7 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre",
      "9+ Jahre"
    ],
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "affiliateUrl": "https://www.amazon.de/dp/B0FNN6QTNN?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/022-ravensburger-creart-12023125-verliebte-otter-malen-nach-zahlen-fur-kinder-ab-7-j.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Kreativ- und Bastelspielzeug",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.",
    "asin": "B0FNN6QTNN",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-023",
    "title": "Ravensburger CreArt 28467 - Kuschelkatzen - Malen nach Zahlen Katzen für Kinder ab 7 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen",
    "slug": "023-ravensburger-creart-28467-kuschelkatzen-malen-nach-zahlen-katzen-fur-kinder-ab-7",
    "category": "Kreativ- und Bastelspielzeug",
    "shortDescription": "Ravensburger CreArt 28467 - Kuschelkatzen - Malen nach Zahlen Katzen für Kinder ab 7 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen ist eine passende Spielzeugidee aus dem Bereich Kreativ- und Bastelspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "ageHint": "Ab 7 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre",
      "9+ Jahre"
    ],
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "affiliateUrl": "https://www.amazon.de/dp/B07K1YNB1L?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/023-ravensburger-creart-28467-kuschelkatzen-malen-nach-zahlen-katzen-fur-kinder-ab-7.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Kreativ- und Bastelspielzeug",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.",
    "asin": "B07K1YNB1L",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-024",
    "title": "Ravensburger CreArt 28984 - Süße Koalas - Malen nach Zahlen für Kinder ab 9 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen",
    "slug": "024-ravensburger-creart-28984-susse-koalas-malen-nach-zahlen-fur-kinder-ab-9-jahre-m",
    "category": "Kreativ- und Bastelspielzeug",
    "shortDescription": "Ravensburger CreArt 28984 - Süße Koalas - Malen nach Zahlen für Kinder ab 9 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen ist eine passende Spielzeugidee aus dem Bereich Kreativ- und Bastelspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "ageHint": "Ab 9 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "9+ Jahre"
    ],
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "affiliateUrl": "https://www.amazon.de/dp/B08XM4KLXC?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/024-ravensburger-creart-28984-susse-koalas-malen-nach-zahlen-fur-kinder-ab-9-jahre-m.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Kreativ- und Bastelspielzeug",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.",
    "asin": "B08XM4KLXC",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-025",
    "title": "Ravensburger CreArt 28983 - Süßes REH - Malen nach Zahlen für Kinder ab 7 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen, mit Glitzer",
    "slug": "025-ravensburger-creart-28983-susses-reh-malen-nach-zahlen-fur-kinder-ab-7-jahre-mal",
    "category": "Kreativ- und Bastelspielzeug",
    "shortDescription": "Ravensburger CreArt 28983 - Süßes REH - Malen nach Zahlen für Kinder ab 7 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen, mit Glitzer ist eine passende Spielzeugidee aus dem Bereich Kreativ- und Bastelspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "ageHint": "Ab 7 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre",
      "9+ Jahre"
    ],
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "affiliateUrl": "https://www.amazon.de/dp/B08XMCTQ9D?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/025-ravensburger-creart-28983-susses-reh-malen-nach-zahlen-fur-kinder-ab-7-jahre-mal.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Kreativ- und Bastelspielzeug",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.",
    "asin": "B08XMCTQ9D",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-026",
    "title": "Ravensburger CreArt 28566 - Glückliche Pferde - Malen nach Zahlen für Kinder ab 7 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen, mit Stickern",
    "slug": "026-ravensburger-creart-28566-gluckliche-pferde-malen-nach-zahlen-fur-kinder-ab-7-ja",
    "category": "Kreativ- und Bastelspielzeug",
    "shortDescription": "Ravensburger CreArt 28566 - Glückliche Pferde - Malen nach Zahlen für Kinder ab 7 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen, mit Stickern ist eine passende Spielzeugidee aus dem Bereich Kreativ- und Bastelspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "ageHint": "Ab 7 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre",
      "9+ Jahre"
    ],
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "affiliateUrl": "https://www.amazon.de/dp/B000NJLTUS?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/026-ravensburger-creart-28566-gluckliche-pferde-malen-nach-zahlen-fur-kinder-ab-7-ja.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Kreativ- und Bastelspielzeug",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.",
    "asin": "B000NJLTUS",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-027",
    "title": "Ravensburger 286515 Malen nach Zahlen Katze",
    "slug": "027-ravensburger-286515-malen-nach-zahlen-katze",
    "category": "Kreativ- und Bastelspielzeug",
    "shortDescription": "Ravensburger 286515 Malen nach Zahlen Katze ist eine passende Spielzeugidee aus dem Bereich Kreativ- und Bastelspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "affiliateUrl": "https://www.amazon.de/dp/B000EB55XW?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/027-ravensburger-286515-malen-nach-zahlen-katze.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Kreativ- und Bastelspielzeug",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.",
    "asin": "B000EB55XW",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-028",
    "title": "Ravensburger CreArt 28556 - Fohlen mit Kätzchen - Malen nach Zahlen für Kinder ab 7 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen, mit Glitzer",
    "slug": "028-ravensburger-creart-28556-fohlen-mit-katzchen-malen-nach-zahlen-fur-kinder-ab-7-",
    "category": "Kreativ- und Bastelspielzeug",
    "shortDescription": "Ravensburger CreArt 28556 - Fohlen mit Kätzchen - Malen nach Zahlen für Kinder ab 7 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen, mit Glitzer ist eine passende Spielzeugidee aus dem Bereich Kreativ- und Bastelspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "ageHint": "Ab 7 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre",
      "9+ Jahre"
    ],
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "affiliateUrl": "https://www.amazon.de/dp/B0002HY836?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/028-ravensburger-creart-28556-fohlen-mit-katzchen-malen-nach-zahlen-fur-kinder-ab-7-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Kreativ- und Bastelspielzeug",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.",
    "asin": "B0002HY836",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-029",
    "title": "Ravensburger CreArt 28517 - Putzige Häschen - Malen nach Zahlen Kaninchen für Kinder ab 9 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen",
    "slug": "029-ravensburger-creart-28517-putzige-haschen-malen-nach-zahlen-kaninchen-fur-kinder",
    "category": "Kreativ- und Bastelspielzeug",
    "shortDescription": "Ravensburger CreArt 28517 - Putzige Häschen - Malen nach Zahlen Kaninchen für Kinder ab 9 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen ist eine passende Spielzeugidee aus dem Bereich Kreativ- und Bastelspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "ageHint": "Ab 9 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "9+ Jahre"
    ],
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "affiliateUrl": "https://www.amazon.de/dp/B0839H7XFX?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/029-ravensburger-creart-28517-putzige-haschen-malen-nach-zahlen-kaninchen-fur-kinder.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Kreativ- und Bastelspielzeug",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.",
    "asin": "B0839H7XFX",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-030",
    "title": "Ravensburger CreArt 20161 - Süßer Pandabär - Malen nach Zahlen für Kinder ab 9 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen",
    "slug": "030-ravensburger-creart-20161-susser-pandabar-malen-nach-zahlen-fur-kinder-ab-9-jahr",
    "category": "Kreativ- und Bastelspielzeug",
    "shortDescription": "Ravensburger CreArt 20161 - Süßer Pandabär - Malen nach Zahlen für Kinder ab 9 Jahre, Malset mit Rahmen, Pinsel und Acrylfarben, Geschenk für Mädchen und Jungen ist eine passende Spielzeugidee aus dem Bereich Kreativ- und Bastelspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne malen, basteln, kneten oder kleine Kreativprojekte abschließen.",
    "ageHint": "Ab 9 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "9+ Jahre"
    ],
    "whyGood": "Eine praktische Geschenkidee für ruhige Nachmittage, Ferienzeiten oder kreative Familienmomente.",
    "affiliateUrl": "https://www.amazon.de/dp/B09SLY3CXN?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/030-ravensburger-creart-20161-susser-pandabar-malen-nach-zahlen-fur-kinder-ab-9-jahr.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Kreativ- und Bastelspielzeug",
    "safetyNote": "Farben, Kleinteile und Bastelmaterialien sollten immer zur Altersangabe und Aufsichtssituation passen.",
    "asin": "B09SLY3CXN",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-031",
    "title": "Ravensburger Kinderspiel 23494 - Wer War's? Gesellschafts- und Familienspiel, für Kinder und Erwachsene, Kinderspiel des Jahres, ab 6 Jahren, für 2-4 Spieler",
    "slug": "031-ravensburger-kinderspiel-23494-wer-war-s-gesellschafts-und-familienspiel-fur-kin",
    "category": "Brettspiele und Familienspiele",
    "shortDescription": "Ravensburger Kinderspiel 23494 - Wer War's? Gesellschafts- und Familienspiel, für Kinder und Erwachsene, Kinderspiel des Jahres, ab 6 Jahren, für 2-4 Spieler ist eine passende Spielzeugidee aus dem Bereich Brettspiele und Familienspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "ageHint": "Ab 6 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre"
    ],
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "affiliateUrl": "https://www.amazon.de/dp/B0DTHRCS5M?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/031-ravensburger-kinderspiel-23494-wer-war-s-gesellschafts-und-familienspiel-fur-kin.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Brettspiele und Familienspiele",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.",
    "asin": "B0DTHRCS5M",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-032",
    "title": "Ravensburger 26424 Sagaland - Gesellschaftsspiel für Kinder und Erwachsene, 2-6 Spieler, ab 6 Jahren, Spiel des Jahres, die besten Familienspiele",
    "slug": "032-ravensburger-26424-sagaland-gesellschaftsspiel-fur-kinder-und-erwachsene-2-6-spi",
    "category": "Brettspiele und Familienspiele",
    "shortDescription": "Ravensburger 26424 Sagaland - Gesellschaftsspiel für Kinder und Erwachsene, 2-6 Spieler, ab 6 Jahren, Spiel des Jahres, die besten Familienspiele ist eine passende Spielzeugidee aus dem Bereich Brettspiele und Familienspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "ageHint": "Ab 6 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre"
    ],
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "affiliateUrl": "https://www.amazon.de/dp/3473670820?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/032-ravensburger-26424-sagaland-gesellschaftsspiel-fur-kinder-und-erwachsene-2-6-spi.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Brettspiele und Familienspiele",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.",
    "asin": "3473670820",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-033",
    "title": "Ravensburger Spielesammlung 27293 Familienspiele 2022 D - Spielesammlung für die ganze Familie, Spiel für Kinder und Erwachsene ab 4 Jahren, für 2-10 Spieler",
    "slug": "033-ravensburger-spielesammlung-27293-familienspiele-2022-d-spielesammlung-fur-die-g",
    "category": "Brettspiele und Familienspiele",
    "shortDescription": "Ravensburger Spielesammlung 27293 Familienspiele 2022 D - Spielesammlung für die ganze Familie, Spiel für Kinder und Erwachsene ab 4 Jahren, für 2-10 Spieler ist eine passende Spielzeugidee aus dem Bereich Brettspiele und Familienspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "affiliateUrl": "https://www.amazon.de/dp/B09DD927DQ?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/033-ravensburger-spielesammlung-27293-familienspiele-2022-d-spielesammlung-fur-die-g.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Brettspiele und Familienspiele",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.",
    "asin": "B09DD927DQ",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-034",
    "title": "Ravensburger Schnappt Hubi, Gesellschafts- und Familienspiel, für Kinder und Erwachsene, Spiel des Jahres für 2-4 Spieler, ab 5 Jahren",
    "slug": "034-ravensburger-schnappt-hubi-gesellschafts-und-familienspiel-fur-kinder-und-erwach",
    "category": "Brettspiele und Familienspiele",
    "shortDescription": "Ravensburger Schnappt Hubi, Gesellschafts- und Familienspiel, für Kinder und Erwachsene, Spiel des Jahres für 2-4 Spieler, ab 5 Jahren ist eine passende Spielzeugidee aus dem Bereich Brettspiele und Familienspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "ageHint": "Ab 5 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "affiliateUrl": "https://www.amazon.de/dp/B004O0TOU4?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/034-ravensburger-schnappt-hubi-gesellschafts-und-familienspiel-fur-kinder-und-erwach.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Brettspiele und Familienspiele",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.",
    "asin": "B004O0TOU4",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-035",
    "title": "Ravensburger 20897 - Coco Crazy, Brettspiel für Kinder ab 5 Jahren, Familienspiel für Kinder und Erwachsene, Merkspiel für 2-8 Spieler",
    "slug": "035-ravensburger-20897-coco-crazy-brettspiel-fur-kinder-ab-5-jahren-familienspiel-fu",
    "category": "Brettspiele und Familienspiele",
    "shortDescription": "Ravensburger 20897 - Coco Crazy, Brettspiel für Kinder ab 5 Jahren, Familienspiel für Kinder und Erwachsene, Merkspiel für 2-8 Spieler ist eine passende Spielzeugidee aus dem Bereich Brettspiele und Familienspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "ageHint": "Ab 5 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "affiliateUrl": "https://www.amazon.de/dp/B09T6WWJN8?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/035-ravensburger-20897-coco-crazy-brettspiel-fur-kinder-ab-5-jahren-familienspiel-fu.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Brettspiele und Familienspiele",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.",
    "asin": "B09T6WWJN8",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-036",
    "title": "Ravensburger Familienspiel 26132 - Minecraft Builders & Biomes - Gesellschaftsspiel für Kinder und Erwachsene, für 2-4 Spieler, Brettspiel ab 10 Jahren",
    "slug": "036-ravensburger-familienspiel-26132-minecraft-builders-biomes-gesellschaftsspiel-fu",
    "category": "Brettspiele und Familienspiele",
    "shortDescription": "Ravensburger Familienspiel 26132 - Minecraft Builders & Biomes - Gesellschaftsspiel für Kinder und Erwachsene, für 2-4 Spieler, Brettspiel ab 10 Jahren ist eine passende Spielzeugidee aus dem Bereich Brettspiele und Familienspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "ageHint": "Ab 10 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "9+ Jahre"
    ],
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "affiliateUrl": "https://www.amazon.de/dp/B07PXSJMHF?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/036-ravensburger-familienspiel-26132-minecraft-builders-biomes-gesellschaftsspiel-fu.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Brettspiele und Familienspiele",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.",
    "asin": "B07PXSJMHF",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-037",
    "title": "Ravensburger Gesellschaftsspiel 27515 - Scotland Yard - Familienspiel, Brettspiel für Kinder und Erwachsene, Spiel des Jahres, für 2-6 Spieler, ab 8 Jahre",
    "slug": "037-ravensburger-gesellschaftsspiel-27515-scotland-yard-familienspiel-brettspiel-fur",
    "category": "Brettspiele und Familienspiele",
    "shortDescription": "Ravensburger Gesellschaftsspiel 27515 - Scotland Yard - Familienspiel, Brettspiel für Kinder und Erwachsene, Spiel des Jahres, für 2-6 Spieler, ab 8 Jahre ist eine passende Spielzeugidee aus dem Bereich Brettspiele und Familienspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "ageHint": "Ab 8 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre",
      "9+ Jahre"
    ],
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "affiliateUrl": "https://www.amazon.de/dp/B0CSZ3HTB7?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/037-ravensburger-gesellschaftsspiel-27515-scotland-yard-familienspiel-brettspiel-fur.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Brettspiele und Familienspiele",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.",
    "asin": "B0CSZ3HTB7",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-038",
    "title": "Ravensburger Kinderspiel 20847 - Junior Labyrinth - Familienklassiker für die Kleinen, Spiel für Kinder ab 4 Jahren - Gesellschaftspiel geeignet für 2-4 Spieler, Junior-Ausgabe",
    "slug": "038-ravensburger-kinderspiel-20847-junior-labyrinth-familienklassiker-fur-die-kleine",
    "category": "Brettspiele und Familienspiele",
    "shortDescription": "Ravensburger Kinderspiel 20847 - Junior Labyrinth - Familienklassiker für die Kleinen, Spiel für Kinder ab 4 Jahren - Gesellschaftspiel geeignet für 2-4 Spieler, Junior-Ausgabe ist eine passende Spielzeugidee aus dem Bereich Brettspiele und Familienspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "affiliateUrl": "https://www.amazon.de/dp/B09DDF7FSM?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/038-ravensburger-kinderspiel-20847-junior-labyrinth-familienklassiker-fur-die-kleine.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Brettspiele und Familienspiele",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.",
    "asin": "B09DDF7FSM",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-039",
    "title": "Ravensburger Familienspiel 26955 - Das verrückte Labyrinth - Gesellschaftsspiel - Spieleklassiker für 2-4 Personen, Brettspiel ab 7 Jahren",
    "slug": "039-ravensburger-familienspiel-26955-das-verruckte-labyrinth-gesellschaftsspiel-spie",
    "category": "Brettspiele und Familienspiele",
    "shortDescription": "Ravensburger Familienspiel 26955 - Das verrückte Labyrinth - Gesellschaftsspiel - Spieleklassiker für 2-4 Personen, Brettspiel ab 7 Jahren ist eine passende Spielzeugidee aus dem Bereich Brettspiele und Familienspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "ageHint": "Ab 7 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre",
      "9+ Jahre"
    ],
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "affiliateUrl": "https://www.amazon.de/dp/B08XM8ST35?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/039-ravensburger-familienspiel-26955-das-verruckte-labyrinth-gesellschaftsspiel-spie.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Brettspiele und Familienspiele",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.",
    "asin": "B08XM8ST35",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-040",
    "title": "Ravensburger 26423 - Die Maulwurf Company - Familienspiel für Erwachsene und Kinder ab 8 Jahren, Ideal für Spieleabende mit Freunden oder der Familie für 1-4 Spieler",
    "slug": "040-ravensburger-26423-die-maulwurf-company-familienspiel-fur-erwachsene-und-kinder-",
    "category": "Brettspiele und Familienspiele",
    "shortDescription": "Ravensburger 26423 - Die Maulwurf Company - Familienspiel für Erwachsene und Kinder ab 8 Jahren, Ideal für Spieleabende mit Freunden oder der Familie für 1-4 Spieler ist eine passende Spielzeugidee aus dem Bereich Brettspiele und Familienspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Familien, Geschwister und Kinder, die gerne gemeinsam am Tisch spielen.",
    "ageHint": "Ab 8 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre",
      "9+ Jahre"
    ],
    "whyGood": "Familienspiele helfen, schneller passende Spielideen für Regentage, Besuch oder gemeinsame Abende zu finden.",
    "affiliateUrl": "https://www.amazon.de/dp/B000MVZXFO?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/040-ravensburger-26423-die-maulwurf-company-familienspiel-fur-erwachsene-und-kinder-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Brettspiele und Familienspiele",
    "safetyNote": "Prüfe vor dem Kauf Spieleranzahl, Dauer und Altersempfehlung des Herstellers.",
    "asin": "B000MVZXFO",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-041",
    "title": "Ravensburger Kinderpuzzle 12004308 - Neue Abenteuer von Super Mario - 300 XXL Teile Puzzle für Kinder",
    "slug": "041-ravensburger-kinderpuzzle-12004308-neue-abenteuer-von-super-mario-300-xxl-teile-",
    "category": "Puzzle und Denkspiele",
    "shortDescription": "Ravensburger Kinderpuzzle 12004308 - Neue Abenteuer von Super Mario - 300 XXL Teile Puzzle für Kinder ist eine passende Spielzeugidee aus dem Bereich Puzzle und Denkspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "affiliateUrl": "https://www.amazon.de/dp/B0FNN53G85?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/041-ravensburger-kinderpuzzle-12004308-neue-abenteuer-von-super-mario-300-xxl-teile-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Puzzle und Denkspiele",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.",
    "asin": "B0FNN53G85",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-042",
    "title": "Ravensburger Puzzle Puzzle für kleine Entdecker: Paw Patrol 24 Teile",
    "slug": "042-ravensburger-puzzle-puzzle-fur-kleine-entdecker-paw-patrol-24-teile",
    "category": "Puzzle und Denkspiele",
    "shortDescription": "Ravensburger Puzzle Puzzle für kleine Entdecker: Paw Patrol 24 Teile ist eine passende Spielzeugidee aus dem Bereich Puzzle und Denkspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "affiliateUrl": "https://www.amazon.de/dp/B09T6G3J7N?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/042-ravensburger-puzzle-puzzle-fur-kleine-entdecker-paw-patrol-24-teile.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Puzzle und Denkspiele",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.",
    "asin": "B09T6G3J7N",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-043",
    "title": "Ravensburger Kinderpuzzle 13333 - Monster Minecraft - 100 Teile XXL Minecraft Puzzle für Kinder ab 6 Jahren",
    "slug": "043-ravensburger-kinderpuzzle-13333-monster-minecraft-100-teile-xxl-minecraft-puzzle",
    "category": "Puzzle und Denkspiele",
    "shortDescription": "Ravensburger Kinderpuzzle 13333 - Monster Minecraft - 100 Teile XXL Minecraft Puzzle für Kinder ab 6 Jahren ist eine passende Spielzeugidee aus dem Bereich Puzzle und Denkspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "ageHint": "Ab 6 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre"
    ],
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "affiliateUrl": "https://www.amazon.de/dp/B09QSMQBZK?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/043-ravensburger-kinderpuzzle-13333-monster-minecraft-100-teile-xxl-minecraft-puzzle.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Puzzle und Denkspiele",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.",
    "asin": "B09QSMQBZK",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-044",
    "title": "Ravensburger Puzzle 12000338 - Zoe Sadler: Magische Regale - 2X 1000 Teile Puzzle für Erwachsene und Kinder ab 14 Jahren",
    "slug": "044-ravensburger-puzzle-12000338-zoe-sadler-magische-regale-2x-1000-teile-puzzle-fur",
    "category": "Puzzle und Denkspiele",
    "shortDescription": "Ravensburger Puzzle 12000338 - Zoe Sadler: Magische Regale - 2X 1000 Teile Puzzle für Erwachsene und Kinder ab 14 Jahren ist eine passende Spielzeugidee aus dem Bereich Puzzle und Denkspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "ageHint": "Ab 14 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "9+ Jahre"
    ],
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "affiliateUrl": "https://www.amazon.de/dp/B0CW1QWMX8?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/044-ravensburger-puzzle-12000338-zoe-sadler-magische-regale-2x-1000-teile-puzzle-fur.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Puzzle und Denkspiele",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.",
    "asin": "B0CW1QWMX8",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-045",
    "title": "Ravensburger — 3 Jahre altes 4-Puzzle in Einer Box, Der König der Löwen — 3-Jahres-Puzzle, Disney-Kollektion, beinhaltet 4 Puzzles 12-16-20-24 Progressive Teile, Lernspiele, Geschenkideen",
    "slug": "045-ravensburger-3-jahre-altes-4-puzzle-in-einer-box-der-konig-der-lowen-3-jahres-pu",
    "category": "Puzzle und Denkspiele",
    "shortDescription": "Ravensburger — 3 Jahre altes 4-Puzzle in Einer Box, Der König der Löwen — 3-Jahres-Puzzle, Disney-Kollektion, beinhaltet 4 Puzzles 12-16-20-24 Progressive Teile, Lernspiele, Geschenkideen ist eine passende Spielzeugidee aus dem Bereich Puzzle und Denkspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "affiliateUrl": "https://www.amazon.de/dp/B0D35T9R12?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/045-ravensburger-3-jahre-altes-4-puzzle-in-einer-box-der-konig-der-lowen-3-jahres-pu.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Puzzle und Denkspiele",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.",
    "asin": "B0D35T9R12",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-046",
    "title": "Ravensburger Kinderpuzzle - Unten im Meer - 30-48 Teile Rahmenpuzzle für Kinder ab 4 Jahren",
    "slug": "046-ravensburger-kinderpuzzle-unten-im-meer-30-48-teile-rahmenpuzzle-fur-kinder-ab-4",
    "category": "Puzzle und Denkspiele",
    "shortDescription": "Ravensburger Kinderpuzzle - Unten im Meer - 30-48 Teile Rahmenpuzzle für Kinder ab 4 Jahren ist eine passende Spielzeugidee aus dem Bereich Puzzle und Denkspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "affiliateUrl": "https://www.amazon.de/dp/B09DD8R6LV?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/046-ravensburger-kinderpuzzle-unten-im-meer-30-48-teile-rahmenpuzzle-fur-kinder-ab-4.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Puzzle und Denkspiele",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.",
    "asin": "B09DD8R6LV",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-047",
    "title": "Ravensburger Kinderpuzzle - 06144 Spannende Berufe - Rahmenpuzzle für Kinder ab 4 Jahren, mit 30 Teilen",
    "slug": "047-ravensburger-kinderpuzzle-06144-spannende-berufe-rahmenpuzzle-fur-kinder-ab-4-ja",
    "category": "Puzzle und Denkspiele",
    "shortDescription": "Ravensburger Kinderpuzzle - 06144 Spannende Berufe - Rahmenpuzzle für Kinder ab 4 Jahren, mit 30 Teilen ist eine passende Spielzeugidee aus dem Bereich Puzzle und Denkspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "affiliateUrl": "https://www.amazon.de/dp/B0751DYGZ3?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/047-ravensburger-kinderpuzzle-06144-spannende-berufe-rahmenpuzzle-fur-kinder-ab-4-ja.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Puzzle und Denkspiele",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.",
    "asin": "B0751DYGZ3",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-048",
    "title": "Ravensburger Kinderpuzzle - 05093 Feuerwehreinsatz an den Bahngleisen - Rahmenpuzzle für Kinder ab 4 Jahren, mit 48 Teilen",
    "slug": "048-ravensburger-kinderpuzzle-05093-feuerwehreinsatz-an-den-bahngleisen-rahmenpuzzle",
    "category": "Puzzle und Denkspiele",
    "shortDescription": "Ravensburger Kinderpuzzle - 05093 Feuerwehreinsatz an den Bahngleisen - Rahmenpuzzle für Kinder ab 4 Jahren, mit 48 Teilen ist eine passende Spielzeugidee aus dem Bereich Puzzle und Denkspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "affiliateUrl": "https://www.amazon.de/dp/B087SLHBR1?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/048-ravensburger-kinderpuzzle-05093-feuerwehreinsatz-an-den-bahngleisen-rahmenpuzzle.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Puzzle und Denkspiele",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.",
    "asin": "B087SLHBR1",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-049",
    "title": "Ravensburger Kinderpuzzle - 06046 Bauernhoftiere auf der Wiese - Rahmenpuzzle für Kinder ab 3 Jahren, mit 15 Teilen",
    "slug": "049-ravensburger-kinderpuzzle-06046-bauernhoftiere-auf-der-wiese-rahmenpuzzle-fur-ki",
    "category": "Puzzle und Denkspiele",
    "shortDescription": "Ravensburger Kinderpuzzle - 06046 Bauernhoftiere auf der Wiese - Rahmenpuzzle für Kinder ab 3 Jahren, mit 15 Teilen ist eine passende Spielzeugidee aus dem Bereich Puzzle und Denkspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "affiliateUrl": "https://www.amazon.de/dp/B00235MD5U?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/049-ravensburger-kinderpuzzle-06046-bauernhoftiere-auf-der-wiese-rahmenpuzzle-fur-ki.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Puzzle und Denkspiele",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.",
    "asin": "B00235MD5U",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-050",
    "title": "Ravensburger Kinderpuzzle - 06120 Große Baustellenfahrzeuge - Rahmenpuzzle für Kinder ab 4 Jahren, mit 40 Teilen",
    "slug": "050-ravensburger-kinderpuzzle-06120-grosse-baustellenfahrzeuge-rahmenpuzzle-fur-kind",
    "category": "Puzzle und Denkspiele",
    "shortDescription": "Ravensburger Kinderpuzzle - 06120 Große Baustellenfahrzeuge - Rahmenpuzzle für Kinder ab 4 Jahren, mit 40 Teilen ist eine passende Spielzeugidee aus dem Bereich Puzzle und Denkspiele. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die gerne knobeln, sortieren, suchen und Schritt für Schritt Lösungen finden.",
    "ageHint": "Ab 4 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Puzzles und Denkspiele sind häufig gekaufte Spielzeugideen, weil sie ohne viel Vorbereitung genutzt werden können.",
    "affiliateUrl": "https://www.amazon.de/dp/B019YGQUQS?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/050-ravensburger-kinderpuzzle-06120-grosse-baustellenfahrzeuge-rahmenpuzzle-fur-kind.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Puzzle und Denkspiele",
    "safetyNote": "Die Teilegröße sollte zum Alter passen, besonders bei Kleinkindern.",
    "asin": "B019YGQUQS",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-051",
    "title": "HUDORA Turnreck Fabian Standard/Pro - einfache/doppelte Turnstange für Kinder & Erwachsene - 4-fach höhenverstellbare Gymnastikstange - belastbare Outdoor-Fitnessstange für bis zu 100kg",
    "slug": "051-hudora-turnreck-fabian-standard-pro-einfache-doppelte-turnstange-fur-kinder-erwa",
    "category": "Outdoor-Spielzeug",
    "shortDescription": "HUDORA Turnreck Fabian Standard/Pro - einfache/doppelte Turnstange für Kinder & Erwachsene - 4-fach höhenverstellbare Gymnastikstange - belastbare Outdoor-Fitnessstange für bis zu 100kg ist eine passende Spielzeugidee aus dem Bereich Outdoor-Spielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "affiliateUrl": "https://www.amazon.de/dp/B00CL7SL7Y?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/051-hudora-turnreck-fabian-standard-pro-einfache-doppelte-turnstange-fur-kinder-erwa.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Outdoor-Spielzeug",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.",
    "asin": "B00CL7SL7Y",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-052",
    "title": "HUDORA Basketballkorb Set - Indoor & Outdoor Basketballkorb mit Brett - Basketball Korb inkl. Befestigungsmaterial zur Wandmontage - Basketballbrett & Korb für Erwachsene/Jugendliche & Kinder",
    "slug": "052-hudora-basketballkorb-set-indoor-outdoor-basketballkorb-mit-brett-basketball-kor",
    "category": "Outdoor-Spielzeug",
    "shortDescription": "HUDORA Basketballkorb Set - Indoor & Outdoor Basketballkorb mit Brett - Basketball Korb inkl. Befestigungsmaterial zur Wandmontage - Basketballbrett & Korb für Erwachsene/Jugendliche & Kinder ist eine passende Spielzeugidee aus dem Bereich Outdoor-Spielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "affiliateUrl": "https://www.amazon.de/dp/B000KSN9LE?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/052-hudora-basketballkorb-set-indoor-outdoor-basketballkorb-mit-brett-basketball-kor.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Outdoor-Spielzeug",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.",
    "asin": "B000KSN9LE",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-053",
    "title": "HUDORA Kunststoffbrettschaukel, blau",
    "slug": "053-hudora-kunststoffbrettschaukel-blau",
    "category": "Outdoor-Spielzeug",
    "shortDescription": "HUDORA Kunststoffbrettschaukel, blau ist eine passende Spielzeugidee aus dem Bereich Outdoor-Spielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "affiliateUrl": "https://www.amazon.de/dp/B08FSXXPNZ?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/053-hudora-kunststoffbrettschaukel-blau.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Outdoor-Spielzeug",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.",
    "asin": "B08FSXXPNZ",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-054",
    "title": "HUDORA Brettschaukel in Schwarz - Outdoor Kinder-Schaukelsitz aus Gummi - TÜV Rheinland/GS geprüfte Kinderschaukel mit höhenverstellbaren Seilen - Schaukelbrett für Kinder & Erwachsene bis 100 kg",
    "slug": "054-hudora-brettschaukel-in-schwarz-outdoor-kinder-schaukelsitz-aus-gummi-tuv-rheinl",
    "category": "Outdoor-Spielzeug",
    "shortDescription": "HUDORA Brettschaukel in Schwarz - Outdoor Kinder-Schaukelsitz aus Gummi - TÜV Rheinland/GS geprüfte Kinderschaukel mit höhenverstellbaren Seilen - Schaukelbrett für Kinder & Erwachsene bis 100 kg ist eine passende Spielzeugidee aus dem Bereich Outdoor-Spielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "affiliateUrl": "https://www.amazon.de/dp/B086ZFLFNX?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/054-hudora-brettschaukel-in-schwarz-outdoor-kinder-schaukelsitz-aus-gummi-tuv-rheinl.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Outdoor-Spielzeug",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.",
    "asin": "B086ZFLFNX",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-055",
    "title": "HUDORA Vario Turnreck - 7-fach höhenverstellbare Turnstange für Kinder & Erwachsene - erweiterbares Turnreck mit Reckstange aus Edelstahl - belastbare Outdoor Fitnessstange für bis zu 120kg",
    "slug": "055-hudora-vario-turnreck-7-fach-hohenverstellbare-turnstange-fur-kinder-erwachsene-",
    "category": "Outdoor-Spielzeug",
    "shortDescription": "HUDORA Vario Turnreck - 7-fach höhenverstellbare Turnstange für Kinder & Erwachsene - erweiterbares Turnreck mit Reckstange aus Edelstahl - belastbare Outdoor Fitnessstange für bis zu 120kg ist eine passende Spielzeugidee aus dem Bereich Outdoor-Spielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "affiliateUrl": "https://www.amazon.de/dp/B09XQX5GT5?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/055-hudora-vario-turnreck-7-fach-hohenverstellbare-turnstange-fur-kinder-erwachsene-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Outdoor-Spielzeug",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.",
    "asin": "B09XQX5GT5",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-056",
    "title": "HUDORA Pylonen - 4 Stück - Stapelbare Verkehrskegel in Orange/Weiß - Hochwertige Verkehrshütchen - 23 cm hoch & 14 cm breit - Markierungskegel für Slalom, Radfahren, Dribbeln",
    "slug": "056-hudora-pylonen-4-stuck-stapelbare-verkehrskegel-in-orange-weiss-hochwertige-verk",
    "category": "Outdoor-Spielzeug",
    "shortDescription": "HUDORA Pylonen - 4 Stück - Stapelbare Verkehrskegel in Orange/Weiß - Hochwertige Verkehrshütchen - 23 cm hoch & 14 cm breit - Markierungskegel für Slalom, Radfahren, Dribbeln ist eine passende Spielzeugidee aus dem Bereich Outdoor-Spielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "affiliateUrl": "https://www.amazon.de/dp/B0002VLDE4?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/056-hudora-pylonen-4-stuck-stapelbare-verkehrskegel-in-orange-weiss-hochwertige-verk.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Outdoor-Spielzeug",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.",
    "asin": "B0002VLDE4",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-057",
    "title": "HUDORA Fußballtor Pro Tect - großes Fußballtor für Kinder und Erwachsene - Schaumstoff ummanteltes Fußballtor mit Netz - Hochwertiges Outdoor Tor mit Aufprallschutz",
    "slug": "057-hudora-fussballtor-pro-tect-grosses-fussballtor-fur-kinder-und-erwachsene-schaum",
    "category": "Outdoor-Spielzeug",
    "shortDescription": "HUDORA Fußballtor Pro Tect - großes Fußballtor für Kinder und Erwachsene - Schaumstoff ummanteltes Fußballtor mit Netz - Hochwertiges Outdoor Tor mit Aufprallschutz ist eine passende Spielzeugidee aus dem Bereich Outdoor-Spielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "affiliateUrl": "https://www.amazon.de/dp/B01N7AGXEG?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/057-hudora-fussballtor-pro-tect-grosses-fussballtor-fur-kinder-und-erwachsene-schaum.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Outdoor-Spielzeug",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.",
    "asin": "B01N7AGXEG",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-058",
    "title": "HUDORA Babyschaukel höhenverstellbar 120-180 cm in blau/grau für den Garten I Baby Swing Outdoor I Kinderschaukel mit Sicherheitsbügel und Anschnallgurt I Max. Benutzergewicht 25 kg",
    "slug": "058-hudora-babyschaukel-hohenverstellbar-120-180-cm-in-blau-grau-fur-den-garten-i-ba",
    "category": "Outdoor-Spielzeug",
    "shortDescription": "HUDORA Babyschaukel höhenverstellbar 120-180 cm in blau/grau für den Garten I Baby Swing Outdoor I Kinderschaukel mit Sicherheitsbügel und Anschnallgurt I Max. Benutzergewicht 25 kg ist eine passende Spielzeugidee aus dem Bereich Outdoor-Spielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "affiliateUrl": "https://www.amazon.de/dp/B08BV1RJVM?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/058-hudora-babyschaukel-hohenverstellbar-120-180-cm-in-blau-grau-fur-den-garten-i-ba.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Outdoor-Spielzeug",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.",
    "asin": "B08BV1RJVM",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-059",
    "title": "HUDORA Softball Fußball, Gr. 4 - 71693",
    "slug": "059-hudora-softball-fussball-gr-4-71693",
    "category": "Outdoor-Spielzeug",
    "shortDescription": "HUDORA Softball Fußball, Gr. 4 - 71693 ist eine passende Spielzeugidee aus dem Bereich Outdoor-Spielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "affiliateUrl": "https://www.amazon.de/dp/B076JF9YGW?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/059-hudora-softball-fussball-gr-4-71693.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Outdoor-Spielzeug",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.",
    "asin": "B076JF9YGW",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-060",
    "title": "HUDORA BigWheel 205 Scooter - Stabiler Aluminium-Roller - Höhenjustierbarer & zusammenklappbarer Cityroller mit Ständer - Sportlicher Kinder- & Erwachsenenroller für bis zu 100kg",
    "slug": "060-hudora-bigwheel-205-scooter-stabiler-aluminium-roller-hohenjustierbarer-zusammen",
    "category": "Outdoor-Spielzeug",
    "shortDescription": "HUDORA BigWheel 205 Scooter - Stabiler Aluminium-Roller - Höhenjustierbarer & zusammenklappbarer Cityroller mit Ständer - Sportlicher Kinder- & Erwachsenenroller für bis zu 100kg ist eine passende Spielzeugidee aus dem Bereich Outdoor-Spielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die draußen klettern, rollen, werfen, schaukeln oder mit Wasser und Sand spielen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Outdoor-Spielzeug bringt Bewegung in den Alltag und eignet sich gut für Garten, Hof, Park oder Urlaub.",
    "affiliateUrl": "https://www.amazon.de/dp/B000YD02MO?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/060-hudora-bigwheel-205-scooter-stabiler-aluminium-roller-hohenjustierbarer-zusammen.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Outdoor-Spielzeug",
    "safetyNote": "Outdoor-Spielzeug sollte nur auf geeigneten Flächen und nach Herstellerangabe genutzt werden.",
    "asin": "B000YD02MO",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-061",
    "title": "Carrera First PAW Patrol, On the Track – Spielbahn mit Chase & Marshall, kindgerechte Handregler, 2,4 Meter Strecke & interaktive Elemente – Für kleinen Rennspaß und Abenteuer",
    "slug": "061-carrera-first-paw-patrol-on-the-track-spielbahn-mit-chase-marshall-kindgerechte-",
    "category": "Fahrzeuge / RC / Spielzeugautos",
    "shortDescription": "Carrera First PAW Patrol, On the Track – Spielbahn mit Chase & Marshall, kindgerechte Handregler, 2,4 Meter Strecke & interaktive Elemente – Für kleinen Rennspaß und Abenteuer ist eine passende Spielzeugidee aus dem Bereich Fahrzeuge / RC / Spielzeugautos. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "affiliateUrl": "https://www.amazon.de/dp/B0DWSXBP16?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/061-carrera-first-paw-patrol-on-the-track-spielbahn-mit-chase-marshall-kindgerechte-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Fahrzeuge / RC / Spielzeugautos",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.",
    "asin": "B0DWSXBP16",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-062",
    "title": "Carrera 20063028 FIRST Nintendo Mario Kart Rennstrecken-Set I 2,9m elektrische Rennbahn mit Streckenteilen und Handregler im Maßstab 1:50 I für bis zu 2 Spieler I für Kinder ab 3 Jahren & Erwachsene",
    "slug": "062-carrera-20063028-first-nintendo-mario-kart-rennstrecken-set-i-2-9m-elektrische-r",
    "category": "Fahrzeuge / RC / Spielzeugautos",
    "shortDescription": "Carrera 20063028 FIRST Nintendo Mario Kart Rennstrecken-Set I 2,9m elektrische Rennbahn mit Streckenteilen und Handregler im Maßstab 1:50 I für bis zu 2 Spieler I für Kinder ab 3 Jahren & Erwachsene ist eine passende Spielzeugidee aus dem Bereich Fahrzeuge / RC / Spielzeugautos. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "affiliateUrl": "https://www.amazon.de/dp/B07PRBZ4LK?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/062-carrera-20063028-first-nintendo-mario-kart-rennstrecken-set-i-2-9m-elektrische-r.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Fahrzeuge / RC / Spielzeugautos",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.",
    "asin": "B07PRBZ4LK",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-063",
    "title": "Carrera - 20063037 - Carrera First Disney Pixar Cars – Race of Friends Autorennbahn I 2,4m Rennstrecke I 2 ferngesteuerte Autos mit Lightning McQueen & Cruz Ramirez I Geschenke zu Ostern",
    "slug": "063-carrera-20063037-carrera-first-disney-pixar-cars-race-of-friends-autorennbahn-i-",
    "category": "Fahrzeuge / RC / Spielzeugautos",
    "shortDescription": "Carrera - 20063037 - Carrera First Disney Pixar Cars – Race of Friends Autorennbahn I 2,4m Rennstrecke I 2 ferngesteuerte Autos mit Lightning McQueen & Cruz Ramirez I Geschenke zu Ostern ist eine passende Spielzeugidee aus dem Bereich Fahrzeuge / RC / Spielzeugautos. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "affiliateUrl": "https://www.amazon.de/dp/B08Q3QCKKZ?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/063-carrera-20063037-carrera-first-disney-pixar-cars-race-of-friends-autorennbahn-i-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Fahrzeuge / RC / Spielzeugautos",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.",
    "asin": "B08Q3QCKKZ",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-064",
    "title": "Carrera - 20063026 - First Nintendo Mario Kart Rennstrecken-Set für Kleinkinder - 2,4m elektrische Rennbahn mit Mario & Yoshi Spielzeugautos|mit Handregler & Streckenteilen - für Kinder ab 3 Jahren",
    "slug": "064-carrera-20063026-first-nintendo-mario-kart-rennstrecken-set-fur-kleinkinder-2-4m",
    "category": "Fahrzeuge / RC / Spielzeugautos",
    "shortDescription": "Carrera - 20063026 - First Nintendo Mario Kart Rennstrecken-Set für Kleinkinder - 2,4m elektrische Rennbahn mit Mario & Yoshi Spielzeugautos|mit Handregler & Streckenteilen - für Kinder ab 3 Jahren ist eine passende Spielzeugidee aus dem Bereich Fahrzeuge / RC / Spielzeugautos. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "affiliateUrl": "https://www.amazon.de/dp/B07PQGP8B7?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/064-carrera-20063026-first-nintendo-mario-kart-rennstrecken-set-fur-kleinkinder-2-4m.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Fahrzeuge / RC / Spielzeugautos",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.",
    "asin": "B07PQGP8B7",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-065",
    "title": "Carrera First PAW Patrol, On the Double – Spielbahn mit Chase & Rubble, spannende Abenteuer mit Flip-Elementen und kinderfreundlichen Handreglern – Für stundenlangen Spielspaß",
    "slug": "065-carrera-first-paw-patrol-on-the-double-spielbahn-mit-chase-rubble-spannende-aben",
    "category": "Fahrzeuge / RC / Spielzeugautos",
    "shortDescription": "Carrera First PAW Patrol, On the Double – Spielbahn mit Chase & Rubble, spannende Abenteuer mit Flip-Elementen und kinderfreundlichen Handreglern – Für stundenlangen Spielspaß ist eine passende Spielzeugidee aus dem Bereich Fahrzeuge / RC / Spielzeugautos. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "affiliateUrl": "https://www.amazon.de/dp/B0DT1JF9Q3?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/065-carrera-first-paw-patrol-on-the-double-spielbahn-mit-chase-rubble-spannende-aben.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Fahrzeuge / RC / Spielzeugautos",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.",
    "asin": "B0DT1JF9Q3",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-066",
    "title": "Carrera Bluey & Bingo Race 2,4m Rennstrecken-Set I 2 ferngesteuerte Fahrzeuge mit Bluey und Bingo I mit Handregler & Streckenteilen I Spielbahn für Kinder ab 3 Jahren",
    "slug": "066-carrera-bluey-bingo-race-2-4m-rennstrecken-set-i-2-ferngesteuerte-fahrzeuge-mit-",
    "category": "Fahrzeuge / RC / Spielzeugautos",
    "shortDescription": "Carrera Bluey & Bingo Race 2,4m Rennstrecken-Set I 2 ferngesteuerte Fahrzeuge mit Bluey und Bingo I mit Handregler & Streckenteilen I Spielbahn für Kinder ab 3 Jahren ist eine passende Spielzeugidee aus dem Bereich Fahrzeuge / RC / Spielzeugautos. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "affiliateUrl": "https://www.amazon.de/dp/B0F6CXFHWB?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/066-carrera-bluey-bingo-race-2-4m-rennstrecken-set-i-2-ferngesteuerte-fahrzeuge-mit-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Fahrzeuge / RC / Spielzeugautos",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.",
    "asin": "B0F6CXFHWB",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-067",
    "title": "Carrera - 20063038 First Disney Pixar Cars - Power Duell Autorennbahn I 2,4m Rennstrecke I 2 ferngesteuerte Autos mit Lightning McQueen & Jackson Storm I Geschenke zu Ostern",
    "slug": "067-carrera-20063038-first-disney-pixar-cars-power-duell-autorennbahn-i-2-4m-rennstr",
    "category": "Fahrzeuge / RC / Spielzeugautos",
    "shortDescription": "Carrera - 20063038 First Disney Pixar Cars - Power Duell Autorennbahn I 2,4m Rennstrecke I 2 ferngesteuerte Autos mit Lightning McQueen & Jackson Storm I Geschenke zu Ostern ist eine passende Spielzeugidee aus dem Bereich Fahrzeuge / RC / Spielzeugautos. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "affiliateUrl": "https://www.amazon.de/dp/B08Q3W4SJY?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/067-carrera-20063038-first-disney-pixar-cars-power-duell-autorennbahn-i-2-4m-rennstr.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Fahrzeuge / RC / Spielzeugautos",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.",
    "asin": "B08Q3W4SJY",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-068",
    "title": "Carrera Speed Arena Disney Pixar Cars I Slotbahn Kinder 1:50 – Mobile Rennbahn im Koffer mit Lightning McQueen & Cruz Ramirez – Rennspaß to go für Zuhause, unterwegs & Kindergeburtstag",
    "slug": "068-carrera-speed-arena-disney-pixar-cars-i-slotbahn-kinder-1-50-mobile-rennbahn-im-",
    "category": "Fahrzeuge / RC / Spielzeugautos",
    "shortDescription": "Carrera Speed Arena Disney Pixar Cars I Slotbahn Kinder 1:50 – Mobile Rennbahn im Koffer mit Lightning McQueen & Cruz Ramirez – Rennspaß to go für Zuhause, unterwegs & Kindergeburtstag ist eine passende Spielzeugidee aus dem Bereich Fahrzeuge / RC / Spielzeugautos. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "affiliateUrl": "https://www.amazon.de/dp/B0F67GG22M?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/068-carrera-speed-arena-disney-pixar-cars-i-slotbahn-kinder-1-50-mobile-rennbahn-im-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Fahrzeuge / RC / Spielzeugautos",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.",
    "asin": "B0F67GG22M",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-069",
    "title": "Carrera First Mario Kart™ - Royal Raceway Autorennbahn für Kinder ab 3 Jahren | 2,4m Rennstrecke mit Mario und Yoshi | mit original Mario Kart-Sound I Geschenke für Kinder zu Ostern",
    "slug": "069-carrera-first-mario-kart-royal-raceway-autorennbahn-fur-kinder-ab-3-jahren-2-4m-",
    "category": "Fahrzeuge / RC / Spielzeugautos",
    "shortDescription": "Carrera First Mario Kart™ - Royal Raceway Autorennbahn für Kinder ab 3 Jahren | 2,4m Rennstrecke mit Mario und Yoshi | mit original Mario Kart-Sound I Geschenke für Kinder zu Ostern ist eine passende Spielzeugidee aus dem Bereich Fahrzeuge / RC / Spielzeugautos. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "affiliateUrl": "https://www.amazon.de/dp/B085V7W3RT?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/069-carrera-first-mario-kart-royal-raceway-autorennbahn-fur-kinder-ab-3-jahren-2-4m-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Fahrzeuge / RC / Spielzeugautos",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.",
    "asin": "B085V7W3RT",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-070",
    "title": "Carrera - 20065025 20065025 PAW Patrol - Rubble, Gelb",
    "slug": "070-carrera-20065025-20065025-paw-patrol-rubble-gelb",
    "category": "Fahrzeuge / RC / Spielzeugautos",
    "shortDescription": "Carrera - 20065025 20065025 PAW Patrol - Rubble, Gelb ist eine passende Spielzeugidee aus dem Bereich Fahrzeuge / RC / Spielzeugautos. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Fahrzeuge, Rennbahnen, Züge oder kleine Modellwelten mögen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Fahrzeugspielzeug ist für viele Kinder interessant, weil es Rollenspiel, Bewegung und Sammelspaß verbindet.",
    "affiliateUrl": "https://www.amazon.de/dp/B08L5Q2G3G?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/070-carrera-20065025-20065025-paw-patrol-rubble-gelb.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Fahrzeuge / RC / Spielzeugautos",
    "safetyNote": "Bei elektrischen Fahrzeugen und Rennbahnen Altersempfehlung, Batterien und Kleinteile prüfen.",
    "asin": "B08L5Q2G3G",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-071",
    "title": "Theo Klein 7199 Miele Küche | Höhenverstellbare Holzküche inkl. Kochfeld mit Sound- und Licht | Edles Küchen-Zubehör aus Edelstahl (Nicht erhitzbar) und Holz | Spielzeug für Kinder ab 3 Jahren",
    "slug": "071-theo-klein-7199-miele-kuche-hohenverstellbare-holzkuche-inkl-kochfeld-mit-sound-",
    "category": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "shortDescription": "Theo Klein 7199 Miele Küche | Höhenverstellbare Holzküche inkl. Kochfeld mit Sound- und Licht | Edles Küchen-Zubehör aus Edelstahl (Nicht erhitzbar) und Holz | Spielzeug für Kinder ab 3 Jahren ist eine passende Spielzeugidee aus dem Bereich Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "affiliateUrl": "https://www.amazon.de/dp/B07PQ8SCT3?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/071-theo-klein-7199-miele-kuche-hohenverstellbare-holzkuche-inkl-kochfeld-mit-sound-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.",
    "asin": "B07PQ8SCT3",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-072",
    "title": "Theo Klein 7194 Miele Family Küche I Holzküche mit Küchengeräten I Herd inkl. Licht-und Soundfunktion I Inkl. Spielküchen-Zubehör I Spielzeug für Kinder ab 3 Jahren",
    "slug": "072-theo-klein-7194-miele-family-kuche-i-holzkuche-mit-kuchengeraten-i-herd-inkl-lic",
    "category": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "shortDescription": "Theo Klein 7194 Miele Family Küche I Holzküche mit Küchengeräten I Herd inkl. Licht-und Soundfunktion I Inkl. Spielküchen-Zubehör I Spielzeug für Kinder ab 3 Jahren ist eine passende Spielzeugidee aus dem Bereich Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "affiliateUrl": "https://www.amazon.de/dp/B08XY3NL5R?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/072-theo-klein-7194-miele-family-kuche-i-holzkuche-mit-kuchengeraten-i-herd-inkl-lic.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.",
    "asin": "B08XY3NL5R",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-073",
    "title": "Theo Klein 7188 Miele Family Küche I Holzküche mit Herd inkl. Licht-und Soundfunktion, Mikrowelle und Kühlschrank mit Eiswürfelspender I Spielküchen-Zubehör I Spielzeug für Kinder ab 3 Jahren",
    "slug": "073-theo-klein-7188-miele-family-kuche-i-holzkuche-mit-herd-inkl-licht-und-soundfunk",
    "category": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "shortDescription": "Theo Klein 7188 Miele Family Küche I Holzküche mit Herd inkl. Licht-und Soundfunktion, Mikrowelle und Kühlschrank mit Eiswürfelspender I Spielküchen-Zubehör I Spielzeug für Kinder ab 3 Jahren ist eine passende Spielzeugidee aus dem Bereich Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "affiliateUrl": "https://www.amazon.de/dp/B0F93NF3RS?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/073-theo-klein-7188-miele-family-kuche-i-holzkuche-mit-herd-inkl-licht-und-soundfunk.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.",
    "asin": "B0F93NF3RS",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-074",
    "title": "Theo Klein 7101 Miele Küche Big Rounded",
    "slug": "074-theo-klein-7101-miele-kuche-big-rounded",
    "category": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "shortDescription": "Theo Klein 7101 Miele Küche Big Rounded ist eine passende Spielzeugidee aus dem Bereich Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "affiliateUrl": "https://www.amazon.de/dp/B07B8WLCVX?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/074-theo-klein-7101-miele-kuche-big-rounded.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.",
    "asin": "B07B8WLCVX",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-075",
    "title": "Theo Klein 7187 Miele Küche Weiße Holzküche inkl. Kochfeld mit Sound- und Licht Edles Küchen-Zubehör aus Edelstahl (Nicht erhitzbar) und Holz Spielzeug für Kinder ab 3 Jahren",
    "slug": "075-theo-klein-7187-miele-kuche-weisse-holzkuche-inkl-kochfeld-mit-sound-und-licht-e",
    "category": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "shortDescription": "Theo Klein 7187 Miele Küche Weiße Holzküche inkl. Kochfeld mit Sound- und Licht Edles Küchen-Zubehör aus Edelstahl (Nicht erhitzbar) und Holz Spielzeug für Kinder ab 3 Jahren ist eine passende Spielzeugidee aus dem Bereich Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "affiliateUrl": "https://www.amazon.de/dp/B0F93KRXFC?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/075-theo-klein-7187-miele-kuche-weisse-holzkuche-inkl-kochfeld-mit-sound-und-licht-e.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.",
    "asin": "B0F93KRXFC",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-076",
    "title": "Theo Klein 7158 Miele Küche Star I Beidseitig bespielbare Kinder-Spielküche mit umfangreichem Zubehör und viel Spielmöglichkeiten | Spielzeug für Kinder ab 3 Jahren",
    "slug": "076-theo-klein-7158-miele-kuche-star-i-beidseitig-bespielbare-kinder-spielkuche-mit-",
    "category": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "shortDescription": "Theo Klein 7158 Miele Küche Star I Beidseitig bespielbare Kinder-Spielküche mit umfangreichem Zubehör und viel Spielmöglichkeiten | Spielzeug für Kinder ab 3 Jahren ist eine passende Spielzeugidee aus dem Bereich Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "affiliateUrl": "https://www.amazon.de/dp/B07S6MB333?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/076-theo-klein-7158-miele-kuche-star-i-beidseitig-bespielbare-kinder-spielkuche-mit-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.",
    "asin": "B07S6MB333",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-077",
    "title": "Theo Klein 7100 Miele Küche Basic Rounded",
    "slug": "077-theo-klein-7100-miele-kuche-basic-rounded",
    "category": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "shortDescription": "Theo Klein 7100 Miele Küche Basic Rounded ist eine passende Spielzeugidee aus dem Bereich Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "affiliateUrl": "https://www.amazon.de/dp/B07B8Y81NK?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/077-theo-klein-7100-miele-kuche-basic-rounded.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.",
    "asin": "B07B8Y81NK",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-078",
    "title": "Theo Klein 7186 Miele Spielzeugküche, Holz (MDF), Midi 2, weiß I Holzküche mit Licht- und Soundmodul I Hochwertige Accessoires I Spielzeug für Kinder ab 3 Jahren",
    "slug": "078-theo-klein-7186-miele-spielzeugkuche-holz-mdf-midi-2-weiss-i-holzkuche-mit-licht",
    "category": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "shortDescription": "Theo Klein 7186 Miele Spielzeugküche, Holz (MDF), Midi 2, weiß I Holzküche mit Licht- und Soundmodul I Hochwertige Accessoires I Spielzeug für Kinder ab 3 Jahren ist eine passende Spielzeugidee aus dem Bereich Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "affiliateUrl": "https://www.amazon.de/dp/B0F93KQYWG?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/078-theo-klein-7186-miele-spielzeugkuche-holz-mdf-midi-2-weiss-i-holzkuche-mit-licht.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.",
    "asin": "B0F93KQYWG",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-079",
    "title": "Theo Klein Kochutensilien I Robustes Kindergeschirr I Inkl. Bräter, Kasserolle und Grillpfanne I Spielzeug für Kinder ab 2 Jahren",
    "slug": "079-theo-klein-kochutensilien-i-robustes-kindergeschirr-i-inkl-brater-kasserolle-und",
    "category": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "shortDescription": "Theo Klein Kochutensilien I Robustes Kindergeschirr I Inkl. Bräter, Kasserolle und Grillpfanne I Spielzeug für Kinder ab 2 Jahren ist eine passende Spielzeugidee aus dem Bereich Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "ageHint": "Ab 2 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "affiliateUrl": "https://www.amazon.de/dp/B0CMCYGRKT?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/079-theo-klein-kochutensilien-i-robustes-kindergeschirr-i-inkl-brater-kasserolle-und.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.",
    "asin": "B0CMCYGRKT",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-080",
    "title": "Bosch Theo Klein 9564 Frühstücksset | Küchen-Set bestehend aus Toaster, Kaffeemaschine, Wasserkocher und vielem mehr | Verpackungsmaße: 44,5 cm x 13 cm x 34 cm | Spielzeug für Kinder ab 3 Jahren",
    "slug": "080-bosch-theo-klein-9564-fruhstucksset-kuchen-set-bestehend-aus-toaster-kaffeemasch",
    "category": "Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "shortDescription": "Bosch Theo Klein 9564 Frühstücksset | Küchen-Set bestehend aus Toaster, Kaffeemaschine, Wasserkocher und vielem mehr | Verpackungsmaße: 44,5 cm x 13 cm x 34 cm | Spielzeug für Kinder ab 3 Jahren ist eine passende Spielzeugidee aus dem Bereich Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Kinder, die Alltagssituationen nachspielen, kochen, verkaufen, reparieren oder versorgen möchten.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Rollenspielzeug unterstützt freies Spiel und ist oft eine langlebige Geschenkidee für Kinderzimmer und Spielecken.",
    "affiliateUrl": "https://www.amazon.de/dp/B0063DLU8Y?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/080-bosch-theo-klein-9564-fruhstucksset-kuchen-set-bestehend-aus-toaster-kaffeemasch.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Rollenspielzeug / Kinderküche / Kaufladen / Werkzeug",
    "safetyNote": "Zubehörteile sollten groß genug, stabil und zur Altersempfehlung passend sein.",
    "asin": "B0063DLU8Y",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-081",
    "title": "Fisher-Price Baby-Spielzeug Schlummer-Otter, tragbare Pinke Plüsch-Spieluhr mit Atembewegungen und Lichtern für Neugeborene ab einem Alter von 0 Monaten, JLJ33",
    "slug": "081-fisher-price-baby-spielzeug-schlummer-otter-tragbare-pinke-plusch-spieluhr-mit-a",
    "category": "Baby- und Kleinkindspielzeug",
    "shortDescription": "Fisher-Price Baby-Spielzeug Schlummer-Otter, tragbare Pinke Plüsch-Spieluhr mit Atembewegungen und Lichtern für Neugeborene ab einem Alter von 0 Monaten, JLJ33 ist eine passende Spielzeugidee aus dem Bereich Baby- und Kleinkindspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "ageHint": "Ab Geburt laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "Baby"
    ],
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "affiliateUrl": "https://www.amazon.de/dp/B0DY31MCQW?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/081-fisher-price-baby-spielzeug-schlummer-otter-tragbare-pinke-plusch-spieluhr-mit-a.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Baby- und Kleinkindspielzeug",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.",
    "asin": "B0DY31MCQW",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-082",
    "title": "Fisher-Price Classic Chatter Telefon",
    "slug": "082-fisher-price-classic-chatter-telefon",
    "category": "Baby- und Kleinkindspielzeug",
    "shortDescription": "Fisher-Price Classic Chatter Telefon ist eine passende Spielzeugidee aus dem Bereich Baby- und Kleinkindspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "affiliateUrl": "https://www.amazon.de/dp/B001W03MBQ?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/082-fisher-price-classic-chatter-telefon.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Baby- und Kleinkindspielzeug",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.",
    "asin": "B001W03MBQ",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-083",
    "title": "Fisher-Price Lernspaß, Liederbuch, Baby Musik Buch, Musikspielzeug für Babys, Elektronisches Kinderbuch, ab 6 Monate, Deutsche Version, CDH40",
    "slug": "083-fisher-price-lernspass-liederbuch-baby-musik-buch-musikspielzeug-fur-babys-elekt",
    "category": "Baby- und Kleinkindspielzeug",
    "shortDescription": "Fisher-Price Lernspaß, Liederbuch, Baby Musik Buch, Musikspielzeug für Babys, Elektronisches Kinderbuch, ab 6 Monate, Deutsche Version, CDH40 ist eine passende Spielzeugidee aus dem Bereich Baby- und Kleinkindspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "ageHint": "Ab 6 Monaten laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "Baby"
    ],
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "affiliateUrl": "https://www.amazon.de/dp/B018EAJ7CY?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/083-fisher-price-lernspass-liederbuch-baby-musik-buch-musikspielzeug-fur-babys-elekt.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Baby- und Kleinkindspielzeug",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.",
    "asin": "B018EAJ7CY",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-084",
    "title": "Fisher-Price Babys Erste Bausteine | Babyspielzeug ab 6 Monate, 9 Monate | Steckspiel ab 1 Jahr | Motorikspielzeug ab 6 Monate | Baby-Sortierspiel mit Sortierbox | Lern- & Formensortierspiel, FFC84",
    "slug": "084-fisher-price-babys-erste-bausteine-babyspielzeug-ab-6-monate-9-monate-steckspiel",
    "category": "Baby- und Kleinkindspielzeug",
    "shortDescription": "Fisher-Price Babys Erste Bausteine | Babyspielzeug ab 6 Monate, 9 Monate | Steckspiel ab 1 Jahr | Motorikspielzeug ab 6 Monate | Baby-Sortierspiel mit Sortierbox | Lern- & Formensortierspiel, FFC84 ist eine passende Spielzeugidee aus dem Bereich Baby- und Kleinkindspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "ageHint": "Ab 6 Monaten laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "Baby"
    ],
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "affiliateUrl": "https://www.amazon.de/dp/B01NCUSC7V?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/084-fisher-price-babys-erste-bausteine-babyspielzeug-ab-6-monate-9-monate-steckspiel.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Baby- und Kleinkindspielzeug",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.",
    "asin": "B01NCUSC7V",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-085",
    "title": "Fisher-Price WaterMates Entchenball, Lustige Ente in Kugel mit Konfetti, Baby Spielzeug, Spielball, Badewannenspielzeug, ab 3 Monate, 75676",
    "slug": "085-fisher-price-watermates-entchenball-lustige-ente-in-kugel-mit-konfetti-baby-spie",
    "category": "Baby- und Kleinkindspielzeug",
    "shortDescription": "Fisher-Price WaterMates Entchenball, Lustige Ente in Kugel mit Konfetti, Baby Spielzeug, Spielball, Badewannenspielzeug, ab 3 Monate, 75676 ist eine passende Spielzeugidee aus dem Bereich Baby- und Kleinkindspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "ageHint": "Ab 3 Monaten laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "Baby"
    ],
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "affiliateUrl": "https://www.amazon.de/dp/B0002HB0GE?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/085-fisher-price-watermates-entchenball-lustige-ente-in-kugel-mit-konfetti-baby-spie.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Baby- und Kleinkindspielzeug",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.",
    "asin": "B0002HB0GE",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-086",
    "title": "Fisher-Price Spielkissen, Baby Spielzeug mit abnehmbaren Beißringen, Babyausstattung ab der Geburt",
    "slug": "086-fisher-price-spielkissen-baby-spielzeug-mit-abnehmbaren-beissringen-babyausstatt",
    "category": "Baby- und Kleinkindspielzeug",
    "shortDescription": "Fisher-Price Spielkissen, Baby Spielzeug mit abnehmbaren Beißringen, Babyausstattung ab der Geburt ist eine passende Spielzeugidee aus dem Bereich Baby- und Kleinkindspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "affiliateUrl": "https://www.amazon.de/dp/B08LDWK96K?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/086-fisher-price-spielkissen-baby-spielzeug-mit-abnehmbaren-beissringen-babyausstatt.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Baby- und Kleinkindspielzeug",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.",
    "asin": "B08LDWK96K",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-087",
    "title": "Fisher-Price Schlummer Otter Kuscheltier mit Atembewegung und Musik, Baby Erstausstattung, Neugeborene, Baby Spielzeug ab Geburt, Babyparty und Neugeborenen Geschenk, FXC66",
    "slug": "087-fisher-price-schlummer-otter-kuscheltier-mit-atembewegung-und-musik-baby-erstaus",
    "category": "Baby- und Kleinkindspielzeug",
    "shortDescription": "Fisher-Price Schlummer Otter Kuscheltier mit Atembewegung und Musik, Baby Erstausstattung, Neugeborene, Baby Spielzeug ab Geburt, Babyparty und Neugeborenen Geschenk, FXC66 ist eine passende Spielzeugidee aus dem Bereich Baby- und Kleinkindspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "ageHint": "Ab Geburt laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "Baby"
    ],
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "affiliateUrl": "https://www.amazon.de/dp/B07N1JP56L?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/087-fisher-price-schlummer-otter-kuscheltier-mit-atembewegung-und-musik-baby-erstaus.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Baby- und Kleinkindspielzeug",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.",
    "asin": "B07N1JP56L",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-088",
    "title": "Fisher-Price 3-in-1-Traumbärchen-Mobile, Mobile für Babybett, Elektrisches Mobile mit Licht, Musikmobile, Babyerstausstattung, Babybett- und Baby-Zubehör, ab Geburt, CDN41",
    "slug": "088-fisher-price-3-in-1-traumbarchen-mobile-mobile-fur-babybett-elektrisches-mobile-",
    "category": "Baby- und Kleinkindspielzeug",
    "shortDescription": "Fisher-Price 3-in-1-Traumbärchen-Mobile, Mobile für Babybett, Elektrisches Mobile mit Licht, Musikmobile, Babyerstausstattung, Babybett- und Baby-Zubehör, ab Geburt, CDN41 ist eine passende Spielzeugidee aus dem Bereich Baby- und Kleinkindspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "ageHint": "Ab Geburt laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "Baby"
    ],
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "affiliateUrl": "https://www.amazon.de/dp/B00PI0J4CM?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/088-fisher-price-3-in-1-traumbarchen-mobile-mobile-fur-babybett-elektrisches-mobile-.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Baby- und Kleinkindspielzeug",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.",
    "asin": "B00PI0J4CM",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-089",
    "title": "Fisher-Price Lernspaß Lernspielzeug für Babys Hündchen-Fernbedienung Spielzeugfernbedienung mit Musik und Lichtern für Kinder ab 6 Monaten, deutsche Version, HXB88",
    "slug": "089-fisher-price-lernspass-lernspielzeug-fur-babys-hundchen-fernbedienung-spielzeugf",
    "category": "Baby- und Kleinkindspielzeug",
    "shortDescription": "Fisher-Price Lernspaß Lernspielzeug für Babys Hündchen-Fernbedienung Spielzeugfernbedienung mit Musik und Lichtern für Kinder ab 6 Monaten, deutsche Version, HXB88 ist eine passende Spielzeugidee aus dem Bereich Baby- und Kleinkindspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "ageHint": "Ab 6 Monaten laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "Baby"
    ],
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "affiliateUrl": "https://www.amazon.de/dp/B0CDX7F99F?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/089-fisher-price-lernspass-lernspielzeug-fur-babys-hundchen-fernbedienung-spielzeugf.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Baby- und Kleinkindspielzeug",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.",
    "asin": "B0CDX7F99F",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-090",
    "title": "Fisher-Price Lernspaß Spiel-Controller für Babys und Kleinkinder in Grün, Videospiel-Attrappe mit Musik und Leuchtfunktion für Babys ab 6 Monaten, deutsche Version, HXB62",
    "slug": "090-fisher-price-lernspass-spiel-controller-fur-babys-und-kleinkinder-in-grun-videos",
    "category": "Baby- und Kleinkindspielzeug",
    "shortDescription": "Fisher-Price Lernspaß Spiel-Controller für Babys und Kleinkinder in Grün, Videospiel-Attrappe mit Musik und Leuchtfunktion für Babys ab 6 Monaten, deutsche Version, HXB62 ist eine passende Spielzeugidee aus dem Bereich Baby- und Kleinkindspielzeug. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Babys und Kleinkinder, die sicher greifen, lauschen, rollen, stapeln oder erste Formen entdecken.",
    "ageHint": "Ab 6 Monaten laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "Baby"
    ],
    "whyGood": "Diese Auswahl orientiert sich an etablierten Baby- und Kleinkindspielzeugen mit klaren Altersangaben.",
    "affiliateUrl": "https://www.amazon.de/dp/B0CDX828R4?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/090-fisher-price-lernspass-spiel-controller-fur-babys-und-kleinkinder-in-grun-videos.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Baby- und Kleinkindspielzeug",
    "safetyNote": "Für Babys und Kleinkinder sollten verschluckbare Kleinteile, lose Bänder und beschädigte Teile vermieden werden.",
    "asin": "B0CDX828R4",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-091",
    "title": "tonies Hörfigur für Toniebox, My First Reise Set, Fahrzeuge entdecken für Kinder ab 1 Jahr, Spielzeit ca. 36 Minuten",
    "slug": "091-tonies-horfigur-fur-toniebox-my-first-reise-set-fahrzeuge-entdecken-fur-kinder-a",
    "category": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "shortDescription": "tonies Hörfigur für Toniebox, My First Reise Set, Fahrzeuge entdecken für Kinder ab 1 Jahr, Spielzeit ca. 36 Minuten ist eine passende Spielzeugidee aus dem Bereich Geschenkideen / Trendspielzeug / Audio- und Figurenwelt. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "ageHint": "Ab 1 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "affiliateUrl": "https://www.amazon.de/dp/B0GH1Z75DK?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/091-tonies-horfigur-fur-toniebox-my-first-reise-set-fahrzeuge-entdecken-fur-kinder-a.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.",
    "asin": "B0GH1Z75DK",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-092",
    "title": "tonies Hörfigur für Toniebox, Die Giraffenaffen Partyhits, Die besten Hits zum Mitsingen und Tanzen für Kinder ab 6 Jahren, Spielzeit ca. 60 Minuten",
    "slug": "092-tonies-horfigur-fur-toniebox-die-giraffenaffen-partyhits-die-besten-hits-zum-mit",
    "category": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "shortDescription": "tonies Hörfigur für Toniebox, Die Giraffenaffen Partyhits, Die besten Hits zum Mitsingen und Tanzen für Kinder ab 6 Jahren, Spielzeit ca. 60 Minuten ist eine passende Spielzeugidee aus dem Bereich Geschenkideen / Trendspielzeug / Audio- und Figurenwelt. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "ageHint": "Ab 6 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre"
    ],
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "affiliateUrl": "https://www.amazon.de/dp/B0GLT9JTC9?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/092-tonies-horfigur-fur-toniebox-die-giraffenaffen-partyhits-die-besten-hits-zum-mit.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.",
    "asin": "B0GLT9JTC9",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-093",
    "title": "tonies Hörfiguren für Toniebox, Trolls Viva – Gemeinsam Stark, Hörspiel für Kinder ab 5 Jahren, Spielzeit ca. 70 Minuten",
    "slug": "093-tonies-horfiguren-fur-toniebox-trolls-viva-gemeinsam-stark-horspiel-fur-kinder-a",
    "category": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "shortDescription": "tonies Hörfiguren für Toniebox, Trolls Viva – Gemeinsam Stark, Hörspiel für Kinder ab 5 Jahren, Spielzeit ca. 70 Minuten ist eine passende Spielzeugidee aus dem Bereich Geschenkideen / Trendspielzeug / Audio- und Figurenwelt. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "ageHint": "Ab 5 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "3-5 Jahre",
      "6-8 Jahre"
    ],
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "affiliateUrl": "https://www.amazon.de/dp/B0D5R8TBJP?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/093-tonies-horfiguren-fur-toniebox-trolls-viva-gemeinsam-stark-horspiel-fur-kinder-a.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.",
    "asin": "B0D5R8TBJP",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-094",
    "title": "tonies Hörfigur für Toniebox, KLE!NE Experten treffen auf Dinosaurier, Hörspiel mit spannendem Wissen für Kinder ab 3 Jahren, Spielzeit ca. 57 Minuten",
    "slug": "094-tonies-horfigur-fur-toniebox-kle-ne-experten-treffen-auf-dinosaurier-horspiel-mi",
    "category": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "shortDescription": "tonies Hörfigur für Toniebox, KLE!NE Experten treffen auf Dinosaurier, Hörspiel mit spannendem Wissen für Kinder ab 3 Jahren, Spielzeit ca. 57 Minuten ist eine passende Spielzeugidee aus dem Bereich Geschenkideen / Trendspielzeug / Audio- und Figurenwelt. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "affiliateUrl": "https://www.amazon.de/dp/B0DMP1RPF2?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/094-tonies-horfigur-fur-toniebox-kle-ne-experten-treffen-auf-dinosaurier-horspiel-mi.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.",
    "asin": "B0DMP1RPF2",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-095",
    "title": "tonies Toniebox 2 Bundle Incl. 6 Disney Cap&Capper,König der Löwen,Ratatouli,Dschungelbuch,Nemo,Aristocats,Himmelblau, Audioplayer für Hörbücher, Lieder, Einschlafen und Tonieplay für Kinder",
    "slug": "095-tonies-toniebox-2-bundle-incl-6-disney-cap-capper-konig-der-lowen-ratatouli-dsch",
    "category": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "shortDescription": "tonies Toniebox 2 Bundle Incl. 6 Disney Cap&Capper,König der Löwen,Ratatouli,Dschungelbuch,Nemo,Aristocats,Himmelblau, Audioplayer für Hörbücher, Lieder, Einschlafen und Tonieplay für Kinder ist eine passende Spielzeugidee aus dem Bereich Geschenkideen / Trendspielzeug / Audio- und Figurenwelt. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "ageHint": "Altersempfehlung bitte direkt beim Hersteller und auf Amazon.de prüfen.",
    "ageGroups": [
      "3-5 Jahre"
    ],
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "affiliateUrl": "https://www.amazon.de/dp/B0FLDYN14X?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/095-tonies-toniebox-2-bundle-incl-6-disney-cap-capper-konig-der-lowen-ratatouli-dsch.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.",
    "asin": "B0FLDYN14X",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-096",
    "title": "tonies Hörfigur für Toniebox, KLE!NE Experten tauchen mit Walen, Hörspiel mit spannendem Wissen für Kinder ab 3 Jahren, Spielzeit ca. 61 Minuten",
    "slug": "096-tonies-horfigur-fur-toniebox-kle-ne-experten-tauchen-mit-walen-horspiel-mit-span",
    "category": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "shortDescription": "tonies Hörfigur für Toniebox, KLE!NE Experten tauchen mit Walen, Hörspiel mit spannendem Wissen für Kinder ab 3 Jahren, Spielzeit ca. 61 Minuten ist eine passende Spielzeugidee aus dem Bereich Geschenkideen / Trendspielzeug / Audio- und Figurenwelt. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "affiliateUrl": "https://www.amazon.de/dp/B0DMNYT5QT?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/096-tonies-horfigur-fur-toniebox-kle-ne-experten-tauchen-mit-walen-horspiel-mit-span.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.",
    "asin": "B0DMNYT5QT",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-097",
    "title": "tonies Hörfiguren für Toniebox – Nachtlicht Schlummerhase – Musik beruhigenden Klängen + Kreativ eigene Aufnahmen, für Kinder ab 3 Jahren, Laufzeit 90 Min.",
    "slug": "097-tonies-horfiguren-fur-toniebox-nachtlicht-schlummerhase-musik-beruhigenden-klang",
    "category": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "shortDescription": "tonies Hörfiguren für Toniebox – Nachtlicht Schlummerhase – Musik beruhigenden Klängen + Kreativ eigene Aufnahmen, für Kinder ab 3 Jahren, Laufzeit 90 Min. ist eine passende Spielzeugidee aus dem Bereich Geschenkideen / Trendspielzeug / Audio- und Figurenwelt. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "affiliateUrl": "https://www.amazon.de/dp/B0DXFR4DJL?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/097-tonies-horfiguren-fur-toniebox-nachtlicht-schlummerhase-musik-beruhigenden-klang.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.",
    "asin": "B0DXFR4DJL",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-098",
    "title": "tonies Hörfiguren für Toniebox, PAW Patrol – EIN Neuer Fellfreund, Hörspiel mit 3 Geschichten für Kinder ab 3 Jahren, Spielzeit ca. 50 Minuten",
    "slug": "098-tonies-horfiguren-fur-toniebox-paw-patrol-ein-neuer-fellfreund-horspiel-mit-3-ge",
    "category": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "shortDescription": "tonies Hörfiguren für Toniebox, PAW Patrol – EIN Neuer Fellfreund, Hörspiel mit 3 Geschichten für Kinder ab 3 Jahren, Spielzeit ca. 50 Minuten ist eine passende Spielzeugidee aus dem Bereich Geschenkideen / Trendspielzeug / Audio- und Figurenwelt. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "affiliateUrl": "https://www.amazon.de/dp/B0CG2B5X1M?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/098-tonies-horfiguren-fur-toniebox-paw-patrol-ein-neuer-fellfreund-horspiel-mit-3-ge.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.",
    "asin": "B0CG2B5X1M",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-099",
    "title": "tonies Hörfigur für Toniebox, Jurassic World: Neue Abenteuer – Folge 1: Camp Kreidezeit/Geheimnisse, Hörspiel für Kinder ab 6 Jahren, Spielzeit ca. 44 Minuten",
    "slug": "099-tonies-horfigur-fur-toniebox-jurassic-world-neue-abenteuer-folge-1-camp-kreideze",
    "category": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "shortDescription": "tonies Hörfigur für Toniebox, Jurassic World: Neue Abenteuer – Folge 1: Camp Kreidezeit/Geheimnisse, Hörspiel für Kinder ab 6 Jahren, Spielzeit ca. 44 Minuten ist eine passende Spielzeugidee aus dem Bereich Geschenkideen / Trendspielzeug / Audio- und Figurenwelt. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "ageHint": "Ab 6 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "6-8 Jahre"
    ],
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "affiliateUrl": "https://www.amazon.de/dp/B0DMF3J7SF?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/099-tonies-horfigur-fur-toniebox-jurassic-world-neue-abenteuer-folge-1-camp-kreideze.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.",
    "asin": "B0DMF3J7SF",
    "checkedAt": "2026-06-30"
  },
  {
    "id": "toy-100",
    "title": "tonies Hörfigur für Toniebox, Lieblings-Kinderlieder – Spiel- und Bewegungslieder, Kinderlieder für Kinder ab 3 Jahren, Spielzeit ca. 54 Minuten",
    "slug": "100-tonies-horfigur-fur-toniebox-lieblings-kinderlieder-spiel-und-bewegungslieder-ki",
    "category": "Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "shortDescription": "tonies Hörfigur für Toniebox, Lieblings-Kinderlieder – Spiel- und Bewegungslieder, Kinderlieder für Kinder ab 3 Jahren, Spielzeit ca. 54 Minuten ist eine passende Spielzeugidee aus dem Bereich Geschenkideen / Trendspielzeug / Audio- und Figurenwelt. Die Auswahl hilft dir, schneller geeignete Produkte für Kinder und Geschenk-Anlässe zu finden.",
    "idealFor": "Geschenk-Suchende, die etwas gut Auffindbares aus beliebten Spielzeugwelten suchen.",
    "ageHint": "Ab 3 Jahren laut Produkttitel; Herstellerangaben vor dem Kauf prüfen.",
    "ageGroups": [
      "1-3 Jahre",
      "3-5 Jahre"
    ],
    "whyGood": "Eine praktische Orientierung für Geburtstage, kleine Überraschungen und häufig gekaufte Spielzeugideen.",
    "affiliateUrl": "https://www.amazon.de/dp/B08VGX5YVK?tag=epic05e-21",
    "affiliateStatus": "ready",
    "image": "/toy-product-images/100-tonies-horfigur-fur-toniebox-lieblings-kinderlieder-spiel-und-bewegungslieder-ki.svg",
    "imageAlt": "Neutrales Studio-Mockup zu Geschenkideen / Trendspielzeug / Audio- und Figurenwelt",
    "safetyNote": "Bei Audio-Spielzeug Lautstärke, Nutzungsdauer und Altersangabe im Blick behalten.",
    "asin": "B08VGX5YVK",
    "checkedAt": "2026-06-30"
  }
] satisfies ToyProduct[];

export const readyToyProducts = toyProducts.filter((product) => product.affiliateStatus === 'ready');
export const placeholderToyProducts = toyProducts.filter((product) => product.affiliateStatus === 'placeholder');

export function getProductsByCategory(category: ToyCategory) {
  return toyProducts.filter((product) => product.category === category);
}
