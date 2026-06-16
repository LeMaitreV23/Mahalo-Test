import { Search } from "lucide-react";

const FIELD = "w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none";
const LABEL = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5";

export function SearchBar() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-10 w-full max-w-5xl rounded-2xl bg-white shadow-[0_24px_64px_rgba(15,58,93,0.25)] p-2"
      aria-label="Property search"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.1fr_1.2fr_0.9fr_auto] gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
        <div className="p-4">
          <label className={LABEL} htmlFor="ptype">Property type</label>
          <select id="ptype" className={FIELD} defaultValue="">
            <option value="" disabled>Any type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Land</option>
          </select>
        </div>
        <div className="p-4">
          <label className={LABEL} htmlFor="loc">Location</label>
          <input id="loc" className={FIELD} placeholder="Nairobi, Karen, Kilimani..." />
        </div>
        <div className="p-4">
          <label className={LABEL} htmlFor="price">Price range</label>
          <select id="price" className={FIELD} defaultValue="">
            <option value="" disabled>Any price</option>
            <option>Under KES 10M</option>
            <option>KES 10M – 30M</option>
            <option>KES 30M – 80M</option>
            <option>KES 80M+</option>
          </select>
        </div>
        <div className="p-4">
          <label className={LABEL} htmlFor="bed">Bedrooms</label>
          <select id="bed" className={FIELD} defaultValue="">
            <option value="" disabled>Any</option>
            <option>1+</option><option>2+</option><option>3+</option><option>4+</option><option>5+</option>
          </select>
        </div>
        <div className="p-2 md:p-2 flex">
          <button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
