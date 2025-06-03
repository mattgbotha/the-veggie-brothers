import { ShoppingCart, Leaf, LucideAxis3D } from "lucide-react";

function Header({ cartCount }) {
  return (
    <header className="bg-white shadow-md">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              The Veggie Brothers
            </h1>
            <p className="text-xs text-gray-600">Fresh • Local • Delivered</p>
          </div>
          <div className="relative">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
