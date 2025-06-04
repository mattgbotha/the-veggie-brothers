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
    {
      id: 1,
      name: "Ripe Avocados",
      price: 20,
      image: avocadoImg,
      unitText: "each",
      description: "Fresh and creamy avocados perfect for salads or toast.",
    },
    {
      id: 2,
      name: "Fresh Spinach",
      price: 30,
      image: spinachImg,
      unitText: "per bunch",
      description: "Organic spinach, rich in vitamins and minerals.",
    },
    {
      id: 3,
      name: "Sweet Strawberries",
      price: 90,
      image: strawberryImg,
      unitText: "per kg",
      description: "Juicy and sweet strawberries, perfect for desserts.",
    },
    {
      id: 4,
      name: "Roma Tomatoes",
      price: 25,
      image: tomatoImg,
      unitText: "per kg",
      description: "Fresh Roma tomatoes, ideal for sauces and salads.",
    },
    {
      id: 5,
      name: "Organic Bananas",
      price: 25,
      image: bananaImg,
      unitText: "per kg",
      description: "Sweet and ripe organic bananas.",
    },
    {
      id: 6,
      name: "Cling Peaches",
      price: 10,
      image: peachImg,
      unitText: "each",
      description: "Succulent peaches, perfect for snacking.",
    },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Fresh Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
