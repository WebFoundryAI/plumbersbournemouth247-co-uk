/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  bournemouth: {
    landmarks: [
      "Bournemouth Pier",
      "Bournemouth Beach",
      "The Square",
      "Bournemouth Gardens",
      "Russell-Cotes Art Gallery",
      "BIC (Bournemouth International Centre)",
      "Boscombe Pier",
      "Bournemouth University",
      "St Peter's Church",
      "Meyrick Park",
      "Bournemouth Train Station",
      "East Cliff",
      "West Cliff",
      "Lansdowne",
      "Horseshoe Common",
      "Winton",
      "Charminster",
      "Westbourne",
      "Southbourne",
      "Boscombe",
      "Pokesdown",
      "Springbourne"
    ],
    drainageProfile: `Bournemouth's drainage challenges are shaped by a town built on sandy heathland above dramatic coastal cliffs, with deep chines cutting through to the seafront and a Victorian-era infrastructure network that has been expanded and adapted over more than 150 years. The town centre, stretching from The Square through the Lower Gardens to the pier, sits in the valley of the Bourne Stream, and this natural watercourse profoundly influences the drainage character of the surrounding neighbourhoods.

The Victorian core of Bournemouth — developed rapidly from the 1850s onwards as a fashionable seaside resort — features clay pipe drainage systems that are now well over a century old. Properties around East Cliff, West Cliff, and the town centre were built with drainage designed for a very different era, before modern bathrooms, washing machines, and dishwashers placed the demands on pipework that today's households require. The elegant Victorian and Edwardian villas that characterise areas like Westbourne, Boscombe, and the clifftop streets have original clay drainage that is increasingly fragile.

Bournemouth's sandy soil is a defining factor in local drainage. The Bagshot and Bracklesham Beds that underlie much of the town consist of fine sand and clay layers, creating variable ground conditions that directly affect pipe stability. Sandy ground allows pipes to shift and settle more easily than clay or rock, leading to joint displacement and alignment issues over time. The relatively high water table in low-lying areas near the Bourne Stream and along the seafront means subsurface moisture is a constant consideration, accelerating corrosion of cast iron components.

The chines — steep, narrow valleys that cut through the cliffs to the beach — are a distinctive Bournemouth feature that creates unique drainage patterns. Properties near Alum Chine, Durley Chine, and Boscombe Chine can experience rapid surface water runoff during heavy rainfall, with water channelling toward the coast through these natural gullies. The steep gradients create intense pressure in gravity-fed drainage systems, and properties at the top and bottom of chines experience very different drainage behaviour.

The Bourne Stream, which flows through the Lower, Central, and Upper Gardens before reaching the sea, affects drainage across the town centre and surrounding neighbourhoods. Properties in Springbourne, Charminster, and along the valley corridor face particular flood risk during heavy rain events. Wessex Water manages the public sewer network, and Bournemouth's combined sewer system — carrying both foul water and surface water — can be overwhelmed during intense rainfall, particularly in lower-lying areas near the stream and seafront.

Our local engineers understand Bournemouth's distinctive drainage character intimately. We routinely work with Victorian clay pipes requiring specialist handling, manage the challenges created by sandy soil conditions, address the specific drainage patterns around the chines and coastal cliffs, and handle the varied infrastructure across Bournemouth's diverse neighbourhoods. Whether your property is a Victorian villa in Westbourne, a converted guest house in East Cliff, a family home in Winton, or a modern apartment in Lansdowne, we bring expertise specific to Bournemouth's unique drainage landscape.`,
    localFAQs: [
      {
        question: "Why do older Bournemouth properties have more drainage problems?",
        answer: "Bournemouth developed rapidly as a Victorian resort town, meaning much of its drainage infrastructure dates from the mid-to-late 1800s. Properties in areas like Westbourne, East Cliff, and Boscombe rely on clay pipe systems now well over 100 years old. These aging systems were designed for very different usage patterns — before modern bathrooms, washing machines, and dishwashers — and are increasingly fragile. The sandy soil beneath Bournemouth also causes pipe settlement and joint displacement over time, compounding the effects of age."
      },
      {
        question: "How does Bournemouth's sandy soil affect drainage work?",
        answer: "Bournemouth is built on sandy heathland — the Bagshot and Bracklesham Beds that underlie the town consist of fine sand and clay layers. This means pipes can shift and settle more easily than in firmer ground, causing joint displacement and alignment issues. While excavation in sandy soil is generally easier than in rock or heavy clay, pipe bedding must be done carefully to prevent future settlement. No-dig techniques like pipe relining are particularly effective in Bournemouth, providing a stable internal pipe structure regardless of ground movement."
      },
      {
        question: "What should Bournemouth residents do about flooding during heavy rain?",
        answer: "Bournemouth's combined sewer system, managed by Wessex Water, carries both foul water and surface water in the same pipes. During heavy rainfall, these combined sewers can be overwhelmed, causing backup into properties — particularly in lower-lying areas along the Bourne Stream valley and near the seafront. Property owners should maintain clear gutters and downpipes, ensure surface water drains freely away from the building, and consider installing backflow prevention devices in vulnerable ground-floor or basement properties. Reporting persistent flooding to Wessex Water helps identify network issues."
      },
      {
        question: "Are converted guest houses in Bournemouth more prone to drainage issues?",
        answer: "Yes, Bournemouth has a large stock of former Victorian and Edwardian guest houses and hotels that have been converted to flats or HMOs, particularly in East Cliff, West Cliff, and Boscombe. These buildings often share vertical drainage stacks serving multiple units. Original drainage was designed for seasonal guest house use, not permanent multi-household residential occupation, so systems can be undersized for current demands. A blockage in one unit can affect properties above and below. Regular maintenance of shared drainage and professional CCTV surveys to identify developing problems are essential for converted property residents."
      }
    ],
    caseStudy: `Recent call-out to a Victorian villa in Bournemouth's Westbourne area: The property owner reported water backing up into the ground-floor kitchen during heavy rain events. Our CCTV survey revealed a combination of issues typical of Bournemouth properties — the original clay drainage, now over 130 years old, had developed multiple fractures where it passed through the sandy subsoil beneath the rear garden. Tree root intrusion from a mature pine tree had colonised approximately 40% of the pipe diameter over a 10-metre section. Using high-pressure jetting, we carefully cleared the root mass and flushed accumulated sand and silt from the fractured sections. Given the sandy ground conditions and the difficulty of maintaining stable pipe bedding through excavation, the homeowner opted for structural pipe relining — a no-dig solution that restored full pipe integrity with a 10-year warranty. Result: fully restored drainage with no disruption to the established garden. Tip: Bournemouth property owners with mature trees near drain lines should schedule preventative CCTV surveys every two to three years — early detection of root intrusion prevents costly emergency situations.`
  },

  poole: {
    landmarks: [
      "Poole Quay",
      "Poole Harbour",
      "Sandbanks",
      "Brownsea Island",
      "Poole Old Town",
      "Poole Park",
      "Lighthouse Arts Centre",
      "RNLI College",
      "Twin Sails Bridge",
      "Holes Bay",
      "Hamworthy",
      "Canford Cliffs"
    ],
    drainageProfile: `Poole's drainage infrastructure tells the story of one of England's most historic port towns, centred around the second-largest natural harbour in the world. For centuries a prosperous trading port with its own character distinct from neighbouring Bournemouth, Poole's drainage systems reflect layers of maritime, industrial, and residential development stretching back to medieval times. The area around Poole Quay and the Old Town features some of the oldest drainage infrastructure in the Dorset area, with stone-built channels and clay pipes serving properties that have been continuously occupied for hundreds of years.

Poole Harbour's influence on the town's drainage cannot be overstated. Properties along the Quay, around Holes Bay, and in the lower sections of the town centre sit at or near sea level, making them vulnerable to tidal influence, harbour flooding, and drainage backup during heavy rainfall events. The combination of high water table, tidal variation, and aging infrastructure creates persistent moisture management challenges for property owners in these waterfront locations.

The Sandbanks peninsula and Canford Cliffs area present a different set of drainage challenges. These prestigious residential areas feature high-value properties on sandy ground close to the harbour and open sea. The sandy soil provides good natural drainage in dry conditions but allows pipes to shift and settle, while the salt air accelerates corrosion of metal drainage components. Many properties in these areas have been extensively rebuilt or extended, placing additional demands on drainage systems that may not have been upgraded accordingly.

Hamworthy, on the western side of the harbour, has its own distinct drainage character. The mix of residential streets, the former Royal Marines base, and the industrial waterfront area each have different drainage demands. Recent regeneration and new housing development in Hamworthy has introduced modern drainage systems, but connection to older infrastructure serving the wider area remains a challenge.

Our engineers understand Poole's complex layering of maritime heritage, Victorian infrastructure, and modern waterfront development. Whether addressing tidal influence on quayside properties, managing drainage in sandy Sandbanks soil, or maintaining aging systems in the Old Town, we bring local knowledge specific to this historic Dorset harbour town.`,
    localFAQs: [
      {
        question: "How does Poole's harbour location affect drainage?",
        answer: "Properties near Poole Quay, around Holes Bay, and along the harbour sit close to sea level and are influenced by tidal variation. High water table means subsurface moisture is a constant challenge. During heavy rain combined with high tides, drainage backup is more likely. Waterfront property owners should understand their building's specific flood defence measures and maintain drainage systems proactively. Modern waterfront developments typically have pumped drainage systems that require regular maintenance."
      },
      {
        question: "What drainage challenges do Poole Old Town commercial properties face?",
        answer: "Poole Old Town's concentration of restaurants, pubs, and food businesses along the Quay and High Street creates significant grease and fat accumulation in drainage systems. Commercial properties should install and regularly service grease traps, arrange quarterly professional jetting, and ensure staff understand proper disposal of cooking oils and food waste. Residential flats above commercial premises can be affected by commercial drainage issues — understanding the building's drainage configuration is important."
      },
      {
        question: "Are Sandbanks and Canford Cliffs properties free from drainage issues?",
        answer: "Despite their premium status, Sandbanks and Canford Cliffs properties face specific drainage challenges. The sandy soil allows pipe settlement and movement, salt air accelerates corrosion of metal components, and many properties have been extensively rebuilt or extended, often placing demands on drainage systems beyond their original design. High-density development on the Sandbanks peninsula creates heavy drainage demands, and proximity to the harbour and sea means tidal influence is a factor. Regular professional maintenance is essential for protecting these high-value properties."
      }
    ],
    caseStudy: `Call-out to a property on Poole Quay: Ground-floor occupants reported persistent damp and slow drainage that worsened during high tides. Our CCTV survey revealed the building's Victorian clay drainage had multiple joint failures in the section running beneath the cobbled yard, allowing groundwater ingress — a common issue near the harbour given the high water table. The proximity to the harbour meant the drainage was effectively sitting in saturated ground. We coordinated with the building's other occupants to fund a comprehensive solution: high-pressure jetting to clear accumulated silt, followed by structural relining of the worst-affected 15-metre section. We also recommended improved surface water management around the building's courtyard. Result: eliminated groundwater ingress and restored full drainage function. The property owners established a shared maintenance fund for future drainage upkeep. Tip: Poole properties near the harbour and quayside should treat drainage maintenance as an ongoing requirement, not a one-off fix — the high water table demands regular attention.`
  },

  christchurch: {
    landmarks: [
      "Christchurch Priory",
      "Christchurch Castle Ruins",
      "Christchurch Quay",
      "Mudeford Quay",
      "Mudeford Sandbank",
      "Stanpit Marsh",
      "River Avon",
      "River Stour",
      "Christchurch High Street",
      "Tucktonia",
      "Highcliffe Castle",
      "Friars Cliff"
    ],
    drainageProfile: `Christchurch is one of the oldest settlements in Dorset, with a history stretching back to Saxon times when the great Priory was founded. This deep history means the town's drainage infrastructure spans an extraordinary range of ages and construction methods — from stone-built channels in the oldest parts near the Priory to modern plastic systems in recent housing developments on the town's edges.

The rivers Avon and Stour are central to Christchurch's drainage story. Both rivers converge at the town centre before reaching Christchurch Harbour, and properties on the flood plain face genuine flood risk during heavy rainfall and periods of high river flow. The stretch through the town centre is particularly vulnerable, as the rivers narrow before reaching the harbour. Properties in riverside areas and along the Quay have experienced flooding events that overwhelm both river capacity and the town's sewer system. Wessex Water has invested in flood prevention measures, but individual property owners must also manage their own drainage effectively.

Mudeford, the historic fishing quarter at the harbour entrance, features tightly packed cottages with drainage systems designed for a very different era. The narrow lanes and close proximity of buildings make access for drainage work challenging, and the coastal location means salt air accelerates corrosion of cast iron pipework. The water table here is high, influenced by both the rivers and the sea, creating persistent moisture management challenges.

The older residential areas around the High Street, Church Street, and near the Priory feature a mix of stone-built and Victorian drainage serving properties ranging from medieval cottages to Victorian terraces. The Highcliffe and Friars Cliff areas to the east benefit from elevated positions but feature aging clay pipe systems that are increasingly fragile. Properties with larger gardens in these areas face recurring tree root intrusion challenges.

Christchurch's mixed character — ancient town centre, riverside properties, coastal fishing quarter, and modern suburban expansion — demands drainage expertise that understands each context. Whether dealing with a centuries-old property near the Priory, a riverside home at flood risk, or a modern development with connection challenges, Christchurch's drainage needs are as varied as the town itself.`,
    localFAQs: [
      {
        question: "How do the rivers Avon and Stour affect drainage in Christchurch?",
        answer: "The convergence of the Avon and Stour at Christchurch creates significant flood risk for properties on the flood plain, particularly in the stretch through the town centre where the rivers narrow before reaching the harbour. During heavy rainfall, river levels can overwhelm the town's combined sewer system, causing backup into riverside properties. Property owners near the rivers should maintain clear surface drainage, consider backflow prevention devices, and stay informed about Environment Agency flood management measures for the area."
      },
      {
        question: "What drainage issues are specific to Mudeford's historic cottages?",
        answer: "Mudeford's tightly packed former fishing cottages present unique challenges: narrow access lanes make drainage work difficult, coastal salt air corrodes cast iron pipework, and the high water table from proximity to both the rivers and sea creates persistent moisture issues. Many cottages have drainage systems that were adequate for their original purpose but struggle with modern bathroom and kitchen demands. Professional survey is essential before purchasing or renovating Mudeford properties."
      },
      {
        question: "Are new-build properties in Christchurch immune to drainage problems?",
        answer: "Not entirely. While modern drainage systems are superior to older infrastructure, new development in Christchurch has increased impermeable surface area, potentially creating surface water management challenges. New developments connecting to existing sewer infrastructure can create capacity issues, particularly during heavy rainfall. New-build owners should understand how their property's drainage connects to the wider network and maintain gutters, downpipes, and any soakaways on their property."
      }
    ],
    caseStudy: `Recent call-out to a Victorian terrace near Christchurch High Street: The homeowner reported recurring blockages that worsened after heavy rainfall, with water backing up through the ground-floor toilet. Our CCTV survey revealed a partially collapsed clay pipe where it passed beneath the rear garden wall — a common failure point where ground movement at structural boundaries stresses aging pipework. Additionally, river silt had accumulated in the lower section of the drain, reducing capacity by approximately 30%. We cleared the silt with high-pressure jetting and installed a structural reline over the collapsed section. Given the property's proximity to the River Avon, we also recommended a non-return valve to protect against river-related backup. Result: fully restored drainage with protection against both pipe failure and river flooding. Tip: Properties near the rivers Avon and Stour in Christchurch should consider non-return valves as standard protection — they are a modest investment that prevents costly flood damage.`
  },

  wimborne: {
    landmarks: [
      "Wimborne Minster",
      "Wimborne Model Town",
      "River Allen",
      "River Stour",
      "Wimborne High Street",
      "The Square",
      "Walford Mill Crafts",
      "Canford School",
      "Kingston Lacy",
      "Merley House",
      "Colehill",
      "Leigh Common"
    ],
    drainageProfile: `Wimborne sits at the confluence of the River Allen and the River Stour, a geographical fact that profoundly shapes the town's drainage character. This historic market town has a rich heritage centred on the magnificent Minster, and its drainage infrastructure reflects centuries of development from a small Saxon settlement to a thriving Dorset market town serving the surrounding rural communities.

The river confluence creates the most significant drainage challenge in Wimborne. Properties in the lower-lying areas near the rivers — particularly around the Stour valley, the areas near Walford Mill, and stretches of the town centre — face genuine flood risk during heavy rainfall when both rivers are running high. The combined flow of the Allen and Stour can overwhelm local drainage infrastructure, and the town's sewer system can back up during these events. The Environment Agency has identified flood risk zones in Wimborne that property owners should be aware of.

The historic town centre around the High Street, The Square, and near the Minster features stone and clay drainage systems that reflect the town's long history. Some of the drainage serving properties along the High Street dates back to the 18th century, with later Victorian additions and modifications creating a layered system that can be difficult to map accurately.

The surrounding areas of Colehill and Merley feature mid-to-late 20th century housing developments with drainage from the 1950s through to the 1980s. These systems are generally adequate but approaching the age where maintenance becomes increasingly important. The housing density in these areas means shared drainage infrastructure is common.

Modern developments on the edges of Wimborne feature contemporary drainage systems but face the same challenge as other expanding towns: connecting new capacity to existing infrastructure that may already be near its limits. The combination of river confluence flood risk, historic town centre infrastructure, and expanding modern development makes Wimborne's drainage context varied and demanding.`,
    localFAQs: [
      {
        question: "How serious is flood risk in Wimborne?",
        answer: "Wimborne's position at the confluence of the Allen and Stour rivers creates genuine flood risk, particularly in lower-lying areas near the rivers and around Walford Mill. The Environment Agency has identified flood risk zones in the town. During heavy rainfall, both rivers can rise rapidly, overwhelming local drainage and causing sewer backup. Property owners in riverside areas should check Environment Agency flood maps, maintain clear drainage, install backflow prevention where appropriate, and consider flood resilience measures for ground-floor properties."
      },
      {
        question: "What should I know about drainage in older Wimborne High Street properties?",
        answer: "Older High Street properties may have drainage systems with multiple layers of modification spanning centuries. Original stone drainage channels may have been supplemented with Victorian clay pipes and later plastic additions. Understanding the full drainage configuration through professional CCTV survey is essential before purchase. Additionally, river proximity flood risk should be assessed, and any property near the flood plain should be evaluated for backup vulnerability."
      },
      {
        question: "Are newer housing estates around Wimborne free from drainage issues?",
        answer: "Not necessarily. Housing estates from the 1960s to 1980s commonly feature clay drainage that is now 40 to 60 years old. These pipes develop joint failures and cracks over time, while ground movement causes additional stress. Combined with potential flood risk from the nearby rivers, these aging systems require increasing maintenance attention. If your property dates from this era and has never had drainage work, a professional survey is recommended to assess the current condition."
      }
    ],
    caseStudy: `Emergency call-out to a property near the River Stour in Wimborne during heavy rainfall: The homeowner reported water entering the ground floor through both the toilet and shower drain as the river levels rose rapidly. Our emergency response team found the property's drainage was being overwhelmed by river-influenced backup through the sewer system — a common occurrence in this riverside area during intense rainfall. After the immediate event, we returned to install a non-return valve on the main drain connection and performed a full CCTV survey. The survey revealed the clay drainage had cracked in two locations where it crossed ground that had shifted over time. We repaired these sections with structural relining and ensured the non-return valve provided ongoing protection against future river backup events. Result: comprehensive flood protection combining structural repair and backflow prevention. The homeowner reported no further issues during subsequent heavy rainfall events. Tip: Wimborne properties in the river confluence area should treat flood protection as a priority investment — combining non-return valves with drainage maintenance provides the most effective defence.`
  },

  ferndown: {
    landmarks: [
      "Ferndown Town Centre",
      "Ferndown Forest",
      "Ferndown Golf Club",
      "Stapehill Abbey",
      "Trickett's Cross",
      "Longham",
      "Parley",
      "River Stour (nearby)",
      "Ferndown Leisure Centre",
      "Uddens Plantation",
      "Hampreston",
      "West Parley"
    ],
    drainageProfile: `Ferndown is a modern Dorset town that grew substantially in the 1960s, 70s, and 80s to accommodate population growth across the Bournemouth conurbation. This relatively recent development gives Ferndown a drainage character fundamentally different from Bournemouth's Victorian infrastructure — much of the town's drainage was designed and installed within the last 60 years. However, the materials available at the time of construction mean Ferndown's drainage systems are now reaching a critical age.

The earliest phases of development used drainage technology typical of the era: clay pipes, early PVC, and in some cases pitch fibre pipes. Pitch fibre pipes, widely used in British housing from the 1950s through the 1970s, are particularly problematic. These pipes, made from wood cellulose impregnated with coal tar, were cheap and easy to install but have a limited lifespan. After 40 to 60 years, pitch fibre pipes delaminate, blister internally, and lose their circular profile, causing restrictions and blockages. Some Ferndown properties from this era may still rely on original pitch fibre drainage that is now overdue for replacement.

Ferndown sits on heathland with sandy and gravel soils typical of the Dorset basin. While this ground drains surface water reasonably well in dry conditions, it creates challenges for underground drainage — pipes can shift and settle in sandy ground more easily than in firmer soils. The relatively flat topography means drainage relies heavily on correct pipe gradients, and even minor settlement can create low spots where waste accumulates.

The areas around Longham and Parley, closer to the River Stour, have flood risk considerations during heavy rainfall. The town's surface water drainage was designed to handle specific rainfall volumes, but climate change has increased the frequency of intense rainfall events that exceed original design parameters.

Ferndown's residential character — with extensive family housing, mature gardens with established trees, and quiet suburban streets — means tree root intrusion is an increasing concern as the town's landscaping matures. Understanding Ferndown's mid-century drainage context helps property owners implement appropriate maintenance strategies.`,
    localFAQs: [
      {
        question: "What are pitch fibre pipes and why are they a problem in Ferndown?",
        answer: "Pitch fibre pipes were widely used in British housing construction from the 1950s through the 1970s, making them potentially present in Ferndown's earlier development areas. Made from wood cellulose impregnated with coal tar pitch, these pipes were affordable and easy to install but have a limited lifespan of 40 to 60 years. They delaminate, blister internally, and lose their round shape over time, causing flow restrictions and blockages. If your Ferndown property dates from the 1960s or 70s and has never had drainage work, a professional survey can determine whether pitch fibre pipes are present and need attention."
      },
      {
        question: "Is flooding a concern in Ferndown?",
        answer: "Ferndown's surface water drainage was designed as part of planned suburban development, but the system was designed for historical rainfall patterns, and increasingly intense rainfall events can exceed its capacity. Properties near Longham and the River Stour corridor have particular flood risk. Additionally, if surface water features like soakaways and drainage channels on your property are not maintained, they can fail during heavy rain. Regular maintenance of all drainage elements on your property is important."
      },
      {
        question: "Should I have my Ferndown property's drainage surveyed if there are no visible problems?",
        answer: "Yes, particularly if your property dates from the 1960s or 70s. Drainage pipe deterioration is progressive — it often worsens significantly before causing visible symptoms. A CCTV survey can reveal internal problems, joint failures, and reduced pipe diameter before a complete blockage occurs. Early detection allows planned remediation rather than emergency repair, which is both less disruptive and more cost-effective. Properties from the 1980s onwards should also consider surveys as they approach 40 years of age."
      }
    ],
    caseStudy: `Call-out to a 1970s property in Ferndown: The homeowner reported recurring slow drainage and occasional gurgling sounds from the kitchen sink and downstairs toilet. Initial rodding provided temporary relief, but problems returned within weeks. Our CCTV survey revealed the cause — the property's original clay drainage, now over 50 years old, had developed joint failures at multiple points where the sandy soil had allowed pipe settlement. Internal scaling had reduced the effective pipe diameter by over 40% in the worst section. We recommended and installed structural pipe relining throughout the affected 20-metre main drain run, restoring full bore capacity with a modern internal lining that carries a 10-year warranty. Result: permanently resolved the recurring blockage issue and future-proofed the drainage against further deterioration. Tip: If your Ferndown property was built in the 1960s or 70s and you experience recurring slow drainage, aging pipe failure is the most likely cause — CCTV survey will confirm the diagnosis quickly.`
  },

  ringwood: {
    landmarks: [
      "Ringwood Town Centre",
      "The Furlong Shopping Centre",
      "Ringwood Meeting House",
      "Bickerley Common",
      "River Avon",
      "Ringwood Brewery (former)",
      "New Forest National Park (nearby)",
      "Poulner",
      "Hightown",
      "Crow",
      "Moortown",
      "Blashford Lakes"
    ],
    drainageProfile: `Ringwood is an established Dorset market town on the western edge of the New Forest, with a character shaped by its position at the crossing point of the River Avon and its evolution from a medieval market settlement to a popular residential town. The area's drainage profile reflects this layered history — from the historic core around the High Street and Bickerley Common, through substantial 20th-century suburban development, to modern housing estates on the town's periphery.

The River Avon, which flows through the western side of Ringwood, dominates the area and profoundly influences drainage patterns. Properties near the river and along the Bickerley flood plain can experience significant flood risk during heavy rainfall. The river's flood plain is well documented, and properties in its catchment area need to be particularly aware of drainage performance.

The older housing that characterises central Ringwood — a mix of period cottages, Victorian and Edwardian properties along the High Street and surrounding streets — features drainage systems of varying ages. These properties typically use clay drainage pipes with cement-jointed connections, and the combination of age, ground movement, and tree root pressure from the established gardens creates recurring maintenance demands. The mature trees along Ringwood's streets and in gardens are a persistent source of root intrusion into aging clay pipes.

The areas of Poulner, Hightown, and Crow feature mid-to-late 20th century housing with planned drainage routing. These systems are now 40 to 60 years old and beginning to require attention. The proximity to the New Forest means many properties have large gardens with established trees, increasing the risk of root intrusion.

Ringwood's drainage needs reflect its market town character — a mix of period and modern properties, riverside flood risk, and the challenges of maintaining infrastructure in a town surrounded by mature woodland and countryside.`,
    localFAQs: [
      {
        question: "Why is tree root intrusion common in Ringwood properties?",
        answer: "Ringwood's position on the edge of the New Forest and its established residential gardens mean mature tree root systems are abundant. These roots actively seek out moisture in underground pipes, infiltrating through aging joints and hairline cracks in clay drainage. Properties near Blashford Lakes and along the river corridor face additional root pressure from the surrounding woodland. The combination of pipe age and root density makes Ringwood one of the more root-affected areas in the region."
      },
      {
        question: "How does the River Avon affect drainage in the area?",
        answer: "The River Avon's flood plain extends through the western side of Ringwood, and properties near the river or on the Bickerley can experience significant surface water flow during heavy rainfall. Maintaining proper surface water management — clear gutters, functional drains, and appropriate garden grading to direct water away from the property — is particularly important for properties in the river's drainage catchment. Some properties benefit from backflow prevention valves and other flood resilience measures."
      },
      {
        question: "Should I worry about drainage in an older Ringwood property?",
        answer: "Properties from the Victorian and Edwardian era have clay drainage systems that may be 100 years old or more. While construction quality was generally good for the period, these systems are in their later life. Common issues include joint deterioration, hairline cracking from ground movement, tree root intrusion, and reduced capacity due to internal scaling and deposits. A professional CCTV survey provides clear information about your specific drainage condition and helps plan maintenance before problems develop into emergencies."
      }
    ],
    caseStudy: `Recent call-out to a period cottage near Ringwood town centre: The homeowner reported a persistently damp area in the front garden and slow drainage from the downstairs bathroom. Our CCTV survey revealed a classic Ringwood problem — mature tree roots from a large oak in the front garden had infiltrated the main clay drain through multiple deteriorated joints, creating a root mass that occupied approximately 45% of the pipe diameter. Additionally, the root intrusion had caused a partial joint displacement, allowing groundwater to seep into the pipe and saturate the surrounding soil — explaining the persistent damp patch. We cleared the root mass with high-pressure jetting, then recommended structural relining of the affected 12-metre section to prevent regrowth. The homeowner also opted for a root barrier installation between the tree and the drain line. Result: resolved both the drainage blockage and the garden damp issue, with long-term protection against root re-intrusion. Tip: Ringwood properties with mature trees within 5 metres of drain lines should have regular CCTV checks — root intrusion is almost inevitable and much easier to manage early than after it causes serious blockage or pipe damage.`
  },

  verwood: {
    landmarks: [
      "Verwood Town Centre",
      "Verwood Hub",
      "Potterne Park",
      "Dewlands Common",
      "Ringwood Forest (nearby)",
      "Cranborne Road",
      "Manor Road",
      "Three Legged Cross",
      "Ebblake",
      "Romford",
      "Stephen's Castle",
      "Verwood Heathland"
    ],
    drainageProfile: `Verwood is a residential Dorset town surrounded by heathland and forest, renowned for its desirable family housing and proximity to the Cranborne Chase countryside. The town's drainage challenges are distinctive and closely tied to the character that makes it attractive — established residential properties, extensive gardens, and underlying geology that combines sandy heathland soils with clay subsoils.

The residential properties that characterise Verwood — a mix of 1960s-onwards family housing along with some older period properties in the town centre — feature drainage systems now approaching 40 to 60 years of age. These properties typically use clay or early PVC drainage with cement-jointed connections. The extensive grounds that characterise many Verwood properties mean pipe runs can be 15 to 25 metres or more, significantly longer than in more compact housing.

Tree root intrusion is arguably Verwood's most significant drainage challenge. The town's proximity to heathland and forest, combined with mature garden trees, creates dense root networks in the soil. These roots relentlessly seek out the moisture in aging pipes, infiltrating through deteriorated joints and hairline cracks. Properties near Dewlands Common and the surrounding heathland face additional pressure from roots extending from public land into private drainage systems. The combination of long pipe runs and abundant root pressure means Verwood properties can be disproportionately affected by root-related drainage issues.

The heathland soils beneath Verwood — a mix of sand and clay layers — create variable drainage conditions. Sandy areas drain well but allow pipe settlement, while clay pockets can retain moisture and create localised waterlogging. Understanding your property's specific ground conditions is important for effective drainage management.

Verwood's residential character and surrounding natural environment make drainage maintenance not just a practical concern but an important investment. Well-maintained drainage protects property value, prevents damp-related damage, and avoids the significant costs of emergency repair in properties where excavation through established gardens and landscaping is expensive.`,
    localFAQs: [
      {
        question: "Why are Verwood properties particularly affected by tree root intrusion?",
        answer: "Verwood's character — residential properties with extensive gardens surrounded by heathland and forest — creates ideal conditions for root intrusion. Pipe runs through garden soil rich in tree roots can extend 15 metres or more. Mature trees, established hedging, and the proximity to Dewlands Common and surrounding heathland create dense root networks that actively seek out pipe moisture. The combination of pipe age, pipe length, and root density makes Verwood one of the more root-affected areas in Dorset."
      },
      {
        question: "How should Verwood properties with shared boundaries manage drainage?",
        answer: "Properties sharing boundaries with heathland or forest areas face additional root pressure from trees outside their control. Understanding where your drainage runs in relation to boundary trees through professional CCTV survey is essential. Root barriers can protect vulnerable pipe sections, and regular jetting prevents root masses from becoming established. Coordinating with neighbours on shared drainage maintenance prevents disputes and costly emergency repairs."
      },
      {
        question: "What drainage considerations apply to properties near Verwood's heathland?",
        answer: "Properties near heathland face surface water from natural runoff during heavy rainfall, potentially variable ground conditions from the mix of sand and clay soils, and root pressure from both private gardens and public heathland vegetation. Maintaining clear surface water drainage around the property, ensuring gutters and downpipes function properly, and proactive management of underground drainage are all important."
      }
    ],
    caseStudy: `Call-out to a 1970s detached house in Verwood: The homeowner reported persistent slow drainage in the kitchen and bathroom, with occasional overflow from the external manhole during heavy rain. The property featured a 22-metre main drain run from the house to the street sewer, passing through a mature garden with several large trees. Our CCTV survey revealed extensive tree root intrusion at four separate joint locations, with the worst point showing approximately 50% pipe diameter reduction. Accumulated deposits had combined with the root intrusion to create near-complete blockages at two points. We performed staged high-pressure jetting to clear roots and deposits throughout the full run, then recommended structural relining of three critical sections totalling 14 metres. Result: fully restored drainage function with relining providing long-term protection against root re-intrusion. A subsequent annual jetting programme was established. Tip: Verwood properties with mature trees near drain lines should budget for annual professional jetting — preventative maintenance is far cheaper than emergency repairs.`
  },

  wareham: {
    landmarks: [
      "Wareham Town Walls",
      "Wareham Quay",
      "River Frome",
      "River Piddle",
      "Wareham Priory",
      "Town Bridge",
      "Wareham Forest",
      "Arne RSPB Reserve (nearby)",
      "Wareham Station",
      "Stoborough",
      "Northport",
      "Sandford"
    ],
    drainageProfile: `Wareham, one of Dorset's most historic towns, presents drainage challenges shaped by its riverside location, Saxon heritage, and the particular geological conditions of building between two rivers on the edge of the Purbeck peninsula. Enclosed within its remarkable Anglo-Saxon town walls, Wareham retains much of its ancient character, with the town centre featuring properties spanning centuries of construction.

The Rivers Frome and Piddle define Wareham's drainage context. The Frome flows along the southern edge of the town while the Piddle joins from the north, and properties between these two rivers face flood risk considerations that are among the most significant in Dorset. During heavy rainfall and high tides, water levels can rise rapidly, overwhelming local drainage and creating backup into properties, particularly those near the Quay and in the lower-lying northern parts of town.

The sandy and alluvial soil beneath Wareham, deposited by the rivers over millennia, creates conditions where pipes can shift and settle more easily than in firmer ground. The relatively high water table — influenced by both rivers and by the proximity of Poole Harbour — means subsurface moisture is a constant factor, and drainage pipes effectively sit in damp ground that accelerates corrosion of cast iron components.

The older properties within the town walls — Georgian townhouses, Victorian cottages, and some even older structures — have drainage systems that may date back 200 years or more, with multiple layers of modification. The narrow streets and close-packed buildings in the town centre make access for drainage work challenging.

The surrounding areas of Stoborough, Sandford, and Northport feature a mix of period cottages and more modern housing. These areas face their own drainage challenges, with Stoborough in particular sitting on low-lying ground near the Frome that is susceptible to flooding.

Wareham's distinctive riverside character demands drainage expertise that understands flood risk management, river-influenced ground conditions, and the particular challenges of maintaining historic drainage infrastructure in a town built between two rivers.`,
    localFAQs: [
      {
        question: "How do the rivers affect drainage in Wareham?",
        answer: "Wareham sits between the Rivers Frome and Piddle, creating significant flood risk for properties throughout the town, particularly those near the Quay and in lower-lying areas. During heavy rainfall combined with high tides in Poole Harbour, water levels can rise rapidly, overwhelming drainage and causing backup. The high water table from river proximity means drainage pipes sit in damp ground, accelerating wear. Property owners in Wareham should maintain clear drainage, consider backflow prevention devices, and stay informed about Environment Agency flood warnings for the Frome and Piddle catchments."
      },
      {
        question: "What drainage issues are common in Wareham's older properties?",
        answer: "Properties within Wareham's town walls may have drainage systems with multiple layers of modification spanning centuries. Original stone channels may have been supplemented with Victorian clay pipes and later plastic additions. The narrow streets make excavation difficult, and the proximity of neighbouring buildings means drainage often follows complex routes. Professional CCTV survey is essential for understanding the full drainage configuration, especially before purchasing or renovating an older Wareham property."
      },
      {
        question: "Should Wareham properties near the rivers be concerned about flooding?",
        answer: "Yes, particularly properties near the Quay, along the Frome corridor, and in low-lying Stoborough. The combination of high water table, tidal influence from Poole Harbour, and the convergence of two rivers creates genuine flood vulnerability. Ground-floor areas should have adequate waterproofing where possible, functioning non-return valves on drainage connections, and property owners should monitor conditions during combined heavy rain and high tide events."
      }
    ],
    caseStudy: `Recent call-out to a Georgian cottage within Wareham's town walls: The homeowner reported a persistent sewage smell in the ground-floor hallway and intermittent slow drainage in the rear extension bathroom. Our CCTV survey revealed a problem characteristic of Wareham's riverside ground conditions — the main clay drain had developed a visible sag over a 3-metre section where the alluvial soil had settled unevenly. This low point was collecting waste and water, creating the odour issue, and restricting flow during periods of heavy use. Additionally, the cast iron soil stack showed significant corrosion at the external section. We excavated the sagging section and re-laid the pipe on a properly compacted bed with additional support, and replaced the corroded section of soil stack with modern PVC. Result: eliminated the odour issue and restored proper drainage flow. Tip: Wareham properties should be aware that alluvial river soil settlement can create pipe sags over time — if you notice new drainage odours or intermittent slow drainage, a CCTV survey will quickly identify whether ground movement is the cause.`
  },

  swanage: {
    landmarks: [
      "Swanage Pier",
      "Swanage Beach",
      "Swanage Railway Station",
      "Durlston Country Park",
      "Durlston Castle",
      "Peveril Point",
      "The Mowlem",
      "Swanage Town Centre",
      "Herston",
      "New Swanage",
      "Ulwell",
      "Langton Matravers (nearby)"
    ],
    drainageProfile: `Swanage is a Purbeck coastal town whose drainage character is shaped by its seaside location, stone-quarrying heritage, and its position as a popular resort that has grown from a small fishing and quarrying village into a substantial residential town. Understanding these influences is essential for property owners managing drainage in this area, where the coastal environment sits alongside aging Victorian infrastructure and more recent suburban expansion.

The coastal location is Swanage's most significant drainage consideration. The town faces east across Swanage Bay, and properties along the seafront, Shore Road, and in the lower-lying parts of the town centre are exposed to the effects of salt air, high water table, and tidal influence on drainage. Salt accelerates corrosion of cast iron pipework and metallic components, while the high water table from proximity to the sea means drainage pipes sit in damp ground throughout the year. During combined heavy rainfall and high tides, the drainage system's ability to discharge can be temporarily compromised.

The historic core of Swanage around the High Street, the Quay, and the older parts of Herston features stone-built and Victorian drainage systems. Purbeck stone was used extensively in local construction, and some drainage channels reflect this local building tradition. The cottages and terraces in the older parts of town have drainage systems that may date back 150 years or more.

New Swanage and the residential areas developed in the mid-to-late 20th century feature drainage from the 1950s through to the 1980s. Like other Dorset towns developed in this period, many properties used clay and early plastic pipework that is now approaching the end of its designed lifespan.

The surrounding Purbeck Hills and the limestone geology around Durlston create natural drainage patterns that affect individual properties. Surface water from the hills drains toward the town, and properties on slopes or at the foot of rising ground can experience significant runoff during heavy rainfall.

Swanage's drainage context combines coastal exposure, historic stone-built infrastructure, mid-century suburban systems, and the effects of its Purbeck limestone geology. Property owners benefit from understanding which of these factors most affects their specific location.`,
    localFAQs: [
      {
        question: "How does Swanage's coastal location affect my property's drainage?",
        answer: "Swanage's seafront position means salt air corrodes exposed cast iron drainage components, the high water table from sea proximity keeps pipes sitting in damp ground, and during high tides combined with heavy rainfall, the drainage system's discharge capacity can be temporarily compromised. Properties along the seafront and in the lower-lying town centre are most affected. Regular inspection and maintenance of metal drainage components is particularly important in Swanage, and properties near the shore should consider corrosion-resistant materials for any drainage upgrades."
      },
      {
        question: "What drainage issues are common in Swanage's older housing areas?",
        answer: "Older housing in Swanage — from Victorian terraces to mid-century family homes — commonly features clay drainage that is now 50 to 150 years old. These pipes develop joint failures, cracks, and blockages as they age. The Purbeck limestone geology can cause localised ground water issues, while the coastal salt environment accelerates corrosion of metal components. If your property dates from before the 1980s and has never had drainage work, a professional survey is strongly recommended to assess the current condition."
      },
      {
        question: "Is there flood risk in Swanage?",
        answer: "Properties in the lower-lying parts of Swanage town centre and along the seafront face some flood risk during combined heavy rainfall and high tides. Surface water from the surrounding Purbeck Hills also drains toward the town. Property owners in these areas should maintain clear surface drainage, consider non-return valves on drainage connections, and be aware of any Environment Agency flood information for the area."
      }
    ],
    caseStudy: `Call-out to a Victorian terrace in Swanage near the railway station: The homeowner reported that both the kitchen and bathroom drains had become progressively slower over several months, with occasional complete blockages requiring plunging. Our CCTV survey revealed two concurrent problems typical of Swanage's drainage environment. First, the property's original clay drainage — now over 100 years old — had developed internal scaling from mineral deposits, reducing the effective pipe diameter by approximately 35%. Second, the main drain run had developed a slight but significant displacement at a joint, consistent with gradual ground movement. The ground movement had created a step in the pipe that was trapping debris and accelerating the blockage cycle. We recommended a comprehensive solution: high-pressure jetting to clear accumulated material, followed by structural relining of the entire 18-metre main drain run. The relining addressed both the scaling problem and bridged the displaced joint, creating a new continuous pipe within the old one. Result: permanently resolved the progressive blockage issue and future-proofed the drainage against further deterioration and any further ground movement. Tip: Swanage properties from the Victorian era that experience gradually worsening drainage should suspect pipe aging and ground movement — these two factors often work together and CCTV survey will quickly reveal both.`
  }
};

export function getLocationHubContent(slug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[slug];
}
