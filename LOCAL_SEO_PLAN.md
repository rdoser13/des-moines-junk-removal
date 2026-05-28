# Des Moines Junk Removal — Local SEO Launch Plan

Companion to the website build. Three surfaces to win: **Google organic**, **Google Map Pack**, **AI search** (ChatGPT, Perplexity, Google AI Overviews).

NAP (use byte-for-byte everywhere):
- **Name:** Des Moines Junk Removal
- **Phone:** (515) 414-2280
- **Email:** contact@desmoinesjunkremoval.com

---

## Phase 1 — Foundation (Weeks 1-2)

### Google Business Profile (Highest leverage — wins the Map Pack)
**Priority: High · Effort: 4-6 hours · Impact: 10/10 · Surface: Map Pack + AI search**

1. Claim/create profile at business.google.com using the NAP above
2. Verify (video verification is the current default)
3. **Primary category:** `Junk removal service` (most specific match — do not stuff name with keywords)
4. **Secondary categories:** Garbage dump service, Waste management service, Demolition contractor, Hauling contractor
5. **Service-area business** setup: list all 8 metro cities (Des Moines, West Des Moines, Ankeny, Urbandale, Waukee, Johnston, Altoona, Clive) + the 8 surrounding communities. Hide the street address.
6. Description (750 char max):

```
Des Moines Junk Removal provides family-owned junk removal and hauling in
Des Moines and the surrounding metro. We serve West Des Moines, Ankeny,
Urbandale, Waukee, Johnston, Altoona, and Clive with furniture removal,
appliance removal, garage cleanouts, basement cleanouts, and construction
debris removal. Licensed and insured Iowa hauling contractor with 12 years
serving the area. Same-week pickup, flat-rate pricing. Call (515) 414-2280
for a free quote.
```

7. Add every service from `/services/` as a Service item, each linked to its matching page on the site
8. Attributes: Licensed, Insured, Free estimates, Online estimates, Family-owned
9. Photos: logo, cover (truck), 5+ job-site photos, 3+ truck/team exterior, 10+ service action shots. Use your DSM Junk Removal Images.
10. Enable messaging if you can respond within 1 hour during business hours
11. Seed Q&A with 3-5 real customer questions and answer them yourself

### Review System (Map Pack flywheel)
**Priority: High · Effort: 2 hours setup, ongoing · Impact: 10/10 · Surface: Map Pack + AI**

- Generate a direct review link from your GBP
- Create a QR code that points to it (print on invoices, business cards, truck door)
- SMS template:
  ```
  Hi [Name], thanks for choosing Des Moines Junk Removal! A quick Google
  review takes under a minute and helps a ton: [link]
  ```
- Send within 24 hours of the job, while satisfaction is peak
- Respond to every review within 24 hours, by name, mentioning the service + city
- Goal: 1-2 new reviews per week, every week. Velocity matters more than total.

### NAP Audit
**Priority: High · Effort: 2 hours · Impact: 8/10 · Surface: All three**

Search `"Des Moines Junk Removal"` and check every listing. Fix any phone, address, or name variations. Inconsistent NAP confuses Google's entity matching AND AI assistants.

---

## Phase 2 — Citations (Weeks 2-4)

### Tier 1 (do first)
- [ ] Google Business Profile (above)
- [ ] Bing Places (import from GBP)
- [ ] Apple Business Connect
- [ ] Yelp
- [ ] Facebook Business Page

### Tier 2 (high authority)
- [ ] Yellow Pages
- [ ] BBB Iowa (apply for accreditation if budget allows)
- [ ] Foursquare
- [ ] Nextdoor (claim business + post in local neighborhoods)
- [ ] MapQuest
- [ ] Superpages
- [ ] DexKnows

