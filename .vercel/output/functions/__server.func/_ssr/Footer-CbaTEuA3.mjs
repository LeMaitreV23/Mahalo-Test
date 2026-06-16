import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as Phone, X, p as Menu, M as MapPin, F as Facebook, I as Instagram, L as Linkedin } from "../_libs/lucide-react.mjs";
const url$1 = "/__l5e/assets-v1/770a31ea-56c6-43e2-91c8-43055c6de7df/mahalo-logo-white.png";
const logoWhite = {
  url: url$1
};
const url = "/__l5e/assets-v1/d844443c-239d-4ccf-86cc-20fab9cd5e8b/mahalo-logo-blue.png";
const logoBlue = {
  url
};
const NAV = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "#properties" },
  { label: "Property Management", href: "#services" },
  { label: "Property Advisory", href: "#advisory" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#insights" },
  { label: "Contact Us", href: "#contact" }
];
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrolled || open;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,58,93,0.08),0_8px_24px_rgba(15,58,93,0.06)]" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex items-center justify-between h-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2 shrink-0", "aria-label": "Mahalo Properties home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: solid ? logoBlue.url : logoWhite.url,
              alt: "Mahalo Properties Limited",
              width: 200,
              height: 56,
              className: "h-11 w-auto"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8", "aria-label": "Primary", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: item.href,
              className: `text-sm font-medium transition-colors ${solid ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`,
              children: item.label
            },
            item.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+254780",
                className: `inline-flex items-center gap-2 text-sm font-medium transition-colors ${solid ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4", "aria-hidden": "true" }),
                  "Call ...780"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#properties",
                className: "inline-flex items-center justify-center rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-brand-green-foreground transition-all hover:bg-brand-green/90 hover:shadow-md",
                children: "View Properties"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `lg:hidden inline-flex items-center justify-center rounded-md p-2 ${solid ? "text-foreground" : "text-white"}`,
              onClick: () => setOpen((v) => !v),
              "aria-label": open ? "Close menu" : "Open menu",
              "aria-expanded": open,
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container-page py-4 flex flex-col gap-1", "aria-label": "Mobile", children: [
          NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: item.href,
              onClick: () => setOpen(false),
              className: "py-3 text-base font-medium text-foreground hover:text-primary",
              children: item.label
            },
            item.label
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#properties",
              onClick: () => setOpen(false),
              className: "mt-2 inline-flex items-center justify-center rounded-md bg-brand-green px-5 py-3 text-sm font-semibold text-brand-green-foreground",
              children: "View Properties"
            }
          )
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-primary text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 grid gap-12 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite.url, alt: "Mahalo Properties Limited", className: "h-14 w-auto mb-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/75 leading-relaxed", children: "Property sales, land investments, professional management and strategic advisory across Kenya." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-sm font-semibold uppercase tracking-wider mb-4", children: "Quick links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm text-white/80", children: ["Home", "Properties", "Property Management", "Property Advisory", "About Us", "Blog", "Contact"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-brand-green transition-colors", children: l }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-sm font-semibold uppercase tracking-wider mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mt-0.5 text-brand-green shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+254780", className: "hover:text-white", children: "+254 ... 780" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-0.5 text-brand-green shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Westlands, Nairobi, Kenya" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-sm font-semibold uppercase tracking-wider mb-4", children: "Follow us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [
          { Icon: Facebook, label: "Facebook" },
          { Icon: Instagram, label: "Instagram" },
          { Icon: Linkedin, label: "LinkedIn" }
        ].map(({ Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            "aria-label": label,
            className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand-green transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", "aria-hidden": "true" })
          },
          label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Mahalo Properties Limited. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Terms" })
      ] })
    ] }) })
  ] });
}
export {
  Footer as F,
  Header as H
};
