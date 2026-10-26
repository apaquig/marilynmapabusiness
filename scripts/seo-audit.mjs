import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const files = [];

function walk(directory) {
  for (const name of fs.readdirSync(directory)) {
    const filePath = path.join(directory, name);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) walk(filePath);
    else if (name.endsWith('.html')) files.push(filePath);
  }
}

function routeFor(filePath) {
  const relative = path.relative(root, filePath).replaceAll(path.sep, '/');
  return `/${relative.replace(/index\.html$/, '')}`;
}

function attrTag(html, tag, attr, value, wanted) {
  const tags = html.match(new RegExp(`<${tag}\\b[^>]*>`, 'gi')) ?? [];
  const match = tags.find((candidate) => new RegExp(`${attr}=["']${value}["']`, 'i').test(candidate));
  return match?.match(new RegExp(`${wanted}=["']([^"']*)["']`, 'i'))?.[1]?.trim() ?? '';
}

walk(root);
const rows = [];
const titles = new Map();
const canonicals = new Map();
const schemaErrors = [];

for (const filePath of files) {
  const html = fs.readFileSync(filePath, 'utf8');
  const route = routeFor(filePath);
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() ?? '';
  const description = attrTag(html, 'meta', 'name', 'description', 'content');
  const robots = attrTag(html, 'meta', 'name', 'robots', 'content');
  const canonical = attrTag(html, 'link', 'rel', 'canonical', 'href');
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const lang = html.match(/<html[^>]+lang=["']([^"']+)/i)?.[1] ?? '';
  rows.push({ route, title, description, robots, canonical, h1Count, lang });
  if (title) titles.set(title, [...(titles.get(title) ?? []), route]);
  if (canonical) canonicals.set(canonical, [...(canonicals.get(canonical) ?? []), route]);
  for (const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); }
    catch (error) { schemaErrors.push({ route, error: error.message }); }
  }
}

const duplicates = (map) => [...map].filter(([, routes]) => routes.length > 1);
const report = {
  generatedAt: new Date().toISOString(),
  totals: {
    html: rows.length,
    missingTitle: rows.filter((row) => !row.title).length,
    missingDescription: rows.filter((row) => !row.description).length,
    missingCanonical: rows.filter((row) => !row.canonical).length,
    missingH1: rows.filter((row) => row.h1Count === 0).length,
    multipleH1: rows.filter((row) => row.h1Count > 1).length,
    noindex: rows.filter((row) => /noindex/i.test(row.robots)).length,
    duplicateTitleGroups: duplicates(titles).length,
    duplicateCanonicalGroups: duplicates(canonicals).length,
    schemaErrors: schemaErrors.length,
  },
  noindex: rows.filter((row) => /noindex/i.test(row.robots)).map((row) => row.route),
  missingDescription: rows.filter((row) => !row.description).map((row) => row.route),
  h1Issues: rows.filter((row) => row.h1Count !== 1).map((row) => ({ route: row.route, h1Count: row.h1Count })),
  duplicateTitles: duplicates(titles).map(([title, routes]) => ({ title, routes })),
  duplicateCanonicals: duplicates(canonicals).map(([canonical, routes]) => ({ canonical, routes })),
  schemaErrors,
};

console.log(JSON.stringify(report, null, 2));
