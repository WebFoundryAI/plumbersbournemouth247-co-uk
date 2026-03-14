/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  bournemouth: {
    neighborhoods: ["Westbourne", "Boscombe", "Winton", "Charminster", "Southbourne", "Pokesdown", "Springbourne", "Lansdowne"],
    landmarks: ["Bournemouth Pier", "Bournemouth Beach", "The Square", "Bournemouth Gardens", "Russell-Cotes Art Gallery"],
    drainageInfo: "Bournemouth's historic drainage infrastructure dates back to the Victorian era, when the town developed rapidly as a fashionable seaside resort. The sandy heathland soils beneath the town create variable ground conditions, while the Bourne Stream valley and dramatic coastal chines channel surface water in ways that create unique challenges for drainage engineers across the town.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian villas, Edwardian terraces, converted guest houses, modern apartments, and commercial premises"
  },
  poole: {
    neighborhoods: ["Poole Quay", "Old Town", "Hamworthy", "Canford Cliffs", "Sandbanks", "Parkstone"],
    landmarks: ["Poole Quay", "Poole Harbour", "Sandbanks", "Brownsea Island", "Twin Sails Bridge"],
    drainageInfo: "Poole's maritime heritage and harbour-side location bring distinctive drainage challenges. The area's mix of historic quayside properties, traditional terraces, and modern waterfront developments each present different needs. Properties near the harbour are susceptible to tidal influences on drainage systems, while the area's ongoing regeneration has created a patchwork of old and new infrastructure.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "harbour-side properties, period cottages, modern waterfront apartments, and commercial units"
  },
  christchurch: {
    neighborhoods: ["Town Centre", "Mudeford", "Highcliffe", "Friars Cliff", "Stanpit", "Purewell"],
    landmarks: ["Christchurch Priory", "Christchurch Quay", "Mudeford Quay", "the River Avon", "Highcliffe Castle"],
    drainageInfo: "Christchurch's position at the confluence of the rivers Avon and Stour means properties here face particular surface water and flood drainage challenges. The historic town centre near the Priory has some of Dorset's oldest domestic drainage, while newer housing developments on the edges have modern systems. The proximity to two rivers and the harbour adds significant groundwater considerations.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone-built cottages, Victorian terraces, modern housing estates, and riverside properties"
  },
  wimborne: {
    neighborhoods: ["Town Centre", "Colehill", "Merley", "Leigh", "Canford Magna", "Wimborne Road"],
    landmarks: ["Wimborne Minster", "the River Stour", "Wimborne High Street", "Kingston Lacy", "Walford Mill"],
    drainageInfo: "Wimborne and the surrounding area combine historic market town properties with mid-century housing developments and modern estates. The town's position at the confluence of the Allen and Stour rivers means flood risk is a genuine concern. Properties near the rivers may experience higher water tables, particularly during wet weather.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone-built terraces, period cottages, modern family homes, and market town commercial properties"
  },
  ferndown: {
    neighborhoods: ["Town Centre", "Trickett's Cross", "Longham", "Parley", "West Parley", "Hampreston"],
    landmarks: ["Ferndown Town Centre", "Ferndown Forest", "Stapehill Abbey", "Ferndown Golf Club", "the River Stour (nearby)"],
    drainageInfo: "Ferndown developed substantially from the 1960s onwards, meaning most of its drainage infrastructure is from that era. While newer than Bournemouth's Victorian systems, these mid-century clay and plastic pipes are now reaching the end of their design life. The town's planned layout means drainage routes are generally well-documented, but original materials are increasingly prone to deterioration and root intrusion from maturing garden trees.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "1960s-80s family housing, modern executive homes, commercial units, and suburban properties"
  },
  ringwood: {
    neighborhoods: ["Town Centre", "Poulner", "Hightown", "Crow", "Moortown", "Bisterne Close"],
    landmarks: ["Ringwood Town Centre", "Bickerley Common", "the River Avon", "The Furlong", "New Forest (nearby)"],
    drainageInfo: "Ringwood sits on the western edge of the New Forest, with a mix of period properties in the town centre and suburban housing developments in surrounding areas. The older properties along the High Street have period drainage systems, while the mid-century housing in Poulner and Hightown features clay pipe networks of varying condition. The River Avon's flood plain influences local groundwater levels, affecting drainage performance in surrounding streets.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "period cottages, Victorian and Edwardian houses, modern suburban housing, and semi-detached family homes"
  },
  verwood: {
    neighborhoods: ["Town Centre", "Three Legged Cross", "Ebblake", "Romford", "Dewlands", "Potterne"],
    landmarks: ["Verwood Hub", "Potterne Park", "Dewlands Common", "Cranborne Road", "Ringwood Forest (nearby)"],
    drainageInfo: "Verwood is a popular residential town surrounded by heathland, featuring substantial family housing with mature gardens. These established homes have drainage systems that are often 40 to 60 years old. The heathland setting and large garden trees create significant root intrusion risks, while the sandy and clay soil mix creates variable drainage conditions across the area.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "1960s-80s detached houses, modern family homes, bungalows, and suburban properties"
  },
  wareham: {
    neighborhoods: ["Town Centre", "Stoborough", "Northport", "Sandford", "Ridge", "Worgret"],
    landmarks: ["Wareham Town Walls", "Wareham Quay", "the River Frome", "the River Piddle", "Arne RSPB Reserve (nearby)"],
    drainageInfo: "Wareham's riverside location between the Frome and Piddle rivers creates specific drainage considerations. The alluvial soil near the rivers allows pipe movement, while properties face significant flood risk during heavy rainfall. Historic properties within the town walls have original drainage systems spanning centuries, and the town's growing popularity has led to many property renovations that alter original drainage layouts.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Georgian townhouses, Victorian cottages, modern conversions, and riverside properties"
  },
  swanage: {
    neighborhoods: ["Town Centre", "Herston", "New Swanage", "Ulwell", "Durlston", "Langton Matravers (nearby)"],
    landmarks: ["Swanage Pier", "Swanage Beach", "Durlston Country Park", "Swanage Railway", "Peveril Point"],
    drainageInfo: "Swanage's coastal location on the Purbeck peninsula combines seaside drainage challenges with the effects of the local limestone geology. The historic town centre features Victorian and older stone-built drainage, while mid-century suburban development has modern but aging systems. Salt air, high water table, and the Purbeck Hills all influence drainage behaviour and infrastructure longevity across the town.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian stone terraces, period cottages, modern family housing, and coastal properties"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  bournemouth: {
    "blocked-drains": {
      intro: "Bournemouth's varied architectural heritage means blocked drains can affect anything from a Victorian clifftop villa to a modern town centre apartment. Our experienced engineers understand the unique drainage challenges facing properties across the town and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in restaurant districts along the seafront", "Tree root intrusion from mature pine trees and garden trees", "Debris accumulation in Victorian and Edwardian clay pipes", "Wet wipe blockages in student accommodation areas near the university", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near Bournemouth's tree-lined avenues in Westbourne and Charminster should consider annual drain inspections to catch root intrusion early."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Bournemouth, you need a fast response from engineers who know the local area. Whether you're in Westbourne, Boscombe, or Winton, our drain unblocking teams are strategically positioned across the town to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in converted guest houses and flats", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Bournemouth's busy restaurants and cafes along the seafront and in Westbourne benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Bournemouth property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Bournemouth's older properties with Victorian-era drainage.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from sandy soil settlement"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Bournemouth's established suburbs like Westbourne or Charminster? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Bournemouth's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Bournemouth's water supply contributes to mineral scale buildup in pipes over time. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Bournemouth emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the town. From Boscombe flats to Westbourne family homes, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Bournemouth location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Bournemouth's mix of Victorian infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Sandy soil settlement damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Bournemouth's sandy soil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  poole: {
    "blocked-drains": {
      intro: "Poole's transformation from historic port to vibrant waterfront town has created a fascinating mix of old and new drainage systems. From the period properties in the Old Town to the modern apartments at Hamworthy, our engineers have the expertise to clear blocked drains in any property type across the area.",
      commonProblems: ["Sediment accumulation in older harbour-side buildings", "Shared drainage issues in converted properties", "Modern plastic pipe blockages in waterfront developments", "Commercial kitchen waste in Quay restaurants", "Surface water issues near the harbour"],
      process: "Every Poole blocked drain is unique, and we treat it that way. Our engineers assess the property type and drainage configuration before selecting the most effective clearing method, whether that's rodding, jetting, or mechanical cutting.",
      localTip: "Harbour-side properties should ensure their drainage connects correctly to the main sewer system, as some converted buildings have complex private drainage arrangements."
    },
    "drain-unblocking": {
      intro: "From emergency callouts near Sandbanks to routine unblocking in the Old Town, our Poole drain unblocking service covers every eventuality. We understand the varied property stock across the area and bring the right equipment to handle Victorian clay pipes and modern plastic systems alike.",
      commonProblems: ["Hair and soap accumulation in bathroom drains", "Food waste blockages in kitchen sinks", "External gully blockages from garden debris", "Toilet blockages from inappropriate flushing", "Fat buildup in commercial premises"],
      process: "Our Poole-based engineers carry comprehensive unblocking equipment including flexible rods, electromechanical machines, and water jetting units. We select the appropriate tool for each blockage type and clear your drains with minimal disruption.",
      localTip: "Poole's older properties around the Quay and Old Town often have deep external manholes. Regular clearing prevents serious blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a period property in Poole Old Town or investigating drainage issues at a Sandbanks property, our CCTV drain surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your Poole property.",
      commonProblems: ["Unknown pipe routes in converted buildings", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation", "Planning for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and later compiled into a comprehensive report for your records.",
      localTip: "Poole waterfront apartments and harbour-side conversions often share complex drainage systems. A CCTV survey helps identify responsibility boundaries before issues arise."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Poole, equally effective on Victorian clay pipes in period properties and modern systems in new waterfront developments. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in commercial kitchens", "Scale deposits from water supply", "Silt and sediment in surface water drains", "Root fragments after removal treatments", "General maintenance cleaning"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works upstream from the blockage point, ensuring debris is flushed towards the sewer rather than further into your system.",
      localTip: "Poole's thriving restaurant scene along the Quay means commercial premises should schedule regular jetting to comply with environmental regulations and prevent emergency callouts."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Poole receive our immediate attention, with engineers stationed to respond rapidly to properties from Sandbanks to Hamworthy. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally, minimising damage and disruption to your property.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rain", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "Foul odours indicating pipe damage"],
      process: "Emergency calls are prioritised and dispatched to our nearest Poole engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Poole properties near the harbour and quayside should have emergency drainage contacts readily available, particularly during autumn leaf fall and periods of heavy rainfall."
    },
    "drain-repairs": {
      intro: "Poole's diverse building stock requires drainage repair expertise spanning centuries of construction techniques. Our repair teams handle everything from relining Victorian clay pipes in Old Town properties to replacing damaged plastic sections in new waterfront developments, always using materials and methods suited to your specific property.",
      commonProblems: ["Cracked clay pipes in older properties", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Damage from third-party excavations"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Poole's harbour-side and waterfront areas may have unexpected underground features from the town's maritime history. Always commission surveys before excavating for drain repairs."
    }
  },
  christchurch: {
    "blocked-drains": {
      intro: "Christchurch's position at the confluence of the Avon and Stour, combined with its mix of historic and modern housing, creates diverse drainage challenges. Our Christchurch blocked drain specialists understand how river levels and coastal proximity affect drainage systems, from Mudeford's traditional cottages to Highcliffe's residential developments.",
      commonProblems: ["Silt and sediment accumulation from river proximity", "Root intrusion from mature garden trees", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in shared Victorian drainage"],
      process: "We assess your Christchurch property's position relative to the rivers and coastline before selecting clearing methods. Riverside properties may require different approaches than those further inland. Our engineers are experienced with all Christchurch property types and drainage configurations.",
      localTip: "Christchurch properties near the rivers Avon and Stour should ensure external drains have adequate gully pots to catch debris before it enters the pipe system, particularly after heavy rain."
    },
    "drain-unblocking": {
      intro: "When drains block in Christchurch, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Highcliffe or an overflowing external drain in Mudeford, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Christchurch engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Christchurch's historic High Street properties often have rear drainage running through neighbouring land. Know your drainage easements to avoid disputes."
    },
    "cctv-drain-surveys": {
      intro: "Christchurch's architectural variety, from Mudeford's traditional harbour cottages to Highcliffe's modern estates, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing in Christchurch's conservation area near the Priory? CCTV surveys can identify period drainage features that may need specialist attention."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Christchurch's varied drainage systems often need. From clearing deposits in Mudeford's traditional pipes to routine maintenance for Highcliffe's newer systems, our jetting service restores optimal drainage performance across the area.",
      commonProblems: ["Scale accumulation from water supply", "Grease buildup in residential drains", "Silt deposits from surface water drainage", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage to your drainage system.",
      localTip: "Christchurch properties near the rivers and coast benefit from periodic jetting to remove silt and mineral deposits before they restrict flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Christchurch receive rapid response from our local teams, day or night. From flooded gardens in Highcliffe to sewage issues in Mudeford, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our Christchurch service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Christchurch's riverside and coastal properties are prone to surface water issues during heavy rain and high tides. Keeping gullies clear helps prevent property flooding."
    },
    "drain-repairs": {
      intro: "Christchurch's diverse property ages mean drain repairs must be tailored to specific situations. Whether you need no-dig relining for a Victorian pipe near the Priory or excavation repairs in a newer Highcliffe property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "Damage from external factors"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and any ongoing maintenance requirements. All repairs are guaranteed for your peace of mind.",
      localTip: "Christchurch's alluvial river soil can cause seasonal pipe movement. Consider flexible repair solutions that accommodate ground conditions."
    }
  },
  wimborne: {
    "blocked-drains": {
      intro: "Wimborne's market town heritage and surrounding Dorset communities present a varied set of drainage challenges. From the traditional properties near the Minster to the modern housing estates in Colehill and Merley, our Wimborne blocked drain experts bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Debris accumulation in ageing stone drainage", "Root intrusion from established trees in mature gardens", "Fat and grease buildup in domestic kitchens", "Shared drainage blockages in terraced housing", "Surface water issues near the rivers Allen and Stour"],
      process: "Wimborne's varied property types demand flexible approaches. We assess each situation individually, considering property age, pipe material, and the area's specific environmental factors before selecting our clearing method.",
      localTip: "Wimborne properties near the River Stour and along the Allen valley should have drainage inspected regularly, as riverside tree roots and water table levels affect pipe integrity."
    },
    "drain-unblocking": {
      intro: "When Wimborne drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From the town centre to Colehill, we handle residential drain unblocking with professional efficiency and minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older properties", "Utility room drainage issues"],
      process: "Our Wimborne engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Wimborne's older stone-built properties often have deep inspection chambers. Ensure access covers are in good condition and accessible for maintenance."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Wimborne property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable in the Wimborne area where ground conditions vary near the rivers.",
      commonProblems: ["Unknown drainage routes in period properties", "Pipe condition assessment for home purchases", "Root ingress detection from mature gardens", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Wimborne properties near the river flood plains may have complex drainage arrangements. Surveys help identify the full drainage configuration before problems develop."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is valuable maintenance for Wimborne's drainage systems. Our specialist equipment handles everything from clearing root masses in period properties to descaling pipes in Merley's modern housing, maintaining optimal flow throughout the area.",
      commonProblems: ["Scale buildup from water supply", "Grease accumulation in residential drains", "Silt and sediment from nearby rivers and streams", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Wimborne properties with gardens near the River Stour experience more silt buildup — consider jetting every 12 months rather than the usual 18."
    },
    "emergency-drain-services": {
      intro: "Wimborne drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded garden in Merley or sewage backup near the Minster, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on residential streets", "Collapsed drainage from ground movement", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Wimborne's river valley location means water levels can rise quickly after sustained heavy rain. Keep emergency drain contacts readily available and know your manhole locations."
    },
    "drain-repairs": {
      intro: "Wimborne's property stock spans traditional stone cottages to modern family homes, and our drain repair expertise matches this diversity. From relining Victorian pipes near the town centre to replacing damaged sections in Colehill, we provide repair solutions appropriate to each property type.",
      commonProblems: ["Cracked stone drainage channels in period properties", "Clay pipe deterioration from age", "Joint failures from ground movement", "Root damage from established trees", "Ground settling effects on newer developments"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Wimborne's mix of river valley and higher ground means ground conditions can vary significantly — always commission a proper survey before planning drainage repair work."
    }
  },
  ferndown: {
    "blocked-drains": {
      intro: "Ferndown's established residential character, with its mix of 1960s-onwards housing and mature gardens, creates specific drainage challenges. From the family homes along Ringwood Road to the newer developments near Longham, our Ferndown blocked drain experts bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Root intrusion from mature garden trees and hedging", "Debris accumulation in aging clay and plastic pipes", "Fat and grease buildup from domestic kitchens", "Surface water issues during heavy rainfall", "Blockages from pipe deterioration in older properties"],
      process: "Ferndown's predominantly residential housing stock requires a methodical approach. We assess each situation individually, considering property age, pipe material, and the area's sandy heathland soil conditions before selecting our clearing method.",
      localTip: "Ferndown properties with mature conifer trees near drain runs should have annual inspections — pine roots are particularly aggressive at infiltrating aging pipe joints."
    },
    "drain-unblocking": {
      intro: "When Ferndown drains need unblocking, our local team responds promptly with the right equipment. From Trickett's Cross to West Parley, we handle residential drain unblocking with professional efficiency and minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages from food waste", "Toilet and bathroom clogs", "External drain obstructions from garden debris", "Washing machine and utility room drain issues", "Shared drainage problems in semi-detached properties"],
      process: "Our Ferndown engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Ferndown's planned suburban layout means most properties have accessible external drainage. Keeping manhole covers clear and accessible speeds up any future maintenance."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Ferndown property's drainage condition is essential, particularly for homes built in the 1960s and 70s when materials with limited lifespans were commonly used. Our CCTV surveys reveal the condition of pipes beneath your property, helping plan maintenance before emergencies occur.",
      commonProblems: ["Pipe deterioration in 1960s-70s properties", "Root ingress from mature garden vegetation", "Joint and connection problems from soil settlement", "Unknown drainage routes from property modifications", "Condition assessment for property transactions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Ferndown properties from the 1960s-70s era should have a drainage survey before any major renovation — understanding pipe condition prevents expensive surprises mid-project."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is valuable maintenance for Ferndown's aging drainage systems. Our specialist equipment handles everything from clearing root masses in established properties to descaling pipes in newer housing, maintaining optimal flow throughout the area.",
      commonProblems: ["Scale and mineral buildup in older pipes", "Grease accumulation in residential drains", "Root fragments after cutting treatment", "Sand and grit from heathland soil conditions", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting pipe integrity. We verify results with flow testing.",
      localTip: "Ferndown's heathland setting means fine sand can accumulate in drainage over time — periodic jetting flushes out this material before it restricts flow."
    },
    "emergency-drain-services": {
      intro: "Ferndown drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded garden or sewage backup, we're available around the clock to resolve the situation and protect your property from damage.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on residential streets", "Collapsed drainage from pipe failure", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Ferndown's flat terrain means surface water can pool quickly during heavy rain. Keep external gulley covers clear and ensure downpipes are discharging correctly."
    },
    "drain-repairs": {
      intro: "Ferndown's housing stock predominantly dates from the 1960s onwards, and our repair expertise is well suited to the materials and construction methods from this era. From relining deteriorating pipes to replacing collapsed sections, we provide repair solutions appropriate to Ferndown's suburban properties.",
      commonProblems: ["Clay pipe deterioration from age", "Joint failures from sandy soil settlement", "Root damage from established trees", "Pipe collapse in older installations", "Damage from garden landscaping work"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Ferndown's sandy soil conditions generally make excavation repairs straightforward, but pipe bedding must be done carefully on compacted material to prevent future settlement."
    }
  },
  ringwood: {
    "blocked-drains": {
      intro: "Ringwood's market town character, combined with its position on the edge of the New Forest and along the River Avon, creates distinctive drainage challenges. From the period properties along the High Street to the suburban housing in Poulner and Hightown, our Ringwood blocked drain experts bring local knowledge to every job.",
      commonProblems: ["Root intrusion from mature New Forest trees and garden vegetation", "Debris accumulation in period property drainage", "Fat and grease from domestic and commercial kitchens", "Silt and sediment near the River Avon", "Surface water blockages from leaf fall"],
      process: "We assess each Ringwood situation individually, considering property age, proximity to the river and forest, and specific environmental factors before selecting our clearing method.",
      localTip: "Ringwood properties near the New Forest boundary should budget for regular root cutting — forest trees have extensive root systems that can reach domestic drainage from considerable distances."
    },
    "drain-unblocking": {
      intro: "When Ringwood drains need unblocking, our local team responds with the expertise your situation demands. From the historic town centre to the residential areas of Poulner and Hightown, we clear blocked drains efficiently and effectively.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions from garden and forest debris", "Interceptor trap blockages in older properties", "Surface water drain problems after storms"],
      process: "Our Ringwood engineers carry comprehensive unblocking equipment suitable for all drain types and property ages. We assess the blockage location and severity, then apply the most effective clearing technique.",
      localTip: "Ringwood properties with gardens backing onto open countryside or the New Forest should clear external gullies regularly, particularly during autumn leaf fall."
    },
    "cctv-drain-surveys": {
      intro: "Ringwood's mix of period properties and modern housing means drainage systems vary significantly in age and condition. Our CCTV surveys provide essential information for property purchasers, sellers, and homeowners investigating persistent problems in this popular market town.",
      commonProblems: ["Age-related pipe deterioration in period properties", "Root ingress from garden and forest vegetation", "Ground movement affecting joints near the river", "Historical modifications and connections", "Condition assessment for property transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your Ringwood property.",
      localTip: "Purchasing a period property in Ringwood town centre? A CCTV survey can reveal centuries-old drainage features that may need specialist attention or upgrading."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the thorough cleaning that Ringwood's varied drainage systems often need. From clearing deposits in period property drainage to routine maintenance for newer suburban systems, our jetting service restores optimal performance across the area.",
      commonProblems: ["Scale and mineral accumulation", "Grease buildup in residential drains", "Silt deposits from surface water drainage", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without damage to your drainage system.",
      localTip: "Ringwood properties near the River Avon benefit from periodic jetting to remove silt and sediment deposits before they restrict flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Ringwood receive rapid response from our local teams, day or night. From flooded gardens near the River Avon to sewage issues in residential streets, our engineers are ready to tackle any emergency and protect your property.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our Ringwood service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Ringwood's riverside properties are prone to surface water issues during heavy rain when the Avon is running high. Maintaining clear gullies and having a non-return valve fitted provides essential protection."
    },
    "drain-repairs": {
      intro: "Ringwood's mix of period and modern properties means drain repairs must be tailored to specific situations. Whether you need no-dig relining for a Victorian pipe or excavation repairs in a modern suburban property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes in period properties", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "Flood damage to drainage systems"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and ongoing maintenance requirements. All repairs are guaranteed.",
      localTip: "Ringwood's varied ground conditions — from river alluvium to heathland sand — affect how repairs should be carried out. Site-specific assessment ensures the right approach for your property."
    }
  },
  verwood: {
    "blocked-drains": {
      intro: "Verwood's established residential setting, surrounded by heathland and forest, presents particular drainage challenges. Our Verwood blocked drain specialists understand how the local environment — mature trees, heathland soils, and the effects of clay and sand ground conditions — affects drainage across the town's family housing stock.",
      commonProblems: ["Root intrusion from mature garden and heathland trees", "Debris and leaf accumulation in drains", "Fat and grease from domestic kitchens", "Clay pipe deterioration in 1960s-80s housing", "Surface water issues from heathland runoff"],
      process: "We assess each Verwood situation individually, considering the property's age, surrounding vegetation, and the local soil conditions. Our approach is tailored to the heathland environment that makes Verwood distinctive.",
      localTip: "Verwood properties with boundaries adjoining Dewlands Common or forest areas should have annual drainage inspections — tree roots from public land can infiltrate private drainage from surprising distances."
    },
    "drain-unblocking": {
      intro: "When Verwood drains need unblocking, our local team responds with the right equipment and expertise. From the town centre to Three Legged Cross, we handle residential drain unblocking efficiently and with minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions from garden debris and leaves", "Root-related blockages", "Utility room drainage issues"],
      process: "Our Verwood engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Verwood's heathland setting means leaves, pine needles, and natural debris can block external gullies quickly during autumn — regular clearing prevents drain entry."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Verwood property's drainage is essential for proper long-term maintenance. Our CCTV surveys reveal root intrusion, pipe deterioration, and other issues that surface inspection cannot detect, providing the information you need to manage drainage proactively in this tree-rich environment.",
      commonProblems: ["Root ingress from mature gardens and nearby heathland", "Pipe deterioration in 1960s-80s housing", "Joint failures from sandy soil settlement", "Unknown drainage routes from property modifications", "Condition assessment for property sales"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Verwood properties surrounded by mature trees should have drainage surveyed every three to five years as a minimum — early detection of root intrusion prevents costly emergency repairs."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is particularly important for Verwood properties, where tree root intrusion and natural debris accumulation are ongoing concerns. Our specialist equipment clears roots, deposits, and debris, restoring optimal drainage performance.",
      commonProblems: ["Root mass accumulation at pipe joints", "Scale and mineral buildup", "Sand and grit from heathland soil", "Organic debris from surrounding vegetation", "General preventative maintenance cleaning"],
      process: "We select jetting equipment appropriate for your pipe type and the material being removed. Root cutting nozzles address root intrusion, while standard jetting clears deposits and debris. We verify results with flow testing.",
      localTip: "Verwood properties with known root intrusion history should schedule annual jetting to prevent root regrowth from establishing between maintenance visits."
    },
    "emergency-drain-services": {
      intro: "Verwood drainage emergencies receive immediate attention from our response teams. Whether you're facing a flooded garden from blocked drains or sewage backup, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on residential streets", "Root-caused drain collapses", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Verwood's rural-suburban setting means some properties have longer private drainage runs — knowing where your manhole covers are located helps our emergency engineers respond faster."
    },
    "drain-repairs": {
      intro: "Verwood's family housing stock — predominantly from the 1960s through 1990s — requires repair expertise suited to the materials and construction methods of these eras. From relining root-damaged pipes to replacing collapsed sections, we provide repair solutions appropriate to Verwood's residential properties.",
      commonProblems: ["Root damage requiring long-term solutions", "Clay pipe deterioration from age", "Joint failures from ground movement", "Pipe collapse from root pressure", "Damage discovered during renovation projects"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options. Root barrier installation may be recommended alongside pipe repairs to prevent recurrence. All work carries appropriate guarantees.",
      localTip: "Verwood's sandy soil conditions can make traditional excavation repairs straightforward — but pipe bedding must be done carefully to prevent future settlement."
    }
  },
  wareham: {
    "blocked-drains": {
      intro: "Wareham's historic riverside setting creates distinctive drainage challenges unlike anywhere else in Dorset. From the ancient properties within the Saxon town walls to the residential areas of Stoborough and Sandford, our Wareham blocked drain experts understand how the rivers Frome and Piddle influence drainage across the town.",
      commonProblems: ["Silt and river sediment accumulation", "Root intrusion from riverside trees and garden vegetation", "Fat and grease from domestic and commercial kitchens", "Debris buildup in historic stone drainage", "Surface water issues during high river levels"],
      process: "We assess each Wareham situation with full awareness of the town's unique riverside context. Property position relative to the rivers and flood plain influences our approach, as does the age and type of drainage infrastructure.",
      localTip: "Wareham properties near the River Frome and Quay should ensure external drains have non-return valves fitted to protect against river-related backup during flood events."
    },
    "drain-unblocking": {
      intro: "When Wareham drains need unblocking, our local team responds with specialist knowledge of the town's riverside drainage environment. From the historic town centre to Stoborough and Sandford, we clear blocked drains efficiently and effectively.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions from river debris", "Interceptor trap blockages in older properties", "Flooding-related drain problems"],
      process: "Our Wareham engineers carry comprehensive unblocking equipment suitable for all drain types, from ancient stone channels to modern plastic systems. We assess the blockage and apply the most effective clearing technique.",
      localTip: "Wareham's historic properties within the town walls often have complex, multi-layered drainage. Understanding the system layout before blockages occur saves time during emergencies."
    },
    "cctv-drain-surveys": {
      intro: "Wareham's mix of ancient and modern properties means drainage systems can range from centuries-old stone channels to contemporary plastic pipe. Our CCTV surveys reveal the true condition of your underground drainage, providing essential information for this historically significant town.",
      commonProblems: ["Unknown drainage routes in ancient properties", "Pipe condition assessment for property purchases", "Root ingress from riverside vegetation", "Flood damage assessment", "Planning investigation for renovations in conservation area"],
      process: "We survey your accessible drainage system, documenting condition and noting defects. For Wareham's older properties, surveys often reveal complex drainage arrangements that benefit from professional mapping.",
      localTip: "Purchasing within Wareham's town walls? CCTV surveys are essential — historic properties may have drainage features spanning centuries that need specialist assessment."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is particularly valuable for Wareham's drainage systems, where river silt, sediment, and flood debris can accumulate in both historic and modern pipework. Our specialist equipment restores optimal flow while respecting the age and condition of your pipes.",
      commonProblems: ["River silt and sediment accumulation", "Grease buildup in residential and commercial drains", "Flood debris clearing", "Root fragments after cutting treatment", "General maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment and pressure settings. For Wareham's older pipes, we use carefully controlled pressure to avoid damage while achieving thorough cleaning.",
      localTip: "Wareham properties should have drainage jetted after any flood event — river silt deposited during flooding can quickly cause secondary blockages if not cleared."
    },
    "emergency-drain-services": {
      intro: "Wareham drainage emergencies — particularly flood-related situations — receive our immediate priority response. Our engineers understand the town's flood risk context and are equipped to deal with the specific challenges that river-influenced emergencies create.",
      commonProblems: ["Sewage backing up during high river levels", "Flooding from overwhelmed drainage", "Manhole overflows during flood events", "Collapsed drains from ground saturation", "Emergency situations during river flooding"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. For Wareham's flood-related emergencies, we bring pumping equipment alongside standard drainage tools to manage water levels while addressing the underlying drainage issue.",
      localTip: "Wareham residents should register for Environment Agency flood warnings for the Frome and Piddle catchments — advance warning of rising river levels allows proactive drainage preparation."
    },
    "drain-repairs": {
      intro: "Wareham's diverse property stock — from ancient stone cottages to modern family homes — requires drainage repair expertise spanning centuries of construction techniques. Our repair specialists understand the particular challenges of working in a conservation area with significant flood risk.",
      commonProblems: ["Cracked and displaced pipes from river-related ground movement", "Historic stone drainage requiring specialist repair", "Root damage from riverside vegetation", "Flood damage to drainage infrastructure", "Corrosion from persistent ground moisture"],
      process: "Following thorough CCTV investigation, we recommend repairs suited to your property's specific context. Conservation area considerations, flood risk, and ground conditions all influence our recommendations.",
      localTip: "Wareham's alluvial river soil and high water table mean ground conditions can vary significantly — always commission a proper survey before planning drainage repair work."
    }
  },
  swanage: {
    "blocked-drains": {
      intro: "Swanage's coastal Purbeck setting creates distinctive drainage challenges shaped by the seaside environment, local limestone geology, and the town's mix of Victorian heritage and modern development. Our Swanage blocked drain experts understand how salt air, coastal soils, and the surrounding hills affect drainage across the town.",
      commonProblems: ["Mineral and scale deposits from local water supply", "Root intrusion from garden vegetation", "Fat and grease from domestic and hospitality kitchens", "Debris accumulation in aging Victorian drainage", "Surface water issues from Purbeck Hills runoff"],
      process: "We assess each Swanage drainage situation with awareness of the coastal and geological factors that affect pipe condition and blockage patterns. Our approach accounts for the specific challenges of maintaining drainage in a seaside town.",
      localTip: "Swanage properties near the seafront should have cast iron drainage components inspected regularly — salt air accelerates corrosion significantly compared to inland locations."
    },
    "drain-unblocking": {
      intro: "When Swanage drains need unblocking, our local team responds with the equipment and expertise your situation demands. From the Victorian town centre to New Swanage's residential streets, we clear blocked drains professionally and efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older properties", "Holiday let drainage issues from intensive seasonal use"],
      process: "Our Swanage engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Swanage properties used as holiday lets experience intensive seasonal drainage demands — scheduling professional maintenance at the start and end of the holiday season prevents problems during peak periods."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Swanage property's drainage is essential, particularly given the coastal environment's effects on pipe materials and the local limestone geology. Our CCTV surveys reveal the true condition of your drainage, providing information that surface inspection cannot achieve.",
      commonProblems: ["Corrosion damage from coastal salt exposure", "Age-related pipe deterioration", "Ground movement effects from limestone geology", "Unknown drainage routes in older properties", "Condition assessment for property transactions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations specific to Swanage's coastal drainage environment.",
      localTip: "Swanage property buyers should always commission a pre-purchase CCTV drain survey — coastal drainage ages faster than inland systems, and hidden issues are common."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is particularly important for Swanage properties, where mineral deposits, salt influence, and the effects of coastal conditions create ongoing drainage maintenance needs. Our specialist equipment restores optimal flow while being careful with older pipe materials.",
      commonProblems: ["Mineral and scale accumulation from water supply", "Grease buildup in residential drains", "Sand and coastal sediment", "Root fragments requiring removal", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. For Swanage's older pipes, pressure is carefully controlled. Modern systems receive thorough cleaning at higher pressures. We verify results with flow testing.",
      localTip: "Swanage's local water supply can cause faster scale buildup than in some neighbouring areas — regular jetting every 12 months is recommended for older properties."
    },
    "emergency-drain-services": {
      intro: "Swanage drainage emergencies receive rapid response from our teams, day or night. From sewage issues in the town centre to coastal flooding concerns along the seafront, our engineers tackle any emergency situation with the urgency and expertise required.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains during storms", "Overflowing manholes", "Drain collapses from ground movement", "Storm surge effects on coastal drainage"],
      process: "Emergency calls are dispatched immediately. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Swanage's exposed coastal position means storm events can be severe. Having emergency contacts and knowing your drainage layout in advance makes a significant difference during emergencies."
    },
    "drain-repairs": {
      intro: "Swanage's property stock spans Victorian stone cottages to modern family homes, and our drain repair expertise handles the full range. From relining corroded Victorian pipes to replacing damaged sections in newer properties, we provide repair solutions suited to Swanage's coastal environment.",
      commonProblems: ["Corrosion damage from salt air exposure", "Cracked pipes from limestone geology ground movement", "Root damage from established vegetation", "Age-related deterioration in Victorian drainage", "Ground settling effects"],
      process: "We investigate thoroughly before recommending repairs. For Swanage properties, we consider the coastal environment when selecting materials — corrosion-resistant options are recommended where salt exposure is a factor.",
      localTip: "Swanage properties near the seafront should use corrosion-resistant materials for any drainage repairs or replacements — standard cast iron components corrode significantly faster in the marine environment."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Wessex Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Wessex Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Bournemouth and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Bournemouth and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Bournemouth and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Bournemouth and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
