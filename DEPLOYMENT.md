# Des Moines Junk Removal — Deployment Guide

The site is built and ready. Here's how to get it live.

## Local Preview

```bash
cd /Users/rdoser/Desktop/Claude-Code-Folder/des-moines-junk-removal
npm run dev
# Opens http://localhost:4321
```

## Before You Deploy — Two Things to Replace

1. **Web3Forms access key** — the quote form needs a free access key
   - Go to https://web3forms.com → enter `contact@desmoinesjunkremoval.com` → check email for key
   - Open `src/components/QuoteForm.astro`
   - Replace `REPLACE_WITH_WEB3FORMS_KEY` with the key
   - Save and re-build

2. **Real Google reviews** — `src/pages/index.astro` has 3 `[REAL REVIEW PLACEHOLDER]` slots. Replace with real reviews once your GBP has them.

## Deploy via Cloudflare Pages + GitHub

### 1. Push to GitHub

```bash
cd /Users/rdoser/Desktop/Claude-Code-Folder/des-moines-junk-removal
git init
git add .
git commit -m "Initial site build"
# Create new repo on github.com (public is fine) named: des-moines-junk-removal
git remote add origin https://github.com/YOUR-USERNAME/des-moines-junk-removal.git
git branch -M main
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Authorize GitHub and pick `des-moines-junk-removal`
3. **Build settings:**
   - Production branch: `main`
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. ⚠️ **CRITICAL — Environment variables:** add `NODE_VERSION = 22` under Production **before clicking Save and Deploy**. Skipping this is the #1 cause of first-build failures.
5. Click **Save and Deploy**. First build takes ~2-3 minutes.

### 3. Point Your Domain

1. In Cloudflare Pages project → **Custom domains** → **Set up a custom domain**
2. Enter `desmoinesjunkremoval.com`
3. If your domain is on Cloudflare DNS already, it auto-configures. Otherwise copy the CNAME records to your registrar.
4. Wait 5-30 minutes for HTTPS cert provisioning.

### 4. Verify Launch

- [ ] https://desmoinesjunkremoval.com loads with HTTPS (no cert warning)
- [ ] http:// redirects to https://
- [ ] www and non-www both work
- [ ] Phone link opens dialer on mobile
- [ ] Submit a real form test — confirm it lands in `contact@desmoinesjunkremoval.com`
- [ ] Sitemap loads: https://desmoinesjunkremoval.com/sitemap-index.xml

## Same-Day Post-Launch Checklist

1. **Google Search Console** — https://search.google.com/search-console → add property → verify via DNS TXT record → submit `/sitemap-index.xml`
2. **Bing Webmaster Tools** — https://www.bing.com/webmasters → import from GSC
3. **Google Business Profile** — work through `LOCAL_SEO_PLAN.md` Phase 1
4. **GA4** — https://analytics.google.com → create property → paste the gtag snippet into `src/layouts/Layout.astro` just before `</head>`

## Site Structure (22 pages)

- `/` — Homepage
- `/services/` — Services index
- 5 service pages: `/furniture-removal/`, `/appliance-removal/`, `/garage-cleanouts/`, `/basement-cleanouts/`, `/construction-debris-removal/`
- `/service-area/` — Service area overview
- 8 city pages: `/des-moines/`, `/west-des-moines/`, `/ankeny/`, `/urbandale/`, `/waukee/`, `/johnston/`, `/altoona/`, `/clive/`
- `/about/`, `/contact/`
- `/privacy/`, `/terms/`, `/disclaimer/`
- `/404`

## Editing Content Later

- **Phone, email, hours, colors:** `src/data/site.ts`
- **Service page copy, FAQs, pricing:** `src/data/services.ts`
- **City page copy, neighborhoods:** `src/data/cities.ts`
- **Layout (header, footer, meta):** `src/layouts/Layout.astro`
- **Global styles:** `src/styles/global.css`

After editing, run `npm run build` to verify it still builds, then `git push` — Cloudflare auto-deploys in ~90 seconds.
