import { useState, useRef } from "react";
import { Clock, Truck, BadgeCheck, ShoppingBag, Info } from "lucide-react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import UnderConstruction from "./UnderConstruction";
import ProductFilters from "./ProductFilters";

function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const headerRef = useRef();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      return existing
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) return handleRemoveItem(productId);
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleShopNowClick = (e) => {
    e.preventDefault();
    document
      .getElementById("product-list")
      ?.scrollIntoView({ behavior: "smooth" });
    headerRef.current?.setActiveNav("products");
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    headerRef.current?.setActiveNav("home");
  };

  const handleShowUnderConstruction = (e) => {
    e.preventDefault();
    setShowUnderConstruction(true);
  };

  if (showUnderConstruction) return <UnderConstruction />;

  return (
    <div className="min-h-screen bg-green-50">
      <Header
        ref={headerRef}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen((open) => !open)}
        onProductsClick={handleShopNowClick}
        onHomeClick={handleHomeClick}
        onHowItWorksClick={handleShowUnderConstruction}
        onAboutUsClick={handleShowUnderConstruction}
        onContactClick={handleShowUnderConstruction}
      />

      {/* Hero Section */}
      <section className="relative pb-0">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-full pt-16 pb-24 px-4">
          <div className="max-w-7xl mx-auto flex flex-col items-center md:text-left text-center">
            <div className="flex-1">
              <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-white">
                Farm Fresh Delivered
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Bringing the market to your door—fresh, fast, and local.
              </p>
              <div className="mb-6 flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                <span className="inline-flex items-center bg-green-100 text-green-800 font-semibold px-4 py-1 rounded-full text-sm shadow">
                  <BadgeCheck className="w-4 h-4 mr-2" />
                  100% Fresh Guarantee
                </span>
                <span className="inline-flex items-center bg-green-100 text-green-800 font-semibold px-4 py-1 rounded-full text-sm shadow">
                  <Truck className="w-4 h-4 mr-2" />
                  Free Delivery Over R300
                </span>
                <span className="inline-flex items-center bg-green-100 text-green-800 font-semibold px-4 py-1 rounded-full text-sm shadow">
                  <Clock className="w-4 h-4 mr-2" />
                  Under 60 Minutes
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#product-list"
                  onClick={handleShopNowClick}
                  className="inline-flex items-center justify-center bg-white text-green-700 font-bold px-8 py-3 rounded-lg shadow hover:bg-green-100 transition"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                </a>
                <a
                  href="#how-it-works"
                  onClick={handleShowUnderConstruction}
                  className="inline-flex items-center justify-center border border-white text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-white/10 transition"
                >
                  <Info className="w-5 h-5 mr-2" />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* SVG Wave */}
        <svg
          className="absolute left-0 bottom-0 w-full h-16 md:h-24"
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#F9FAFB"
          />
        </svg>
      </section>

      <ProductFilters
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />

      <ProductList
        onAddToCart={handleAddToCart}
        category={category}
        search={search}
      />

      <Cart
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}

export default Home;
