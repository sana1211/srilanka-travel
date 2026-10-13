import { Currency, Destination, GalleryItem, ItineraryDay, TravelPackage } from '../types';

import imgSigiriya from '../assets/images/hero_sri_lanka_sigiriya_1791130674684.jpg';
import imgEllaTrain from '../assets/images/showcase_ella_train_1791130688434.jpg';
import imgYalaLeopard from '../assets/images/showcase_yala_wildlife_1791130700892.jpg';
import imgGalleFort from '../assets/images/showcase_galle_fort_1791130712964.jpg';
import imgMirissaCoast from '../assets/images/showcase_mirissa_coast_1791130724790.jpg';
import imgKandyTemple from '../assets/images/showcase_kandy_temple_1791130739930.jpg';
import imgTeaCountry from '../assets/images/showcase_tea_country_1791130752587.jpg';
import imgAncientTemple from '../assets/images/showcase_ancient_temple_1791130765045.jpg';
import imgAnuradhapura from '../assets/images/Anurapura.jpg';
import imgPolonnaruwa from '../assets/images/Polonnaruwa.jfif';
import imgColombo from '../assets/images/Colombo.jpg';



export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number }> = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  LKR: { symbol: 'Rs.', rate: 305 },
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Rock Fortress',
    sinhalaName: 'සීගිරිය',
    tagline: 'The 5th-century palace in the clouds',
    region: 'Cultural Triangle',
    bestTimeToVisit: 'December – April',
    climate: 'Tropical Dry Zone · 28°C–32°C',
    elevation: '349 meters (1,145 ft)',
    highlights: [
      'Ascend the Lion Gate staircase into King Kashyapa’s citadel',
      'Marvel at the 1,600-year-old pigmented Sigiriya Frescoes',
      'Explore one of the oldest landscaped hydraulic water gardens in Asia',
      'Panoramic 360° summit views over the emerald jungle canopy',
    ],
    image: imgSigiriya,
    description:
      'Rising dramatically out of the central forest plains, Sigiriya is an audacious 5th-century masterpiece of urban planning, architecture, hydraulic engineering, and ancient art. Commissioned by King Kashyapa, this UNESCO World Heritage monument is renowned as the Eighth Wonder of the Ancient World.',
    historicalSignificance:
      'Built in 477–495 AD, the fortress combines defensive architecture with poetic luxury. The western face once carried a colossal gallery of 500 maidens painted in natural pigments, of which 18 survive in exquisite vibrance.',
    culturalTip:
      'Begin the climb at 6:30 AM before the midday heat. Wear comfortable footwear and respectful shoulders-covered attire for temple sites along the approach.',
    recommendedDuration: '2 Nights · 3 Days',
    mapCoordinates: { x: 53, y: 38 },
  },
  {
    id: 'ella',
    name: 'Ella & The Hill Country',
    sinhalaName: 'ඇල්ල',
    tagline: 'Misty peaks, waterfalls & iconic mountain rail',
    region: 'Central Highlands',
    bestTimeToVisit: 'January – May & July – August',
    climate: 'Mountain Subtropical · 16°C–24°C',
    elevation: '1,041 meters (3,415 ft)',
    highlights: [
      'Watch the blue express cross the colonial Nine Arch Bridge',
      'Hike Little Adam’s Peak at sunrise with misty valley views',
      'Swim in the natural plunge pools beneath Ravana Waterfall',
      'Tour high-elevation single-estate artisanal tea factories',
    ],
    image: imgEllaTrain,
    description:
      'Perched on the southern edge of the central highlands, Ella is an alpine wonderland of cloud-forest ridges, cascading waterfalls, and emerald tea carpets. It offers some of the most romantic train rides on earth and invigorating mountain trails.',
    historicalSignificance:
      'Steeped in the epic Ramayana legend, Ella Gap is famed as the hiding place of Princess Sita in Ravana’s subterranean caves. The 1921 Nine Arch viaduct was built entirely from stone, brick, and cement without a single piece of steel.',
    culturalTip:
      'Book 1st Class Observation or 2nd Class reserved tickets on the Kandy–Ella train at least 30 days in advance to secure open window seats on the mountain-facing side.',
    recommendedDuration: '2 Nights · 3 Days',
    mapCoordinates: { x: 62, y: 64 },
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    sinhalaName: 'යාල',
    tagline: 'The global capital of wild leopards',
    region: 'Wildlife Sanctuaries',
    bestTimeToVisit: 'February – July',
    climate: 'Dry Zone Semi-Arid · 27°C–34°C',
    elevation: 'Sea Level to 30 meters',
    highlights: [
      'Highest documented leopard density (Panthera pardus kotiya) on Earth',
      'Encounter herds of Sri Lankan elephants bathing in freshwater lagoons',
      'Track the elusive Sri Lankan sloth bear and marsh crocodiles',
      'Birdwatching over 215 avian species including painted storks and hornbills',
    ],
    image: imgYalaLeopard,
    description:
      'Spanning 978 square kilometers across the southeastern coast, Yala transitions from dense scrub jungle to brackish lagoons and wild sand dunes. It is Sri Lanka’s premier wildlife safari destination, offering intimate encounters with the island’s apex predators.',
    historicalSignificance:
      'Established as a wildlife sanctuary in 1900, Yala preserves untouched ecosystems where ancient hydraulic reservoirs built by King Dhatusena continue to sustain wild fauna today.',
    culturalTip:
      'Opt for sunrise and late-afternoon private game drives in customized open-top 4x4 safaris with an accredited naturalist tracker.',
    recommendedDuration: '2 Nights · 3 Days',
    mapCoordinates: { x: 74, y: 76 },
  },
  {
    id: 'galle',
    name: 'Galle Historic Fort',
    sinhalaName: 'ගාල්ල',
    tagline: 'Living 17th-century European bastion on the Indian Ocean',
    region: 'Southern Coast',
    bestTimeToVisit: 'November – April',
    climate: 'Coastal Warm Tropical · 26°C–31°C',
    elevation: 'Sea Level',
    highlights: [
      'Sunset promenade along the coral stone ramparts and historic Lighthouse',
      'Boutique jewelry ateliers, spice merchants, and Ceylon artisan studios',
      'Dutch Reformed Church (1755) and maritime archeology museum',
      'Alfresco dining in restored Dutch and Portuguese colonial courtyards',
    ],
    image: imgGalleFort,
    description:
      'Galle Fort is a living UNESCO World Heritage town where European colonial architecture blends harmoniously with South Asian traditions. Enclosed by sea ramparts that withstand ocean tempests, its cobblestone streets brim with spice scents, art galleries, and tranquil luxury.',
    historicalSignificance:
      'First built by the Portuguese in 1588 and extensively fortified by the Dutch East India Company from 1649, Galle stood as the island’s primary seaport for over three centuries of global maritime spice trade.',
    culturalTip:
      'The ramparts are best walked around 5:30 PM as the local cricket players gather on the greens and the sun dips into the Indian Ocean.',
    recommendedDuration: '2 Nights · 3 Days',
    mapCoordinates: { x: 38, y: 84 },
  },
  {
    id: 'kandy',
    name: 'Kandy & The Sacred Lake',
    sinhalaName: 'මහනුවර',
    tagline: 'The last royal kingdom and guardian of the Sacred Relic',
    region: 'Cultural Triangle',
    bestTimeToVisit: 'December – April & July – August',
    climate: 'Hill Country Mild · 20°C–28°C',
    elevation: '500 meters (1,640 ft)',
    highlights: [
      'Attend the evening puja ceremony at the Sri Dalada Maligawa (Temple of the Tooth)',
      'Stroll the tranquil perimeter of Kandy Lake surrounded by mist-veiled hills',
      'Wander the Royal Botanical Gardens of Peradeniya with 4,000+ plant species',
      'Experience energetic traditional Kandyan drumming and fire dancing',
    ],
    image: imgKandyTemple,
    description:
      'Nestled amidst rolling hills and tea slopes, Kandy was the final royal capital of Sri Lanka before British colonization in 1815. It remains the spiritual and cultural heart of the nation, housing the sacred left canine tooth of Gautama Buddha.',
    historicalSignificance:
      'The sacred tooth relic has symbolized royal sovereignty for over two millennia. Whoever possessed the relic was revered as the rightful ruler of Sri Lanka.',
    culturalTip:
      'When visiting the Temple of the Tooth, wear white or light-colored attire covering both shoulders and knees. Footwear must be deposited at the temple entrance.',
    recommendedDuration: '2 Nights · 2 Days',
    mapCoordinates: { x: 52, y: 53 },
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya & Tea Trails',
    sinhalaName: 'නුවරඑළිය',
    tagline: 'The misty highlands of premier Ceylon Single-Estate tea',
    region: 'Central Highlands',
    bestTimeToVisit: 'February – May',
    climate: 'Crisp Montane · 10°C–20°C',
    elevation: '1,868 meters (6,128 ft)',
    highlights: [
      'Private tasting of orthodox Ceylon Silver Tips and High-Grown Pekoe teas',
      'Hike the dramatic cliff drop at World’s End in Horton Plains National Park',
      'Colonial timber cottages, Lake Gregory, and the 1894 Hill Club',
      'Crisp highland air and manicured English rose gardens',
    ],
    image: imgTeaCountry,
    description:
      'Known as "Little England", Nuwara Eliya is the epicenter of the global Ceylon Tea industry. Blanketed in cool mountain mists, its verdant hills yield the world’s most coveted high-grown tea leaves, hand-plucked each dawn by skilled artisans.',
    historicalSignificance:
      'Pioneered by British planter James Taylor in 1867 at Loolecondera Estate, the highland tea industry transformed Sri Lanka into the leading exporter of black tea in the Commonwealth.',
    culturalTip:
      'Bring a light fleece or wool jacket; evening temperatures frequently drop below 12°C in the highlands.',
    recommendedDuration: '2 Nights · 3 Days',
    mapCoordinates: { x: 57, y: 59 },
  },
  {
    id: 'mirissa-weligama',
    name: 'Mirissa & Weligama Bay',
    sinhalaName: 'මිරිස්ස',
    tagline: 'Turquoise ocean swells, blue whales & coastal palms',
    region: 'Southern Coast',
    bestTimeToVisit: 'November – April',
    climate: 'Coastal Tropical · 27°C–32°C',
    elevation: 'Sea Level',
    highlights: [
      'Private catamaran charters to view migrating Blue Whales and Spinner Dolphins',
      'Surf gentle rolling reef and beach breaks at Weligama Bay',
      'Sunset cocktails atop Coconut Tree Hill overlooking the sapphire ocean',
      'Fresh line-caught yellowfin tuna grilled at beachside candlelit tables',
    ],
    image: imgMirissaCoast,
    description:
      'A tropical paradise of curving golden sands, nodding coconut palms, and crystal waters. Weligama and Mirissa offer the ultimate ocean sanctuary, from world-class surf breaks to ethical marine safaris with the largest creature on earth.',
    historicalSignificance:
      'Generations of Southern fishermen mastered the singular art of stilt fishing ("ritipanna"), balancing on wooden crossbars embedded into the coral seabed to catch spotted mackerel without casting shadows.',
    culturalTip:
      'Book whale watching expeditions on certified vessels adhering to international marine mammal distance regulations (minimum 100 meters away).',
    recommendedDuration: '3 Nights · 4 Days',
    mapCoordinates: { x: 48, y: 88 },
  },
  {
    id: 'dambulla',
    name: 'Dambulla Royal Cave Sanctuary',
    sinhalaName: 'දඹුල්ල',
    tagline: 'Ancient monastery carved into living granite caverns',
    region: 'Cultural Triangle',
    bestTimeToVisit: 'Year-round',
    climate: 'Tropical Dry Zone · 28°C–32°C',
    elevation: '160 meters (525 ft)',
    highlights: [
      'Five massive natural caves adorned with 157 Buddha statues',
      '2,100 square meters of intricate ancient ceiling murals painted with natural ochres',
      'Panoramic sunset vista over Sigiriya Rock visible in the distance',
      'Over 22 centuries of continuous Buddhist monastic meditation',
    ],
    image: imgAncientTemple,
    description:
      'Dambulla is the largest and best-preserved cave-temple complex in Sri Lanka. Carved under an immense overhanging rock, these five sanctuaries feature golden statues and ceiling frescoes that have inspired pilgrims since the 1st century BC.',
    historicalSignificance:
      'King Valagamba took refuge in these caves in 89 BC during South Indian invasions. Upon reclaiming his throne in Anuradhapura, he transformed the sanctuary into a magnificent stone monastery.',
    culturalTip:
      'Socks are recommended as the granite rock plateau absorbs intense solar heat during midday hours.',
    recommendedDuration: '1 Day Visit',
    mapCoordinates: { x: 50, y: 43 },
  },
  {
  id: 'anuradhapura',
  name: 'Anuradhapura Sacred City',
  sinhalaName: 'අනුරාධපුරය',
  tagline: 'The ancient heart of Sri Lankan civilization',
  region: 'North Central Province',
  bestTimeToVisit: 'May – September',
  climate: 'Tropical Dry Zone · 27°C–33°C',
  elevation: '81 meters (266 ft)',
  highlights: [
    'Visit the sacred Sri Maha Bodhi, grown from a branch of the original Bodhi tree',
    'Explore the immense Ruwanwelisaya and Jetavanaramaya stupas',
    'Discover ancient monastic complexes, stone carvings, and royal ruins',
    'Cycle through one of Sri Lanka’s largest and most important archaeological cities',
  ],
  image: imgAnuradhapura,
  description:
    'Anuradhapura is one of Sri Lanka’s most sacred and historically significant cities, serving as the island’s first great capital for more than a millennium. Its vast archaeological landscape contains magnificent stupas, monasteries, reservoirs, palaces, and sacred sites that reflect the extraordinary engineering, religious devotion, and cultural achievements of ancient Sri Lanka.',
  historicalSignificance:
    'Established as a major capital in the 4th century BC, Anuradhapura became the centre of Theravada Buddhism in Sri Lanka. The city flourished under successive kings who built massive dagobas, sophisticated irrigation systems, royal gardens, monasteries, and reservoirs that supported one of the most advanced civilizations of the ancient world.',
  culturalTip:
    'Wear clothing that covers shoulders and knees when visiting sacred Buddhist sites. Remove shoes and hats before entering temple areas, and avoid posing with your back directly toward Buddha statues.',
  recommendedDuration: '2 Nights · 3 Days',
  mapCoordinates: { x: 44, y: 27 },
},
{
  id: 'polonnaruwa',
  name: 'Polonnaruwa Ancient City',
  sinhalaName: 'පොළොන්නරුව',
  tagline: 'A medieval kingdom carved in stone',
  region: 'North Central Province',
  bestTimeToVisit: 'May – September',
  climate: 'Tropical Dry Zone · 27°C–32°C',
  elevation: '58 meters (190 ft)',
  highlights: [
    'Admire the masterfully carved Buddha statues of Gal Vihara',
    'Explore the royal palace complex of King Parakramabahu I',
    'Visit the magnificent Vatadage circular relic house',
    'Discover the ancient Parakrama Samudra reservoir and surrounding ruins',
  ],
  image: imgPolonnaruwa,
  description:
    'Polonnaruwa is Sri Lanka’s remarkable medieval capital, where royal palaces, Buddhist temples, monasteries, reservoirs, and stone sculptures remain exceptionally well preserved. The city presents a fascinating blend of architecture, religion, hydraulic engineering, and royal history set among peaceful lakes and forested ruins.',
  historicalSignificance:
    'Polonnaruwa became Sri Lanka’s capital during the 11th century and reached its golden age under King Parakramabahu I in the 12th century. His reign produced monumental palaces, temples, irrigation systems, and the enormous Parakrama Samudra reservoir, transforming the kingdom into a powerful political and agricultural centre.',
  culturalTip:
    'The archaeological zone is large, so cycling is one of the easiest ways to explore it. Visit Gal Vihara during the cooler morning or late afternoon, and wear respectful clothing at all Buddhist monuments.',
  recommendedDuration: '1 Night · 2 Days',
  mapCoordinates: { x: 59, y: 36 },
},
{
  id: 'colombo',
  name: 'Colombo City',
  sinhalaName: 'කොළඹ',
  tagline: 'Where heritage meets modern island life',
  region: 'Western Province',
  bestTimeToVisit: 'December – March',
  climate: 'Tropical Coastal · 27°C–31°C',
  elevation: '1–15 meters above sea level',
  highlights: [
    'Walk along the oceanfront promenade at Galle Face Green',
    'Explore colonial architecture and modern landmarks around Colombo Fort',
    'Visit Gangaramaya Temple and the nearby Beira Lake',
    'Experience Sri Lankan cuisine, cafés, shopping, nightlife, and local markets',
  ],
  image: imgColombo,
  description:
    'Colombo is Sri Lanka’s vibrant commercial capital, combining colonial architecture, Buddhist temples, modern skyscrapers, bustling markets, seaside promenades, restaurants, and cultural attractions. It is often the first and last stop for international travellers exploring the island.',
  historicalSignificance:
    'Colombo developed as an important trading port due to its strategic position along ancient Indian Ocean trade routes. Portuguese, Dutch, and British colonial periods shaped much of the city’s architecture and urban character, while modern Colombo has grown into Sri Lanka’s main commercial and financial centre.',
  culturalTip:
    'Colombo traffic can be heavy during peak hours, so plan sightseeing by area. Lightweight clothing is ideal for the tropical climate, but carry modest clothing if visiting temples and other religious sites.',
  recommendedDuration: '1 Night · 2 Days',
  mapCoordinates: { x: 29, y: 55 },
},
];

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: 'grand-ceylon-odyssey',
    title: 'The Grand Ceylon Odyssey',
    subtitle:
      'The Definitive 14-Day Island Epic Across Heritage, Highlands & Coast',
    durationDays: 14,
    durationNights: 13,
    basePriceUSD: 3850,
    badge: 'Signature Expedition',

    overview:
      'The ultimate, unhurried Sri Lankan expedition. Begin in cosmopolitan Colombo before journeying into the ancient capitals of Anuradhapura and Polonnaruwa, the sky citadel of Sigiriya, sacred Kandy, misty tea country, leopard-rich Yala, and the historic southern coast.',

    image: imgSigiriya,

    style: 'Grand Circuit',

    idealFor:
      'Couples, connoisseurs & first-time luxury travelers desiring comprehensive immersion',

    bestMonths: 'December through April',

    groupType:
      'Private Chauffeur-Guide & Bespoke Groups (1–8 pax)',

    inclusions: [
      '13 Nights in luxury boutique hotels & restored heritage tea bungalows',
      'Private Mercedes-Benz SUV with dedicated English-speaking chauffeur-naturalist',
      'Private guided exploration of Anuradhapura Sacred City',
      'Curated archaeological tour of Polonnaruwa Ancient City',
      'First-Class reserved seats on the scenic Kandy to Ella blue train',
      'Two private 4x4 leopard safaris in Yala with senior wildlife ranger',
      'VIP sunrise access to Sigiriya Rock Fortress & Dambulla Cave Temple',
      'Private sunset catamaran cruise in Mirissa searching for blue whales',
      'All daily artisanal breakfast & five curated chef-table heritage dinners',
      'Full concierge 24/7 service, all national park fees & entrance permits',
    ],

    keyStops: [
      'Colombo',
      'Anuradhapura',
      'Polonnaruwa',
      'Sigiriya',
      'Dambulla',
      'Kandy',
      'Nuwara Eliya',
      'Ella',
      'Yala',
      'Galle Fort',
    ],
  },

  {
    id: 'highlands-heritage',
    title: 'Royal Heritage & Highland Mist',
    subtitle:
      '8 Days of Sacred Kingdoms, Cloud Forests & Ceylon Tea Trails',
    durationDays: 8,
    durationNights: 7,
    basePriceUSD: 2350,
    badge: 'Culture & Nature',

    overview:
      'Immerse yourself in more than 2,000 years of Sri Lankan royal heritage, beginning in Colombo and continuing through the ancient kingdoms of Anuradhapura and Polonnaruwa before reaching Sigiriya, sacred Kandy, and the mist-covered tea highlands.',

    image: imgEllaTrain,

    style: 'Luxury Heritage',

    idealFor:
      'History enthusiasts, photographers & mountain walkers',

    bestMonths:
      'Year-round (Best Nov–Apr & Jul–Aug)',

    groupType:
      'Private Custom (1–6 pax)',

    inclusions: [
      '7 Nights in Relais & Châteaux style tea estates & cultural boutique lodges',
      'Private English-speaking historian guide throughout',
      'Guided exploration of Anuradhapura Sacred City',
      'Private heritage tour through Polonnaruwa Ancient Kingdom',
      'Scenic mountain rail expedition from Kandy to Nanu Oya',
      'Private tea masterclass and single-estate silver tips degustation',
      'Guided sunrise hike up Little Adam’s Peak and Nine Arch Bridge photoshoot',
      'Daily gourmet breakfast & 3 regional tasting dinners',
      'All UNESCO World Heritage site admissions & express passes',
    ],

    keyStops: [
      'Colombo',
      'Anuradhapura',
      'Polonnaruwa',
      'Sigiriya',
      'Kandy',
      'Nuwara Eliya',
      'Ella',
    ],
  },

  {
    id: 'wildlife-coastal-sanctuary',
    title: 'Wild Leopards & Sapphire Shores',
    subtitle:
      '7 Days of Apex Safari Tracking & Indian Ocean Relaxation',
    durationDays: 7,
    durationNights: 6,
    basePriceUSD: 2150,
    badge: 'Wildlife & Ocean',

    overview:
      'Begin with an elegant Colombo arrival before travelling south toward Sri Lanka’s wild heart. Track leopards and elephants across Yala’s dry-zone wilderness before unwinding along Mirissa, Weligama, and the colonial ramparts of Galle.',

    image: imgYalaLeopard,

    style: 'Wildlife & Coastal',

    idealFor:
      'Wildlife photographers, honeymooners & ocean seekers',

    bestMonths:
      'November through May',

    groupType:
      'Private Custom (1–6 pax)',

    inclusions: [
      '6 Nights in luxury safari tented suites & oceanfront boutique villas',
      'Private Colombo orientation and coastal departure experience',
      'Three private game drives in Yala Block 1 & Kumana with master trackers',
      'Morning blue whale watching cruise aboard luxury catamaran',
      'Sunset architectural walk of Galle Dutch Fort with local historian',
      'Surf coaching session or private yoga class overlooking Weligama Bay',
      'Daily breakfast & all safari camp fireside dining meals',
    ],

    keyStops: [
      'Colombo',
      'Yala National Park',
      'Mirissa',
      'Weligama',
      'Galle Fort',
    ],
  },

  {
    id: 'southern-surf-wellness',
    title: 'Ceylon Ayurveda & Coastal Solitude',
    subtitle:
      '6 Days of Ancient Holistic Rejuvenation & Coastal Serenity',
    durationDays: 6,
    durationNights: 5,
    basePriceUSD: 1750,
    badge: 'Wellness & Relaxation',

    overview:
      'Begin your restorative escape in Colombo before continuing to Sri Lanka’s tranquil southern coastline. Restore mind, body, and spirit through Ayurveda, oceanfront yoga, farm-to-table cuisine, herbal therapies, and peaceful sunset experiences.',

    image: imgMirissaCoast,

    style: 'Coastal Wellness',

    idealFor:
      'Solo travelers, wellness couples & restorative escapes',

    bestMonths:
      'October through April',

    groupType:
      'Private & Small Groups (1–4 pax)',

    inclusions: [
      '5 Nights in eco-luxury wellness sanctuaries overlooking the ocean',
      'Private transfer and orientation from Colombo',
      'Personal Ayurvedic health consultation with resident Vaidya physician',
      'Two daily tailored Ayurvedic therapies including Shirodhara and Abhyanga',
      'Sunrise and sunset hatha yoga and breathwork sessions',
      'Daily organic detox and wellness culinary menus',
      'Cooking class in traditional Ceylon clay pot culinary techniques',
    ],

    keyStops: [
      'Colombo',
      'Bentota',
      'Galle',
      'Mirissa',
      'Tangalle',
    ],
  },

  // NEW PACKAGE
  {
    id: 'ancient-kingdoms-trail',
    title: 'Ancient Kingdoms of Ceylon',
    subtitle:
      '6 Days Through Sri Lanka’s Legendary Royal Capitals & Sacred Heritage',
    durationDays: 6,
    durationNights: 5,
    basePriceUSD: 1950,
    badge: 'Heritage Discovery',

    overview:
      'Journey from Colombo into the extraordinary ancient heart of Sri Lanka. Walk among sacred stupas in Anuradhapura, explore the medieval ruins of Polonnaruwa, and climb the legendary Sigiriya Rock Fortress on a refined cultural expedition through the Cultural Triangle.',

    image: imgAnuradhapura,

    style: 'Cultural Heritage',

    idealFor:
      'History lovers, cultural explorers, photographers & archaeology enthusiasts',

    bestMonths:
      'January through September',

    groupType:
      'Private Cultural Journey (1–6 pax)',

    inclusions: [
      '5 Nights in luxury heritage hotels and boutique eco-lodges',
      'Private airport arrival and Colombo city orientation',
      'Expert-guided tour of Anuradhapura Sacred City',
      'Private cycling or chauffeur tour through Polonnaruwa Ancient City',
      'Sunrise ascent of Sigiriya Rock Fortress',
      'Visit to Dambulla Royal Cave Temple',
      'Private historian-guide throughout the cultural triangle',
      'Daily breakfast and two curated Sri Lankan heritage dinners',
      'All UNESCO site entrance tickets and cultural permits',
    ],

    keyStops: [
      'Colombo',
      'Anuradhapura',
      'Polonnaruwa',
      'Sigiriya',
      'Dambulla',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-sigiriya',
    title: 'Sunrise Over the Lion Rock',
    category: 'Ancient Heritage',
    location: 'Sigiriya Citadel, Matale District',
    image: imgSigiriya,
    caption:
      'Golden dawn rays illuminate the ancient royal palace atop Sigiriya, standing 200 meters above the virgin central jungle canopy.',
    photographerCredit: 'Serendib Expeditions Studio',
    aspectRatio: 'landscape',
  },

  {
    id: 'gal-anuradhapura',
    title: 'Sacred Dawn at Ruwanwelisaya',
    category: 'Ancient Heritage',
    location: 'Anuradhapura Sacred City, North Central Province',
    image: imgAnuradhapura,
    caption:
      'The immaculate white dome of Ruwanwelisaya rises above the ancient monastic landscape as soft morning light settles across one of Sri Lanka’s most sacred royal capitals.',
    photographerCredit: 'Sacred Heritage Ceylon Archive',
    aspectRatio: 'landscape',
  },

  {
    id: 'gal-polonnaruwa',
    title: 'Timeless Serenity at Gal Vihara',
    category: 'Ancient Heritage',
    location: 'Polonnaruwa Ancient City, North Central Province',
    image: imgPolonnaruwa,
    caption:
      'Masterfully carved Buddha figures emerge from a single granite face, preserving the extraordinary artistry and spiritual legacy of medieval Polonnaruwa.',
    photographerCredit: 'Ancient Kingdoms Heritage Studio',
    aspectRatio: 'landscape',
  },

  {
    id: 'gal-colombo',
    title: 'Colombo Between Heritage and Horizon',
    category: 'City & Culture',
    location: 'Colombo, Western Province',
    image: imgColombo,
    caption:
      'Historic waterfront landmarks and contemporary towers meet along Colombo’s tropical coastline, revealing the energetic character of Sri Lanka’s commercial capital.',
    photographerCredit: 'Colombo Urban Heritage Collective',
    aspectRatio: 'landscape',
  },

  {
    id: 'gal-ella-train',
    title: 'The Blue Express at Nine Arch Bridge',
    category: 'Highlands & Tea',
    location: 'Ella, Badulla District',
    image: imgEllaTrain,
    caption:
      'The iconic mountain express eases across the 1921 British stone viaduct, surrounded by cascading emerald tea terraces.',
    photographerCredit: 'Highland Archives Ceylon',
    aspectRatio: 'landscape',
  },

  {
    id: 'gal-yala-leopard',
    title: 'Apex Solitude at Golden Hour',
    category: 'Wildlife & Nature',
    location: 'Yala National Park, Block 1',
    image: imgYalaLeopard,
    caption:
      'A majestic male Sri Lankan leopard rests comfortably atop a granite rock after an afternoon patrol of his coastal territory.',
    photographerCredit: 'Ceylon Wild Sanctuary Projects',
    aspectRatio: 'landscape',
  },

  {
    id: 'gal-galle-fort',
    title: 'Sentinels of the Indian Ocean',
    category: 'Golden Coasts',
    location: 'Galle Fort, Southern Province',
    image: imgGalleFort,
    caption:
      'The 1939 white lighthouse watches over the 350-year-old Dutch coral ramparts as the sky turns warm lavender and gold.',
    photographerCredit: 'Maritime Heritage Council',
    aspectRatio: 'landscape',
  },

  {
    id: 'gal-mirissa-coast',
    title: 'Twilight Stilt Fishermen & Crescent Bay',
    category: 'Golden Coasts',
    location: 'Mirissa & Weligama Bay',
    image: imgMirissaCoast,
    caption:
      'Southern artisanal fishermen practicing "ritipanna" along the shallow reef shallows as tranquil ocean swells roll ashore.',
    photographerCredit: 'Coastal Chronicles Sri Lanka',
    aspectRatio: 'landscape',
  },

  {
    id: 'gal-kandy-temple',
    title: 'Evening Reverence at Sri Dalada Maligawa',
    category: 'Ancient Heritage',
    location: 'Kandy Royal Palace Precinct',
    image: imgKandyTemple,
    caption:
      'The golden octagonal roof of the Temple of the Sacred Tooth reflects in the serene waters of Kandy Lake at twilight.',
    photographerCredit: 'Sacred Ceylon Trust',
    aspectRatio: 'landscape',
  },

  {
    id: 'gal-tea-country',
    title: 'Two Leaves and a Bud at Morning Dew',
    category: 'Highlands & Tea',
    location: 'Nuwara Eliya High Elevation Estate',
    image: imgTeaCountry,
    caption:
      'Master tea pluckers skillfully selecting the tenderest green shoots across rolling cloud-shrouded mountain hillsides.',
    photographerCredit: 'Ceylon Tea Board Archive',
    aspectRatio: 'landscape',
  },

  {
    id: 'gal-ancient-temple',
    title: 'Gilded Sanctuaries in Granite',
    category: 'Ancient Heritage',
    location: 'Dambulla Royal Cave Temples',
    image: imgAncientTemple,
    caption:
      'Reclining golden Buddha statues resting in natural caverns adorned with two-thousand-year-old organic ochre ceiling frescoes.',
    photographerCredit: 'Archaeological Survey of Ceylon',
    aspectRatio: 'landscape',
  },
];

