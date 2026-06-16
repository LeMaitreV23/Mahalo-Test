import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import logoWhite from "@/assets/mahalo-logo-white.asset.json";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-page py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <img src={logoWhite.url} alt="Mahalo Properties Limited" className="h-14 w-auto mb-5" />
          <p className="text-sm text-white/75 leading-relaxed">
            Property sales, land investments, professional management and strategic advisory across Kenya.
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick links</h3>
          <ul className="space-y-3 text-sm text-white/80">
            {["Home", "Properties", "Property Management", "Property Advisory", "About Us", "Blog", "Contact"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-brand-green transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-brand-green shrink-0" aria-hidden="true" />
              <a href="tel:+254780" className="hover:text-white">+254 ... 780</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-brand-green shrink-0" aria-hidden="true" />
              <span>Westlands, Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Follow us</h3>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand-green transition-colors"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Mahalo Properties Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
