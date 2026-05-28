export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string; // raw HTML body
};

const inlineCta = `
<div class="inline-cta">
  <h4>Want a real flat-rate quote?</h4>
  <p>Text photos to (515) 414-2280 or use our form. We send a written price the same day.</p>
  <a href="/contact/" class="btn btn-primary">Get a Free Quote</a>
</div>`;

export const posts: Post[] = [
  {
    slug: "junk-removal-cost-des-moines",
    title: "How Much Does Junk Removal Cost in Des Moines?",
    metaTitle: "How Much Does Junk Removal Cost in Des Moines? (2026)",
    metaDescription: "What junk removal actually costs in Des Moines. Truck-load tiers, single-item pricing, and the factors that move your final price up or down.",
    date: "May 10, 2026",
    readTime: "7 min",
    excerpt: "Most full junk removal jobs in the Des Moines metro run $200 to $750. Here's what drives the number and how to get a real flat-rate quote without surprises.",
    image: "/images/dsm-3.jpg",
    imageAlt: "Des Moines junk removal pricing and truck loading",
    body: `
<p>If you've ever called around for junk removal quotes in Des Moines, you've probably heard everything from "we charge by the hour" to "it depends" to a flat refusal to give a number until someone is on site. None of that is helpful when you're trying to budget for a garage cleanout or a single appliance pickup.</p>
<p>Here's a straight breakdown of what junk removal actually costs in the Des Moines metro, what drives the price up or down, and how to get a real flat-rate number the same day you call.</p>

<h2>Average Junk Removal Cost in Des Moines</h2>
<p>Most full junk removal jobs in the Des Moines metro fall between $200 and $750. Single-item pickups (a couch, a fridge, a mattress) usually run $75 to $175. Larger cleanouts (full garage, packed basement, estate clear-out) run $400 to $1,200 or more depending on volume and access.</p>
<p>Our truck holds about 15 cubic yards. We price by how much of the truck your job fills:</p>
<ul>
  <li><strong>1/4 truck (~4 cubic yards):</strong> $200</li>
  <li><strong>1/2 truck (~7 cubic yards):</strong> $400</li>
  <li><strong>3/4 truck (~11 cubic yards):</strong> $575</li>
  <li><strong>Full truck (~15 cubic yards):</strong> $750</li>
</ul>
<p>That's flat-rate. No hourly meter. Loading, transfer station fees, and floor protection are included.</p>

<h2>What Drives the Price</h2>
<h3>Volume</h3>
<p>The single biggest factor. A single couch is 1/8 of a truck. A packed two-car garage is usually a full truck or more. Send photos and we can estimate volume the same day.</p>

<h3>Weight</h3>
<p>Heavy materials like concrete, brick, shingles, and tile carry per-ton fees at the transfer station. If your job is mostly drywall and lumber, weight isn't a factor. If you're hauling a half-truck of broken concrete, it adds $100 to $200 to the price.</p>

<h3>Special Items</h3>
<ul>
  <li><strong>Refrigerators and freezers:</strong> $25-$50 each for EPA-compliant refrigerant recycling</li>
  <li><strong>Mattresses and box springs:</strong> $20-$40 each for Iowa per-unit disposal fees</li>
  <li><strong>CRT TVs and old electronics:</strong> $15-$40 each for Iowa e-waste recycling</li>
  <li><strong>Tires:</strong> $5-$15 each for tire disposal fees</li>
</ul>

<h3>Access</h3>
<p>Stairs, narrow doorways, long carries from basement to truck, and tight alley access (common in Sherman Hill, Valley Junction, and Windsor Heights) add labor time. We still quote flat-rate, just with a bigger crew.</p>

${inlineCta}

<h2>What's Always Included</h2>
<ul>
  <li>All loading and carrying labor</li>
  <li>Floor and door-frame protection</li>
  <li>Sweep-up after the load</li>
  <li>Transfer station fees</li>
  <li>Donation routing for usable items</li>
  <li>Licensed and insured hauling</li>
</ul>

<h2>How to Get a Real Quote (Without Anyone Coming to Your House)</h2>
<p>The fastest way: text 3-5 photos to (515) 414-2280 showing all the items you want hauled. Include a wide shot of the room or pile so we can estimate volume. We send back a written flat-rate quote the same day, usually within an hour during business hours.</p>
<p>For larger jobs (full basements, estate cleanouts, commercial work), we'll come out for a free on-site walkthrough and quote in person.</p>

<h2>Junk Removal vs Dumpster Rental in Des Moines</h2>
<p>If you're trying to decide between hiring us and renting a dumpster, the math usually goes like this: a 10-yard dumpster in Des Moines runs $300 to $450 for a week, plus tonnage fees. You load it yourself. For a one-time clear-out, hiring us is usually cheaper and faster. For a multi-week renovation, a dumpster makes more sense. We'll tell you honestly which is better for your situation.</p>

<h2>Ready for a Real Price?</h2>
<p>Text photos to (515) 414-2280 or use our quote form. Same-week pickup across the Des Moines metro, flat-rate pricing, no surprise fees.</p>
`
  },
  {
    slug: "junk-removal-vs-dumpster-rental",
    title: "Junk Removal vs Dumpster Rental: Which Saves More in Des Moines?",
    metaTitle: "Junk Removal vs Dumpster Rental in Des Moines: Which Is Cheaper?",
    metaDescription: "Side-by-side comparison of junk removal and dumpster rental costs in the Des Moines metro. When each option saves you more money and time.",
    date: "May 5, 2026",
    readTime: "6 min",
    excerpt: "A 10-yard dumpster in Des Moines runs $300-$450 plus tonnage fees, and you load it yourself. Here's when that's the right call and when hiring a crew saves more.",
    image: "/images/dsm-8.jpg",
    imageAlt: "Junk removal vs dumpster rental comparison Des Moines",
    body: `
<p>One of the most common questions we get in Des Moines: "Should I just rent a dumpster instead?" Sometimes yes. Often no. Here's the honest breakdown so you can decide before you spend money.</p>

<h2>Dumpster Rental Cost in Des Moines</h2>
<p>A standard 10-yard dumpster in the Des Moines metro runs $300 to $450 for a week-long rental. Larger 20-yard dumpsters run $400 to $600. Most rental companies charge per-ton tipping fees on top, typically $50 to $80 per ton over the first one or two tons included.</p>
<p>That price gets you the dumpster delivered, sitting on your driveway for a week, and hauled away when you're done. You load it. You take time off work to be there for delivery and pickup. You eat any HOA grief about a metal box in your driveway for seven days.</p>

<h2>Junk Removal Cost in Des Moines</h2>
<p>A full-truck junk removal job in the metro runs about $750. A half-truck job is $400. That price includes our crew loading everything, hauling the same day, transfer station fees, and donation routing. You don't lift a thing. The truck is on your property for an hour or two, not a week.</p>

${inlineCta}

<h2>When Dumpster Rental Wins</h2>
<ul>
  <li><strong>Multi-week renovation projects.</strong> If you're doing a full kitchen tear-out over a month, a dumpster is more economical than calling for repeat pickups.</li>
  <li><strong>DIY roofing.</strong> Old shingles are heavy and a dumpster lets you load at your own pace as you tear off.</li>
  <li><strong>Construction sites where crews need ongoing access.</strong> A dumpster on site means trades can dump as they work.</li>
  <li><strong>You enjoy the loading.</strong> Some people do. No judgment.</li>
</ul>

<h2>When Junk Removal Wins</h2>
<ul>
  <li><strong>One-time clear-outs.</strong> Garage, basement, estate cleanouts, post-move junk piles. Hiring us is faster and usually cheaper than a dumpster + your time.</li>
  <li><strong>Heavy items you can't move.</strong> Hot tubs, pianos, treadmills, washers, dryers, fridges. You're not getting those into a dumpster without help.</li>
  <li><strong>Tight access.</strong> If your driveway can't fit a dumpster (common in Valley Junction, older Beaverdale, Sherman Hill), junk removal is the only option.</li>
  <li><strong>HOA restrictions.</strong> Some Des Moines metro HOAs limit dumpster days or require permits.</li>
  <li><strong>Stairs and carry-up.</strong> A dumpster doesn't carry a couch up a basement staircase. We do.</li>
  <li><strong>You value your time.</strong> A garage that would take you a weekend to load takes our crew 2 hours.</li>
</ul>

<h2>Real Comparison: Two-Car Garage Cleanout in West Des Moines</h2>
<p><strong>Dumpster path:</strong> $400 for a 10-yard dumpster, $60 in tonnage fees for the second ton, your entire Saturday to load it, $0 if you don't value your time. Total cash: ~$460. Total with your time at $25/hour: ~$660.</p>
<p><strong>Junk removal path:</strong> $575 for a 3/4-truck pickup. Our crew loads in 2 hours. You stand on the driveway and point. Total cash: $575. Total with your time: $625.</p>
<p>Close. The deciding factor is usually whether you'd rather spend a Saturday loading or not.</p>

<h2>How to Decide</h2>
<p>Text photos of your job to (515) 414-2280. We'll tell you honestly which option saves more in your specific situation. If a dumpster is the better call, we'll say so.</p>
`
  },
  {
    slug: "what-junk-removal-wont-take-iowa",
    title: "What Junk Removal Companies Won't Take in Iowa",
    metaTitle: "What Junk Removal Companies Won't Take in Iowa | Hazardous Items List",
    metaDescription: "Items Iowa junk removal companies legally cannot haul: hazardous waste, certain chemicals, propane, and more. Where to take them instead in the Des Moines metro.",
    date: "April 28, 2026",
    readTime: "5 min",
    excerpt: "Iowa has specific rules about what licensed haulers can and can't put on a truck. Here's the list of items we can't take, and where to drop them safely in the Des Moines metro.",
    image: "/images/dsm-6.jpg",
    imageAlt: "Hazardous items Iowa junk removal companies cannot haul",
    body: `
<p>One of the most common questions on a quote call: "Will you take this?" Most of the time the answer is yes. Sometimes it's no, and it's not because we don't want to. Iowa law and federal EPA rules prohibit licensed haulers from putting certain materials on the truck.</p>
<p>Here's what we can't take, why, and where to drop them safely in the Des Moines metro.</p>

<h2>Hazardous Materials We Cannot Haul</h2>
<ul>
  <li><strong>Wet paint and stains.</strong> Latex paint that's fully dried (open the can, let it sit) can go on the truck. Wet paint cannot. Drop at the Metro Hazardous Waste Drop-Off Facility, 2900 SE 14th St, Des Moines.</li>
  <li><strong>Motor oil, gasoline, and automotive fluids.</strong> Same drop-off facility, or your local auto parts store (most accept used oil).</li>
  <li><strong>Pesticides, herbicides, and lawn chemicals.</strong> Hazardous waste facility only.</li>
  <li><strong>Propane tanks (full or partial).</strong> Exchange at any propane retailer (Blain's, Menards, etc.). Empty tanks can sometimes go on the truck if they're verified empty and the valve is removed.</li>
  <li><strong>Ammunition, fireworks, and explosives.</strong> Polk County Sheriff non-emergency line for disposal coordination.</li>
  <li><strong>Asbestos materials.</strong> Requires a licensed asbestos abatement contractor. We can refer one.</li>
  <li><strong>Medical waste, sharps, and biohazards.</strong> Pharmacies (CVS, Walgreens) often accept sharps. Medical waste needs a specialized disposal contractor.</li>
  <li><strong>Radioactive materials</strong> (yes, including old smoke detectors with americium). Iowa DNR has specific drop-off protocols.</li>
</ul>

${inlineCta}

<h2>Items We CAN Take (But Cost Extra)</h2>
<ul>
  <li><strong>Refrigerators, freezers, and AC units.</strong> Iowa requires EPA-compliant refrigerant reclamation. Adds $25-$50 per unit. We route to a certified recycler.</li>
  <li><strong>Mattresses and box springs.</strong> Iowa charges per-unit disposal fees, typically $20-$40 each. Built into the quote.</li>
  <li><strong>CRT TVs, monitors, and old electronics.</strong> Iowa e-waste recycling fees apply, $15-$40 per unit depending on size.</li>
  <li><strong>Tires.</strong> Iowa tire disposal fees apply, $5-$15 per tire.</li>
  <li><strong>Hot tubs.</strong> Heavy and require disassembly. Quoted on-site, typically $350-$750.</li>
  <li><strong>Pianos.</strong> Heavy and awkward, but yes. Quoted per piano.</li>
</ul>

<h2>Items We Always Take</h2>
<ul>
  <li>Furniture of every kind</li>
  <li>Appliances (washers, dryers, dishwashers, stoves, microwaves, water heaters)</li>
  <li>Mattresses and box springs</li>
  <li>Construction debris (drywall, lumber, flooring, cabinets, fixtures)</li>
  <li>Yard waste (tree limbs, brush, bagged leaves, sod)</li>
  <li>Boxes, packaging, papers, and general clutter</li>
  <li>Exercise equipment (treadmills, ellipticals, weight sets)</li>
  <li>Toys, kids' gear, baby furniture</li>
  <li>Estate contents (clothes, kitchenware, decor, collectibles)</li>
</ul>

<h2>Not Sure What You Have?</h2>
<p>If you're unsure whether an item can go on the truck, text a photo to (515) 414-2280 or call. We'll tell you up front. If we can't take something, we'll point you to the right Polk County facility.</p>
`
  },
  {
    slug: "how-to-prepare-for-garage-cleanout",
    title: "How to Prepare for a Garage Cleanout (Des Moines Edition)",
    metaTitle: "How to Prepare for a Garage Cleanout in Des Moines",
    metaDescription: "A simple prep checklist for your Des Moines garage cleanout: what to sort beforehand, what to leave for the crew, and how to get the fastest quote.",
    date: "April 22, 2026",
    readTime: "5 min",
    excerpt: "You don't have to sort everything yourself. But a few minutes of prep makes the whole job faster and cheaper. Here's our 6-step prep checklist.",
    image: "/images/dsm-5.jpg",
    imageAlt: "How to prepare for a garage cleanout Des Moines",
    body: `
<p>The biggest myth about hiring a junk removal crew is that you have to have everything sorted, bagged, and ready at the curb before we arrive. You don't. That's literally our job.</p>
<p>That said, a few minutes of prep makes the quote more accurate and the job faster. Here's the short version.</p>

<h2>1. Walk Through and Mentally Sort Into Three Piles</h2>
<p>You don't have to physically move anything. Just walk the garage and mentally tag everything as <strong>Keep</strong>, <strong>Donate</strong>, or <strong>Haul</strong>. When our crew arrives, you point. We do.</p>
<p>Most homeowners realize during this walk that 30-50% of what's stored could go to donation. That's free, it helps your community, and it makes your garage actually usable again.</p>

<h2>2. Take 3-5 Photos for Your Quote</h2>
<p>Wide shots of each wall and one shot of any major item (lawnmower, old fridge, treadmill). Text them to (515) 414-2280. We send a flat-rate quote the same day, usually within an hour.</p>

<h2>3. Pull Hazardous Items Aside</h2>
<p>Iowa law prohibits licensed haulers from taking wet paint, motor oil, gasoline, pesticides, and propane. Set those aside in a corner. We can advise on the nearest Polk County drop-off facility (it's 2900 SE 14th St in Des Moines for most metro residents).</p>

${inlineCta}

<h2>4. Identify Anything Special</h2>
<ul>
  <li><strong>Refrigerator or freezer?</strong> Mention it. We bring straps and route to an EPA recycler.</li>
  <li><strong>Tires?</strong> Count them. Iowa charges per-tire disposal fees.</li>
  <li><strong>Old paint?</strong> Latex paint that's fully dried (open the can a few days before) can go on the truck. Wet paint cannot.</li>
  <li><strong>Items in good condition?</strong> Tell us. We route to donation first.</li>
</ul>

<h2>5. Clear a Path to the Driveway</h2>
<p>If your garage opens to the driveway, you're set. If we need to carry items through a side gate or down a slope, make sure the path is clear of bikes, hoses, and toys. Five minutes here saves 30 minutes on the job.</p>

<h2>6. Plan Where the Truck Stages</h2>
<p>Most of our Des Moines metro jobs are easy: truck pulls into the driveway, crew carries to the truck, done. In older neighborhoods (Sherman Hill, Valley Junction, Windsor Heights) where street parking is tight, think about where the truck can sit without blocking neighbors. If you're not sure, ask us when we confirm the booking. We've staged trucks on every kind of Des Moines street.</p>

<h2>What You DON'T Have to Do</h2>
<ul>
  <li>Move anything to the curb</li>
  <li>Bag or box items</li>
  <li>Disassemble furniture</li>
  <li>Sweep up before we leave (we do that)</li>
  <li>Take time off work (we can do the job with a key/garage code if you're not home)</li>
</ul>

<h2>Ready to Schedule?</h2>
<p>Text photos to (515) 414-2280 for a same-day quote. Most Des Moines metro garage cleanouts are scheduled within 2 to 4 days.</p>
`
  },
  {
    slug: "best-time-for-basement-cleanout-iowa",
    title: "Best Time of Year for a Basement Cleanout in Iowa",
    metaTitle: "Best Time of Year for a Basement Cleanout in Iowa",
    metaDescription: "When to schedule a basement cleanout in Iowa for the best pricing and fastest service. Why spring and fall are ideal, and why winter has hidden upsides.",
    date: "April 15, 2026",
    readTime: "4 min",
    excerpt: "Iowa basements are a different animal. Spring flood damage, fall pre-winter clear-outs, and a slow winter season that comes with discounts. Here's when to book.",
    image: "/images/dsm-11.jpg",
    imageAlt: "Best time of year for basement cleanout Iowa weather",
    body: `
<p>If you're sitting on a packed basement that needs to go, when you schedule the cleanout can affect both how smooth the job is and how much it costs.</p>

<h2>Spring (March-May): Highest Demand</h2>
<p>Spring is peak cleanout season in Iowa. Snow melts, sump pumps work overtime, and homeowners discover water damage to anything stored on the basement floor. We're booked 1-2 weeks out most of April and May. If you need a spring cleanout, call as early as you can.</p>

<h2>Summer (June-August): Steady but Manageable</h2>
<p>Summer slows slightly compared to spring. Same-week scheduling is usually open. The trade-off: Iowa summer humidity in an un-air-conditioned basement makes the job harder on the crew, which can mean breaks built into longer jobs. Not an issue for shorter pickups.</p>

${inlineCta}

<h2>Fall (September-November): Best Overall Window</h2>
<p>This is our recommendation for non-urgent cleanouts. Demand is moderate. Weather is mild. You're clearing the basement before the holiday season starts piling new boxes into storage. And you're ahead of any winter pipe-burst risk that exposes stored items to water damage.</p>

<h2>Winter (December-February): Hidden Upsides</h2>
<p>Most homeowners avoid scheduling basement cleanouts in December and January. That makes winter our slowest season, which means:</p>
<ul>
  <li>Faster scheduling (often same-day or next-day)</li>
  <li>More crew availability for larger jobs</li>
  <li>Occasional off-season pricing on full-day cleanouts</li>
</ul>
<p>The downside: snow-covered walkways and frozen ground complicate truck staging. We handle it, but plan for some shoveling beforehand. Iowa weather windows in January can also delay jobs if a storm hits.</p>

<h2>Weather-Driven Emergencies</h2>
<p>Sometimes the timing isn't yours to pick. Sump pump failure, frozen pipe burst, or sewer backup all create urgent cleanouts. We do same-day and next-day emergency response for water-damaged basements across the Des Moines metro. Mention "water damage" when you call and we'll bring the right protective gear and disposal channels.</p>

<h2>Best Window to Call</h2>
<p>For non-urgent cleanouts: <strong>mid-September to mid-November</strong> hits the sweet spot of mild weather, moderate demand, and quick scheduling.</p>
<p>For emergencies: call us the day it happens. (515) 414-2280.</p>
`
  },
  {
    slug: "mattress-disposal-des-moines",
    title: "Mattress Disposal in Des Moines: Your Options",
    metaTitle: "Mattress Disposal in Des Moines: Pickup, Drop-Off, and Recycling Options",
    metaDescription: "Every way to legally dispose of a mattress in Des Moines, Iowa: junk removal pickup, transfer station drop-off, mattress recycling, and what the city won't take.",
    date: "April 8, 2026",
    readTime: "5 min",
    excerpt: "Most Des Moines metro cities won't take mattresses at the curb. Here's every legal disposal option, including which transfer stations take them and what it costs.",
    image: "/images/dsm-2.jpg",
    imageAlt: "Mattress disposal Des Moines Iowa options",
    body: `
<p>Mattresses are one of the most awkward items to dispose of in Des Moines. They don't fit in trash bins. Most cities won't take them at the curb. They're too big for a car and too heavy for one person. Here are your actual options.</p>

<h2>What Des Moines Metro Cities Won't Take</h2>
<p>None of the major Des Moines metro municipal pickup programs take mattresses at the curb in regular trash. That includes Des Moines, West Des Moines, Ankeny, Urbandale, Waukee, Johnston, Altoona, and Clive. Bulk pickup windows in some cities accept them with advance scheduling and per-item fees, but availability is limited and rules change frequently.</p>

<h2>Option 1: Junk Removal Pickup (Easiest)</h2>
<p>We pick up single mattresses across the Des Moines metro for $75 to $125 depending on access and whether it's a queen, king, or pair with a box spring. Same-week scheduling, often same-day. We handle the carry-out and the Iowa per-unit disposal fee at the transfer station.</p>
<p>Best for: anyone who doesn't have a truck or a way to load a mattress, anyone clearing multiple mattresses (rental turnovers, estate cleanouts), anyone who values not destroying their back.</p>

${inlineCta}

<h2>Option 2: Transfer Station Drop-Off</h2>
<p>Polk County's Metro Park East Landfill accepts mattresses with a per-unit disposal fee (call ahead for current rates and hours). You'll need a truck or trailer that can fit the mattress, the ability to load it yourself, and time to drive out and back. Total cost is usually $30-$60 plus your time and gas.</p>
<p>Best for: people who already have a truck, a free morning, and one mattress to dispose of.</p>

<h2>Option 3: Mattress Recycling</h2>
<p>Some mattresses can be recycled. The metal springs, foam, and fabric are separated and reused. Iowa doesn't have a state-wide mattress recycling program like California or Connecticut, but a few private recyclers in the Des Moines area accept mattresses. Cost is comparable to landfill disposal.</p>
<p>If you specifically want your mattress recycled rather than landfilled, mention it when we quote. We route to a recycler when possible.</p>

<h2>Option 4: Donation (Rare)</h2>
<p>Most local donation centers (Goodwill, Salvation Army, ReStore) do NOT accept used mattresses due to bedbug and sanitation regulations. Don't waste time hauling one over.</p>
<p>Exception: if the mattress is brand new, unused, and still in original packaging, some shelters and women's transitional housing organizations may accept. Call ahead.</p>

<h2>Option 5: Retailer Take-Back</h2>
<p>If you're buying a new mattress from a major retailer (Mattress Firm, Sleep Number, Costco), most offer haul-away of the old mattress for $20-$50 as an add-on at purchase. This is usually the cheapest option if the timing works.</p>

<h2>What NOT to Do</h2>
<ul>
  <li><strong>Don't leave it at the curb.</strong> Most Des Moines metro cities will fine you for illegal bulk disposal.</li>
  <li><strong>Don't dump it in a vacant lot or alley.</strong> Iowa illegal dumping fines can hit $500 per offense.</li>
  <li><strong>Don't give it away on Craigslist without disclosing wear or stains.</strong> Mattresses are one of the most-flagged items.</li>
</ul>

<h2>Ready to Get Rid of It?</h2>
<p>Text a photo to (515) 414-2280 with the mattress size and any pickup-access notes (upstairs, basement, walk-up apartment). Same-day quote. Same-week pickup.</p>
`
  },
  {
    slug: "refrigerator-freon-recycling-iowa",
    title: "Refrigerator and Freon Recycling Rules in Iowa",
    metaTitle: "Refrigerator and Freon Recycling Rules in Iowa | Des Moines Disposal",
    metaDescription: "How to legally dispose of a refrigerator or freezer in Iowa. EPA refrigerant rules, recycling options, and what it costs in Des Moines.",
    date: "April 1, 2026",
    readTime: "5 min",
    excerpt: "Federal EPA law requires refrigerant reclamation before any fridge can be scrapped or landfilled. Here's how Iowa handles it and how to dispose of your old fridge legally.",
    image: "/images/dsm-3.jpg",
    imageAlt: "Refrigerator freon recycling Iowa EPA rules",
    body: `
<p>Old refrigerators and freezers can't be tossed in a dumpster or left at the curb in Iowa. Federal EPA law (Section 608 of the Clean Air Act) requires a certified technician to reclaim the refrigerant before the unit can be scrapped or landfilled. Here's what that means for you.</p>

<h2>Why Refrigerator Disposal Is Regulated</h2>
<p>Refrigerators and freezers contain refrigerant (older models use freon, newer ones use HFC blends). Both are potent greenhouse gases and ozone-depleting in older models. Releasing them to the atmosphere is illegal and carries federal penalties.</p>
<p>Before the unit can be crushed or shredded for scrap, a Section 608 certified technician has to pump out and capture the refrigerant. Same rule applies to window AC units, dehumidifiers, and chest freezers.</p>

<h2>Your Options in the Des Moines Metro</h2>

<h3>Option 1: Junk Removal Pickup (We Handle the Recycling)</h3>
<p>We pick up refrigerators and freezers across the Des Moines metro for $100 to $200 depending on the unit and access. That price includes the carry-out, hauling, and routing to an EPA-compliant recycler that reclaims the refrigerant and recycles the metal shell.</p>
<p>You don't need to disconnect anything special. Just unplug it (if not already), empty the contents, and we handle the rest. Same-week scheduling.</p>

${inlineCta}

<h3>Option 2: Retailer Take-Back at Purchase</h3>
<p>If you're buying a new fridge from a major retailer (Home Depot, Lowe's, Best Buy, Costco), nearly all offer haul-away of the old unit for $25-$50 as a delivery add-on. They handle the EPA-compliant recycling. This is usually the cheapest option if the timing works.</p>

<h3>Option 3: MidAmerican Energy Rebate Program</h3>
<p>MidAmerican Energy has historically offered a rebate program for recycling old refrigerators and freezers that are still working (typically $35-$50 per unit, varies by year). They schedule the pickup and handle the EPA recycling. Eligibility requires the unit be 10-30 years old and still cooling. Check the current program status on their website before relying on it.</p>

<h3>Option 4: Polk County Drop-Off</h3>
<p>Polk County's Metro Hazardous Waste Drop-Off Facility accepts refrigerators with a per-unit fee for refrigerant reclamation. You'll need a truck or trailer, the ability to load it, and time to drive out. Usually $50-$75 plus your time.</p>

<h2>What NOT to Do</h2>
<ul>
  <li><strong>Don't put it at the curb.</strong> Most Des Moines metro cities won't take refrigerators in regular trash and you can be fined for trying.</li>
  <li><strong>Don't drop it at a scrap yard with the refrigerant still in it.</strong> Reputable scrap yards will refuse it, and unscrupulous ones may take it and release the refrigerant illegally.</li>
  <li><strong>Don't try to remove the refrigerant yourself.</strong> Federal law requires Section 608 certification. Penalties are stiff.</li>
</ul>

<h2>What About Old Window AC Units and Dehumidifiers?</h2>
<p>Same rules. Same recycling channels. Same disposal fees, just smaller. We take them on the same truck as your fridge.</p>

<h2>Ready to Get Rid of an Old Fridge?</h2>
<p>Text a photo to (515) 414-2280 with the unit size and pickup-access notes. Same-day quote. Same-week pickup across the Des Moines metro.</p>
`
  },
  {
    slug: "estate-cleanout-checklist-iowa",
    title: "Estate Cleanout Checklist for Iowa Families",
    metaTitle: "Estate Cleanout Checklist for Iowa Families | Des Moines",
    metaDescription: "A step-by-step estate cleanout checklist for Iowa families. Probate timeline, sorting valuables, donation channels, and how to coordinate when family is out of state.",
    date: "March 25, 2026",
    readTime: "8 min",
    excerpt: "Clearing a family member's home is hard work in a hard moment. Here's a step-by-step checklist to help Iowa families work through it without missing anything important.",
    image: "/images/dsm-11.jpg",
    imageAlt: "Estate cleanout checklist Iowa families",
    body: `
<p>Clearing out a loved one's home is rarely just a logistical job. It comes with grief, family negotiations, a probate timeline, and (often) a real estate listing deadline. This checklist is designed for Iowa families working through that process. Use what's useful. Skip what isn't.</p>

<h2>Step 1: Confirm Authority Before Anything Leaves the House</h2>
<p>Before any items are removed, donated, or sold, the legally responsible person (usually the executor named in the will, or the court-appointed administrator if there's no will) needs to be identified.</p>
<p>In Iowa, the executor is appointed by the probate court. If you're not the executor, get written authorization before touching anything beyond personal mementos. This protects you and the estate.</p>

<h2>Step 2: Walk the Home and Document</h2>
<p>Before sorting starts, walk every room with a phone camera and record video of each space. This protects against later disputes about what was in the home. Save the video to cloud storage.</p>
<p>Then walk again with a notepad and tag items into broad buckets:</p>
<ul>
  <li><strong>Sentimental/family items</strong> (photos, letters, jewelry, family heirlooms)</li>
  <li><strong>Valuable items</strong> (artwork, antiques, collectibles, vehicles, firearms)</li>
  <li><strong>Usable items</strong> (furniture, kitchenware, clothing, books, decor)</li>
  <li><strong>Disposal items</strong> (broken, worn, damaged, expired)</li>
</ul>

<h2>Step 3: Sort Sentimental Items First (and Slowly)</h2>
<p>This is the hard part. Photos, letters, jewelry, kid art, military memorabilia. Take time here. Most families divide sentimental items among siblings or grandchildren before any cleanout happens. Don't rush this and don't let an outside contractor (us included) handle it.</p>

${inlineCta}

<h2>Step 4: Get Valuables Appraised Before Selling</h2>
<p>If the estate includes potential antiques, art, jewelry, or collectibles, get an appraisal before consigning to auction or selling at an estate sale. Des Moines has several reputable appraisers. The cost of an appraisal often pays for itself when items turn out to be worth more than expected.</p>
<p>Common Iowa estate items that deserve appraisal: rural Iowa farm equipment, vintage tools, original art, John Deere collectibles, military items, and pre-1970 furniture.</p>

<h2>Step 5: Donate Usable Items</h2>
<p>Local donation channels in the Des Moines metro that accept estate items:</p>
<ul>
  <li><strong>Goodwill of Central Iowa</strong> (furniture, clothing, household)</li>
  <li><strong>Salvation Army</strong> (furniture, clothing, household, will pick up large items)</li>
  <li><strong>Habitat for Humanity ReStore</strong> (furniture, appliances, building materials)</li>
  <li><strong>Local women's shelters and transitional housing</strong> (kitchenware, linens, household)</li>
  <li><strong>Iowa veterans organizations</strong> (clothing, household, military memorabilia)</li>
</ul>
<p>When we handle estate cleanouts, we route usable items to these partners first. That's free for the family and meaningful for the community.</p>

<h2>Step 6: Schedule the Cleanout</h2>
<p>Once sentimental and valuable items are removed, schedule the cleanout for the remaining contents. For a typical 3-bedroom Iowa home, this is usually a 1 to 2 day job. Larger homes or hoarding situations can take 3+ days.</p>
<p>Things to confirm with your junk removal crew before the job:</p>
<ul>
  <li>Are you the executor or do you have written authorization?</li>
  <li>Is the home keyed for the crew if no family will be present?</li>
  <li>Are there any specific items that should NOT be removed (mark with tape or note)?</li>
  <li>Is there a deadline (closing date, family flight home, probate court date)?</li>
  <li>Should we provide an itemized disposal record for probate court?</li>
</ul>

<h2>Step 7: Coordinate with Real Estate (If Selling)</h2>
<p>If the home is being sold, coordinate the cleanout timing with the listing agent. Most agents want the home cleared 1 to 2 weeks before listing photos to allow for cleaning and staging. Some agents have preferred junk removal contractors. Either way, communication prevents scheduling conflicts.</p>

<h2>Step 8: Final Sweep and Lock-Up</h2>
<p>After the cleanout, the home should be swept clean and locked. We handle the sweep-out as part of every estate cleanout. Verify utilities are scheduled to transfer or shut off. Check mail is being forwarded to the executor.</p>

<h2>When Family Is Out of State</h2>
<p>This is one of the most common estate cleanout situations we handle. An adult child lives in another state, parent passed away in Iowa, and there's a week to clear the house before a closing. We can:</p>
<ul>
  <li>Meet a real estate agent or attorney at the home for the walkthrough</li>
  <li>Receive a key via FedEx or coordinate a lockbox code</li>
  <li>Send progress photos throughout the job</li>
  <li>Provide an itemized disposal record</li>
  <li>Coordinate with donation partners for any items the family flagged for donation</li>
</ul>
<p>The family doesn't have to fly back. We've handled dozens of these jobs for out-of-state executors.</p>

<h2>Ready to Talk?</h2>
<p>Estate cleanouts are confidential and we approach them with care. Call or text (515) 414-2280 to talk through your situation. No pressure, no rush.</p>
`
  },
];
