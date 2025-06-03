import { Plus } from "lucide-react";

function Product({ product, onAddToCart }) {
  const { name, price, image } = product;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="text-center mb-3">
        <div className="text-4xl mb-2">{image}</div>
        <h3 className="font-medium text-gray-900 text-sm">{name}</h3>
      </div>
      <div className="text-center mb-3">
        <span className="text-lg font-bold text-gray-900">R{price}</span>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
      >
        <Plus className="w-4 h-4 mx-1" />
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
