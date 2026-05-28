export type LocalSection = { heading: string; body: string };

export type City = {
  slug: string;
  name: string;
  intro: string[];
  localSections: LocalSection[];
  neighborhoods: string[];
  zips: string[];
  image: string;
  imageAlt: string;
};

export const cities: City[] = [
  {
    slug: "des-moines",
    name: "Des Moines",
    intro: [
      "Des Moines is our home base. We've spent the last twelve years hauling junk out of every kind of property in Iowa's capital, from century-old homes in Sherman Hill to new builds on the south side and apartment turnovers downtown.",
      "Older neighborhoods around Drake and the East Village often mean steep basement stairs and tight alleys. Newer parts of the city, like the south side near the airport, give us straight driveway access but more attached garages packed with years of storage. We come ready for both.",
    ],
    localSections: [
      {
        heading: "Hauling Junk From Older Des Moines Homes",
        body: "Half of our Des Moines work happens in homes built before 1950. That means narrow doorways, low basement ceilings, switchback staircases, and the kind of attic access that requires a ladder and a flashlight. Our crew brings smaller dollies, extra straps, and the patience to break down large items in place when needed. We protect plaster walls and original woodwork on the way out, every time.",
      },
      {
        heading: "What Des Moines Curbside Pickup Won't Take",
        body: "The City of Des Moines solid waste program limits bulk pickup to a few items per pickup window and won't take appliances, mattresses, construction debris, or hazardous materials at the curb. Hazardous items (paint, chemicals, automotive fluids) go to the Metro Hazardous Waste Drop-Off Facility on Southeast 14th Street. For everything else that falls outside the city's curbside rules, our same-week pickup is the simplest legal option.",
      },
      {
        heading: "Rental Property Turnovers Across Des Moines",
        body: "We work with landlords and property managers across Capitol East, Drake, Highland Park, and the Sherman Hill rental market. Tenant move-outs often leave behind furniture, mattresses, and pantry contents that have to clear before the next showing. We handle on-call pickups and standing schedules for multi-property owners.",
      },
    ],
    neighborhoods: ["Sherman Hill", "Beaverdale", "East Village", "Drake", "Highland Park", "South of Grand", "Capitol East", "Merle Hay"],
    zips: ["50309", "50310", "50311", "50312", "50314", "50315", "50316", "50317"],
    image: "/images/dsm-1.jpg",
    imageAlt: "Junk removal Des Moines Iowa truck in residential neighborhood",
  },
  {
    slug: "west-des-moines",
    name: "West Des Moines",
    intro: [
      "West Des Moines covers a wide stretch from the older neighborhoods east of 50th Street to the newer subdivisions out past Jordan Creek. The mix of housing means we see everything: 1960s ranches with packed basements, mid-2000s two-stories with three-car garages, and high-end homes near Glen Oaks that need careful floor protection on the way out.",
      "Jordan Creek and the newer Booneville Road developments often involve longer hauls from house to driveway. The older Valley Junction area gives us tighter access but shorter carries. We size the crew to the job.",
    ],
    localSections: [
      {
        heading: "Garage and Basement Cleanouts in West Des Moines",
        body: "Most of our West Des Moines work is full garage and basement cleanouts. Homes in the Jordan Creek and Country Club Estates areas often have packed three-car garages and finished basements that have collected a decade or more of stored furniture, exercise equipment, and project leftovers. We bring the right crew size and truck capacity to clear it in one visit when possible.",
      },
      {
        heading: "Valley Junction's Tight Access",
        body: "Valley Junction is a different animal. Narrow streets, alley-access garages, and 1920s homes with steep stairs mean we plan crew size and truck staging carefully. Our crew has done enough jobs in this part of West Des Moines to know which alleys fit a full-size truck and which require a smaller vehicle.",
      },
      {
        heading: "West Des Moines City Pickup Limits",
        body: "West Des Moines bulk pickup is limited and requires advance scheduling through the city. The city won't take appliances, large furniture, mattresses, or construction debris at the curb. For anything outside the pickup window or the accepted-item list, our same-week haul is the faster route. We work in every ZIP code from 50265 through 50266.",
      },
    ],
    neighborhoods: ["Valley Junction", "Jordan Creek", "Glen Oaks", "Country Club", "West Glen", "Fuller Road corridor", "Booneville Road area"],
    zips: ["50265", "50266"],
    image: "/images/dsm-4.jpg",
    imageAlt: "Junk removal West Des Moines Iowa residential service",
  },
  {
    slug: "ankeny",
    name: "Ankeny",
    intro: [
      "Ankeny has grown faster than almost any other city in the metro and we've grown with it. The newer subdivisions east of I-35 mean lots of garage cleanouts, basement clear-outs after finishing projects, and construction debris from ongoing builds.",
      "Older Ankeny near the original downtown grid has tighter lots and detached garages. The Prairie Trail and Briarwood areas give us long, wide driveways and easy truck access. Either way, we're in and out the same day for most jobs.",
    ],
    localSections: [
      {
        heading: "New-Build Cleanouts in Prairie Trail and Briarwood",
        body: "Ankeny's growth means a constant flow of new-build cleanouts. Once the contractors leave, homeowners are stuck with packaging, leftover flooring, scrap drywall, and the empty boxes from every appliance and fixture. We do single-truck haul-aways for first-month new-build owners across Prairie Trail, Briarwood, and the Otter Creek area.",
      },
      {
        heading: "Hauling Out of Older Ankeny",
        body: "The original downtown grid (around Ankeny's Lakewood and Original Town neighborhoods) has tighter lots, narrow alleys, and 1950s-era detached garages. We bring smaller crews and dollies for those jobs and stage the truck carefully so we don't block neighbors.",
      },
      {
        heading: "Ankeny Bulk Pickup Limits",
        body: "Ankeny's curbside bulk pickup runs once a month and limits weight per pickup. Appliances and construction debris aren't accepted at the curb at all. For anything larger than a single-item pickup, our same-week service is faster than waiting for the city window.",
      },
    ],
    neighborhoods: ["Prairie Trail", "Briarwood", "Brick Street", "Otter Creek", "Deer Creek", "Original Town", "Lakewood"],
    zips: ["50021", "50023"],
    image: "/images/dsm-7.jpg",
    imageAlt: "Junk removal Ankeny Iowa hauling service truck",
  },
  {
    slug: "urbandale",
    name: "Urbandale",
    intro: [
      "Urbandale runs from the older east side along Douglas Avenue to the newer developments out near 156th Street. The east side has mature trees, finished basements that need careful protection, and the kind of mid-century homes where appliances and HVAC equipment have been replaced multiple times and the old units are still sitting in the garage.",
      "Out west, the Walnut Creek and Northern Lights neighborhoods are newer construction with bigger garages and longer driveways. We adjust crew size for the haul distance.",
    ],
    localSections: [
      {
        heading: "East Urbandale's Finished-Basement Cleanouts",
        body: "East Urbandale homes near Douglas Avenue often have finished basements that have served as second living rooms for 20+ years. Old sectionals, broken treadmills, hand-me-down dressers, and decades of holiday decorations end up stored downstairs. We bring blankets, dollies, and the experience to navigate finished walls and carpet on the way up.",
      },
      {
        heading: "Long-Driveway Hauls in West Urbandale",
        body: "Out west around 156th Street and Northern Lights, driveways stretch long and garages run deep. The haul from inside the garage to the truck can be 60 feet or more. We bring extra crew and dollies so the job still moves fast.",
      },
      {
        heading: "Urbandale's One Annual Bulk Pickup",
        body: "Urbandale residents get one bulk pickup per year through the city. That's it. For everything beyond that one window, including appliances, mattresses, and full basement clear-outs, our service fills the gap year-round.",
      },
    ],
    neighborhoods: ["Walnut Creek", "Northern Lights", "Eagles Pointe", "Greenbelt", "Aurora Heights", "East Urbandale", "156th Street corridor"],
    zips: ["50322", "50323"],
    image: "/images/dsm-9.jpg",
    imageAlt: "Junk removal Urbandale Iowa residential cleanout",
  },
  {
    slug: "waukee",
    name: "Waukee",
    intro: [
      "Waukee is one of the fastest-growing cities in Iowa and most of our work here is in newer neighborhoods. Garage cleanouts after a few years of accumulated stuff, basement clear-outs once homeowners finish a lower level, and construction debris from add-ons and remodels make up most calls.",
      "The Kettlestone and Glynn Village developments give us straightforward driveway access. Older parts of Waukee around 6th Street have tighter lots and we plan crew size accordingly.",
    ],
    localSections: [
      {
        heading: "Kettlestone and Glynn Village Cleanouts",
        body: "Most of our Waukee jobs run through the Kettlestone, Glynn Village, and Sugar Creek developments. These are newer homes with three-car garages, full basements, and the kind of storage capacity that fills up faster than people expect. We do garage cleanouts, basement clear-outs, and remodel debris hauls regularly across these neighborhoods.",
      },
      {
        heading: "Construction Debris From Waukee Add-Ons",
        body: "Waukee's growth means a steady volume of add-ons, basement finishes, and small remodels. We do on-call construction debris pickup for both homeowners doing DIY projects and contractors who don't want a dumpster sitting on a driveway for two weeks.",
      },
      {
        heading: "Waukee Curbside Pickup Rules",
        body: "Waukee bulk pickup runs on a limited schedule with strict item-count and weight rules. Appliances, mattresses, and construction debris are not accepted at the curb. For full cleanouts and multi-appliance pickups, we haul on your timeline instead of the city's.",
      },
    ],
    neighborhoods: ["Kettlestone", "Glynn Village", "The Reserve", "Sugar Creek", "Original Waukee", "Williams Pointe", "Painted Woods"],
    zips: ["50263"],
    image: "/images/dsm-10.jpg",
    imageAlt: "Junk removal Waukee Iowa residential service truck",
  },
  {
    slug: "johnston",
    name: "Johnston",
    intro: [
      "Johnston has a mix of established neighborhoods near Beaver Avenue and newer construction out toward NW 100th Street. The older homes often have walk-out basements where we use the back door for easier access. Newer Johnston homes give us bigger garages and three-car bays full of storage.",
      "We see a lot of estate cleanouts in Johnston as the older neighborhoods turn over to younger families. Whole-house clear-outs are a regular part of our schedule here.",
    ],
    localSections: [
      {
        heading: "Walk-Out Basement Cleanouts in Johnston",
        body: "A lot of Johnston homes have walk-out basements opening to the back yard. That changes the job. Instead of carrying everything up a switchback stairwell, we can stage the truck near the back patio and haul straight out. We confirm walk-out access in the quote to make sure we send the right size crew.",
      },
      {
        heading: "Estate Cleanouts in Established Johnston Neighborhoods",
        body: "Green Meadows, Walden Woods, and the older Beaver Creek neighborhoods are turning over from longtime owners to younger families. Estate cleanouts and whole-house clear-outs are common, often coordinated with out-of-state executors or local real estate agents. We work the full process: walkthrough, sort, donate, recycle, haul.",
      },
      {
        heading: "Johnston Curbside Limits",
        body: "Johnston's curbside bulk pickup is limited to specific item types and weight. Mattresses, large appliances, and full garage or basement loads typically need a private hauler. That's where we come in.",
      },
    ],
    neighborhoods: ["Green Meadows", "Walden Woods", "Camp Dodge area", "Beaver Creek", "Polk City Trail corridor", "NW 100th Street area", "Northglenn"],
    zips: ["50131"],
    image: "/images/dsm-11.jpg",
    imageAlt: "Junk removal Johnston Iowa hauling crew",
  },
  {
    slug: "altoona",
    name: "Altoona",
    intro: [
      "Altoona has grown steadily on the east side of the metro and our work here ranges from residential cleanouts to commercial jobs near the Adventureland and Outlets of Des Moines corridor. Newer subdivisions north of Highway 6 give us long driveways and easy truck access.",
      "The older parts of Altoona near downtown have tighter access and we bring smaller crews and dollies for those jobs. Rental property turnovers are common throughout the city and we handle those on tight timelines.",
    ],
    localSections: [
      {
        heading: "Commercial Hauling Near the Adventureland Corridor",
        body: "The retail and hospitality corridor around Adventureland and the Outlets of Des Moines generates regular commercial junk removal work. Restaurant turnovers, retail tenant move-outs, and hotel renovation debris all run through our schedule. We work after-hours so we don't disrupt business operations.",
      },
      {
        heading: "Rental Property Turnovers in Altoona",
        body: "Altoona's rental market churns fast and tenant move-outs often leave behind furniture, mattresses, and pantry contents. We handle on-call pickups for landlords and recurring schedules for property managers across the city.",
      },
      {
        heading: "Altoona Curbside Pickup Rules",
        body: "Altoona's city pickup does not cover appliances, large furniture, or construction debris. For anything outside the accepted-item list, our same-week haul handles the load on your timeline.",
      },
    ],
    neighborhoods: ["Champion Park", "Bluff Creek", "Sumner", "Original Town Altoona", "Crosshaven", "Brookside", "Adventureland area"],
    zips: ["50009"],
    image: "/images/dsm-12.jpg",
    imageAlt: "Junk removal Altoona Iowa residential and commercial service",
  },
  {
    slug: "clive",
    name: "Clive",
    intro: [
      "Clive is a smaller, denser city in the middle of the metro with a lot of mature trees, established homes, and finished basements. Most of our Clive jobs are basement cleanouts, garage clear-outs, and furniture pickups from homeowners who have been in the same house for decades.",
      "The Country Club Estates area and the neighborhoods along NW 86th Street have tight curbing and we plan truck access ahead of time. The Greenbelt Trail nearby means we keep noise and operating hours respectful of neighbors.",
    ],
    localSections: [
      {
        heading: "Long-Term-Owner Cleanouts in Clive",
        body: "A lot of Clive homes have been owned by the same family for 20, 30, even 40 years. When it's finally time to clear out, the basement is packed with decades of stored furniture, kid art, holiday decor, and project leftovers. We bring extra crew and patience for these jobs. They're rarely quick, and we don't pretend they are in the quote.",
      },
      {
        heading: "Tight Curbing on NW 86th Street",
        body: "The NW 86th Street corridor and the older Country Club Estates streets have tight curbing and on-street parking that doesn't leave much room for a full-size truck. We scout access in advance and bring a smaller truck if it makes sense.",
      },
      {
        heading: "Greenbelt Neighbor Considerations",
        body: "The Greenbelt Trail runs through Clive and we keep noise, operating hours, and truck staging respectful of neighbors. Most Clive jobs are booked for mid-morning to early afternoon so we're not running diesel engines at dawn or dusk.",
      },
    ],
    neighborhoods: ["Country Club Estates", "Woodland Heights", "NW 86th Street corridor", "Maple Wood", "Trailridge", "Old Clive", "Greenbelt area"],
    zips: ["50325"],
    image: "/images/dsm-13.jpg",
    imageAlt: "Junk removal Clive Iowa residential cleanout truck",
  },
  {
    slug: "pleasant-hill",
    name: "Pleasant Hill",
    intro: [
      "Pleasant Hill sits on the east side of the metro with a mix of older neighborhoods near Hubbell Avenue and newer subdivisions north of University Avenue. We do everything here from single-couch pickups to full estate cleanouts.",
      "The growth around Copper Creek and the eastern edge of the city means a lot of newer homes with three-car garages and full basements. Older parts of Pleasant Hill near the original downtown have tighter access and we plan accordingly.",
    ],
    localSections: [
      {
        heading: "Copper Creek and Newer Pleasant Hill Cleanouts",
        body: "The Copper Creek area and newer developments off NE 56th Street are where most of our Pleasant Hill garage and basement cleanouts happen. These newer homes fill up storage faster than people expect, and we run full cleanouts here on a regular schedule.",
      },
      {
        heading: "Older Pleasant Hill Access Challenges",
        body: "Older sections near Hubbell Avenue and the original Pleasant Hill grid have tighter streets and 1960s-era homes with smaller doorways. Our crew brings smaller dollies and breaks down large items in place when needed.",
      },
      {
        heading: "Pleasant Hill Pickup Limits",
        body: "Pleasant Hill's curbside service has strict item limits and excludes appliances and construction debris. For anything bigger than a single small item, our same-week service is the easier path.",
      },
    ],
    neighborhoods: ["Copper Creek", "Riverbluff", "Doanes Park", "Original Pleasant Hill", "NE 56th Street area", "University Avenue corridor"],
    zips: ["50327"],
    image: "/images/dsm-2.jpg",
    imageAlt: "Junk removal Pleasant Hill Iowa residential service",
  },
  {
    slug: "norwalk",
    name: "Norwalk",
    intro: [
      "Norwalk sits south of Des Moines in Warren County and has grown quickly over the last decade. The mix of older farm-adjacent homes and newer subdivisions means we see big property cleanouts as well as standard garage and basement hauls.",
      "Newer Norwalk subdivisions give us straightforward driveway access and big garages. Properties on the rural edges of town often have outbuildings or pole barns that have collected years of stored equipment and debris.",
    ],
    localSections: [
      {
        heading: "Rural-Edge Property Cleanouts",
        body: "Norwalk's rural edges mean we get calls for pole barn cleanouts, outbuilding clear-outs, and old farm-equipment hauls. These jobs need bigger trucks and longer days. We quote them flat-rate after a walkthrough.",
      },
      {
        heading: "Newer Norwalk Subdivision Work",
        body: "Most of our standard Norwalk work runs through the newer neighborhoods off North Avenue and the Lakewood area. Garage cleanouts, basement clear-outs, and appliance pickups are routine here.",
      },
      {
        heading: "Warren County Disposal Rules",
        body: "Norwalk is in Warren County, which has its own transfer station and disposal rules. We handle the disposal logistics so you don't have to think about which facility takes what. Hazardous items get routed to the appropriate Warren County drop-off.",
      },
    ],
    neighborhoods: ["Lakewood", "North Avenue corridor", "Echo Valley", "Wright Place", "Original Norwalk", "Cumming Road area"],
    zips: ["50211"],
    image: "/images/dsm-3.jpg",
    imageAlt: "Junk removal Norwalk Iowa residential and rural service",
  },
  {
    slug: "grimes",
    name: "Grimes",
    intro: [
      "Grimes is northwest of Des Moines and one of the fastest-growing communities in the metro. Newer subdivisions east and south of Highway 141 dominate our work here, with steady garage and basement cleanouts and a growing volume of remodel debris.",
      "Older Grimes near the original downtown grid has tighter access. We scale crew size and truck choice to fit the job.",
    ],
    localSections: [
      {
        heading: "New-Build and Recent-Build Cleanouts",
        body: "Most Grimes homes are recent construction with attached three-car garages and large basements. We handle a lot of move-in cleanouts (clearing the packaging and leftover materials from a recent build) and move-out clear-outs as families upsize within the metro.",
      },
      {
        heading: "Grimes Remodel Debris",
        body: "Basement-finish projects, kitchen remodels, and bathroom updates run constantly in Grimes. We do on-call construction debris pickups for homeowners and contractors, often within 24 to 48 hours of the call.",
      },
      {
        heading: "Grimes Curbside Limits",
        body: "Grimes city pickup excludes appliances, mattresses, and construction debris. For those items and for full cleanouts, our same-week haul handles the load.",
      },
    ],
    neighborhoods: ["Cole Creek", "Walnut Creek Crossing", "Original Grimes", "Highway 141 corridor", "Brookfield", "Spring Creek"],
    zips: ["50111"],
    image: "/images/dsm-5.jpg",
    imageAlt: "Junk removal Grimes Iowa residential cleanout",
  },
  {
    slug: "windsor-heights",
    name: "Windsor Heights",
    intro: [
      "Windsor Heights is a small, dense city tucked between Des Moines, West Des Moines, and Clive. Most of the housing stock is mid-century, which means established neighborhoods, finished basements, and a steady volume of long-term-owner cleanouts.",
      "Tight lots and narrow streets are the norm here. We bring smaller crews and trucks sized to the access when the job calls for it.",
    ],
    localSections: [
      {
        heading: "Mid-Century-Home Cleanouts in Windsor Heights",
        body: "Most Windsor Heights homes were built between 1950 and 1975. That means tighter doorways, original hardwood floors, and basements that have stored 40+ years of belongings. Our crew protects original woodwork and finished floors with blankets and floor runners on every job.",
      },
      {
        heading: "Tight-Street Truck Staging",
        body: "Windsor Heights streets are narrow and parking is tight. We scout access in advance and stage the truck on a side street or in a driveway when the main road won't accommodate it. We don't block neighbors.",
      },
      {
        heading: "Windsor Heights Curbside Rules",
        body: "Windsor Heights bulk pickup is limited and excludes appliances, mattresses, and full cleanout loads. For everything beyond a single small item, our same-week service is the simpler option.",
      },
    ],
    neighborhoods: ["Olde Town Windsor", "Northwood", "Colby Park area", "73rd Street corridor"],
    zips: ["50324"],
    image: "/images/dsm-6.jpg",
    imageAlt: "Junk removal Windsor Heights Iowa residential service",
  },
];

export const additionalServiceAreas = [
  "Bondurant",
  "Carlisle",
  "Indianola",
  "Polk City",
  "Granger",
  "Mitchellville",
];
