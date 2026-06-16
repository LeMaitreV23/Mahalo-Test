import {
  Building2, Home, LineChart, CheckCircle2, MapPin, Bed, Bath, Maximize,
  ArrowRight, Calendar, ShieldCheck, Users, Award, Briefcase,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SearchBar } from "./SearchBar";
import { PROPERTIES } from "@/lib/properties";
import hero from "@/assets/hero-luxury-home.jpg";
import why from "@/assets/why-choose.jpg";
import tour from "@/assets/tour-property.jpg";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16">
      <img
        src={hero}
        alt=""
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

      <div className="container-page relative">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            Premium real estate in Kenya
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
            Find property with confidence
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
            Property sales, land investments, property management, and advisory services
            tailored to help you make smarter real estate decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#properties"
              className="inline-flex items-center gap-2 rounded-md bg-brand-green px-6 py-3.5 text-sm font-semibold text-brand-green-foreground hover:bg-brand-green/90 transition-all"
            >
              View Properties <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-all"
            >
              Schedule Consultation
            </a>
          </div>
        </div>

        <SearchBar />
      </div>
    </section>
  );
}

const STATS = [
  { value: "350+", label: "Properties listed", Icon: Home },
  { value: "180+", label: "Properties managed", Icon: Building2 },
  { value: "12+", label: "Years of experience", Icon: Award },
  { value: "1,200+", label: "Happy clients", Icon: Users },
];

