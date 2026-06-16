import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export type Property = {
  slug: string;
  title: string;
  location: string;
  address: string;
  county: string;
  neighbourhood: string;
  price: string;
  priceNumber: number;
  pricePerSqm?: string;
  type: string;
  status: "For Sale" | "For Rent" | "Sold";
  badge?: string;
  beds: number;
  baths: number;
  area: string;
  areaSqm?: number;
  lotSize?: string;
  yearBuilt?: number;
  yearRenovated?: number;
  floors?: number;
  parking?: number;
  furnished?: "Yes" | "No" | "Optional";
  reference: string;
  listedOn: string;
  img: string;
  gallery: string[];
  description: string[];
  amenities: string[];
  features: string[];
  nearby: { schools: string[]; hospitals: string[]; shopping: string[] };
  agent: { name: string; title: string; phone: string; email: string };
  latitude?: number;
  longitude?: number;
};

const baseAgent = {
  name: "Mahalo Properties Team",
  title: "Senior Property Consultant",
  phone: "+254 700 000 780",
  email: "info@mahaloproperties.co.ke",
};

export const PROPERTIES: Property[] = [
  {
    slug: "modern-villa-with-pool-karen",
    title: "Modern villa with pool",
    location: "Karen, Nairobi",
    address: "Marula Lane, Karen",
    neighbourhood: "Karen",
    county: "Nairobi County",
    price: "KES 95,000,000",
    priceNumber: 95_000_000,
    pricePerSqm: "KES 146,154",
    type: "Residential",
    status: "For Sale",
    badge: "Just Listed",
    beds: 5,
    baths: 4,
    area: "650 m²",
    areaSqm: 650,
    lotSize: "0.75 acres",
    yearBuilt: 2019,
    yearRenovated: 2024,
    floors: 2,
    parking: 4,
    furnished: "Optional",
    reference: "MPL-KRN-001",
    listedOn: "May 28, 2026",
    img: p1,
    gallery: [p1, p2, p3, p4],
    description: [
      "An expertly designed contemporary villa set on a beautifully landscaped 0.75-acre plot in the heart of Karen. The home blends warm finishes, abundant natural light and a calm indoor–outdoor flow that makes everyday living effortless.",
      "The ground floor opens to a double-volume living area with floor-to-ceiling glazing, a chef's kitchen with quartz countertops, a separate scullery, and a guest suite. Upstairs, four en-suite bedrooms include a generous master with a private terrace overlooking the pool and gardens.",
      "Additional highlights include a fully fitted gym, a quiet study, staff quarters, borehole, solar backup and a fibre-ready home automation system — ready for a discerning family or executive buyer.",
    ],
    amenities: ["Swimming pool", "Borehole water", "Backup generator", "Solar power", "CCTV & alarm", "Electric perimeter fence", "Landscaped garden", "Staff quarters"],
    features: ["Underfloor heating", "Smart home automation", "Walk-in wardrobes", "En-suite bedrooms", "Double-volume living", "Home gym", "Study / office", "Scullery"],
    nearby: {
      schools: ["Brookhouse School", "Hillcrest International", "Banda School"],
      hospitals: ["Karen Hospital", "Nairobi Women's Hospital"],
      shopping: ["The Hub Karen", "Galleria Mall", "Waterfront Karen"],
    },
    agent: baseAgent,
    latitude: -1.3197,
    longitude: 36.7076,
  },
  {
    slug: "riverside-apartments-kilimani",
    title: "Riverside apartments",
    location: "Kilimani, Nairobi",
    address: "Riverside Drive, Kilimani",
    neighbourhood: "Kilimani",
    county: "Nairobi County",
    price: "KES 28,500,000",
    priceNumber: 28_500_000,
    pricePerSqm: "KES 158,333",
    type: "Apartment",
    status: "For Sale",
    badge: "Hot Deal",
    beds: 3,
    baths: 2,
    area: "180 m²",
    areaSqm: 180,
    yearBuilt: 2022,
    floors: 12,
    parking: 2,
    furnished: "No",
    reference: "MPL-KIL-014",
    listedOn: "June 02, 2026",
    img: p2,
    gallery: [p2, p3, p1, p5],
    description: [
      "A bright, well-proportioned 3-bedroom apartment in a sought-after Kilimani development, moments from Yaya Centre, top restaurants and the Nairobi CBD.",
      "Open-plan living and dining flows onto a private balcony with leafy views. The kitchen is fully fitted with integrated appliances and a separate utility space.",
      "Residents enjoy a rooftop pool, fully equipped gym, children's play area, 24/7 manned security and ample visitor parking — a turnkey city home or strong rental asset.",
    ],
    amenities: ["Rooftop swimming pool", "Gym", "24/7 security", "High-speed lifts", "Backup generator", "Borehole", "Children's play area", "Visitor parking"],
    features: ["Open-plan living", "Fitted kitchen", "Balcony", "Master en-suite", "Built-in wardrobes", "Fibre internet ready"],
    nearby: {
      schools: ["Kilimani Junior Academy", "Strathmore School"],
      hospitals: ["Nairobi Hospital", "Coptic Hospital"],
      shopping: ["Yaya Centre", "Adlife Plaza", "Prestige Plaza"],
    },
    agent: baseAgent,
    latitude: -1.2921,
    longitude: 36.7833,
  },
  {
    slug: "family-home-runda",
    title: "Family home in Runda",
    location: "Runda, Nairobi",
    address: "Runda Estate, Northern Bypass",
    neighbourhood: "Runda",
    county: "Nairobi County",
    price: "KES 65,000,000",
    priceNumber: 65_000_000,
    pricePerSqm: "KES 154,762",
    type: "Residential",
    status: "For Sale",
    beds: 4,
    baths: 3,
    area: "420 m²",
    areaSqm: 420,
    lotSize: "0.5 acres",
    yearBuilt: 2015,
    floors: 2,
    parking: 3,
    furnished: "No",
    reference: "MPL-RND-022",
    listedOn: "April 14, 2026",
    img: p3,
    gallery: [p3, p1, p4, p2],
    description: [
      "A timeless 4-bedroom family residence in gated Runda, offering generous living spaces, a mature garden and excellent natural light throughout.",
      "Formal lounge, separate family room, dining and a fully fitted kitchen with pantry. All bedrooms are en-suite with the master enjoying a walk-in closet and garden views.",
      "The home sits on half an acre with established trees, a kitchen garden and DSQ. Ideal for families seeking space, security and proximity to international schools.",
    ],
    amenities: ["Mature garden", "Gated community", "24/7 security", "Borehole", "Backup generator", "Staff quarters", "Double garage"],
    features: ["Formal lounge", "Family room", "Fitted kitchen with pantry", "All en-suite", "Walk-in closet", "Study"],
    nearby: {
      schools: ["Rosslyn Academy", "GEMS Cambridge", "International School of Kenya"],
      hospitals: ["Aga Khan University Hospital", "MP Shah Hospital"],
      shopping: ["Village Market", "Two Rivers Mall", "Rosslyn Riviera"],
    },
    agent: baseAgent,
    latitude: -1.2167,
    longitude: 36.8167,
  },
  {
    slug: "skyline-penthouse-westlands",
    title: "Skyline penthouse",
    location: "Westlands, Nairobi",
    address: "Waiyaki Way, Westlands",
    neighbourhood: "Westlands",
    county: "Nairobi County",
    price: "KES 120,000,000",
    priceNumber: 120_000_000,
    pricePerSqm: "KES 315,789",
    type: "Penthouse",
    status: "For Sale",
    badge: "Premium",
    beds: 4,
    baths: 4,
    area: "380 m²",
    areaSqm: 380,
    yearBuilt: 2023,
    floors: 2,
    parking: 3,
    furnished: "Optional",
    reference: "MPL-WLD-007",
    listedOn: "June 10, 2026",
    img: p4,
    gallery: [p4, p2, p1, p3],
    description: [
      "A dual-level penthouse occupying the top floors of a landmark Westlands tower, with panoramic skyline views, a private rooftop terrace and a plunge pool.",
      "The double-height living room is framed by 4-metre glazing. The kitchen is bespoke Italian with premium Miele appliances. Four en-suite bedrooms include an exceptional principal suite with dual dressing rooms.",
      "Residents access concierge, valet, spa, fitness centre, executive lounge and a curated fine-dining restaurant on-site.",
    ],
    amenities: ["Private plunge pool", "Rooftop terrace", "Concierge service", "Spa & wellness", "Fitness centre", "Valet parking", "EV charging", "Executive lounge"],
    features: ["Double-height living", "Italian kitchen", "Miele appliances", "Smart home", "Dual dressing rooms", "Wine cellar", "Home office"],
    nearby: {
      schools: ["Westlands Primary", "Aga Khan Academy"],
      hospitals: ["Aga Khan University Hospital", "MP Shah Hospital"],
      shopping: ["Sarit Centre", "Westgate Mall", "The Mall Westlands"],
    },
    agent: baseAgent,
    latitude: -1.2676,
    longitude: 36.8108,
  },
  {
    slug: "prime-land-kiambu",
    title: "Prime land parcel",
    location: "Kiambu County",
    address: "Tigoni, Limuru Road",
    neighbourhood: "Tigoni",
    county: "Kiambu County",
    price: "KES 18,000,000",
    priceNumber: 18_000_000,
    type: "Land",
    status: "For Sale",
    beds: 0,
    baths: 0,
    area: "1 acre",
    lotSize: "1 acre",
    reference: "MPL-KMB-031",
    listedOn: "March 20, 2026",
    img: p5,
    gallery: [p5, p3, p1, p4],
    description: [
      "A clean, ready-to-develop one-acre parcel in the cool, leafy Tigoni belt — perfect for a family residence, country home or boutique development.",
      "The land is freehold, with a clean title deed, completed subdivision, mature perimeter and access to all-weather road, mains water and grid power.",
      "An excellent long-term hold in one of Kenya's most consistently appreciating rural-suburban corridors.",
    ],
    amenities: ["All-weather road access", "Mains water", "Grid electricity", "Mature perimeter trees", "Title deed ready"],
    features: ["Freehold title", "Subdivision complete", "Cleared & surveyed", "Beacons in place"],
    nearby: {
      schools: ["Brookhouse Runda", "Tigoni Primary"],
      hospitals: ["Tigoni County Hospital"],
      shopping: ["Limuru Mall", "Banana Hill shops"],
    },
    agent: baseAgent,
    latitude: -1.1167,
    longitude: 36.6833,
  },
  {
    slug: "grade-a-office-tower-westlands",
    title: "Grade-A office tower",
    location: "Westlands, Nairobi",
    address: "Chiromo Road, Westlands",
    neighbourhood: "Westlands",
    county: "Nairobi County",
    price: "KES 240,000,000",
    priceNumber: 240_000_000,
    pricePerSqm: "KES 85,714",
    type: "Commercial",
    status: "For Sale",
    beds: 0,
    baths: 0,
    area: "2,800 m²",
    areaSqm: 2800,
    yearBuilt: 2021,
    floors: 9,
    parking: 80,
    reference: "MPL-CMR-003",
    listedOn: "February 11, 2026",
    img: p6,
    gallery: [p6, p4, p2, p1],
    description: [
      "An institutional-grade, LEED-aligned office building offering large floor plates, premium finishes and excellent natural light — well-suited to a corporate HQ or income-producing investment.",
      "The asset features triple-redundancy power, fibre connectivity from multiple providers, secure basement parking and a striking double-volume reception.",
      "Currently let to a blue-chip anchor tenant with a long unexpired lease term — strong, predictable yield with capital growth potential.",
    ],
    amenities: ["High-speed lifts", "Triple power redundancy", "Fibre internet", "24/7 manned security", "CCTV", "Generator backup", "Basement parking", "EV charging"],
    features: ["Open floor plates", "Raised access floors", "Double-glazed facade", "Anchor tenant in place", "Cafeteria & break-out spaces"],
    nearby: {
      schools: ["Aga Khan Academy"],
      hospitals: ["Aga Khan University Hospital"],
      shopping: ["Sarit Centre", "Westgate Mall"],
    },
    agent: baseAgent,
    latitude: -1.2676,
    longitude: 36.8108,
  },
];

export function getProperty(slug: string) {
  return PROPERTIES.find((p) => p.slug === slug);
}
