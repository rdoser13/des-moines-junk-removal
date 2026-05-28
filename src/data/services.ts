export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  cardBlurb: string;
  metaTitle: string;
  metaDescription: string;
  heroSubhead: string;
  whatIs: string[];
  signs: string[];
  process: { title: string; body: string }[];
  pricing: string;
  priceFrom?: string;
  pricingNotes: string[];
  faqs: { q: string; a: string }[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    shortName: "Furniture Removal",
    icon: "sofa",
    priceFrom: "$95",
    cardBlurb:
      "Couches, sectionals, mattresses, dressers, recliners, and more. We carry it out so you don't have to.",
    metaTitle: "Furniture Removal in Des Moines | Des Moines Junk Removal",
    metaDescription:
      "Furniture removal in Des Moines and the surrounding metro. Couches, mattresses, sectionals, and more hauled away. Licensed and insured. Call (515) 414-2280.",
    heroSubhead:
      "Same-week pickup for couches, mattresses, dressers, and large furniture across the Des Moines metro.",
    whatIs: [
      "Furniture removal is the pickup, loading, and disposal of unwanted furniture from your home, apartment, or business. We handle the heavy lifting so you don't have to wrestle a sectional down a staircase or rent a truck for one couch.",
      "Our crew brings the truck, the dollies, and the muscle. We protect floors and walls on the way out, load everything into the truck, and haul it to a donation center, recycler, or transfer station depending on the condition.",
    ],
    signs: [
      "You bought new furniture and need the old set hauled out before delivery",
      "A mattress or box spring is taking up space and you have no way to move it",
      "You're moving and want to leave the broken or unwanted pieces behind",
      "An office is being cleared out and the desks, chairs, or cubicles need to go",
      "A family member's home needs to be cleared of old furniture",
      "Bulk trash day in your city does not accept furniture",
    ],
    process: [
      { title: "Send Photos and Get a Quote", body: "Text or email a few photos of the furniture. We send back a clear flat-rate price the same day." },
      { title: "Schedule a Pickup Window", body: "Pick a day and a two-hour arrival window that works for you. Same-week slots are usually open." },
      { title: "We Load and Haul", body: "Our crew shows up on time, carries everything out, and protects your floors and door frames in the process." },
      { title: "Disposed or Donated", body: "Furniture in good shape goes to a donation partner. The rest goes to a recycler or transfer station." },
    ],
    pricing: "Furniture removal in Des Moines typically runs $95 to $350 depending on how many pieces and how much labor is involved. A single couch is on the lower end. A multi-room clear-out is on the higher end.",
    pricingNotes: [
      "Number and size of pieces",
      "How far they need to be carried (stairs, basements, upper floors)",
      "Whether items need to be disassembled",
      "Disposal fees for mattresses and box springs in some Iowa counties",
    ],
    faqs: [
      { q: "Do you take mattresses and box springs?", a: "Yes. We haul mattresses, box springs, and bed frames. Iowa landfills charge a per-unit fee for mattresses, which is built into your quote." },
      { q: "Will you donate furniture in good condition?", a: "Whenever possible. We work with local donation centers across the Des Moines metro and route usable furniture there first." },
      { q: "Do I need to move the furniture outside first?", a: "No. Our crew comes inside, carries everything out, and cleans up the spot before we leave." },
      { q: "How fast can you pick up?", a: "Most furniture pickups in the Des Moines area happen within 2 to 4 days. Same-day slots open up regularly." },
      { q: "What if the couch won't fit through the door?", a: "We handle that. Our crew brings tools to disassemble pieces when needed and we know how to maneuver large furniture out of tight spaces." },
    ],
    image: "/images/dsm-2.jpg",
    imageAlt: "Furniture removal Des Moines crew loading a couch into a junk hauling truck",
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    shortName: "Appliance Removal",
    icon: "fridge",
    priceFrom: "$75",
    cardBlurb:
      "Refrigerators, washers, dryers, dishwashers, ovens, and water heaters. Disconnected and hauled away the right way.",
    metaTitle: "Appliance Removal in Des Moines | Des Moines Junk Removal",
    metaDescription:
      "Appliance removal in Des Moines. Refrigerators, washers, dryers, water heaters, and more. Licensed and insured Iowa hauling. Call (515) 414-2280 for a free quote.",
    heroSubhead:
      "Refrigerators, washers, dryers, water heaters, and large appliances hauled away across the Des Moines metro.",
    whatIs: [
      "Appliance removal is the pickup and proper disposal of large household appliances. Most appliances are too heavy and too bulky for regular trash pickup, and many cities in the Des Moines metro will not take them at the curb.",
      "We handle refrigerators, freezers, washers, dryers, dishwashers, stoves, microwaves, and water heaters. Refrigerators and freezers contain refrigerant that has to be reclaimed by an EPA-compliant recycler. We route those units to the right facility every time.",
    ],
    signs: [
      "You upgraded to a new appliance and the old one is sitting in the garage",
      "A fridge or freezer died and you can't move it on your own",
      "A water heater needs to come out after replacement",
      "A rental property turn requires the old washer and dryer to go",
      "An estate sale or move-out left appliances behind",
    ],
    process: [
      { title: "Send a Photo and Get a Quote", body: "Text a photo of the appliance. We confirm flat-rate pricing the same day, no surprise fees." },
      { title: "Schedule the Pickup", body: "Choose a pickup window. We confirm by text the day before with crew arrival time." },
      { title: "Disconnect and Remove", body: "We handle basic disconnection for unplugged appliances, then load everything onto the truck. Floor protection included." },
      { title: "Recycled or Hauled", body: "Refrigerators and freezers go to an EPA-compliant recycler. Metal appliances go to a scrap recycler when possible." },
    ],
    pricing: "Single appliance removal in Des Moines is usually $75 to $175. Multiple appliances or units from basements and upper floors run higher.",
    pricingNotes: [
      "Type of appliance (refrigerators cost more due to EPA recycling)",
      "Number of units",
      "Stairs or tight access",
      "Whether the appliance is already disconnected",
    ],
    faqs: [
      { q: "Do you take refrigerators with freon?", a: "Yes. We route them to an EPA-compliant recycler that safely reclaims the refrigerant. That cost is built into your quote." },
      { q: "Can you disconnect the appliance?", a: "We handle basic unhooking for unplugged units. For hardwired or plumbed appliances, we ask that those be disconnected first for safety." },
      { q: "Will you take a single appliance?", a: "Yes. We pick up single-item jobs across the Des Moines metro. There is a minimum service charge but no upcharge for one item." },
      { q: "Do you take appliances from upper floors or basements?", a: "Yes. We bring straps, dollies, and the crew size needed to safely remove appliances from upstairs bedrooms and basement utility rooms." },
    ],
    image: "/images/dsm-3.jpg",
    imageAlt: "Appliance removal Des Moines refrigerator being loaded onto junk hauling truck",
  },
  {
    slug: "garage-cleanouts",
    name: "Garage Cleanouts",
    shortName: "Garage Cleanouts",
    icon: "garage",
    priceFrom: "$300",
    cardBlurb:
      "Reclaim your garage. We clear out years of stored boxes, broken tools, old furniture, and yard equipment in one visit.",
    metaTitle: "Garage Cleanouts in Des Moines | Des Moines Junk Removal",
    metaDescription:
      "Garage cleanout service in Des Moines and the metro area. We haul away clutter, broken tools, old furniture, and yard equipment. Call (515) 414-2280.",
    heroSubhead:
      "Reclaim your garage in one visit. Full cleanouts across the Des Moines metro, family-owned and fully insured.",
    whatIs: [
      "A garage cleanout is a full sweep of the unwanted stuff piled up over the years. Old paint cans, broken yard tools, boxes that were never unpacked after the move, the busted lawnmower, the bike no one rides. We take it all in one trip when possible.",
      "Our crew sorts as we load. Anything that can be donated or recycled gets routed there first. Everything else is hauled to the appropriate transfer station or recycler. You walk back into a clear garage at the end of the day.",
    ],
    signs: [
      "You can't park a car in your own garage anymore",
      "You're selling the house and need it cleared before listing photos",
      "A move is coming up and you want to lighten the load",
      "Years of project leftovers have stacked up and you don't know where to start",
      "A storm or roof leak damaged stored items that need to go",
    ],
    process: [
      { title: "Walkthrough Quote", body: "Send photos or schedule a free on-site walkthrough. We quote the whole garage flat-rate based on truck volume, not by the hour." },
      { title: "Pick a Day", body: "Most full garage cleanouts in Des Moines are booked within the same week. We confirm crew size based on the scope." },
      { title: "We Sort, Lift, and Load", body: "You point, we carry. Items get sorted into haul, donate, and recycle as we load. Floors and door frames stay protected." },
      { title: "Swept Clean", body: "We sweep the garage floor before we leave. You get back a clean, empty space." },
    ],
    pricing: "Garage cleanouts in the Des Moines metro typically range from $300 for a partial clear-out to $850 for a packed two-car garage. Pricing is based on the volume of the truck, not the hour.",
    pricingNotes: [
      "Total volume of items hauled (measured in truck-loads)",
      "Heavy materials like concrete, brick, or tile that incur dump fees",
      "Whether hazardous items (paint, chemicals, propane tanks) need special handling",
      "Accessibility of the garage from the driveway",
    ],
    faqs: [
      { q: "Do I need to be home for the cleanout?", a: "No. As long as we can access the garage and have clear instructions on what stays and what goes, we can complete the job without you on site." },
      { q: "Can you take old paint and chemicals?", a: "Latex paint that's fully dried can go in the truck. Wet paint, motor oil, gasoline, and pesticides need to be dropped at a Polk County household hazardous waste facility. We can advise on what falls into which category." },
      { q: "What about old tires?", a: "Yes, we take tires. Iowa charges a per-tire disposal fee that we include in the quote." },
      { q: "How long does a garage cleanout take?", a: "Most jobs take 2 to 4 hours. Two-car garages packed floor to ceiling can take a full day." },
    ],
    image: "/images/dsm-5.jpg",
    imageAlt: "Garage cleanout Des Moines crew clearing out residential garage clutter",
  },
  {
    slug: "basement-cleanouts",
    name: "Basement Cleanouts",
    shortName: "Basement Cleanouts",
    icon: "basement",
    priceFrom: "$400",
    cardBlurb:
      "Stairs, tight corners, decades of storage. Our crew handles the carry-up so you don't throw your back out.",
    metaTitle: "Basement Cleanouts in Des Moines | Des Moines Junk Removal",
    metaDescription:
      "Basement cleanout service in Des Moines. We handle the stairs, the heavy lifting, and disposal. Family-owned, insured, fast quotes. Call (515) 414-2280.",
    heroSubhead:
      "Full basement cleanouts across the Des Moines metro. We handle the stairs, the carry-up, and the haul-away.",
    whatIs: [
      "A basement cleanout means clearing out everything you no longer want from your lower level, then hauling it off-site. Most basements in the Des Moines area are unfinished or partially finished and end up storing decades of holiday decorations, old furniture, broken appliances, kid toys, and water-damaged boxes.",
      "Our crew handles the carry-up. Narrow stairwells, walk-out basements, bilco doors, and finished basements with delicate flooring are all part of the routine. We move slow enough to protect your home and fast enough to clear the space in one visit.",
    ],
    signs: [
      "A flood, sump pump failure, or pipe burst left water-damaged items behind",
      "You inherited a house and the basement is full of decades of stored belongings",
      "You're refinishing the basement and need it cleared down to bare walls",
      "Old furniture that was 'temporarily' moved downstairs has been there for years",
      "You're prepping the house for sale and the basement needs to look usable",
    ],
    process: [
      { title: "On-Site Walkthrough", body: "Basements are hard to quote from photos. We come out, look at the access and the volume, and give you a flat-rate price on the spot." },
      { title: "Schedule the Crew", body: "Larger jobs may need a two-day window. We confirm crew size and bring extra hands when stairs are involved." },
      { title: "Carry-Up and Load", body: "We bring straps, blankets, and dollies. Tight stairwells and finished walls stay protected on the way out." },
      { title: "Hauled Away", body: "Donate, recycle, or transfer station. We sort as we load and you don't lift a thing." },
    ],
    pricing: "Basement cleanouts in Des Moines typically run $400 to $1,200 depending on volume and access. Stairs and tight corners add labor time but we still price by the truck-load, not the hour.",
    pricingNotes: [
      "Volume of items being removed",
      "Stair access (straight, switchback, or bilco)",
      "Whether items are water-damaged or moldy (extra protective gear)",
      "Heavy items like old TVs, treadmills, and pool tables",
    ],
    faqs: [
      { q: "Can you handle water-damaged or moldy items?", a: "Yes. We bring gloves, masks, and contractor bags. For heavy mold situations we recommend a remediation company first, then we come in to haul the damaged materials." },
      { q: "Do you take old TVs and electronics?", a: "Yes. Iowa has e-waste rules so older CRT TVs and monitors carry a recycling fee. That fee is built into your quote." },
      { q: "What if the basement has a low ceiling?", a: "Common in older Des Moines homes. Our crew works around it. We bring smaller dollies and break down large items when needed." },
      { q: "Can you take a pool table or treadmill out of the basement?", a: "Yes. These usually need disassembly. We bring the tools and the crew size to handle them safely." },
    ],
    image: "/images/dsm-6.jpg",
    imageAlt: "Basement cleanout Des Moines crew carrying boxes up basement stairs",
  },
  {
    slug: "construction-debris-removal",
    name: "Construction Debris Removal",
    shortName: "Construction Debris",
    icon: "hammer",
    priceFrom: "$250",
    cardBlurb:
      "Drywall, lumber, flooring, shingles, and remodel debris hauled off your job site so your crew keeps building.",
    metaTitle: "Construction Debris Removal Des Moines | Des Moines Junk Removal",
    metaDescription:
      "Construction debris removal in Des Moines. Drywall, lumber, shingles, flooring, and remodel waste hauled away. Licensed, insured, fast. Call (515) 414-2280.",
    heroSubhead:
      "Drywall, lumber, flooring, and remodel debris hauled from job sites across the Des Moines metro.",
    whatIs: [
      "Construction debris removal is the pickup and disposal of waste generated during remodels, tear-outs, and small builds. We work with homeowners doing DIY projects and with contractors who need a faster turn than a roll-off dumpster allows.",
      "We haul drywall scraps, framing lumber, demolished cabinets, old flooring, subfloor, shingles, siding, trim, broken tile, and small concrete loads. For jobs that need to keep moving, on-call pickup beats a stationary dumpster sitting in the driveway for two weeks.",
    ],
    signs: [
      "A kitchen or bathroom remodel just wrapped tear-out and the old materials are piled up",
      "You re-roofed a house and the old shingles need to go fast",
      "A small build or addition is generating debris and you don't have room for a dumpster",
      "A flooring or drywall job left more waste than the contractor planned for",
      "A flip property needs the demo materials cleared before the next trade comes in",
    ],
    process: [
      { title: "Walkthrough or Photo Quote", body: "For job sites we usually come out and quote in person, especially for heavy materials. Flat-rate pricing." },
      { title: "On-Call Pickup", body: "Schedule one pickup or a recurring schedule for active job sites. Most pickups happen within 24 to 48 hours." },
      { title: "Load and Weigh", body: "Our crew loads the debris. Heavy materials like shingles, tile, and concrete are weighed at the transfer station to set dump fees fairly." },
      { title: "Disposed Per Iowa Code", body: "Construction debris goes to permitted transfer stations and C&D recyclers. We keep the paperwork if your project requires disposal records." },
    ],
    pricing: "Construction debris jobs in Des Moines typically run $250 to $900 depending on weight and volume. Shingles, tile, and concrete carry per-ton dump fees set by the transfer station.",
    pricingNotes: [
      "Total weight (heavy materials are priced per ton)",
      "Total volume of light debris (drywall, lumber, insulation)",
      "Whether materials need to be carried from inside the structure",
      "Recurring pickups for active job sites get reduced pricing",
    ],
    faqs: [
      { q: "Do you work with general contractors?", a: "Yes. We handle one-off pickups for remodels and recurring schedules for builders running multiple active sites across the metro." },
      { q: "Can you take a small concrete or brick load?", a: "Yes, in limited quantities. Heavy material loads are priced by the ton based on transfer station fees." },
      { q: "Will you pull a permit or pay tipping fees?", a: "Tipping fees at the transfer station are built into your quote. We don't pull permits, but we keep disposal receipts if your project documentation requires them." },
      { q: "Is this faster than renting a dumpster?", a: "Often, yes. On-call pickup means no rental window, no overage fees, and no dumpster sitting in the driveway. For long jobs, a dumpster may still make sense. We'll tell you honestly which is better for your situation." },
    ],
    image: "/images/dsm-8.jpg",
    imageAlt: "Construction debris removal Des Moines crew loading remodel waste into hauling truck",
  },
  {
    slug: "estate-cleanouts",
    name: "Estate Cleanouts",
    shortName: "Estate Cleanouts",
    icon: "home",
    priceFrom: "$600",
    cardBlurb:
      "Compassionate, full-property cleanouts after a loss, move, or downsizing. We handle the heavy lifting so families can focus on what matters.",
    metaTitle: "Estate Cleanouts in Des Moines | Des Moines Junk Removal",
    metaDescription:
      "Estate cleanout service in Des Moines. Compassionate, full-property hauling for families after a loss, move, or downsizing. Call (515) 414-2280.",
    heroSubhead:
      "Full-property estate cleanouts across the Des Moines metro, handled with care, discretion, and a flat-rate price.",
    whatIs: [
      "An estate cleanout is the full clearing of a property after a loss, a move into assisted living, or a major downsizing. Most of these jobs come with a deadline: a probate timeline, a sale closing, or an out-of-state family member with only a weekend to coordinate.",
      "We work alongside families, executors, real estate agents, and senior move managers across the Des Moines metro. You walk through and mark what goes, what stays, and what gets donated. Our crew handles the rest, in one or two visits depending on the size of the home.",
    ],
    signs: [
      "A family member passed and the house needs to be cleared for sale or probate",
      "A loved one is moving into assisted living and only taking a small fraction of belongings",
      "An out-of-state executor needs the whole job handled while they're away",
      "A real estate agent needs a property emptied before listing photos",
      "A long-term home needs decades of belongings sorted and removed",
    ],
    process: [
      { title: "Free On-Site Walkthrough", body: "We meet you at the property, walk through every room, and quote the whole job flat-rate, not by the hour or day." },
      { title: "Sort and Schedule", body: "You point to what stays, what goes, and what should be donated. We can coordinate with auction houses and donation centers for valuable items." },
      { title: "Crew On Site", body: "Our crew clears the home room by room, protecting floors and walls. Larger estates may take two days." },
      { title: "Donate, Recycle, Haul", body: "Usable furniture and clothes go to donation partners. Recyclables are sorted. Everything else goes to the right transfer station." },
    ],
    pricing: "Estate cleanouts in the Des Moines metro typically range from $600 for a one-bedroom apartment to $3,500+ for a packed multi-story home. Pricing is flat-rate based on volume, not hours.",
    pricingNotes: [
      "Total volume of items hauled across the property",
      "Number of stories and accessibility of upper floors or basements",
      "Hazardous materials that need separate handling",
      "Whether donation pickup and itemized inventory are needed",
      "Timeline urgency (rush jobs may carry a small premium)",
    ],
    faqs: [
      { q: "Can you work with an executor or real estate agent?", a: "Yes. We regularly work with executors, attorneys, and real estate agents across the Des Moines metro. We can keep an itemized inventory and coordinate keys and access without you on site." },
      { q: "Will you donate items in good condition?", a: "Whenever possible. We partner with local donation centers across the metro and route usable furniture, clothing, kitchenware, and tools there first." },
      { q: "How long does a full estate cleanout take?", a: "Most single-family homes take 1 to 2 days. Larger properties or hoarding situations can take 3 or more days. We confirm timeline in your quote." },
      { q: "Can you handle a hoarding situation?", a: "Yes. We've cleared hoarding-level properties across the Des Moines area. We bring protective gear, extra crew, and the right disposal channels for what's found inside." },
      { q: "Do you work in Polk, Dallas, and Warren counties?", a: "Yes. We handle estate cleanouts across the entire Des Moines metro, including Polk, Dallas, and Warren counties." },
    ],
    image: "/images/dsm-11.jpg",
    imageAlt: "Estate cleanout Des Moines crew clearing residential property",
  },
  {
    slug: "commercial-junk-removal",
    name: "Commercial Junk Removal",
    shortName: "Commercial Junk Removal",
    icon: "building",
    priceFrom: "$200",
    cardBlurb:
      "Office cleanouts, retail closures, restaurant equipment, warehouse pallets. On-call hauling for Des Moines businesses.",
    metaTitle: "Commercial Junk Removal in Des Moines | Des Moines Junk Removal",
    metaDescription:
      "Commercial junk removal for Des Moines businesses. Office cleanouts, retail closures, warehouse pallets, restaurant equipment. Call (515) 414-2280.",
    heroSubhead:
      "On-call commercial hauling for offices, retail, restaurants, and warehouses across the Des Moines metro.",
    whatIs: [
      "Commercial junk removal is hauling for businesses, not households. We pick up old office furniture during a remodel, clear out a retail space after a lease ends, handle the kitchen equipment from a closed restaurant, and clean up pallets and packaging from warehouses.",
      "Most of our commercial work is on-call rather than scheduled. A property manager calls Monday and we're on site Tuesday or Wednesday. We work around your business hours when needed, including early mornings and weekends for jobs that can't interrupt operations.",
    ],
    signs: [
      "An office is being downsized, remodeled, or relocated",
      "A retail tenant is moving out and the space needs to be cleared",
      "A restaurant has closed and the kitchen equipment, booths, and signage need to go",
      "A warehouse has accumulated old pallets, broken racking, and obsolete inventory",
      "A property manager needs a recurring junk pickup schedule for a multi-tenant building",
    ],
    process: [
      { title: "On-Site Walkthrough", body: "We come to your business, walk the space, and quote flat-rate. For recurring schedules we set up a standing pickup window." },
      { title: "Schedule Around Operations", body: "We can work before opening, after closing, or on weekends so we don't interfere with customers or staff." },
      { title: "Crew Loads Everything", body: "Our crew brings the right size truck for the job, plus floor protection and door wedges for commercial entryways." },
      { title: "Disposed Per Iowa Code", body: "Commercial debris goes to permitted transfer stations and recyclers. We keep paperwork if your business needs disposal records." },
    ],
    pricing: "Commercial junk removal in Des Moines starts at $200 for a small office pickup and runs up to several thousand for full retail or restaurant closures. Recurring schedules get reduced pricing.",
    pricingNotes: [
      "Volume of items being hauled",
      "Specialized equipment (commercial fridges, walk-in coolers, restaurant hoods)",
      "After-hours or weekend pickup requirements",
      "Recurring schedule discounts available",
    ],
    faqs: [
      { q: "Do you work with property managers?", a: "Yes. We handle one-off pickups and recurring schedules for property managers across the Des Moines metro. Net-30 invoicing is available for established accounts." },
      { q: "Can you haul commercial refrigeration?", a: "Yes. Commercial fridges and freezers go to an EPA-compliant recycler that reclaims the refrigerant. That cost is built into your quote." },
      { q: "Will you work after business hours?", a: "Yes. We can schedule pickups before opening, after closing, or on weekends so we don't interfere with your operations." },
      { q: "Do you provide disposal records for tax or audit purposes?", a: "Yes. We keep transfer station receipts and can provide an itemized disposal record on request." },
    ],
    image: "/images/dsm-12.jpg",
    imageAlt: "Commercial junk removal Des Moines crew clearing office space",
  },
  {
    slug: "hot-tub-removal",
    name: "Hot Tub Removal",
    shortName: "Hot Tub Removal",
    icon: "bathtub",
    priceFrom: "$350",
    cardBlurb:
      "We drain, disconnect, dismantle, and haul. Hot tubs are heavy and awkward. We do the work so you don't pull a back.",
    metaTitle: "Hot Tub Removal in Des Moines | Des Moines Junk Removal",
    metaDescription:
      "Hot tub removal in Des Moines. We drain, disconnect, dismantle, and haul. Licensed and insured Iowa hauling contractor. Call (515) 414-2280.",
    heroSubhead:
      "Full hot tub removal across the Des Moines metro: drain, disconnect, dismantle, and haul. One flat-rate price.",
    whatIs: [
      "Hot tub removal is the full process of getting an unwanted spa off your property. That means draining the water, disconnecting the electrical (if it's still wired), dismantling the shell, and hauling everything to the appropriate transfer station or recycler.",
      "Hot tubs are heavy, awkward, and often surrounded by decking or fencing that has to be navigated. A typical four-person hot tub weighs 700 to 900 pounds dry and isn't designed to be moved in one piece. We bring the tools, the crew size, and the experience to do it without damaging your yard, deck, or fence.",
    ],
    signs: [
      "A hot tub on your patio or deck stopped working and isn't worth repairing",
      "You bought a house with a hot tub you don't want",
      "A spa has been sitting unused for years and is collecting algae or rotting",
      "You're remodeling outdoor space and the existing tub needs to go",
      "A hot tub is sunken into a deck and the deck needs to be opened up to get it out",
    ],
    process: [
      { title: "On-Site Quote", body: "Hot tubs are hard to quote from photos. We come out, look at the access, and give you a flat-rate price the same day." },
      { title: "Drain and Disconnect", body: "We drain the water to your yard or a drain. If the tub is still wired, we recommend an electrician disconnect it first for safety." },
      { title: "Dismantle in Place", body: "We cut the shell into manageable sections so it can be carried out without removing decking or fencing whenever possible." },
      { title: "Haul Away", body: "Pieces go to the transfer station. Metal components are sorted for recycling." },
    ],
    pricing: "Hot tub removal in Des Moines typically runs $350 to $750 depending on size, access, and whether decking has to be opened up to remove the tub.",
    pricingNotes: [
      "Size of the hot tub (2-person spa vs 8-person commercial)",
      "Access (open patio vs sunken deck install)",
      "Whether decking, fencing, or landscaping has to be opened to remove the tub",
      "Whether the electrical is already disconnected by an electrician",
    ],
    faqs: [
      { q: "Do I need to drain the hot tub first?", a: "No. We handle the drain as part of the job. Just have a yard area or drain we can route water to." },
      { q: "Can you cut up a sunken hot tub?", a: "Yes. Most sunken tubs can be cut into sections in place. Occasionally we need to open up decking to extract, which we'll quote up front." },
      { q: "What about the electrical?", a: "If the tub is still wired, we recommend a licensed electrician disconnect it before our crew arrives. We can refer one if needed." },
      { q: "Do you remove the wood surround or gazebo too?", a: "Yes. We can include surrounding decking, gazebos, or fencing in the quote. Just mention it when you call." },
    ],
    image: "/images/dsm-13.jpg",
    imageAlt: "Hot tub removal Des Moines crew dismantling spa for haul-away",
  },
];
