import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Bed, Bath, Maximize, MapPin, Calendar, Car, Building2, Ruler, Hash,
  CheckCircle2, ChevronRight, Phone, Mail, Share2, Heart, Printer,
  ShieldCheck, ArrowRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getProperty, PROPERTIES, type Property } from "@/lib/properties";

export const Route = createFileRoute("/property/$slug")({
  loader: ({ params }): { property: Property } => {
    const property = getProperty(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.property;
    if (!p) return { meta: [{ title: "Property — Mahalo Properties Limited" }] };
    const title = `${p.title} in ${p.location} — ${p.price} | Mahalo Properties`;
    const description = `${p.type} ${p.status.toLowerCase()} in ${p.location}. ${p.beds > 0 ? `${p.beds} beds, ${p.baths} baths, ` : ""}${p.area}. ${p.description[0].slice(0, 110)}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/property/${p.slug}` },
        { property: "og:image", content: p.img },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.img },
      ],
      links: [{ rel: "canonical", href: `/property/${p.slug}` }],
      scripts: [
        {
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
              addressCountry: "KE",
            },
            numberOfRooms: p.beds || undefined,
            numberOfBathroomsTotal: p.baths || undefined,
            floorSize: { "@type": "QuantitativeValue", value: p.areaSqm, unitCode: "MTK" },
            offers: {
              "@type": "Offer",
              price: p.priceNumber,
              priceCurrency: "KES",
              availability: "https://schema.org/InStock",
            },
          }),
        },
      ],
    };
  },
  component: PropertyPage,
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <Link to="/" className="mt-6 inline-block text-primary font-semibold">Back to home</Link>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-3xl font-bold">Property not found</h1>
        <p className="mt-3 text-muted-foreground">The listing you're looking for is no longer available.</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
          Browse all properties
        </Link>
      </div>
    </div>
  ),
});

