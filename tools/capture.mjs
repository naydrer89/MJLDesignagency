import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

export const SITES = [
  // Top companies / tech + consumer
  { slug: 'apple', name: 'Apple', url: 'https://www.apple.com/', group: 'tech' },
  { slug: 'stripe', name: 'Stripe', url: 'https://stripe.com/', group: 'tech' },
  { slug: 'linear', name: 'Linear', url: 'https://linear.app/', group: 'tech' },
  { slug: 'vercel', name: 'Vercel', url: 'https://vercel.com/', group: 'tech' },
  { slug: 'airbnb', name: 'Airbnb', url: 'https://www.airbnb.com/', group: 'consumer' },
  { slug: 'nike', name: 'Nike', url: 'https://www.nike.com/', group: 'consumer' },
  { slug: 'spotify', name: 'Spotify', url: 'https://www.spotify.com/', group: 'consumer' },
  { slug: 'notion', name: 'Notion', url: 'https://www.notion.com/', group: 'tech' },
  { slug: 'figma', name: 'Figma', url: 'https://www.figma.com/', group: 'tech' },
  { slug: 'openai', name: 'OpenAI', url: 'https://openai.com/', group: 'tech' },
  // Luxury
  { slug: 'rolex', name: 'Rolex', url: 'https://www.rolex.com/', group: 'luxury' },
  { slug: 'chanel', name: 'Chanel', url: 'https://www.chanel.com/', group: 'luxury' },
  { slug: 'hermes', name: 'Hermès', url: 'https://www.hermes.com/', group: 'luxury' },
  { slug: 'louis-vuitton', name: 'Louis Vuitton', url: 'https://www.louisvuitton.com/', group: 'luxury' },
  { slug: 'cartier', name: 'Cartier', url: 'https://www.cartier.com/', group: 'luxury' },
  { slug: 'dior', name: 'Dior', url: 'https://www.dior.com/', group: 'luxury' },
  { slug: 'gucci', name: 'Gucci', url: 'https://www.gucci.com/', group: 'luxury' },
  { slug: 'ferrari', name: 'Ferrari', url: 'https://www.ferrari.com/', group: 'luxury' },
  { slug: 'porsche', name: 'Porsche', url: 'https://www.porsche.com/', group: 'luxury' },
  { slug: 'tiffany', name: 'Tiffany & Co.', url: 'https://www.tiffany.com/', group: 'luxury' },
];

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36';

const CONSENT_LABELS = [
  'accept all', 'accept all cookies', 'accept cookies', 'i accept', 'accept & close',
  'alle akzeptieren', 'alle cookies akzeptieren', 'akzeptieren', 'zustimmen',
  'tout accepter', 'accepter et fermer', 'aceptar todo', 'accetta tutti',
  'alles accepteren', 'akkoord', 'godta alle', 'acceptera alla',
];

function dismissConsent(labels) {
  const norm = (s) => (s || '').replace(/\s+/g, ' ').trim().toLowerCase();
  // Consent managers are increasingly rendered inside shadow roots, so walk them too.
  const nodes = [];
  const walk = (root) => {
    for (const el of root.querySelectorAll('*')) {
      if (el.shadowRoot) walk(el.shadowRoot);
      if (el.matches && el.matches('button, a, [role="button"], div[role="button"]')) nodes.push(el);
    }
  };
  walk(document);
  const hits = [];
  for (const el of nodes) {
    const t = norm(el.innerText || el.textContent);
    if (!t || t.length > 40) continue;
    if (!labels.includes(t)) continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (r.width > 520 || r.height > 120) continue;
    hits.push({ el, r });
  }
  if (!hits.length) return false;
  hits.sort((a, b) => b.r.top - a.r.top);
  const isConsentNotice = (h) => {
    let n = h.el;
    for (let i = 0; i < 10 && n; i++, n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.position === 'fixed' || cs.position === 'sticky') return true;
      if (n.getAttribute && (n.getAttribute('role') === 'dialog' || n.getAttribute('aria-modal') === 'true')) return true;
      if (/cookie|consent|gdpr|privacy|onetrust|didomi|usercentrics|truste|tracking/i.test(n.className + ' ' + n.id)) return true;
    }
    return false;
  };
  // Only click inside a real notice/modal — never a random "accept" link in the page body.
  const target = hits.find(isConsentNotice);
  if (!target) return false;
  target.el.click();
  return true;
}

