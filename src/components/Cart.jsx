import { useEffect, useState } from "react";
import { X, Plus, Minus, ShoppingBag, Truck, CreditCard } from "lucide-react";

function Cart({ cart, onUpdateQuantity, onRemoveItem, isOpen, onClose }) {
  const [showPanel, setShowPanel] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  // Handle mounting/unmounting
  useEffect(() => {
    if (isOpen) {
      setShowPanel(true);
    } else {
      setAnimateIn(false);
      const timeout = setTimeout(() => setShowPanel(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Handle slide-in after mount
  useEffect(() => {
    if (showPanel && isOpen) {
      requestAnimationFrame(() => setAnimateIn(true));
    }
  }, [showPanel, isOpen]);

  if (!showPanel) return null;

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        onClick={onClose}
      />
      <div
        className={`
          absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col
          transition-transform duration-300
          ${animateIn ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <span>Your Cart</span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="flex-1 flex flex-col">
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-500 mb-6">
                Add some items to get started!
              </p>
              <button
                onClick={onClose}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-contain rounded-lg bg-white"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {item.name}
                      </h4>
                      <p className="text-green-600 font-semibold text-sm">
                        R{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        <Minus className="w-3 h-3 text-gray-600" />
                      </button>
                      <span className="w-6 text-center font-medium text-gray-900 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3 text-white" />
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors ml-2 cursor-pointer"
                      >
                        <X className="w-3 h-3 text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">Total</span>
                  <span className="text-xl font-bold text-green-600">
                    R{totalPrice.toFixed(2)}
                  </span>
                </div>
                {totalPrice >= 300 && (
                  <div className="text-green-700 text-xs mb-2 flex items-center space-x-1">
                    <Truck className="w-4 h-4" />
                    <span>Free delivery unlocked!</span>
                  </div>
                )}
                <button
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold text-lg transition-colors mt-4 shadow-md cursor-pointer"
                  onClick={() => alert("Checkout coming soon!")}
                >
                  <CreditCard className="w-5 h-5" />
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