export const CURATED_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Arrival in Colombo & Island Welcome',
    location: 'Colombo',
    distanceKm: 35,
    travelTime: '45 mins',
    morning:
      'VIP airport meet-and-greet with refreshing King Coconut water and a warm traditional Sri Lankan welcome.',
    afternoon:
      'Private transfer into Colombo and check-in to a refined city hotel overlooking the Indian Ocean.',
    evening:
      'Sunset walk along Galle Face Green followed by a curated welcome dinner with your personal expedition manager.',
    highlights: [
      'VIP airport reception',
      'Galle Face Green',
      'Colombo city skyline',
    ],
    insiderTip:
      'Visit Galle Face around sunset when the promenade becomes lively with local families, food stalls, and ocean views.',
    accommodationType: 'Luxury Colombo City Hotel',
    image: imgColombo,
    coordinates: { x: 29, y: 55 },
  },

  {
    day: 2,
    title: 'Ancient Anuradhapura & Sacred Buddhist Heritage',
    location: 'Anuradhapura Sacred City',
    distanceKm: 205,
    travelTime: '4 hours',
    morning:
      'Depart Colombo after breakfast and journey north through coconut plantations, villages, and dry-zone countryside.',
    afternoon:
      'Explore the sacred Sri Maha Bodhi, Ruwanwelisaya, ancient royal monasteries, and monumental dagobas of Anuradhapura.',
    evening:
      'Enjoy a peaceful sunset near the ancient reservoirs followed by a traditional North Central Province dinner.',
    highlights: [
      'Sri Maha Bodhi',
      'Ruwanwelisaya',
      'Jetavanaramaya',
      'Ancient monastic ruins',
    ],
    insiderTip:
      'Visit Ruwanwelisaya near sunset when the white stupa glows softly and the atmosphere becomes especially peaceful.',
    accommodationType: 'Heritage Boutique Retreat',
    image: imgAnuradhapura,
    coordinates: { x: 44, y: 27 },
  },

  {
    day: 3,
    title: 'Polonnaruwa Royal Kingdom & Ancient Stone Masterpieces',
    location: 'Polonnaruwa Ancient City',
    distanceKm: 105,
    travelTime: '2.5 hours',
    morning:
      'Scenic drive southeast toward Sri Lanka’s medieval capital through reservoirs, forest reserves, and rural farming villages.',
    afternoon:
      'Private archaeological tour of the Royal Palace, Vatadage, Rankoth Vehera, and the celebrated granite Buddha statues of Gal Vihara.',
    evening:
      'Relax beside Parakrama Samudra as the evening light settles over the ancient reservoir and surrounding ruins.',
    highlights: [
      'Gal Vihara',
      'Royal Palace of Parakramabahu',
      'Polonnaruwa Vatadage',
      'Parakrama Samudra',
    ],
    insiderTip:
      'Cycling through the archaeological zone is one of the most enjoyable ways to experience the ancient city at a relaxed pace.',
    accommodationType: 'Luxury Lakeside Heritage Resort',
    image: imgPolonnaruwa,
    coordinates: { x: 59, y: 36 },
  },

  {
    day: 4,
    title: 'The Sky Citadel of Sigiriya & Royal Water Gardens',
    location: 'Sigiriya & Central Plains',
    distanceKm: 60,
    travelTime: '1.5 hours',
    morning:
      'Travel west toward Sigiriya through the heart of Sri Lanka’s Cultural Triangle.',
    afternoon:
      'Ascend the legendary Sigiriya Rock Fortress and explore the Lion Gate, ancient frescoes, Mirror Wall, and summit palace ruins.',
    evening:
      'Traditional candlelit rice and curry feast prepared in clay pots beneath the forest canopy.',
    highlights: [
      'Lion Gate staircase',
      'Sigiriya ancient frescoes',
      'Mirror Wall',
      'Hydraulic water gardens',
    ],
    insiderTip:
      'Start the climb early morning or after 3:30 PM to avoid the strongest midday heat.',
    accommodationType: 'Eco-Luxury Forest Chalet',
    image: imgSigiriya,
    coordinates: { x: 53, y: 38 },
  },

  {
    day: 5,
    title: 'Dambulla Cave Monasteries & Village Spice Trails',
    location: 'Dambulla & Matale',
    distanceKm: 40,
    travelTime: '1 hour',
    morning:
      'Early exploration of the five sacred Dambulla rock caverns filled with historic Buddha statues and painted ceilings.',
    afternoon:
      'Guided walk through an organic spice garden in Matale featuring Ceylon cinnamon, cardamom, pepper, and clove.',
    evening:
      'Relax with an Ayurvedic herbal foot treatment using warm sesame oils and traditional botanical infusions.',
    highlights: [
      'Dambulla Cave Temple',
      'Painted cave ceilings',
      'Artisanal spice walk',
      'Ayurvedic herbal therapy',
    ],
    insiderTip:
      'Buy genuine Ceylon cinnamon directly from trusted producers rather than mixed commercial spice products.',
    accommodationType: 'Eco-Luxury Forest Chalet',
    image: imgAncientTemple,
    coordinates: { x: 50, y: 43 },
  },

  {
    day: 6,
    title: 'Sacred Kandy & The Temple of the Tooth',
    location: 'Kandy Kingdom',
    distanceKm: 75,
    travelTime: '2 hours',
    morning:
      'Drive into the misty green hills surrounding Sri Lanka’s historic Kandyan kingdom.',
    afternoon:
      'Private stroll through the Royal Botanical Gardens at Peradeniya and its celebrated orchid collection.',
    evening:
      'Witness the atmospheric evening Thevava ceremony at Sri Dalada Maligawa, the Temple of the Sacred Tooth Relic.',
    highlights: [
      'Royal Botanical Gardens',
      'Kandy Lake promenade',
      'Temple of the Tooth',
      'Evening puja ceremony',
    ],
    insiderTip:
      'Arrive before the evening puja begins so you can explore the temple grounds before the main ceremony.',
    accommodationType: 'Historic Kandyan Manor House',
    image: imgKandyTemple,
    coordinates: { x: 52, y: 53 },
  },

  {
    day: 7,
    title: 'Misty Tea Country of Nuwara Eliya',
    location: 'Kandy to Nuwara Eliya',
    distanceKm: 80,
    travelTime: '2.5 hours by road',
    morning:
      'Leave Kandy after breakfast and climb through cool mountain roads, waterfalls, and terraced tea estates toward Nuwara Eliya.',
    afternoon:
      'Visit a working high-grown tea estate for a guided factory experience covering withering, rolling, oxidation, drying, and grading.',
    evening:
      'Settle into the highlands with a relaxed lakeside stroll and a warming cup of single-estate Ceylon tea.',
    highlights: [
      'High-grown tea estate visit',
      'Nuwara Eliya mountain scenery',
      'Waterfalls and tea-covered valleys',
      'Single-estate Ceylon tea tasting',
    ],
    insiderTip:
      'Keep a light layer close at hand; temperatures in Nuwara Eliya can feel noticeably cooler than the lowlands, especially after sunset.',
    accommodationType: 'Highland Luxury Tea Chalet',
    image: imgTeaCountry,
    coordinates: { x: 57, y: 59 },
  },

  {
    day: 8,
    title: 'The Legendary Blue Train to Ella',
    location: 'Nanu Oya to Ella Rail',
    distanceKm: 65,
    travelTime: '3.5 hours rail journey',
    morning:
      'Transfer to Nanu Oya station and board the iconic blue train for a slow journey through cloud forest, tea valleys, and mountain villages.',
    afternoon:
      'Cross dramatic viaducts and winding highland tracks before arriving in Ella, with time for a gentle walk toward the Nine Arch Bridge.',
    evening:
      'Watch the light soften across Ella Gap and enjoy a relaxed highland dinner beneath the mountain ridges.',
    highlights: [
      'Scenic blue train journey',
      'Nine Arch Bridge',
      'Ella Gap panoramas',
      'Cloud forest rail scenery',
    ],
    insiderTip:
      'Reserved seats are worth arranging in advance; keep your camera ready on both sides because the best valley views shift throughout the journey.',
    accommodationType: 'Highland Luxury Tea Chalet',
    image: imgEllaTrain,
    coordinates: { x: 62, y: 64 },
  },

  {
    day: 9,
    title: 'Into the Wilderness: Yala Leopard Tracking',
    location: 'Yala National Park',
    distanceKm: 95,
    travelTime: '2.5 hours',
    morning:
      'Descend from the central highlands into the dry southeastern wilderness surrounding Yala National Park.',
    afternoon:
      'Check in to a luxury safari camp and meet your wildlife naturalist before entering the national park.',
    evening:
      'Private 4x4 safari in search of Sri Lankan leopards, elephants, crocodiles, spotted deer, and exotic birdlife.',
    highlights: [
      'Yala private safari',
      'Wild leopard tracking',
      'Asian elephants',
      'Luxury bush dining',
    ],
    insiderTip:
      'Early morning and late afternoon safari drives usually provide the most comfortable temperatures and stronger wildlife activity.',
    accommodationType: 'Luxury Tented Safari Camp',
    image: imgYalaLeopard,
    coordinates: { x: 74, y: 76 },
  },

  {
    day: 10,
    title: 'Southern Coast & Weligama Ocean Escape',
    location: 'Mirissa & Weligama Bay',
    distanceKm: 120,
    travelTime: '2.5 hours',
    morning:
      'Enjoy an optional early safari before continuing westward along Sri Lanka’s tropical southern coastline.',
    afternoon:
      'Check in to an oceanfront villa and relax beside the warm Indian Ocean or enjoy a private surf lesson.',
    evening:
      'Candlelit seafood dinner overlooking the bay with fresh local fish, prawns, and tropical fruit.',
    highlights: [
      'Weligama Bay',
      'Golden beaches',
      'Surf experience',
      'Southern coastal scenery',
    ],
    insiderTip:
      'Visit Coconut Tree Hill before sunset for one of the southern coast’s most recognizable panoramic viewpoints.',
    accommodationType: 'Oceanfront Boutique Villa',
    image: imgMirissaCoast,
    coordinates: { x: 48, y: 88 },
  },

  {
    day: 11,
    title: 'Galle Fort Ramparts & Maritime Heritage',
    location: 'Galle Historic Fort',
    distanceKm: 30,
    travelTime: '40 mins',
    morning:
      'Scenic coastal drive toward the UNESCO-listed Galle Fort past beaches and traditional fishing villages.',
    afternoon:
      'Guided walk through cobblestone streets, colonial mansions, boutique galleries, historic churches, and gem ateliers.',
    evening:
      'Sunset stroll along the fort ramparts near Flag Rock and the historic lighthouse.',
    highlights: [
      'Galle Fort Lighthouse',
      'Dutch colonial architecture',
      'Fort ramparts',
      'Gem and artisan boutiques',
    ],
    insiderTip:
      'Explore some of the smaller side streets away from the main fort entrance for quieter courtyards and beautifully restored colonial buildings.',
    accommodationType: 'Heritage Colonial Suite in Galle Fort',
    image: imgGalleFort,
    coordinates: { x: 38, y: 84 },
  },

  {
    day: 12,
    title: 'Cinnamon Trails, Colombo & Farewell',
    location: 'Galle to Colombo Airport',
    distanceKm: 150,
    travelTime: '2 hours via Southern Expressway',
    morning:
      'Private Madu Ganga boat journey through mangrove channels with a visit to a traditional cinnamon island.',
    afternoon:
      'Continue to Colombo for final shopping, café stops, and a short city experience before departure.',
    evening:
      'Private transfer to Bandaranaike International Airport with farewell assistance for your onward flight.',
    highlights: [
      'Madu Ganga river safari',
      'Cinnamon island',
      'Colombo shopping',
      'VIP departure assistance',
    ],
    insiderTip:
      'Keep your final-day purchases compact and airport-friendly, especially tea, spices, handicrafts, and locally made textiles.',
    accommodationType: 'Departure',
    image: imgColombo,
    coordinates: { x: 29, y: 55 },
  },
];

