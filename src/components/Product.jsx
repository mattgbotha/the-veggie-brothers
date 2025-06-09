import { Plus } from "lucide-react";

function Product({ product, onAddToCart, onView }) {
  return (
    <div
      className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
      onClick={() => onView && onView(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-contain mb-2"
      />
      <h4 className="font-bold text-green-700">{product.name}</h4>
      <div className="text-green-600 font-semibold mb-1">
        R{product.price}{" "}
        <span className="text-gray-500 text-xs">{product.unitText}</span>
      </div>
      <button
        className="mt-2 px-4 py-1 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 inline-flex items-center gap-2 cursor-pointer transition-colors shadow-sm"
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(product);
        }}
      >
        <Plus className="w-5 h-5" />
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
