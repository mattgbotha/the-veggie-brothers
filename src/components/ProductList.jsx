import Product from "./Product";
import { Leaf, Search } from "lucide-react";
import avocadoImg from "../assets/images/avocado.png";
import spinachImg from "../assets/images/spinach.png";
import strawberryImg from "../assets/images/strawberries.png";
import tomatoImg from "../assets/images/tomatoes.png";
import bananaImg from "../assets/images/bananas.png";
import peachImg from "../assets/images/peaches.png";
import blueberryImg from "../assets/images/blueberries.png";
import carrotImg from "../assets/images/carrots.png";
import redPepperImg from "../assets/images/red-pepper.png";
import cucumberImg from "../assets/images/cucumber.png";
import basilImg from "../assets/images/basil.png";
import cherryTomatoImg from "../assets/images/cherry-tomato.png";
import greenBeansImg from "../assets/images/beans.png";
import corianderImg from "../assets/images/coriander.png";
import redOnionImg from "../assets/images/red-onion.png";
import lemonImg from "../assets/images/lemon.png";
import broccoliImg from "../assets/images/broccoli.png";
import pineappleImg from "../assets/images/pineapple.png";
import { useState } from "react";

function ProductList({
  onAddToCart,
  category: initialCategory = "all",
  search: initialSearch = "",
}) {
  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState(initialSearch);

  const categories = [
    { key: "all", label: "All" },
    { key: "fruit", label: "Fruits" },
    { key: "veg", label: "Vegetables" },
    { key: "herb", label: "Herbs" },
  ];

  const products = [
    {
      id: 1,
      name: "Avocados",
      price: 20,
      image: avocadoImg,
      unitText: "each",
      description: "Fresh and creamy avocados perfect for salads or toast.",
      category: "fruit",
    },
    {
      id: 2,
      name: "Spinach",
      price: 30,
      image: spinachImg,
      unitText: "per bunch",
      description: "Organic spinach, rich in vitamins and minerals.",
      category: "vegetable",
    },
    {
      id: 3,
      name: "Strawberries",
      price: 90,
      image: strawberryImg,
      unitText: "per kg",
      description: "Juicy and sweet strawberries, perfect for desserts.",
      category: "fruit",
    },
    {
      id: 4,
      name: "Tomatoes",
      price: 25,
      image: tomatoImg,
      unitText: "per kg",
      description: "Fresh tomatoes, ideal for sauces and salads.",
      category: "vegetable",
    },
    {
      id: 5,
      name: "Bananas",
      price: 25,
      image: bananaImg,
      unitText: "per kg",
      description: "Sweet and ripe bananas.",
      category: "fruit",
    },
    {
      id: 6,
      name: "Peaches",
      price: 10,
      image: peachImg,
      unitText: "each",
      description: "Succulent peaches, perfect for snacking.",
      category: "fruit",
    },
    {
      id: 7,
      name: "Blueberries",
      price: 60,
      image: blueberryImg,
      unitText: "per punnet",
      description:
        "Plump, antioxidant-rich blueberries for breakfast or baking.",
      category: "fruit",
    },
    {
      id: 8,
      name: "Baby Carrots",
      price: 20,
      image: carrotImg,
      unitText: "per bag",
      description:
        "Crunchy and sweet baby carrots, great for snacks or salads.",
      category: "vegetable",
    },
    {
      id: 9,
      name: "Red Bell Peppers",
      price: 18,
      image: redPepperImg,
      unitText: "each",
      description:
        "Crisp and vibrant red peppers, perfect for roasting or salads.",
      category: "vegetable",
    },
    {
      id: 10,
      name: "English Cucumbers",
      price: 15,
      image: cucumberImg,
      unitText: "each",
      description: "Long, seedless cucumbers, ideal for fresh salads.",
      category: "vegetable",
    },
    {
      id: 11,
      name: "Fresh Basil",
      price: 20,
      image: basilImg,
      unitText: "per bunch",
      description:
        "Aromatic basil leaves, perfect for pesto and Italian dishes.",
      category: "herb",
    },
    {
      id: 12,
      name: "Cherry Tomatoes",
      price: 35,
      image: cherryTomatoImg,
      unitText: "per punnet",
      description: "Sweet cherry tomatoes, great for snacking or salads.",
      category: "vegetable",
    },
    {
      id: 14,
      name: "Green Beans",
      price: 30,
      image: greenBeansImg,
      unitText: "per 500g",
      description: "Tender green beans, delicious steamed or stir-fried.",
      category: "vegetable",
    },
    {
      id: 15,
      name: "Coriander",
      price: 15,
      image: corianderImg,
      unitText: "per bunch",
      description: "Fresh coriander, essential for curries and salsas.",
      category: "herb",
    },
    {
      id: 16,
      name: "Red Onions",
      price: 12,
      image: redOnionImg,
      unitText: "each",
      description: "Mild and sweet red onions, great raw or cooked.",
      category: "vegetable",
    },
    {
      id: 17,
      name: "Lemons",
      price: 8,
      image: lemonImg,
      unitText: "each",
      description: "Juicy lemons, perfect for zesting or fresh lemonade.",
      category: "fruit",
    },
    {
      id: 18,
      name: "Broccoli",
      price: 35,
      image: broccoliImg,
      unitText: "per head",
      description: "Fresh broccoli, packed with nutrients and flavor.",
      category: "vegetable",
    },
    {
      id: 20,
      name: "Pineapple",
      price: 45,
      image: pineappleImg,
      unitText: "each",
      description: "Sweet and tangy pineapple, great for desserts or juicing.",
      category: "fruit",
    },
  ];

  const normalizedCategory = category === "veg" ? "vegetable" : category;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      normalizedCategory === "all" || product.category === normalizedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="product-list"
      className="scroll-mt-14 bg-gray-50 px-4 py-8 sm:py-12"
    >
      {/* Filters + Heading Row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        {/* Heading center */}
        <div className="flex flex-col items-center md:order-2 flex-1">
          <div className="flex justify-center mb-2">
            <Leaf className="w-8 h-8 text-green-600 animate-bounce" />
          </div>
          <h2 className="text-3xl font-extrabold text-green-600 tracking-tight animate-fade-in-down transition-all duration-700">
            Discover Our Freshest Picks
          </h2>
          <div className="mx-auto mt-2 mb-2 h-1 w-20 rounded bg-green-500"></div>
          <p className="text-base text-gray-500 text-center">
            Hand-selected fruits, veggies, and herbs delivered to your door.
          </p>
          {/* Categories below description, centered on mobile */}
          <div className="flex flex-wrap gap-2 justify-center mt-4 md:hidden">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-150 shadow-sm
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
        </div>
        {/* Categories left on desktop */}
        <div className="hidden md:flex flex-wrap gap-2 md:order-1 ml-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-150 shadow-sm
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
        {/* Search right */}
        <div className="relative w-full md:w-80 md:order-3 md:mr-8">
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
      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-lg py-12">
            No products found.
          </div>
        ) : (
          filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductList;