function collectTokens() {
  const count = (map, key) => {
    if (!key) return;
    key = key.replace(/\s+/g, ' ').trim();
    if (!key || key === 'rgba(0, 0, 0, 0)' || key === 'transparent') return;
    map[key] = (map[key] || 0) + 1;
  };
  const colors = {}, bg = {}, fonts = {}, radii = {}, borders = {};
  const els = [...document.querySelectorAll('body *')].slice(0, 4000);
  for (const el of els) {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) continue;
    count(colors, cs.color);
    count(bg, cs.backgroundColor);
    count(fonts, cs.fontFamily.split(',')[0].replace(/["']/g, '').trim());
    if (cs.borderTopLeftRadius && cs.borderTopLeftRadius !== '0px') count(radii, cs.borderTopLeftRadius);
    if (parseFloat(cs.borderTopWidth) > 0) count(borders, cs.borderTopWidth + ' ' + cs.borderTopStyle + ' ' + cs.borderTopColor);
  }
  const sample = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    return {
      selector: sel,
      text: (el.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 90),
      fontFamily: cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(),
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      lineHeight: cs.lineHeight,
      letterSpacing: cs.letterSpacing,
      color: cs.color,
      background: cs.backgroundColor,
      textTransform: cs.textTransform,
      textAlign: cs.textAlign,
      borderRadius: cs.borderTopLeftRadius,
      padding: cs.padding,
      boxShadow: cs.boxShadow === 'none' ? null : cs.boxShadow,
      backdropFilter: cs.backdropFilter === 'none' ? null : cs.backdropFilter,
    };
  };
  const top = (map, n = 12) =>
    Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, n).map(([value, count]) => ({ value, count }));
  return {
    title: document.title,
    description: (document.querySelector('meta[name="description"]') || {}).content || null,
    htmlBackground: getComputedStyle(document.documentElement).backgroundColor,
    bodyBackground: getComputedStyle(document.body).backgroundColor,
    pageHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
    fonts: top(fonts, 8),
    textColors: top(colors, 10),
    backgrounds: top(bg, 10),
    radii: top(radii, 8),
    borders: top(borders, 6),
    typeSamples: ['h1', 'h2', 'h3', 'p', 'a', 'button', 'nav a', 'footer p'].map(sample).filter(Boolean),
  };
}

async function captureSite(browser, site, outRoot) {
  const dir = path.join(outRoot, site.slug);
  await fs.mkdir(dir, { recursive: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    userAgent: UA,
    locale: 'en-US',
    timezoneId: 'Europe/Berlin',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9' },
  });
  const page = await context.newPage();
  const result = { ...site, status: 'error', httpStatus: null, error: null, title: null, files: [] };
  try {
    const response = await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    result.httpStatus = response ? response.status() : null;
    await page.waitForTimeout(2500);
    try {
      let clicked = await page.evaluate(dismissConsent, CONSENT_LABELS);
      // Consent managers frequently live in a cross-origin iframe, so check every frame too.
      if (!clicked) {
        for (const frame of page.frames()) {
          if (frame === page.mainFrame()) continue;
          try {
            if (await frame.evaluate(dismissConsent, CONSENT_LABELS)) { clicked = true; break; }
          } catch {}
        }
      }
      if (!clicked) {
        // Last resort: a real (trusted) click via Playwright — some consent buttons ignore
        // synthetic .click() calls because they sit behind a styled wrapper.
        for (const frame of page.frames()) {
          try {
            const btn = frame.getByRole('button', { name: /^(accept all|alle akzeptieren|tout accepter|aceptar todo|accetta tutti)$/i }).first();
            if (await btn.count()) { await btn.click({ timeout: 4000 }); clicked = true; break; }
          } catch {}
        }
      }
      if (clicked) await page.waitForTimeout(1800);
    } catch {}
    await page.mouse.move(720, 450);
    await page.evaluate(() => window.scrollBy(0, 400));
    await page.waitForTimeout(900);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1200);

    try {
      const tokens = await page.evaluate(collectTokens);
      result.title = tokens.title;
      await fs.writeFile(path.join(dir, 'tokens.json'), JSON.stringify(tokens, null, 2));
      result.files.push('tokens.json');
    } catch (err) {
      result.tokenError = String(err).split('\n')[0];
    }

    await page.screenshot({ path: path.join(dir, 'hero.jpg'), type: 'jpeg', quality: 85 });
    result.files.push('hero.jpg');
    result.status = result.httpStatus && result.httpStatus >= 400 ? 'http-error' : 'ok';
  } catch (err) {
    result.error = String(err && err.message ? err.message : err).split('\n')[0];
  } finally {
    await context.close().catch(() => {});
  }
  return result;
}

const only = process.argv.slice(2);
const sites = only.length ? SITES.filter((s) => only.includes(s.slug)) : SITES;
const outRoot = path.resolve('reference');
const browser = await chromium.launch({
  args: ['--disable-blink-features=AutomationControlled', '--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
});
const results = [];
for (let i = 0; i < sites.length; i += 2) {
  const batch = sites.slice(i, i + 2);
  const batchResults = await Promise.all(batch.map((s) => captureSite(browser, s, outRoot)));
  results.push(...batchResults);
  for (const r of batchResults) {
    console.log(`${r.status.padEnd(10)} ${r.slug.padEnd(14)} ${r.httpStatus ?? '-'} ${r.title ? r.title.slice(0, 40) : ''} ${r.error ?? ''}`);
  }
}
await browser.close();
// Merge into the existing report so a partial run (one or two sites) does not wipe the others.
const reportPath = path.join(outRoot, 'capture-report.json');
let merged = results;
try {
  const previous = JSON.parse(await fs.readFile(reportPath, 'utf8'));
  const bySlug = new Map(previous.map((r) => [r.slug, r]));
  for (const r of results) bySlug.set(r.slug, r);
  merged = SITES.map((s) => bySlug.get(s.slug)).filter(Boolean);
} catch {}
for (const r of merged) r.capturedAt = new Date().toISOString();
await fs.writeFile(reportPath, JSON.stringify(merged, null, 2));
console.log('done', results.filter((r) => r.status === 'ok').length, '/', results.length);
