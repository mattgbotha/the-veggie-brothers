import Product from "./Product";
import avocadoImg from "../assets/images/avocado.png";
import spinachImg from "../assets/images/spinach.png";
import strawberryImg from "../assets/images/strawberries.png";
import tomatoImg from "../assets/images/tomatoes.png";
import bananaImg from "../assets/images/bananas.png";
import peachImg from "../assets/images/peaches.png";

function ProductList({ onAddToCart }) {
  // Sample product data
  const products = [
    { id: 1, name: "Ripe Avocados", price: 20, image: avocadoImg },
    { id: 2, name: "Fresh Spinach", price: 30, image: spinachImg },
    { id: 3, name: "Sweet Strawberries", price: 90, image: strawberryImg },
    { id: 4, name: "Roma Tomatoes", price: 5, image: tomatoImg },
    { id: 5, name: "Organic Bananas", price: 5, image: bananaImg },
    { id: 6, name: "Juicy Peaches", price: 10, image: peachImg },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Fresh Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
