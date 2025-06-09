import { X, Plus, Minus } from "lucide-react";
import React from "react";

const categoryColors = {
  fruit: "bg-yellow-100 text-yellow-700 border-yellow-300",
  vegetable: "bg-green-100 text-green-700 border-green-300",
  herb: "bg-orange-100 text-orange-700 border-orange-300",
};

function formatCategory(cat) {
  if (cat === "fruit") return "Fruit";
  if (cat === "vegetable") return "Vegetable";
  if (cat === "herb") return "Herb";
  return cat;
}

function ProductModal({ product, open, onClose, onAddToCart }) {
  const [quantity, setQuantity] = React.useState(1);
  const backdropRef = React.useRef();

  React.useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!open || !product) return null;

  const catClass =
    categoryColors[product.category] ||
    "bg-gray-100 text-gray-700 border-gray-300";

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative animate-fade-in">
        <button
          className="absolute top-4 right-4 text-green-600 hover:text-green-800"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-44 h-44 object-contain mb-4 rounded-xl"
          />
          <span
            className={`mb-2 px-3 py-1 rounded-full border text-xs font-semibold ${catClass}`}
          >
            {formatCategory(product.category)}
          </span>
          <h3 className="text-2xl font-bold text-green-700 mb-2">
            {product.name}
          </h3>
          <div className="text-lg text-green-600 font-semibold mb-1">
            R{product.price}{" "}
            <span className="text-gray-500 text-sm">{product.unitText}</span>
          </div>
          <p className="text-gray-600 text-center mb-4">
            {product.description}
          </p>
          <div className="flex items-center gap-3 mb-4">
            <button
              className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 border border-green-200"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-lg w-6 text-center text-green-700">
              {quantity}
            </span>
            <button
              className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 border border-green-200"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow transition"
            onClick={() => {
              onAddToCart(product, quantity);
              onClose();
            }}
          >
            <Plus className="w-5 h-5" />
            Add {quantity} to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
