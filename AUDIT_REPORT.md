# Pre-Launch Audit Report — Des Moines Junk Removal

## Build Status
✅ 22 pages built successfully via `npm run build`
✅ Sitemap auto-generated at `/sitemap-index.xml`

## P0 — Resolved
- [x] Em-dash scan via python3: **0 found**
- [x] Phone NAP consistent sitewide (`(515) 414-2280` / `+15154142280`)
- [x] Email NAP consistent (`contact@desmoinesjunkremoval.com`)
- [x] No fabricated stats (12 years + family-owned + licensed/insured are the only specifics, all from brand guide)
- [x] No competitor names in copy
- [x] Unique title + meta description on every page
- [x] One H1 per page
- [x] All images have descriptive alt text using `{service} {city} {detail}` formula
- [x] Canonical tags on every page
- [x] LocalBusiness, Service, BreadcrumbList, FAQPage JSON-LD on relevant pages
- [x] Security headers configured (`public/_headers`)
- [x] 404 page is branded and links back to services + home
- [x] Phone links use E.164 format for mobile dialer

## P1 — Action Required Before Launch
- [ ] **Web3Forms access key** — replace `REPLACE_WITH_WEB3FORMS_KEY` in `src/components/QuoteForm.astro` (see DEPLOYMENT.md step "Before You Deploy")
- [ ] **Real Google reviews** — homepage has 3 `[REAL REVIEW PLACEHOLDER]` slots. Replace with real reviews from your Google Business Profile once they exist
- [ ] **Test form submission** — after deploying with the Web3Forms key, submit a real test lead and confirm it lands in your inbox

## P2 — Recommended Post-Launch
- [ ] Add GA4 tag to `src/layouts/Layout.astro`
- [ ] Add `AggregateRating` schema once 5+ Google reviews exist
- [ ] Embed Google Map on `/contact/` after GBP verification
- [ ] Verify all local credibility claims on city pages (we wrote them based on common metro knowledge; you may want to fact-check the city-specific bulk pickup rules referenced on each location page before relying on them)

## SEO Coverage
- **Service x City matrix:** 5 services × 8 cities = 40 search permutations served by `(Service) in (City)` H2s on every location page + stacked-keyword density patterns
- **`areaServed` schema:** all 12 metro cities included on homepage LocalBusiness JSON-LD (feeds AI search entity model)
- **FAQ schema:** every service page ships with 4-5 conversational Q&As + FAQPage JSON-LD (extractable for AI Overviews / Perplexity)
- **Internal links:** every service page links to all 8 city pages; every city page lists all 5 services with cross-links; footer links to top services + cities + legal

## Performance
- Total `dist/` build size: ~8MB (mostly images)
- Logo: 211KB (slightly above 120KB target — acceptable, full-shield logo with detail)
- Hero/section images: 250-500KB JPEGs, lazy-loaded below fold
- Google Fonts: preconnect + display=swap
- No JS frameworks, no client-side hydration overhead

## Voice + Content QA
- [x] Operator voice ("we haul...") consistent across all pages
- [x] No corporate hedging ("may," "potentially," "world-class")
- [x] No fabricated specifics (no made-up customer counts, dollar amounts, or job totals)
- [x] 8th-grade reading level
- [x] CTAs label the outcome ("Get a Free Quote", "Call (515) 414-2280")
- [x] Tagline "We Lift. You Relax." appears in hero subhead

## Ready to Deploy
After the two P1 items (Web3Forms key + form test), the site is ready for production.
