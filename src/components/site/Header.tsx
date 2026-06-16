import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logoWhite from "@/assets/mahalo-logo-white.asset.json";
import logoBlue from "@/assets/mahalo-logo-blue.asset.json";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "#properties" },
  { label: "Property Management", href: "#services" },
  { label: "Property Advisory", href: "#advisory" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#insights" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,58,93,0.08),0_8px_24px_rgba(15,58,93,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Mahalo Properties home">
          <img
            src={solid ? logoBlue.url : logoWhite.url}
            alt="Mahalo Properties Limited"
            width={200}
            height={56}
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? "text-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+254780"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              solid ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call ...780
          </a>
          <a
            href="#properties"
            className="inline-flex items-center justify-center rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-brand-green-foreground transition-all hover:bg-brand-green/90 hover:shadow-md"
          >
            View Properties
          </a>
        </div>

        <button
          className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 ${
            solid ? "text-foreground" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#properties"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-green px-5 py-3 text-sm font-semibold text-brand-green-foreground"
            >
              View Properties
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
