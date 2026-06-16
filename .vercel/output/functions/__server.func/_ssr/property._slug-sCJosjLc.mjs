import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-CbaTEuA3.mjs";
import { R as Route, P as PROPERTIES } from "./router-Dymeuc2Y.mjs";
import { i as ChevronRight, M as MapPin, j as Heart, k as Share2, b as Bed, c as Bath, d as Maximize, l as Car, m as Hash, B as Building2, S as ShieldCheck, R as Ruler, g as Calendar, e as CircleCheck, P as Phone, n as Mail, A as ArrowRight, o as Printer } from "../_libs/lucide-react.mjs";
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
function PropertyPage() {
  const {
    property: p
  } = Route.useLoaderData();
  const [active, setActive] = reactExports.useState(0);
  const similar = PROPERTIES.filter((x) => x.slug !== p.slug).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-24 bg-surface", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Breadcrumb", className: "flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#properties", className: "hover:text-primary", children: "Properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-primary", children: p.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-primary", children: p.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-primary", children: p.county }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium truncate max-w-[200px]", children: p.address })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "container-page pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-muted-foreground/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-muted-foreground/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Ref: ",
              p.reference
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 inline-flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-brand-green" }),
            p.address,
            ", ",
            p.neighbourhood,
            ", ",
            p.county
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Asking price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl sm:text-4xl font-bold text-primary", children: p.price }),
          p.pricePerSqm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
            p.pricePerSqm,
            " / m²"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-[1fr_360px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.gallery[active], alt: `${p.title} — photo ${active + 1}`, className: "absolute inset-0 h-full w-full object-cover" }),
          p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-5 left-5 inline-flex items-center rounded-md bg-brand-green px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-foreground shadow-md", children: p.badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-5 right-5 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur px-3 py-2 text-xs font-semibold text-foreground shadow-soft hover:bg-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5" }),
              " Save"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur px-3 py-2 text-xs font-semibold text-foreground shadow-soft hover:bg-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-3.5 w-3.5" }),
              " Share"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 lg:grid-cols-2 gap-3", children: p.gallery.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(i), className: `relative aspect-[4/3] overflow-hidden rounded-xl bg-muted transition ring-offset-2 ${active === i ? "ring-2 ring-primary" : "hover:opacity-90"}`, "aria-label": `View photo ${i + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g, alt: "", className: "absolute inset-0 h-full w-full object-cover" }) }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page pb-20 grid gap-10 lg:grid-cols-[1fr_380px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft", children: [{
            Icon: Bed,
            label: "Bedrooms",
            value: p.beds > 0 ? p.beds : "—"
          }, {
            Icon: Bath,
            label: "Bathrooms",
            value: p.baths > 0 ? p.baths : "—"
          }, {
            Icon: Maximize,
            label: "Area",
            value: p.area
          }, {
            Icon: Car,
            label: "Parking",
            value: p.parking ?? "—"
          }].map(({
            Icon,
            label,
            value
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground", children: value })
            ] })
          ] }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-labelledby": "overview", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "overview", className: "text-2xl font-bold", children: "Property overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-4 text-foreground/85 leading-relaxed", children: p.description.map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: para }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-labelledby": "details", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "details", className: "text-2xl font-bold", children: "Property details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-1 rounded-2xl border border-border bg-white p-6 shadow-soft", children: [["Reference", p.reference, Hash], ["Property type", p.type, Building2], ["Status", p.status, ShieldCheck], ["Price", p.price, void 0], ["Price / m²", p.pricePerSqm, void 0], ["Bedrooms", p.beds > 0 ? p.beds : void 0, Bed], ["Bathrooms", p.baths > 0 ? p.baths : void 0, Bath], ["Floor area", p.area, Maximize], ["Lot size", p.lotSize, Ruler], ["Year built", p.yearBuilt, Calendar], ["Year renovated", p.yearRenovated, Calendar], ["Floors", p.floors, Building2], ["Parking", p.parking, Car], ["Furnished", p.furnished, void 0], ["Listed on", p.listedOn, Calendar]].filter(([, v]) => v !== void 0 && v !== null && v !== "").map(([label, value, Icon]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 border-b border-border/60 last:border-0 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-sm text-muted-foreground", children: [
                Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary/70" }) : null,
                label
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: String(value) })
            ] }, label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-labelledby": "amenities", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "amenities", className: "text-2xl font-bold", children: "Amenities & features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-6 shadow-soft", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: "Amenities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: p.amenities.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-start gap-2 text-sm text-foreground/85", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mt-0.5 text-brand-green shrink-0" }),
                  a
                ] }, a)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-6 shadow-soft", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: "Features" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-start gap-2 text-sm text-foreground/85", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mt-0.5 text-brand-green shrink-0" }),
                  f
                ] }, f)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-labelledby": "location", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "location", className: "text-2xl font-bold", children: "Location & neighbourhood" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground", children: [
              p.address,
              ", ",
              p.neighbourhood,
              ", ",
              p.county
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: `Map of ${p.title}`, src: `https://www.google.com/maps?q=${encodeURIComponent(`${p.address}, ${p.neighbourhood}, Kenya`)}&output=embed`, className: "h-full w-full", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid sm:grid-cols-3 gap-4", children: [["Schools", p.nearby.schools], ["Hospitals", p.nearby.hospitals], ["Shopping", p.nearby.shopping]].map(([label, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-5 shadow-soft", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-primary", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1.5 text-sm text-foreground/85", children: items.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                "• ",
                x
              ] }, x)) })
            ] }, label)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-28 self-start space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-6 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg", children: "MP" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: p.agent.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: p.agent.title })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${p.agent.phone.replace(/\s/g, "")}`, className: "flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                " Call"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${p.agent.email}`, className: "flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                " Email"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-6 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Request more information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "Full name", className: "w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "Email address", className: "w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", placeholder: "Phone number", className: "w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, defaultValue: `Hi, I'm interested in "${p.title}" (Ref: ${p.reference}). Please share more details.`, className: "w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-5 py-3 text-sm font-semibold text-brand-green-foreground hover:bg-brand-green/90 transition", children: [
                "Request Info ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: "By submitting you agree to our Terms of Use and Privacy Policy." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-6 shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Schedule a viewing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Choose a time and we'll confirm within one business day." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mt-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "date", className: "w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "time", className: "w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
                " Book Viewing"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => window.print(), className: "w-full inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-4 w-4" }),
            " Print listing"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "More from Mahalo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-2xl sm:text-3xl font-bold", children: "Similar properties you may like" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "text-sm font-semibold text-primary hover:text-brand-green inline-flex items-center gap-2", children: [
            "View all ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: similar.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-elevated transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/property/$slug", params: {
          slug: s.slug
        }, className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary", children: s.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right text-base font-bold text-primary", children: s.price })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-base font-bold leading-snug", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
              s.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-4 pt-3 border-t border-border text-xs text-muted-foreground", children: [
              s.beds > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bed, { className: "h-3.5 w-3.5" }),
                s.beds
              ] }),
              s.baths > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bath, { className: "h-3.5 w-3.5" }),
                s.baths
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 ml-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { className: "h-3.5 w-3.5" }),
                s.area
              ] })
            ] })
          ] })
        ] }) }, s.slug)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  PropertyPage as component
};