export const TRAVELER_REVIEWS = [
  {
    author: 'Eleanor & Alistair Vance',
    origin: 'London, United Kingdom',
    trip: 'The Grand Ceylon Odyssey · 14 Days',
    quote:
      'Climbing Sigiriya at dawn before the crowds and boarding the blue train through misty tea plantations in Ella felt like living inside a timeless dream. Serendib Journeys curated every detail with absolute perfection.',
    rating: 5,
    date: 'February 2026',
  },
  {
    author: 'Dr. Michael Chen',
    origin: 'Singapore',
    trip: 'Wild Leopards & Sapphire Shores · 7 Days',
    quote:
      'We spotted three wild leopards in Yala on our very first afternoon drive! Our naturalist driver had an uncanny instinct for animal behavior. Concluding the trip at Galle Fort with exceptional seafood was the pinnacle of hospitality.',
    rating: 5,
    date: 'January 2026',
  },
  {
    author: 'Sophie & Marc Delacroix',
    origin: 'Geneva, Switzerland',
    trip: 'Royal Heritage & Highland Mist · 8 Days',
    quote:
      'The private tea masterclass in Nuwara Eliya and staying in a restored 19th-century planter’s bungalow were unforgettable. The warmth, gentleness, and grace of the Sri Lankan people left an indelible mark on our hearts.',
    rating: 5,
    date: 'March 2026',
  },
];

