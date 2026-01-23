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
  manchester: {
    neighborhoods: ["Didsbury", "Chorlton", "Fallowfield", "Rusholme", "Withington", "Levenshulme", "Moss Side", "Hulme", "Ancoats", "Northern Quarter"],
    landmarks: ["Manchester city centre", "Old Trafford", "the Etihad Stadium", "Manchester University", "Piccadilly Gardens"],
    drainageInfo: "Manchester's Victorian-era drainage infrastructure serves a diverse mix of properties, from terraced houses to high-rise apartments. The city centre's commercial properties and older residential areas often experience drainage issues due to ageing clay pipes and tree root intrusion.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, modern apartments, commercial premises, and student accommodation"
  },
  salford: {
    neighborhoods: ["MediaCityUK", "Salford Quays", "Eccles", "Swinton", "Pendleton", "Walkden", "Worsley", "Irlam", "Cadishead", "Little Hulton"],
    landmarks: ["MediaCityUK", "the Lowry Theatre", "Salford Royal Hospital", "the University of Salford", "Salford Quays"],
    drainageInfo: "Salford combines historic industrial architecture with modern developments at MediaCityUK and Salford Quays. The older terraced properties in areas like Eccles and Swinton often have shared drainage systems that require specialist attention, while newer developments may face issues with inadequate pipe gradients.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "industrial conversions, modern waterside apartments, traditional terraces, and commercial units"
  },
  stockport: {
    neighborhoods: ["Heaton Moor", "Heaton Chapel", "Heaton Norris", "Bramhall", "Cheadle", "Cheadle Hulme", "Marple", "Reddish", "Edgeley", "Hazel Grove"],
    landmarks: ["Stockport Market", "the Pyramid", "Stockport Viaduct", "Vernon Park", "Bramhall Hall"],
    drainageInfo: "Stockport's varied topography creates unique drainage challenges. The hilly areas around Marple and Romiley can experience surface water issues, while the low-lying town centre and areas near the River Mersey are prone to flooding. Victorian properties in Heaton Moor feature original clay drainage that often requires attention.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "Victorian villas, Edwardian semis, 1930s properties, and modern housing estates"
  },
  altrincham: {
    neighborhoods: ["Hale", "Hale Barns", "Bowdon", "Timperley", "Broadheath", "Navigation Road", "Dunham Massey", "Ashley", "Well Green", "Oldfield Brow"],
    landmarks: ["Altrincham Market", "Dunham Massey", "Altrincham Interchange", "Stamford Park", "the Ice Arena"],
    drainageInfo: "Altrincham and the surrounding Trafford area feature many large, mature properties with extensive grounds. These older homes in Hale and Bowdon often have complex drainage systems serving multiple outbuildings. Tree root intrusion from established gardens is a common issue, as is the maintenance of period drainage features.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "large Victorian and Edwardian houses, prestigious detached properties, converted barns, and newer executive homes"
  },
  bolton: {
    neighborhoods: ["Horwich", "Farnworth", "Kearsley", "Little Lever", "Westhoughton", "Bromley Cross", "Egerton", "Astley Bridge", "Harwood", "Smithills"],
    landmarks: ["Bolton Town Hall", "the Macron Stadium", "Rivington Pike", "Last Drop Village", "Smithills Hall"],
    drainageInfo: "Bolton's industrial heritage means many properties sit on former mill sites with complex underground drainage. The town's hilly terrain, particularly towards the West Pennine Moors, creates natural drainage challenges. Older terraced properties in Farnworth and Little Lever often share drainage infrastructure that requires coordinated maintenance.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "mill conversions, traditional stone terraces, suburban semis, and rural properties"
  },
  oldham: {
    neighborhoods: ["Shaw", "Royton", "Chadderton", "Failsworth", "Lees", "Uppermill", "Delph", "Greenfield", "Saddleworth", "Springhead"],
    landmarks: ["Oldham Town Centre", "Saddleworth Moor", "Alexandra Park", "Oldham Coliseum", "the Pennine Way"],
    drainageInfo: "Oldham's Pennine location means properties often contend with significant rainfall and surface water drainage challenges. The steep terrain in Saddleworth and surrounding villages requires careful drainage design. Historic mill town properties in the town centre have ageing Victorian drainage that benefits from regular maintenance and inspection.",
    responseTime: "typically within 75-90 minutes",
    propertyTypes: "Pennine stone cottages, Victorian terraces, converted mills, and hilltop properties"
  },
  rochdale: {
    neighborhoods: ["Littleborough", "Milnrow", "Heywood", "Middleton", "Norden", "Castleton", "Sudden", "Bamford", "Wardle", "Smallbridge"],
    landmarks: ["Rochdale Town Hall", "Hollingworth Lake", "the Rochdale Canal", "Healey Dell", "Rochdale Pioneers Museum"],
    drainageInfo: "Rochdale's mill town heritage is reflected in its drainage infrastructure, with many properties connected to Victorian-era systems. The Pennine foothills create surface water management challenges, particularly in Littleborough and Norden. Canal-side properties require specialist attention due to their proximity to waterways.",
    responseTime: "typically within 75-90 minutes",
    propertyTypes: "stone-built terraces, mill conversions, canal-side properties, and moorland homes"
  },
  sale: {
    neighborhoods: ["Sale Moor", "Ashton upon Mersey", "Brooklands", "Dane Road", "Worthington", "Cross Street", "Marsland", "Priory", "Springfield", "Walton Park"],
    landmarks: ["Sale Water Park", "Waterside Arts Centre", "Sale Metrolink station", "Walkden Gardens", "the Bridgewater Canal"],
    drainageInfo: "Sale's residential character means most drainage issues relate to domestic properties. The area's relatively flat terrain and proximity to the Mersey floodplain means surface water drainage is crucial. Period properties around Sale Moor feature original Victorian drainage, while newer estates in Brooklands have modern systems that occasionally suffer from construction-related issues.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian semis, 1930s properties, modern townhouses, and waterside developments"
  },
  didsbury: {
    neighborhoods: ["East Didsbury", "West Didsbury", "Withington", "Burnage", "Fog Lane", "Parrs Wood", "Barlow Moor", "Albert Park", "Lapwing Lane", "Burton Road"],
    landmarks: ["Didsbury Village", "Fletcher Moss Park", "the Didsbury Pub", "Parrs Wood Entertainment Centre", "Simon's Bridge"],
    drainageInfo: "Didsbury's Victorian and Edwardian housing stock features original clay drainage systems that are often over 100 years old. The leafy, tree-lined streets create beautiful environments but also contribute to root intrusion in underground pipes. The village centre's restaurants and cafes generate commercial drainage demands alongside residential needs.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian villas, Edwardian family homes, converted apartments, and period terraces"
  },
  chorlton: {
    neighborhoods: ["Chorlton-cum-Hardy", "Chorlton Green", "Barlow Moor", "Beech Road", "Manchester Road", "Oswald Road", "St Werburgh's", "Hardy Lane", "Edge Lane", "Longford Park"],
    landmarks: ["Chorlton Water Park", "Longford Park", "Beech Road", "Chorlton Meadows", "the Metrolink station"],
    drainageInfo: "Chorlton's eclectic mix of property types presents varied drainage challenges. Victorian terraces around Beech Road and Chorlton Green have period drainage requiring specialist attention. The proximity to Chorlton Water Park and the Mersey floodplain means some properties face surface water challenges. Converted properties and rear extensions have often modified original drainage layouts.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian terraces, Edwardian semis, 1930s houses, and converted flats"
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
  manchester: {
    "blocked-drains": {
      intro: "Manchester's diverse property portfolio means blocked drains can strike anywhere, from the Victorian terraces of Chorlton to the high-rise apartments of the city centre. Our experienced engineers understand the unique drainage challenges facing Manchester properties and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in restaurant districts", "Tree root intrusion from mature street trees", "Debris accumulation in Victorian clay pipes", "Wet wipe blockages in student accommodation areas", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near Manchester's tree-lined streets in Didsbury and Withington should consider annual drain inspections to catch root intrusion early."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Manchester, you need a fast response from engineers who know the local area. Whether you're in Ancoats, Moss Side, or the Northern Quarter, our drain unblocking teams are strategically positioned across the city to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in terraced properties", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Manchester's busy restaurants and takeaways in the Northern Quarter and Rusholme benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Manchester property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for older Manchester properties with Victorian-era drainage.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from subsidence"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Manchester's older suburbs? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Manchester's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Manchester's hard water contributes to scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Manchester emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the city. From Fallowfield student houses to city centre businesses, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Manchester location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Manchester's mix of Victorian infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Subsidence-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Manchester's clay soil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  salford: {
    "blocked-drains": {
      intro: "Salford's transformation from industrial heartland to modern media hub has created a fascinating mix of old and new drainage systems. From the converted warehouses of Salford Quays to the terraced streets of Eccles and Swinton, our engineers have the expertise to clear blocked drains in any property type.",
      commonProblems: ["Sediment accumulation in converted industrial buildings", "Shared drainage conflicts in terraced housing", "Modern plastic pipe blockages in new developments", "Commercial kitchen waste in MediaCityUK restaurants", "Surface water issues near the canal system"],
      process: "Every Salford blocked drain is unique, and we treat it that way. Our engineers assess the property type and drainage configuration before selecting the most effective clearing method, whether that's rodding, jetting, or mechanical cutting.",
      localTip: "Salford Quays properties should ensure their drainage connects correctly to the main sewer system, as some converted buildings have complex private drainage arrangements."
    },
    "drain-unblocking": {
      intro: "From emergency callouts at Salford Royal Hospital to routine unblocking in Worsley's residential streets, our Salford drain unblocking service covers every eventuality. We understand the varied property stock across the borough and bring the right equipment to handle Victorian clay pipes and modern plastic systems alike.",
      commonProblems: ["Hair and soap accumulation in bathroom drains", "Food waste blockages in kitchen sinks", "External gully blockages from garden debris", "Toilet blockages from inappropriate flushing", "Fat buildup in commercial premises"],
      process: "Our Salford-based engineers carry comprehensive unblocking equipment including flexible rods, electromechanical machines, and water jetting units. We select the appropriate tool for each blockage type and clear your drains with minimal disruption.",
      localTip: "Salford's older properties in Pendleton and Irlam often have deep external manholes. Regular clearing prevents serious blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a period property in Worsley or investigating drainage issues at a MediaCityUK business, our CCTV drain surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your Salford property.",
      commonProblems: ["Unknown pipe routes in converted buildings", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation", "Planning for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and later compiled into a comprehensive report for your records.",
      localTip: "Salford Quays apartments often share complex drainage systems. A CCTV survey helps identify responsibility boundaries before issues arise."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Salford, equally effective on Victorian clay pipes in Swinton and modern systems in new developments. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in commercial kitchens", "Scale deposits from hard water", "Silt and sediment in surface water drains", "Root fragments after removal treatments", "General maintenance cleaning"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works upstream from the blockage point, ensuring debris is flushed towards the sewer rather than further into your system.",
      localTip: "Salford restaurants and food businesses should schedule regular jetting to comply with environmental regulations and prevent emergency callouts."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Salford receive our immediate attention, with engineers stationed to respond rapidly to properties from Walkden to the Quays. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally, minimising damage and disruption to your property.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rain", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "Foul odours indicating pipe damage"],
      process: "Emergency calls are prioritised and dispatched to our nearest Salford engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Salford properties near the Irwell and Bridgewater Canal should have emergency drainage contacts readily available, particularly during autumn leaf fall."
    },
    "drain-repairs": {
      intro: "Salford's diverse building stock requires drainage repair expertise spanning centuries of construction techniques. Our repair teams handle everything from relining Victorian clay pipes in Eccles to replacing damaged plastic sections in new-build estates, always using materials and methods suited to your specific property.",
      commonProblems: ["Cracked clay pipes in Victorian properties", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Damage from third-party excavations"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Salford's former industrial areas may have unexpected underground features. Always commission surveys before excavating for drain repairs."
    }
  },
  stockport: {
    "blocked-drains": {
      intro: "Stockport's varied terrain, from the valley floor to the heights of Marple and Romiley, creates diverse drainage challenges. Our Stockport blocked drain specialists understand how topography affects drainage systems and bring the expertise needed to clear blockages in any location, from Heaton Moor's Victorian villas to Bramhall's modern developments.",
      commonProblems: ["Gradient-related silt accumulation", "Root intrusion from mature garden trees", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in shared Victorian drainage"],
      process: "We assess your Stockport property's position and drainage layout before selecting clearing methods. Uphill properties may require different approaches than those in low-lying areas. Our engineers are experienced with all Stockport property types and drainage configurations.",
      localTip: "Stockport's hillside properties in Marple and Romiley should ensure external drains have adequate gully pots to catch debris before it enters the pipe system."
    },
    "drain-unblocking": {
      intro: "When drains block in Stockport, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Cheadle or an overflowing external drain in Hazel Grove, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Stockport engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Stockport's market town heritage means many properties have rear drainage running through neighbouring land. Know your drainage easements to avoid disputes."
    },
    "cctv-drain-surveys": {
      intro: "Stockport's architectural variety, from Heaton Moor's Edwardian gems to Bramhall's executive homes, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing in Stockport's conservation areas? CCTV surveys can identify period drainage features that may have heritage significance."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Stockport's varied drainage systems often need. From clearing scale deposits in Heaton Chapel's Victorian pipes to routine maintenance for Bramhall's newer systems, our jetting service restores optimal drainage performance across the borough.",
      commonProblems: ["Scale accumulation from hard water", "Grease buildup in residential drains", "Silt deposits from surface water drainage", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage to your drainage system.",
      localTip: "Stockport's hard water area means pipes benefit from periodic jetting to remove mineral scale before it restricts flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Stockport receive rapid response from our local teams, day or night. From flooded gardens in Cheadle to sewage issues in Marple, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our Stockport service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Stockport's hilly areas are prone to surface water issues during heavy rain. Keeping gullies clear helps prevent property flooding."
    },
    "drain-repairs": {
      intro: "Stockport's diverse property ages mean drain repairs must be tailored to specific situations. Whether you need no-dig relining for a Victorian pipe in Heaton Moor or excavation repairs in a newer Bramhall property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "Damage from external factors"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and any ongoing maintenance requirements. All repairs are guaranteed for your peace of mind.",
      localTip: "Stockport's clay soil can cause seasonal pipe movement. Consider flexible repair solutions that accommodate ground conditions."
    }
  },
  bolton: {
    "blocked-drains": {
      intro: "Bolton's proud industrial heritage is reflected in its drainage infrastructure, from historic mill buildings to terraced workers' cottages. Our Bolton blocked drain service combines traditional clearing expertise with modern techniques, effectively tackling blockages in properties across the borough from Horwich to Little Lever.",
      commonProblems: ["Debris in converted mill drainage", "Root intrusion from established trees", "Fat accumulation in domestic drains", "Stone and mortar debris in older systems", "Shared drainage conflicts"],
      process: "Bolton's varied property types require flexible approaches. We assess your specific situation, considering property age, drainage type, and blockage characteristics before selecting the most effective clearing method.",
      localTip: "Bolton's hillside properties towards Rivington should have drainage inspected after periods of heavy rainfall when debris can accumulate rapidly."
    },
    "drain-unblocking": {
      intro: "When Bolton drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Bromley Cross to Farnworth, we handle residential and commercial drain unblocking with professional efficiency and minimal disruption.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages", "Commercial drainage issues"],
      process: "Our Bolton engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Bolton's stone-built properties often have deep inspection chambers. Ensure access covers are in good condition and accessible."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Bolton property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable for Bolton's many period properties.",
      commonProblems: ["Unknown drainage routes", "Pipe condition assessment", "Root ingress detection", "Joint and connection problems", "Planning investigation"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Bolton properties built on former mill sites may have unexpected underground features. Surveys help identify complex drainage arrangements."
    },
    "drain-jetting": {
      intro: "Bolton's combination of hard water and varied pipe materials makes regular drain jetting a valuable maintenance investment. Our high-pressure cleaning service removes deposits that accumulate over time, maintaining optimal flow in domestic and commercial drainage systems throughout the borough.",
      commonProblems: ["Scale buildup from hard water", "Grease accumulation", "Silt and debris deposits", "Root fragment removal", "General maintenance needs"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Bolton businesses should consider scheduled jetting as part of their maintenance regime, particularly food preparation premises."
    },
    "emergency-drain-services": {
      intro: "Bolton drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded cellar in Westhoughton or sewage backup in Astley Bridge, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes", "Collapsed drainage", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest Bolton engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Bolton's older properties should have emergency drain contacts readily available. Know your stopcock and manhole locations for faster service."
    },
    "drain-repairs": {
      intro: "Bolton's property stock spans centuries of building traditions, and our drain repair expertise matches this diversity. From stone-built terraces to modern estates, we provide repair solutions appropriate to each property type, using techniques that respect original construction while delivering reliable results.",
      commonProblems: ["Cracked stone drainage channels", "Clay pipe deterioration", "Joint failures", "Root damage", "Ground movement effects"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Bolton conservation area properties may require specific approaches for drainage repairs. We work sensitively with period features."
    }
  },
  didsbury: {
    "blocked-drains": {
      intro: "Didsbury's reputation as one of Manchester's most desirable suburbs comes with distinctive drainage challenges. The area's mature Victorian and Edwardian housing stock features original clay drainage systems, while tree-lined streets contribute to root intrusion issues. Our Didsbury specialists understand these local factors and deliver effective blocked drain solutions.",
      commonProblems: ["Tree root intrusion from mature gardens", "Aged clay pipe deterioration", "Fat buildup from busy household kitchens", "Leaf debris in autumn months", "Shared drainage in converted properties"],
      process: "We approach Didsbury blocked drains with appreciation for the area's period properties. Our clearing methods are effective yet gentle on original drainage features, preserving the integrity of your home's infrastructure.",
      localTip: "Didsbury's beautiful mature trees are a root intrusion risk. Consider annual CCTV checks if you have large trees near your drainage runs."
    },
    "drain-unblocking": {
      intro: "Didsbury residents deserve drain unblocking services that match the quality of their homes. Our local teams respond promptly to calls from East Didsbury to West Didsbury, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption.",
      commonProblems: ["Bathroom drain clogs", "Kitchen sink blockages", "External gulley obstructions", "Downpipe connections", "Cellar drainage issues"],
      process: "Our Didsbury engineers understand period property drainage. We use appropriate techniques for each situation, whether that's careful rodding of delicate clay pipes or jetting for more robust modern sections.",
      localTip: "Didsbury's Victorian properties often have drainage running beneath conservatories and extensions. Know your drainage routes before planning building work."
    },
    "cctv-drain-surveys": {
      intro: "Didsbury's premium property market makes thorough drainage assessment essential for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage in the area's sought-after Victorian and Edwardian homes.",
      commonProblems: ["Pre-purchase condition assessment", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Insurance requirements"],
      process: "We survey Didsbury properties with appreciation for their character and value. Our reports are comprehensive and professional, suitable for property transactions and insurance purposes.",
      localTip: "Didsbury home sellers can benefit from proactive drainage surveys, addressing any issues before they become negotiating points."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Didsbury's period drainage at peak performance. Our careful approach removes decades of accumulated deposits from Victorian clay pipes, restoring flow capacity while preserving the integrity of original drainage features that add character to your home.",
      commonProblems: ["Scale from hard water supply", "Grease accumulation over time", "Root mass removal", "Silt and debris clearing", "Pre-survey preparation"],
      process: "Didsbury's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage.",
      localTip: "Didsbury's hard water contributes to scale buildup. Periodic jetting maintains optimal flow and extends drainage lifespan."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Didsbury receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a Victorian villa or flooding in a modern conversion, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into cellars", "Garden flooding", "Manhole overflows", "Drain collapse affecting foundations", "Persistent foul odours"],
      process: "Emergency response to Didsbury properties is swift and professional. We understand the area's property values and act to minimise damage and disruption while resolving the underlying problem.",
      localTip: "Didsbury properties with cellars should ensure drainage pumps and non-return valves are regularly serviced to prevent backup during storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Didsbury's character properties requires specialist knowledge and sympathetic approaches. Our repair team works with all property ages, from original Victorian installations to modern connections, always selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking", "Root damage to joints", "Ground movement effects", "Historical modification issues", "Cellar drainage problems"],
      process: "We investigate Didsbury drainage issues thoroughly, recommending repairs that suit your property's age and construction. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens and original features.",
      localTip: "Didsbury's Victorian drainage often includes original salt-glazed pipes. These can be repaired and relined rather than replaced, preserving heritage features."
    }
  },
  chorlton: {
    "blocked-drains": {
      intro: "Chorlton's eclectic character extends to its drainage systems, with Victorian terraces, Edwardian semis, and converted properties all presenting unique challenges. Our Chorlton blocked drain specialists navigate this diversity daily, providing effective solutions whether you're on Beech Road or Hardy Lane.",
      commonProblems: ["Victorian pipe deterioration", "Root intrusion from street trees", "Fat buildup from home cooking", "Wet wipe blockages", "Shared drainage issues in conversions"],
      process: "We assess each Chorlton blockage individually, considering property type, drainage age, and blockage characteristics. Our approach is always tailored to achieve effective clearing while protecting your drainage infrastructure.",
      localTip: "Chorlton's vibrant food scene means household drains often handle more cooking waste. Sink strainers and proper fat disposal prevent many blockages."
    },
    "drain-unblocking": {
      intro: "Chorlton's community-minded residents deserve reliable drain unblocking services that respond quickly and work efficiently. Our local teams cover all of Chorlton-cum-Hardy, from the village centre to surrounding residential streets, with the expertise to handle any unblocking challenge.",
      commonProblems: ["Kitchen drain blockages", "Bathroom clogs", "External drain obstructions", "Garage and utility drainage", "Shared access drainage"],
      process: "Our Chorlton engineers arrive prepared for the varied property types in the area. We diagnose blockage location and type quickly, then apply the most effective clearing method for your specific situation.",
      localTip: "Chorlton's terraced properties often share rear drainage. Good neighbourly communication helps manage shared drainage responsibilities."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying, selling, or maintaining a Chorlton property, CCTV drainage surveys provide essential information. Our detailed inspections reveal conditions invisible from the surface, helping you make informed decisions about your home's drainage system.",
      commonProblems: ["Pre-purchase assessment", "Recurring problem investigation", "Drainage route mapping", "Extension planning requirements", "Insurance documentation"],
      process: "We survey Chorlton drainage systematically, recording findings and producing detailed reports. Our surveys meet requirements for property transactions, insurance claims, and planning applications.",
      localTip: "Planning a Chorlton property extension? A pre-build drainage survey identifies any pipes that need protecting or redirecting."
    },
    "drain-jetting": {
      intro: "High-pressure jetting keeps Chorlton's varied drainage systems in optimal condition. Our service removes accumulations from Victorian clay pipes and modern plastic systems alike, restoring full flow capacity and reducing the risk of future blockages.",
      commonProblems: ["Grease and fat deposits", "Scale buildup", "Root fragments", "Silt accumulation", "General maintenance cleaning"],
      process: "We select jetting equipment and settings appropriate for Chorlton's mixed drainage stock. Older pipes receive gentler treatment, while robust modern sections can handle more aggressive cleaning.",
      localTip: "Chorlton's busy restaurants on Beech Road and Barlow Moor Road benefit from regular commercial jetting to maintain compliance and prevent emergencies."
    },
    "emergency-drain-services": {
      intro: "Chorlton drainage emergencies receive rapid response from our local teams. Whether you're dealing with an overflowing drain near Chorlton Green or sewage backup on Manchester Road, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Garden flooding", "Blocked gulley overflows", "Drain collapses", "Storm-related emergencies"],
      process: "Emergency calls trigger immediate response. We dispatch engineers to Chorlton locations within our target response times, arriving prepared to contain and resolve the emergency situation.",
      localTip: "Chorlton properties near the Water Park should maintain clear surface water drains, particularly during autumn when fallen leaves can cause rapid blockages."
    },
    "drain-repairs": {
      intro: "Chorlton's diverse housing requires drain repair expertise spanning multiple eras and construction types. From patching Victorian clay pipes to replacing damaged modern sections, our repair specialists deliver solutions appropriate to each property's age and character.",
      commonProblems: ["Cracked period pipes", "Joint displacement", "Root damage", "Conversion modifications", "Ground movement effects"],
      process: "We investigate thoroughly before recommending Chorlton drainage repairs. Our approach respects property character while delivering reliable, long-lasting results. All repairs include appropriate guarantees.",
      localTip: "Chorlton's Victorian terraces often have original features worth preserving. We offer repair techniques that maintain period drainage character."
    }
  }
};

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
