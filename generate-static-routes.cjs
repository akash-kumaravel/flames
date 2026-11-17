const fs = require('fs');
const path = require('path');

const distPath = path.resolve('dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html not found! Run vite build first.');
  process.exit(1);
}

// Bundle src/data.ts so per-route SEO meta can be pre-rendered into static HTML
let DATA = null;
async function loadData() {
  try {
    const out = path.resolve('dist', '.data.tmp.cjs');
    await require('esbuild').build({ entryPoints: [path.resolve('src', 'data.ts')], bundle: true, platform: 'node', format: 'cjs', outfile: out, logLevel: 'silent' });
    DATA = require(out);
    fs.unlinkSync(out);
  } catch (err) {
    console.error('Could not load data.ts for SEO meta:', err);
  }
}

const ORIGIN = 'https://www.flamesfireplace.com';
const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function metaForRoute(route) {
  if (!DATA) return null;
  const parts = route.split('/');
  const last = parts[parts.length - 1];
  if (route === '' ) return DATA.META_SUMMARY.home;
  if (DATA.META_SUMMARY[route]) return DATA.META_SUMMARY[route];
  if (parts[0] === 'blog' && parts[1]) {
    const a = DATA.BLOG_ARTICLES.find((x) => x.slug.replace(/^\//, '') === route);
    if (a) return { title: a.seoTitle || `${a.title} | Flames Fireplace Blog`, description: a.seoDescription || a.content.intro };
  }
  const gas = DATA.OUTDOOR_GAS_VARIANTS.find((v) => v.id === last || v.id.replace('-gas-fireplace', '') === last);
  if (gas && route.includes('gas-fireplace')) return { title: gas.seoTitle, description: gas.seoDescription };
  const svc = DATA.SERVICES.find((x) => x.id === last);
  if (svc) return { title: svc.seoTitle || `${svc.title} | Flames Fireplace`, description: svc.seoDescription || svc.description, image: svc.image };
  const variant = (DATA.ALL_OUTDOOR_VARIANTS || []).find((v) => v.id === last || (v.slug && v.slug === last));
  if (variant && variant.seoTitle) return { title: variant.seoTitle, description: variant.seoDescription };
  return null;
}

function renderHtml(baseHtml, route) {
  const meta = metaForRoute(route);
  if (!meta) return baseHtml;
  const url = route === '' ? `${ORIGIN}/` : `${ORIGIN}/${route}`;
  let html = baseHtml;
  const set = (re, val) => { html = html.replace(re, () => val); };
  set(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`);
  set(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(meta.description)}" />`);
  set(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
  set(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${esc(meta.title)}" />`);
  set(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${esc(meta.description)}" />`);
  set(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`);
  set(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${esc(meta.title)}" />`);
  set(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${esc(meta.description)}" />`);
  if (meta.image) {
    set(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${esc(meta.image)}" />`);
    set(/<meta name="twitter:image" content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${esc(meta.image)}" />`);
  }
  return html;
}

// Read site data to derive routes automatically (services and blog articles)
const dataPath = path.resolve('src', 'data.ts');
let dataRaw = '';
try {
  dataRaw = fs.readFileSync(dataPath, 'utf8');
} catch (err) {
  console.error('Failed to read src/data.ts:', err);
}

// Helper: extract SERVICES ids
function extractServiceIds(src) {
  const servicesMatch = src.match(/export const SERVICES[\s\S]*?=\s*\[([\s\S]*?)\];/m);
  if (!servicesMatch) return [];
  const block = servicesMatch[1];
  const ids = Array.from(block.matchAll(/id:\s*"([^"]+)"/g)).map(m => m[1]);
  return ids;
}

// Helper: extract BLOG_ARTICLES slugs
function extractBlogSlugs(src) {
  const blogsMatch = src.match(/export const BLOG_ARTICLES[\s\S]*?=\s*\[([\s\S]*?)\];/m);
  if (!blogsMatch) return [];
  const block = blogsMatch[1];
  const slugs = Array.from(block.matchAll(/slug:\s*"([^"]+)"/g)).map(m => m[1].replace(/^\//, ''));
  return slugs;
}

// Helper: extract OUTDOOR_GAS_VARIANTS ids
function extractGasVariantIds(src) {
  const match = src.match(/export const OUTDOOR_GAS_VARIANTS[\s\S]*?=\s*\[([\s\S]*?)\];/m);
  if (!match) return [];
  const block = match[1];
  const ids = Array.from(block.matchAll(/id:\s*"([^"]+)"/g)).map(m => m[1]);
  return ids;
}

const staticPages = ['','about','services','portfolio','faq','contact','blog','best-fireplace-dubai'];
const serviceIds = extractServiceIds(dataRaw).map(id => `services/${id}`);
const gasVariantIds = extractGasVariantIds(dataRaw).map(id => `services/outdoor-gas-fireplace/${id.replace('-gas-fireplace', '')}`);
const gasVariantAltIds = extractGasVariantIds(dataRaw).map(id => `services/${id}`);
const blogSlugs = extractBlogSlugs(dataRaw);

const routes = [...staticPages, ...blogSlugs, ...serviceIds, ...gasVariantIds, ...gasVariantAltIds];

(async () => {
  await loadData();
  const baseHtml = fs.readFileSync(indexPath, 'utf8');

  // Home page gets its own tags too
  try { fs.writeFileSync(indexPath, renderHtml(baseHtml, '')); } catch (e) { console.error(e); }

  // Generate fallback 404.html for static servers
  try {
    fs.writeFileSync(path.join(distPath, '404.html'), baseHtml);
    console.log('Successfully generated dist/404.html');
  } catch (err) {
    console.error('Failed to create 404.html fallback:', err);
  }

  // Generate physical routes allowing safe refresh checks
  routes.forEach((route) => {
    if (route === '') return; // Skip folder generation for empty route
    const targetDir = path.join(distPath, route);
    const targetIndex = path.join(targetDir, 'index.html');
  
    try {
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(targetIndex, renderHtml(baseHtml, route));
      console.log(`Successfully generated static route index for /${route}`);
    } catch (err) {
      console.error(`Failed to generate route for /${route}:`, err);
    }
  });

  console.log('Static route fallbacks generated successfully!');

  // Regenerate sitemap.xml in public/ from derived routes
  try {
    const origin = 'https://www.flamesfireplace.com';
    const today = new Date().toISOString().slice(0,10);
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    routes.forEach(r => {
      const loc = r === '' ? `${origin}/` : `${origin}/${r}`;
      const priority = r === '' ? '1.0' : r === 'best-fireplace-dubai' ? '1.0' : r.startsWith('services/') ? '0.9' : r.startsWith('blog') ? '0.8' : '0.7';
      sitemap += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
    });

    sitemap += '</urlset>\n';
    fs.writeFileSync(path.resolve('public','sitemap.xml'), sitemap, 'utf8');
    console.log('Updated public/sitemap.xml from src/data.ts');
  } catch (err) {
    console.error('Failed to write sitemap:', err);
  }
})();