### Tier 3 (industry-specific)
- [ ] Angi (formerly Angie's List)
- [ ] HomeAdvisor
- [ ] Thumbtack
- [ ] Houzz Pro
- [ ] JunkRemovalReviews.com
- [ ] LoadUp (independent hauler network)

### Tier 4 (local Des Moines)
- [ ] Greater Des Moines Partnership directory
- [ ] Des Moines Register business listings
- [ ] Polk County Chamber of Commerce
- [ ] Local Iowa contractor directories

**Reality check:** Build the heavy hitters first. Don't chase 100 filler directories — quality and NAP consistency over raw count.

---

## Phase 3 — On-Page SEO (already shipped on the site)

The website ships with:
- Unique meta title + description per page
- One H1 per page, primary keyword in URL/H1/title/first 100 words
- Stacked `{Service} in {City}` H2s on location pages
- LocalBusiness + Service + BreadcrumbList + FAQPage JSON-LD
- `areaServed` populated with all 12 metro cities (feeds AI entity model)
- Descriptive image alt text using `{service} {city} {detail}` formula
- Sitemap auto-generated
- robots.txt + security headers in `public/_headers`

**Post-launch on-page additions:**
- [ ] Add real Google reviews to homepage testimonials section (replace placeholders)
- [ ] Add AggregateRating schema once you have 5+ Google reviews
- [ ] Embed Google Map on /contact/ once GBP is verified

---

## Phase 4 — Backlinks (Weeks 4-12)

Ordered by effectiveness:

1. **Local listicle inclusion** — pitch yourself to existing "best junk removal in Des Moines" listicles
2. **Publish your own listicle** — "Best Junk Removal Companies in Des Moines" honestly featuring competitors → warm outreach hook for partnerships
3. **Local sponsorships** — youth sports teams, school fundraisers, charity cleanups (cheap, real local relevance)
4. **Chamber of Commerce** — Greater Des Moines Partnership membership
5. **Local news pitches** — community cleanup events, free junk removal day for veterans/seniors
6. **Partnerships** — moving companies, real estate agents, property managers, estate sale companies (cross-link + referral)

---

## Phase 5 — AI Search (GEO) — Monthly Loop

This is the surface most competitors ignore. The website was built with extractable structure, schema, and entity clarity to support it.

### Monthly test (set a calendar reminder)
1. Ask ChatGPT, Perplexity, and Google: *"best junk removal in Des Moines"*, *"who haul away furniture in Des Moines"*, *"junk removal companies Ankeny Iowa"*, *"how much does garage cleanout cost in Des Moines"*
2. Record: are you named? cited with a link? Who is named instead?
3. Diagnose the gap (thin homepage? no AggregateRating? not on the local listicles the AI cites?)
4. Fix the diagnosed gap
5. Re-test next month

### What's already built for AI search
- Conversational FAQ sections on every service page + FAQPage schema (extractable Q&A)
- Direct, answer-first copy ("We offer furniture removal in Des Moines...")
- Entity-clear homepage with NAP, services, and area served stated plainly
- LocalBusiness JSON-LD with all 8 cities in areaServed
- Clean URL structure

### What to add post-launch
- Real Google reviews + AggregateRating schema
- Mentions on local listicles and industry directories (Phase 4 + Phase 2)
- A few question-targeted blog posts: "How much does junk removal cost in Des Moines?", "What can't junk removal companies take?", "Junk removal vs dumpster rental in Des Moines"

---

## Monitoring (set expectations honestly)

| Metric | Tool | First movement | Page 1 attempt |
|---|---|---|---|
| Organic impressions | Google Search Console | 2-3 weeks | Month 3-4 |
| Map Pack ranking | GBP Insights + manual check | Driven by reviews | Month 2-4 |
| AI search citations | Manual monthly test | Month 2-3 | Month 4-6 |
| Form leads | Web3Forms inbox | Day 1 if you push traffic | — |

Local SEO is a months-not-weeks game. Reviews are the fastest lever. Keep the GBP active with weekly posts and reply to every review within 24 hours.
