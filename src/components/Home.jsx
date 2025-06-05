import { useState } from "react";
import { Clock, Truck, BadgeCheck, ShoppingBag, Info } from "lucide-react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import heroImg from "../assets/images/hero-produce.jpg";

function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveItem(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  // Smooth scroll handler for "Shop Now" and Products nav link
  const handleShopNowClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("product-list");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-green-50">
      <Header
        cartCount={cartCount}
        onCartClick={handleToggleCart}
        onProductsClick={handleShopNowClick} // <-- Pass handler here
      />

      {/* Hero Section */}
      <section className="relative pb-0">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-full pt-16 pb-24 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:text-left text-center">
            <div className="flex-1">
              <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-white">
                Farm Fresh Delivered
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Bringing the market to your door—fresh, fast, and local.
              </p>
              <div className="mb-4 flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
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
                  className="inline-flex items-center justify-center border border-white text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-white/10 transition"
                >
                  <Info className="w-5 h-5 mr-2" />
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center mt-8 md:mt-0">
              <div className="w-full max-w-xl aspect-[4/3] bg-white rounded-3xl shadow-2xl border-2 border-white flex items-center justify-center overflow-hidden">
                <img
                  src={heroImg}
                  alt="Fresh produce"
                  className="w-full h-full object-cover"
                />
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

      <ProductList onAddToCart={handleAddToCart} />
      <Cart
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        isOpen={isCartOpen}
        onClose={handleCloseCart}
      />
    </div>
  );
}

export default Home;
