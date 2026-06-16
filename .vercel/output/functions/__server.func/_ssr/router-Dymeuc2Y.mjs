import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { H as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-BulnACvo.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mahalo Properties Limited" },
      { name: "description", content: "Property sales, land, management and advisory services across Kenya." },
      { property: "og:site_name", content: "Mahalo Properties Limited" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$1 = () => import("./index-BehNnkMI.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Mahalo Properties Limited — Property for sale & management in Kenya"
    }, {
      name: "description",
      content: "Property sales, land investments, property management and real estate advisory in Kenya. Trusted guidance for homeowners, landlords and investors."
    }, {
      property: "og:title",
      content: "Mahalo Properties Limited — Real estate in Kenya"
    }, {
      property: "og:description",
      content: "Property sales, land, management and advisory services across Kenya."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const p1 = "/assets/property-1-Dul0L46Y.jpg";
const p2 = "/assets/property-2-I39XRREC.jpg";
const p3 = "/assets/property-3-C2Yec9fV.jpg";
const p4 = "/assets/property-4-CdwFdBWb.jpg";
const p5 = "/assets/property-5-B6n78KK6.jpg";
const p6 = "/assets/property-6-DB_YF6-7.jpg";
const baseAgent = {
  name: "Mahalo Properties Team",
  title: "Senior Property Consultant",
  phone: "+254 700 000 780",
  email: "info@mahaloproperties.co.ke"
};
const PROPERTIES = [
  {
    slug: "modern-villa-with-pool-karen",
    title: "Modern villa with pool",
    location: "Karen, Nairobi",
    address: "Marula Lane, Karen",
    neighbourhood: "Karen",
    county: "Nairobi County",
    price: "KES 95,000,000",
    priceNumber: 95e6,
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
      "Additional highlights include a fully fitted gym, a quiet study, staff quarters, borehole, solar backup and a fibre-ready home automation system — ready for a discerning family or executive buyer."
    ],
    amenities: ["Swimming pool", "Borehole water", "Backup generator", "Solar power", "CCTV & alarm", "Electric perimeter fence", "Landscaped garden", "Staff quarters"],
    features: ["Underfloor heating", "Smart home automation", "Walk-in wardrobes", "En-suite bedrooms", "Double-volume living", "Home gym", "Study / office", "Scullery"],
    nearby: {
      schools: ["Brookhouse School", "Hillcrest International", "Banda School"],
      hospitals: ["Karen Hospital", "Nairobi Women's Hospital"],
      shopping: ["The Hub Karen", "Galleria Mall", "Waterfront Karen"]
    },
    agent: baseAgent,
    latitude: -1.3197,
    longitude: 36.7076
  },
  {
    slug: "riverside-apartments-kilimani",
    title: "Riverside apartments",
    location: "Kilimani, Nairobi",
    address: "Riverside Drive, Kilimani",
    neighbourhood: "Kilimani",
    county: "Nairobi County",
    price: "KES 28,500,000",
    priceNumber: 285e5,
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
      "Residents enjoy a rooftop pool, fully equipped gym, children's play area, 24/7 manned security and ample visitor parking — a turnkey city home or strong rental asset."
    ],
    amenities: ["Rooftop swimming pool", "Gym", "24/7 security", "High-speed lifts", "Backup generator", "Borehole", "Children's play area", "Visitor parking"],
    features: ["Open-plan living", "Fitted kitchen", "Balcony", "Master en-suite", "Built-in wardrobes", "Fibre internet ready"],
    nearby: {
      schools: ["Kilimani Junior Academy", "Strathmore School"],
      hospitals: ["Nairobi Hospital", "Coptic Hospital"],
      shopping: ["Yaya Centre", "Adlife Plaza", "Prestige Plaza"]
    },
    agent: baseAgent,
    latitude: -1.2921,
    longitude: 36.7833
  },
  {
    slug: "family-home-runda",
    title: "Family home in Runda",
    location: "Runda, Nairobi",
    address: "Runda Estate, Northern Bypass",
    neighbourhood: "Runda",
    county: "Nairobi County",
    price: "KES 65,000,000",
    priceNumber: 65e6,
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
      "The home sits on half an acre with established trees, a kitchen garden and DSQ. Ideal for families seeking space, security and proximity to international schools."
    ],
    amenities: ["Mature garden", "Gated community", "24/7 security", "Borehole", "Backup generator", "Staff quarters", "Double garage"],
    features: ["Formal lounge", "Family room", "Fitted kitchen with pantry", "All en-suite", "Walk-in closet", "Study"],
    nearby: {
      schools: ["Rosslyn Academy", "GEMS Cambridge", "International School of Kenya"],
      hospitals: ["Aga Khan University Hospital", "MP Shah Hospital"],
      shopping: ["Village Market", "Two Rivers Mall", "Rosslyn Riviera"]
    },
    agent: baseAgent,
    latitude: -1.2167,
    longitude: 36.8167
  },
  {
    slug: "skyline-penthouse-westlands",
    title: "Skyline penthouse",
    location: "Westlands, Nairobi",
    address: "Waiyaki Way, Westlands",
    neighbourhood: "Westlands",
    county: "Nairobi County",
    price: "KES 120,000,000",
    priceNumber: 12e7,
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
      "Residents access concierge, valet, spa, fitness centre, executive lounge and a curated fine-dining restaurant on-site."
    ],
    amenities: ["Private plunge pool", "Rooftop terrace", "Concierge service", "Spa & wellness", "Fitness centre", "Valet parking", "EV charging", "Executive lounge"],
    features: ["Double-height living", "Italian kitchen", "Miele appliances", "Smart home", "Dual dressing rooms", "Wine cellar", "Home office"],
    nearby: {
      schools: ["Westlands Primary", "Aga Khan Academy"],
      hospitals: ["Aga Khan University Hospital", "MP Shah Hospital"],
      shopping: ["Sarit Centre", "Westgate Mall", "The Mall Westlands"]
    },
    agent: baseAgent,
    latitude: -1.2676,
    longitude: 36.8108
  },
  {
    slug: "prime-land-kiambu",
    title: "Prime land parcel",
    location: "Kiambu County",
    address: "Tigoni, Limuru Road",
    neighbourhood: "Tigoni",
    county: "Kiambu County",
    price: "KES 18,000,000",
    priceNumber: 18e6,
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
      "An excellent long-term hold in one of Kenya's most consistently appreciating rural-suburban corridors."
    ],
    amenities: ["All-weather road access", "Mains water", "Grid electricity", "Mature perimeter trees", "Title deed ready"],
    features: ["Freehold title", "Subdivision complete", "Cleared & surveyed", "Beacons in place"],
    nearby: {
      schools: ["Brookhouse Runda", "Tigoni Primary"],
      hospitals: ["Tigoni County Hospital"],
      shopping: ["Limuru Mall", "Banana Hill shops"]
    },
    agent: baseAgent,
    latitude: -1.1167,
    longitude: 36.6833
  },
  {
    slug: "grade-a-office-tower-westlands",
    title: "Grade-A office tower",
    location: "Westlands, Nairobi",
    address: "Chiromo Road, Westlands",
    neighbourhood: "Westlands",
    county: "Nairobi County",
    price: "KES 240,000,000",
    priceNumber: 24e7,
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
      "Currently let to a blue-chip anchor tenant with a long unexpired lease term — strong, predictable yield with capital growth potential."
    ],
    amenities: ["High-speed lifts", "Triple power redundancy", "Fibre internet", "24/7 manned security", "CCTV", "Generator backup", "Basement parking", "EV charging"],
    features: ["Open floor plates", "Raised access floors", "Double-glazed facade", "Anchor tenant in place", "Cafeteria & break-out spaces"],
    nearby: {
      schools: ["Aga Khan Academy"],
      hospitals: ["Aga Khan University Hospital"],
      shopping: ["Sarit Centre", "Westgate Mall"]
    },
    agent: baseAgent,
    latitude: -1.2676,
    longitude: 36.8108
  }
];
function getProperty(slug) {
  return PROPERTIES.find((p) => p.slug === slug);
}
const $$splitNotFoundComponentImporter = () => import("./property._slug-lclaDyOu.mjs");
const $$splitErrorComponentImporter = () => import("./property._slug-BFSDvVeo.mjs");
const $$splitComponentImporter = () => import("./property._slug-sCJosjLc.mjs");
const Route = createFileRoute("/property/$slug")({
  loader: ({
    params
  }) => {
    const property = getProperty(params.slug);
    if (!property) throw notFound();
    return {
      property
    };
  },
  head: ({
    loaderData
  }) => {
    const p = loaderData?.property;
    if (!p) return {
      meta: [{
        title: "Property — Mahalo Properties Limited"
      }]
    };
    const title = `${p.title} in ${p.location} — ${p.price} | Mahalo Properties`;
    const description = `${p.type} ${p.status.toLowerCase()} in ${p.location}. ${p.beds > 0 ? `${p.beds} beds, ${p.baths} baths, ` : ""}${p.area}. ${p.description[0].slice(0, 110)}`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: description
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: description
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `/property/${p.slug}`
      }, {
        property: "og:image",
        content: p.img
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:image",
        content: p.img
      }],
      links: [{
        rel: "canonical",
        href: `/property/${p.slug}`
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Residence",
          name: p.title,
          description: p.description.join(" "),
          image: p.gallery,
          address: {
            "@type": "PostalAddress",
            streetAddress: p.address,
            addressLocality: p.neighbourhood,
            addressRegion: p.county,
            addressCountry: "KE"
          },
          numberOfRooms: p.beds || void 0,
          numberOfBathroomsTotal: p.baths || void 0,
          floorSize: {
            "@type": "QuantitativeValue",
            value: p.areaSqm,
            unitCode: "MTK"
          },
          offers: {
            "@type": "Offer",
            price: p.priceNumber,
            priceCurrency: "KES",
            availability: "https://schema.org/InStock"
          }
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const PropertySlugRoute = Route.update({
  id: "/property/$slug",
  path: "/property/$slug",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  PropertySlugRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  PROPERTIES as P,
  Route as R,
  p6 as a,
  p5 as b,
  p4 as c,
  p3 as d,
  p2 as e,
  p1 as p,
  router as r
};
