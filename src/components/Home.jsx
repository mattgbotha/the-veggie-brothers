import { useState } from "react";
import { Clock, Truck } from "lucide-react";
import Header from "./Header";
import ProductList from "./ProductList";

function Home() {
  const [cart, setCart] = useState([]);

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

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-green-50">
      <Header cartCount={cartCount} />

      {/* Hero Section */}
      <section className="px-4 py-8">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Farm Fresh Delivered</h2>
          <p className="text-green-100 mb-4">
            Fresh produce, delivered to your doorstep
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>30 minute delivery</span>
            </div>
            <div className="flex items-center space-x-1">
              <Truck className="w-4 h-4" />
              <span>Free delivery R300+</span>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
          The Veggie Brothers
        </h1>
        <p className="text-gray-600 text-center">
          Fresh produce, delivered to your doorstep
        </p>
      </div>

      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
}

export default Home;
