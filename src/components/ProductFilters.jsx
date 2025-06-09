import { Search } from "lucide-react";

function ProductFilters({ category, setCategory, search, setSearch }) {
  const categories = [
    { key: "all", label: "All" },
    { key: "fruit", label: "Fruit" },
    { key: "veg", label: "Veg" },
    { key: "herb", label: "Herb" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pt-4 pb-2" id="product-filters">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`px-5 py-2 rounded-full font-semibold border transition-all duration-150 shadow-sm
                ${
                  category === cat.key
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-600 shadow-md scale-105"
                    : "bg-white text-green-700 border-green-200 hover:bg-green-50"
                }
              `}
              style={{
                letterSpacing: "0.02em",
                boxShadow:
                  category === cat.key
                    ? "0 2px 8px 0 rgba(16,185,129,0.10)"
                    : undefined,
              }}
              onClick={() => setCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400 w-5 h-5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search for fresh produce..."
            className="w-full pl-12 pr-4 py-2 rounded-full border border-green-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder:text-green-400 shadow-sm transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductFilters;
