import { ShoppingCart, Leaf } from "lucide-react";

function Header({ cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-700 tracking-tight leading-tight">
                <span className="text-gray-800">The </span>
                <span className="text-green-600">Veggie </span>
                <span className="text-gray-800">Brothers</span>
              </h1>
              <p className="text-sm text-emerald-700 font-medium italic">
                Farm-fresh produce, delivered to your door.
              </p>
            </div>
          </div>
          <button
            onClick={onCartClick}
            className="relative ml-auto hover:bg-gray-100 rounded-full p-2 transition-colors"
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-0 -right-0 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold cursor-pointer">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