export function TrustStats() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-page py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map(({ value, label, Icon }) => (
          <div key={label} className="flex items-center gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary shrink-0">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-3xl font-bold text-primary leading-none">{value}</div>
              <div className="mt-1.5 text-sm text-muted-foreground">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  {
    Icon: Home,
    title: "Property sales",
    body: "Help clients buy and sell residential and commercial properties with confidence.",
  },
  {
    Icon: Building2,
    title: "Property management",
    body: "Professional management services for landlords and property investors.",
  },
  {
    Icon: LineChart,
    title: "Property advisory",
    body: "Expert guidance for property investments, valuations, and market decisions.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Our services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">What we do</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A full-service real estate partner for buyers, sellers, landlords and investors.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-card hover:-translate-y-1"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-brand-green transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 bg-surface">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Listings</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Featured properties</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              A curated selection of homes, apartments and investment opportunities.
            </p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-green">
            View all properties <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((p) => (
            <article
              key={p.slug}
              className="group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <Link to="/property/$slug" params={{ slug: p.slug }} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 inline-flex items-center rounded-md bg-brand-green px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-green-foreground shadow-soft">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {p.type}
                    </span>
                    <div className="text-right text-lg font-bold text-primary">{p.price}</div>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {p.location}
                  </p>
                  <div className="mt-5 flex items-center gap-5 pt-4 border-t border-border text-sm text-muted-foreground">
                    {p.beds > 0 && (
                      <span className="inline-flex items-center gap-1.5"><Bed className="h-4 w-4" />{p.beds}</span>
                    )}
                    {p.baths > 0 && (
                      <span className="inline-flex items-center gap-1.5"><Bath className="h-4 w-4" />{p.baths}</span>
                    )}
                    <span className="inline-flex items-center gap-1.5 ml-auto"><Maximize className="h-4 w-4" />{p.area}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors">
            View all properties <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  { title: "Market expertise", body: "Deep knowledge of Nairobi and Kenyan property markets." },
  { title: "Trusted advisory services", body: "Independent guidance you can rely on for major decisions." },
  { title: "Professional property management", body: "End-to-end care for landlords and investors." },
  { title: "Client-focused solutions", body: "Tailored strategies aligned with your goals." },
];

export function WhyChoose() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-3xl overflow-hidden shadow-card">
          <img src={why} alt="Modern Mahalo residential development" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
        </div>
        <div>
          <span className="eyebrow">Why us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Why choose Mahalo Properties</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            We combine local expertise with a disciplined, client-first approach — so every transaction
            feels considered, transparent and built for the long term.
          </p>
          <ul className="mt-10 space-y-6">
            {BENEFITS.map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold">{b.title}</h3>
                  <p className="mt-1 text-muted-foreground">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AdvisoryBanner() {
  return (
    <section id="advisory" className="relative py-24 bg-primary text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(circle at 80% 60%, rgba(82,175,76,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 56px 56px",
        }}
      />
      <div className="container-page relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
            <Briefcase className="h-3.5 w-3.5" />
            Advisory
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Strategic property advisory for smarter investments
          </h2>
          <p className="mt-5 text-white/80 text-lg max-w-2xl leading-relaxed">
            From investment planning to valuations, due diligence and market insights — we help you
            evaluate every opportunity with clarity, structure and Kenya-specific market intelligence.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-green px-7 py-3.5 text-sm font-semibold text-brand-green-foreground hover:bg-brand-green/90 transition-colors"
          >
            Book an Advisory Session <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            { Icon: LineChart, t: "Investment planning" },
            { Icon: ShieldCheck, t: "Due diligence" },
            { Icon: Award, t: "Property valuations" },
            { Icon: Briefcase, t: "Market insights" },
          ].map(({ Icon, t }) => (
            <li key={t} className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm">
              <Icon className="h-6 w-6 text-brand-green" aria-hidden="true" />
              <div className="mt-4 text-base font-semibold text-white">{t}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const CATEGORIES = [
  { img: p1, label: "Residential properties" },
  { img: p6, label: "Commercial properties" },
  { img: p5, label: "Land for sale" },
  { img: p4, label: "Investment opportunities" },
];

export function Categories() {
  return (
    <section className="py-24 bg-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Browse</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Property categories</h2>
          <p className="mt-4 text-muted-foreground text-lg">Explore the right kind of property for your goals.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <a
              key={c.label}
              href="#"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all"
            >
              <img src={c.img} alt={c.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-white text-lg font-bold leading-snug">{c.label}</h3>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white/90 group-hover:text-brand-green transition-colors">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { quote: "Mahalo helped us secure a fantastic family home in Karen. Professional, patient and deeply knowledgeable.", name: "Aisha M.", role: "Homeowner" },
  { quote: "Their property management has freed up my time entirely. Reporting is clear and tenants are well cared for.", name: "James K.", role: "Landlord, Westlands" },
  { quote: "The advisory session reshaped how we approach property as an asset class. Exceptional clarity.", name: "Wanjiru N.", role: "Investor" },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">What our clients say</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white border border-border p-8 shadow-soft">
              <div className="text-brand-green text-4xl leading-none font-serif">“</div>
              <blockquote className="mt-2 text-foreground leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-bold text-primary">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ScheduleTour() {
  const input = "w-full rounded-md border border-input bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition";
  const label = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5";
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] shadow-card">
          <img src={tour} alt="Schedule a property viewing" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <Calendar className="h-7 w-7 text-brand-green" aria-hidden="true" />
            <p className="mt-3 text-lg font-semibold leading-snug max-w-sm">
              Tour properties in person with an experienced Mahalo advisor.
            </p>
          </div>
        </div>

        <div>
          <span className="eyebrow">Book a viewing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Schedule a property viewing</h2>
          <p className="mt-3 text-muted-foreground">Share a few details and our team will confirm your slot within one business day.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className={label}>Full name</label>
              <input id="name" required className={input} placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="phone" className={label}>Phone number</label>
              <input id="phone" type="tel" required className={input} placeholder="+254 7..." />
            </div>
            <div>
              <label htmlFor="email" className={label}>Email address</label>
              <input id="email" type="email" required className={input} placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="date" className={label}>Preferred date</label>
              <input id="date" type="date" required className={input} />
            </div>
            <div>
              <label htmlFor="time" className={label}>Preferred time</label>
              <input id="time" type="time" required className={input} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="poi" className={label}>Property of interest</label>
              <input id="poi" className={input} placeholder="Listing title or area" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="msg" className={label}>Message</label>
              <textarea id="msg" rows={4} className={input} placeholder="Tell us a bit about what you're looking for..." />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors">
                Schedule Viewing <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const INSIGHTS = [
  { img: p3, tag: "Investing", title: "Best areas to invest in Kenya in 2026", excerpt: "A practical look at the neighbourhoods showing the strongest growth and yield potential." },
  { img: p2, tag: "Management", title: "Property management tips for landlords", excerpt: "How to protect your asset, retain tenants and run a profitable rental portfolio." },
  { img: p5, tag: "Land", title: "Understanding land ownership in Kenya", excerpt: "Title deeds, search processes and the legal checks every buyer should know." },
];

export function Insights() {
  return (
    <section id="insights" className="py-24 bg-surface">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Insights</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Property insights and market updates</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:text-brand-green inline-flex items-center gap-2">
            All articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {INSIGHTS.map((i) => (
            <article key={i.title} className="group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-card transition-all">
              <a href="#" className="block">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={i.img} alt={i.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-brand-green/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-green">{i.tag}</span>
                  <h3 className="mt-4 text-lg font-bold leading-snug group-hover:text-primary transition-colors">{i.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-brand-green">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative py-24 bg-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-green/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />
      </div>
      <div className="container-page relative text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto">
          Ready to find your next property?
        </h2>
        <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">
          Speak with our team today and discover opportunities that match your goals.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#properties" className="inline-flex items-center gap-2 rounded-md bg-brand-green px-7 py-3.5 text-sm font-semibold text-brand-green-foreground hover:bg-brand-green/90 transition-colors">
            View Properties <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