function PropertyPage() {
  const { property: p } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const similar = PROPERTIES.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-24 bg-surface">
        {/* Breadcrumb */}
        <div className="container-page py-5">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <a href="/#properties" className="hover:text-primary">Properties</a>
            <ChevronRight className="h-3 w-3" />
            <span className="hover:text-primary">{p.status}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="hover:text-primary">{p.type}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="hover:text-primary">{p.county}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium truncate max-w-[200px]">{p.address}</span>
          </nav>
        </div>

        {/* Title */}
        <header className="container-page pb-6">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>{p.type}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span>{p.status}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span>Ref: {p.reference}</span>
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
                {p.title}
              </h1>
              <p className="mt-3 inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-brand-green" />
                {p.address}, {p.neighbourhood}, {p.county}
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Asking price</div>
              <div className="mt-1 text-3xl sm:text-4xl font-bold text-primary">{p.price}</div>
              {p.pricePerSqm && (
                <div className="mt-1 text-xs text-muted-foreground">{p.pricePerSqm} / m²</div>
              )}
            </div>
          </div>
        </header>

        {/* Gallery */}
        <section className="container-page pb-10">
          <div className="grid gap-3 lg:grid-cols-[1fr_360px]">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted shadow-card">
              <img
                src={p.gallery[active]}
                alt={`${p.title} — photo ${active + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {p.badge && (
                <span className="absolute top-5 left-5 inline-flex items-center rounded-md bg-brand-green px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-green-foreground shadow-md">
                  {p.badge}
                </span>
              )}
              <div className="absolute top-5 right-5 flex gap-2">
                <button className="inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur px-3 py-2 text-xs font-semibold text-foreground shadow-soft hover:bg-white">
                  <Heart className="h-3.5 w-3.5" /> Save
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur px-3 py-2 text-xs font-semibold text-foreground shadow-soft hover:bg-white">
                  <Share2 className="h-3.5 w-3.5" /> Share
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3">
              {p.gallery.map((g: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-muted transition ring-offset-2 ${
                    active === i ? "ring-2 ring-primary" : "hover:opacity-90"
                  }`}
                  aria-label={`View photo ${i + 1}`}
                >
                  <img src={g} alt="" className="absolute inset-0 h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="container-page pb-20 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-12">
            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft">
              {[
                { Icon: Bed, label: "Bedrooms", value: p.beds > 0 ? p.beds : "—" },
                { Icon: Bath, label: "Bathrooms", value: p.baths > 0 ? p.baths : "—" },
                { Icon: Maximize, label: "Area", value: p.area },
                { Icon: Car, label: "Parking", value: p.parking ?? "—" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="text-base font-bold text-foreground">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <section aria-labelledby="overview">
              <h2 id="overview" className="text-2xl font-bold">Property overview</h2>
              <div className="mt-5 space-y-4 text-foreground/85 leading-relaxed">
                {p.description.map((para: string, i: number) => (<p key={i}>{para}</p>))}
              </div>
            </section>

            <section aria-labelledby="details">
              <h2 id="details" className="text-2xl font-bold">Property details</h2>
              <div className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-1 rounded-2xl border border-border bg-white p-6 shadow-soft">
                {([
                  ["Reference", p.reference, Hash],
                  ["Property type", p.type, Building2],
                  ["Status", p.status, ShieldCheck],
                  ["Price", p.price, undefined],
                  ["Price / m²", p.pricePerSqm, undefined],
                  ["Bedrooms", p.beds > 0 ? p.beds : undefined, Bed],
                  ["Bathrooms", p.baths > 0 ? p.baths : undefined, Bath],
                  ["Floor area", p.area, Maximize],
                  ["Lot size", p.lotSize, Ruler],
                  ["Year built", p.yearBuilt, Calendar],
                  ["Year renovated", p.yearRenovated, Calendar],
                  ["Floors", p.floors, Building2],
                  ["Parking", p.parking, Car],
                  ["Furnished", p.furnished, undefined],
                  ["Listed on", p.listedOn, Calendar],
                ] as const)
                  .filter(([, v]) => v !== undefined && v !== null && v !== "")
                  .map(([label, value, Icon]) => (
                    <div key={label} className="flex items-center justify-between gap-4 border-b border-border/60 last:border-0 py-2.5">
                      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        {Icon ? <Icon className="h-4 w-4 text-primary/70" /> : null}
                        {label}
                      </span>
                      <span className="text-sm font-semibold text-foreground">{String(value)}</span>
                    </div>
                  ))}
              </div>
            </section>

            <section aria-labelledby="amenities">
              <h2 id="amenities" className="text-2xl font-bold">Amenities & features</h2>
              <div className="mt-5 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Amenities</h3>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {p.amenities.map((a: string) => (
                      <li key={a} className="inline-flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-green shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Features</h3>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {p.features.map((f: string) => (
                      <li key={f} className="inline-flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-green shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="location">
              <h2 id="location" className="text-2xl font-bold">Location & neighbourhood</h2>
              <p className="mt-3 text-muted-foreground">{p.address}, {p.neighbourhood}, {p.county}</p>
              <div className="mt-5 aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-soft">
                <iframe
                  title={`Map of ${p.title}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${p.address}, ${p.neighbourhood}, Kenya`)}&output=embed`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {([
                  ["Schools", p.nearby.schools],
                  ["Hospitals", p.nearby.hospitals],
                  ["Shopping", p.nearby.shopping],
                ] as const).map(([label, items]) => (
                  <div key={label} className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary">{label}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                      {items.map((x: string) => <li key={x}>• {x}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 self-start space-y-6">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  MP
                </div>
                <div>
                  <div className="font-bold text-foreground">{p.agent.name}</div>
                  <div className="text-xs text-muted-foreground">{p.agent.title}</div>
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <a href={`tel:${p.agent.phone.replace(/\s/g, "")}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a href={`mailto:${p.agent.email}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-3">
                <h3 className="text-sm font-bold text-foreground">Request more information</h3>
                <input required placeholder="Full name" className="w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                <input required type="email" placeholder="Email address" className="w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                <input required type="tel" placeholder="Phone number" className="w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                <textarea rows={4} defaultValue={`Hi, I'm interested in "${p.title}" (Ref: ${p.reference}). Please share more details.`} className="w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-5 py-3 text-sm font-semibold text-brand-green-foreground hover:bg-brand-green/90 transition">
                  Request Info <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  By submitting you agree to our Terms of Use and Privacy Policy.
                </p>
              </form>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h3 className="text-sm font-bold text-foreground">Schedule a viewing</h3>
              <p className="mt-1 text-xs text-muted-foreground">Choose a time and we'll confirm within one business day.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-3">
                <input required type="date" className="w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                <input required type="time" className="w-full rounded-md border border-input bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">
                  <Calendar className="h-4 w-4" /> Book Viewing
                </button>
              </form>
            </div>

            <button onClick={() => window.print()} className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition">
              <Printer className="h-4 w-4" /> Print listing
            </button>
          </aside>
        </section>

        {/* Similar */}
        <section className="bg-background border-t border-border">
          <div className="container-page py-16">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <span className="eyebrow">More from Mahalo</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold">Similar properties you may like</h2>
              </div>
              <Link to="/" className="text-sm font-semibold text-primary hover:text-brand-green inline-flex items-center gap-2">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {similar.map((s) => (
                <article key={s.slug} className="group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-elevated transition-all">
                  <Link to="/property/$slug" params={{ slug: s.slug }} className="block">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">{s.type}</span>
                        <div className="text-right text-base font-bold text-primary">{s.price}</div>
                      </div>
                      <h3 className="mt-3 text-base font-bold leading-snug">{s.title}</h3>
                      <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />{s.location}
                      </p>
                      <div className="mt-4 flex items-center gap-4 pt-3 border-t border-border text-xs text-muted-foreground">
                        {s.beds > 0 && <span className="inline-flex items-center gap-1"><Bed className="h-3.5 w-3.5" />{s.beds}</span>}
                        {s.baths > 0 && <span className="inline-flex items-center gap-1"><Bath className="h-3.5 w-3.5" />{s.baths}</span>}
                        <span className="inline-flex items-center gap-1 ml-auto"><Maximize className="h-3.5 w-3.5" />{s.area}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
