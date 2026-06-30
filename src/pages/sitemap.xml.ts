const site = 'https://spielzeugkompass.de';
const lastmod = '2026-06-30';
const pages = [
  '/',
  '/spielzeug/',
  '/lernspielzeug/',
  '/geschenke/',
  '/outdoor-spielzeug/',
  '/baby-kleinkind/',
  '/ratgeber/',
  '/impressum/',
  '/datenschutz/',
  '/affiliate-hinweis/'
];

export function GET() {
  const urls = pages
    .map(
      (path) => `<url><loc>${site}${path}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${path === '/' ? '1.0' : '0.8'}</priority></url>`
    )
    .join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
