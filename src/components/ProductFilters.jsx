import { Search } from "lucide-react";

function ProductFilters({ category, setCategory, search, setSearch }) {
  const categories = [
    { key: "all", label: "All" },
    { key: "fruit", label: "Fruit" },
    { key: "veg", label: "Veg" },
    { key: "herb", label: "Herb" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pt-8 pb-2" id="product-filters">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`px-4 py-2 rounded-full font-semibold transition shadow-sm
                ${
                  category === cat.key
                    ? "bg-green-600 text-white"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }
              `}
              onClick={() => setCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search produce..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductFilters;