export const CEYLON_WEATHER_GUIDE = [
  {
    season: 'Southwest Coast & Hill Country',
    regions:
      'Colombo, Bentota, Galle, Mirissa, Kandy, Nuwara Eliya, Ella',
    bestMonths: 'December to April',
    character:
      'Mostly sunny coastal days, calmer seas, lower rainfall, and clearer conditions across the central highlands.',
    temperature:
      '26°C – 31°C (Coast) · 12°C – 22°C (Highlands)',
    travelTip:
      'Carry a light jacket for Kandy, Nuwara Eliya, and Ella because evenings can feel cool.',
  },

  {
    season: 'Cultural Triangle & North Central Plains',
    regions: 'Anuradhapura, Polonnaruwa, Sigiriya, Dambulla',
    bestMonths: 'January to September',
    character: 'Warm, dry and ideal for heritage exploration.',
    temperature: '27°C – 34°C',
    travelTip:
      'Start archaeological visits before 8 AM to avoid midday heat.',
  },

  {
    season: 'East Coast & Northern Sri Lanka',
    regions:
      'Trincomalee, Pasikudah, Arugam Bay, Batticaloa, Jaffna',
    bestMonths: 'May to September',
    character:
      'Bright sunshine, warmer seas, excellent east-coast beach weather, strong surf conditions, and good visibility for snorkeling and diving.',
    temperature: '28°C – 34°C',
    travelTip:
      'Plan beach and water activities early in the morning for calmer conditions.',
  },

  {
    season: 'Wildlife Safari Season',
    regions:
      'Yala, Udawalawe, Wilpattu, Minneriya, Kaudulla',
    bestMonths: 'February to October',
    character:
      'Drier landscapes concentrate wildlife around water sources, improving chances of seeing elephants, leopards, sloth bears, deer, and large bird populations.',
    temperature: '28°C – 34°C',
    travelTip:
      'Book early-morning or late-afternoon safaris for better wildlife activity and cooler temperatures.',
  },
];