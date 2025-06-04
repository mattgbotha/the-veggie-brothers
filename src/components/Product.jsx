import { Plus } from "lucide-react";

function Product({ product, onAddToCart }) {
  const { name, price, image, unitText, description } = product;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 group">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-contain rounded-xl mb-3 bg-white group-hover:scale-110 transition-transform duration-200"
      />
      <h3 className="text-lg font-semibold text-gray-900 text-center">
        {name}
      </h3>
      <p className="text-green-600 font-bold text-xl mt-1">R{price}</p>
      <p className="text-gray-500 text-sm mb-1">{unitText && `${unitText}`}</p>
      {description && (
        <p className="text-gray-400 text-xs text-center mb-3">{description}</p>
      )}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors shadow"
      >
        <Plus className="w-5 h-5" />
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
