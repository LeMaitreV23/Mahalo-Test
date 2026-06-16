import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-CbaTEuA3.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PROPERTIES, p as p1, a as p6, b as p5, c as p4, d as p3, e as p2 } from "./router-Dymeuc2Y.mjs";
import { A as ArrowRight, H as House, B as Building2, a as Award, U as Users, C as ChartLine, M as MapPin, b as Bed, c as Bath, d as Maximize, e as CircleCheck, f as Briefcase, S as ShieldCheck, g as Calendar, h as Search } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const FIELD = "w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none";
const LABEL = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5";
function SearchBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "form",
    {
      onSubmit: (e) => e.preventDefault(),
      className: "mt-10 w-full max-w-5xl rounded-2xl bg-white shadow-[0_24px_64px_rgba(15,58,93,0.25)] p-2",
      "aria-label": "Property search",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1.1fr_1.1fr_1.2fr_0.9fr_auto] gap-0 divide-y md:divide-y-0 md:divide-x divide-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LABEL, htmlFor: "ptype", children: "Property type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "ptype", className: FIELD, defaultValue: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Any type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Residential" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Commercial" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Land" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LABEL, htmlFor: "loc", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "loc", className: FIELD, placeholder: "Nairobi, Karen, Kilimani..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LABEL, htmlFor: "price", children: "Price range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "price", className: FIELD, defaultValue: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Any price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Under KES 10M" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "KES 10M – 30M" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "KES 30M – 80M" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "KES 80M+" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: LABEL, htmlFor: "bed", children: "Bedrooms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "bed", className: FIELD, defaultValue: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Any" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "1+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "2+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "3+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "4+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "5+" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 md:p-2 flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            className: "w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4", "aria-hidden": "true" }),
              "Search"
            ]
          }
        ) })
      ] })
    }
  );
}
const hero = "/assets/hero-luxury-home-CBGZ4XP_.jpg";
const why = "/assets/why-choose-DtKWOfLH.jpg";
const tour = "/assets/tour-property-B3ouizGv.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[100svh] flex items-center pt-24 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: hero,
        alt: "",
        width: 1920,
        height: 1280,
        fetchPriority: "high",
        className: "absolute inset-0 h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wider uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-brand-green" }),
          "Premium real estate in Kenya"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]", children: "Find property with confidence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed", children: "Property sales, land investments, property management, and advisory services tailored to help you make smarter real estate decisions." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#properties",
              className: "inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3.5 text-sm font-semibold text-brand-green-foreground hover:bg-brand-green/90 transition-all",
              children: [
                "View Properties ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: "inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-all",
              children: "Schedule Consultation"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, {})
    ] })
  ] });
}
const STATS = [
  { value: "350+", label: "Properties listed", Icon: House },
  { value: "180+", label: "Properties managed", Icon: Building2 },
  { value: "12+", label: "Years of experience", Icon: Award },
  { value: "1,200+", label: "Happy clients", Icon: Users }
];
function TrustStats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-14 grid grid-cols-2 lg:grid-cols-4 gap-8", children: STATS.map(({ value, label, Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-primary leading-none", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-sm text-muted-foreground", children: label })
    ] })
  ] }, label)) }) });
}
const SERVICES = [
  {
    Icon: House,
    title: "Property sales",
    body: "Help clients buy and sell residential and commercial properties with confidence."
  },
  {
    Icon: Building2,
    title: "Property management",
    body: "Professional management services for landlords and property investors."
  },
  {
    Icon: ChartLine,
    title: "Property advisory",
    body: "Expert guidance for property investments, valuations, and market decisions."
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Our services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-bold", children: "What we do" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "A full-service real estate partner for buyers, sellers, landlords and investors." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: SERVICES.map(({ Icon, title, body }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group relative rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-card hover:-translate-y-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-xl font-bold", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: body }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#",
              className: "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-brand-green transition-colors",
              children: [
                "Learn more",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
              ]
            }
          )
        ]
      },
      title
    )) })
  ] }) });
}
function FeaturedProperties() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "properties", className: "py-24 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Listings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-bold", children: "Featured properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "A curated selection of homes, apartments and investment opportunities." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-green", children: [
        "View all properties ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: PROPERTIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "article",
      {
        className: "group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-elevated transition-all duration-300",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/property/$slug", params: { slug: p.slug }, className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.img,
                alt: p.title,
                loading: "lazy",
                width: 1024,
                height: 768,
                className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              }
            ),
            p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 inline-flex items-center rounded-md bg-brand-green px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-green-foreground shadow-soft", children: p.badge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary", children: p.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right text-lg font-bold text-primary", children: p.price })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-bold leading-snug", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
              p.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-5 pt-4 border-t border-border text-sm text-muted-foreground", children: [
              p.beds > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "h-4 w-4" }),
                p.beds
              ] }),
              p.baths > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { className: "h-4 w-4" }),
                p.baths
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 ml-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { className: "h-4 w-4" }),
                p.area
              ] })
            ] })
          ] })
        ] })
      },
      p.slug
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors", children: [
      "View all properties ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] }) });
}
const BENEFITS = [
  { title: "Market expertise", body: "Deep knowledge of Nairobi and Kenyan property markets." },
  { title: "Trusted advisory services", body: "Independent guidance you can rely on for major decisions." },
  { title: "Professional property management", body: "End-to-end care for landlords and investors." },
  { title: "Client-focused solutions", body: "Tailored strategies aligned with your goals." }
];
function WhyChoose() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-2 gap-14 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] lg:aspect-[5/6] rounded-3xl overflow-hidden shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: why, alt: "Modern Mahalo residential development", loading: "lazy", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Why us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-bold", children: "Why choose Mahalo Properties" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg leading-relaxed", children: "We combine local expertise with a disciplined, client-first approach — so every transaction feels considered, transparent and built for the long term." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 space-y-6", children: BENEFITS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: b.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: b.body })
        ] })
      ] }, b.title)) })
    ] })
  ] }) });
}
function AdvisoryBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "advisory", className: "relative py-24 bg-primary text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 opacity-[0.06]",
        style: {
          backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(circle at 80% 60%, rgba(82,175,76,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 56px 56px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3.5 w-3.5" }),
          "Advisory"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white", children: "Strategic property advisory for smarter investments" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/80 text-lg max-w-2xl leading-relaxed", children: "From investment planning to valuations, due diligence and market insights — we help you evaluate every opportunity with clarity, structure and Kenya-specific market intelligence." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "mt-8 inline-flex items-center gap-2 rounded-md bg-brand-green px-7 py-3.5 text-sm font-semibold text-brand-green-foreground hover:bg-brand-green/90 transition-colors",
            children: [
              "Book an Advisory Session ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-4", children: [
        { Icon: ChartLine, t: "Investment planning" },
        { Icon: ShieldCheck, t: "Due diligence" },
        { Icon: Award, t: "Property valuations" },
        { Icon: Briefcase, t: "Market insights" }
      ].map(({ Icon, t }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-brand-green", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-base font-semibold text-white", children: t })
      ] }, t)) })
    ] })
  ] });
}
const CATEGORIES = [
  { img: p1, label: "Residential properties" },
  { img: p6, label: "Commercial properties" },
  { img: p5, label: "Land for sale" },
  { img: p4, label: "Investment opportunities" }
];
function Categories() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Browse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-bold", children: "Property categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Explore the right kind of property for your goals." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "#",
        className: "group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.label, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-lg font-bold leading-snug", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white/90 group-hover:text-brand-green transition-colors", children: [
              "Explore ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
            ] })
          ] })
        ]
      },
      c.label
    )) })
  ] }) });
}
const TESTIMONIALS = [
  { quote: "Mahalo helped us secure a fantastic family home in Karen. Professional, patient and deeply knowledgeable.", name: "Aisha M.", role: "Homeowner" },
  { quote: "Their property management has freed up my time entirely. Reporting is clear and tenants are well cared for.", name: "James K.", role: "Landlord, Westlands" },
  { quote: "The advisory session reshaped how we approach property as an asset class. Exceptional clarity.", name: "Wanjiru N.", role: "Investor" }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-bold", children: "What our clients say" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-2xl bg-white border border-border p-8 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-brand-green text-4xl leading-none font-serif", children: "“" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-2 text-foreground leading-relaxed", children: t.quote }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 pt-6 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-primary", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t.role })
      ] })
    ] }, t.name)) })
  ] }) });
}
function ScheduleTour() {
  const input = "w-full rounded-md border border-input bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition";
  const label = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid lg:grid-cols-2 gap-12 items-stretch", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden min-h-[420px] shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tour, alt: "Schedule a property viewing", loading: "lazy", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-8 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-7 w-7 text-brand-green", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-lg font-semibold leading-snug max-w-sm", children: "Tour properties in person with an experienced Mahalo advisor." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Book a viewing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-bold", children: "Schedule a property viewing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Share a few details and our team will confirm your slot within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-8 grid gap-5 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: label, children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", required: true, className: input, placeholder: "Jane Doe" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: label, children: "Phone number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "phone", type: "tel", required: true, className: input, placeholder: "+254 7..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: label, children: "Email address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", type: "email", required: true, className: input, placeholder: "you@email.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "date", className: label, children: "Preferred date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "date", type: "date", required: true, className: input })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "time", className: label, children: "Preferred time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "time", type: "time", required: true, className: input })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "poi", className: label, children: "Property of interest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "poi", className: input, placeholder: "Listing title or area" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "msg", className: label, children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "msg", rows: 4, className: input, placeholder: "Tell us a bit about what you're looking for..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors", children: [
          "Schedule Viewing ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] })
  ] }) });
}
const INSIGHTS = [
  { img: p3, tag: "Investing", title: "Best areas to invest in Kenya in 2026", excerpt: "A practical look at the neighbourhoods showing the strongest growth and yield potential." },
  { img: p2, tag: "Management", title: "Property management tips for landlords", excerpt: "How to protect your asset, retain tenants and run a profitable rental portfolio." },
  { img: p5, tag: "Land", title: "Understanding land ownership in Kenya", excerpt: "Title deeds, search processes and the legal checks every buyer should know." }
];
function Insights() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "insights", className: "py-24 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-4xl font-bold", children: "Property insights and market updates" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "text-sm font-semibold text-primary hover:text-brand-green inline-flex items-center gap-2", children: [
        "All articles ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-8 md:grid-cols-3", children: INSIGHTS.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-card transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: i.img, alt: i.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-brand-green/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-green", children: i.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-bold leading-snug group-hover:text-primary transition-colors", children: i.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: i.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-brand-green", children: [
          "Read article ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
        ] })
      ] })
    ] }) }, i.title)) })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 bg-primary-dark text-white overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-green/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto", children: "Ready to find your next property?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-white/85 max-w-2xl mx-auto", children: "Speak with our team today and discover opportunities that match your goals." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#properties", className: "inline-flex items-center gap-2 rounded-md bg-brand-green px-7 py-3.5 text-sm font-semibold text-brand-green-foreground hover:bg-brand-green/90 transition-colors", children: [
          "View Properties ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors", children: "Contact Us" })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustStats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedProperties, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChoose, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AdvisoryBanner, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Categories, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScheduleTour, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Insights, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
