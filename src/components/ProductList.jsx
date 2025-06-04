import Product from "./Product";
import avocadoImg from "../assets/images/avocado.png";
import spinachImg from "../assets/images/spinach.png";
import strawberryImg from "../assets/images/strawberries.png";
import tomatoImg from "../assets/images/tomatoes.png";
import bananaImg from "../assets/images/bananas.png";
import peachImg from "../assets/images/peaches.png";
import blueberryImg from "../assets/images/blueberries.png";
import carrotImg from "../assets/images/carrots.png";
import redPepperImg from "../assets/images/red-pepper.png";
import cucumberImg from "../assets/images/cucumber.png";
import basilImg from "../assets/images/basil.png";
import cherryTomatoImg from "../assets/images/cherry-tomato.png";
import greenBeansImg from "../assets/images/beans.png";
import corianderImg from "../assets/images/coriander.png";
import redOnionImg from "../assets/images/red-onion.png";
import lemonImg from "../assets/images/lemon.png";
import broccoliImg from "../assets/images/broccoli.png";
import pineappleImg from "../assets/images/pineapple.png";
import { Leaf } from "lucide-react"; // Decorative icon

function ProductList({ onAddToCart }) {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Avocados",
      price: 20,
      image: avocadoImg,
      unitText: "each",
      description: "Fresh and creamy avocados perfect for salads or toast.",
    },
    {
      id: 2,
      name: "Spinach",
      price: 30,
      image: spinachImg,
      unitText: "per bunch",
      description: "Organic spinach, rich in vitamins and minerals.",
    },
    {
      id: 3,
      name: "Strawberries",
      price: 90,
      image: strawberryImg,
      unitText: "per kg",
      description: "Juicy and sweet strawberries, perfect for desserts.",
    },
    {
      id: 4,
      name: "Tomatoes",
      price: 25,
      image: tomatoImg,
      unitText: "per kg",
      description: "Fresh tomatoes, ideal for sauces and salads.",
    },
    {
      id: 5,
      name: "Bananas",
      price: 25,
      image: bananaImg,
      unitText: "per kg",
      description: "Sweet and ripe bananas.",
    },
    {
      id: 6,
      name: "Peaches",
      price: 10,
      image: peachImg,
      unitText: "each",
      description: "Succulent peaches, perfect for snacking.",
    },
    {
      id: 7,
      name: "Blueberries",
      price: 60,
      image: blueberryImg,
      unitText: "per punnet",
      description:
        "Plump, antioxidant-rich blueberries for breakfast or baking.",
    },
    {
      id: 8,
      name: "Baby Carrots",
      price: 20,
      image: carrotImg,
      unitText: "per bag",
      description:
        "Crunchy and sweet baby carrots, great for snacks or salads.",
    },
    {
      id: 9,
      name: "Red Bell Peppers",
      price: 18,
      image: redPepperImg,
      unitText: "each",
      description:
        "Crisp and vibrant red peppers, perfect for roasting or salads.",
    },
    {
      id: 10,
      name: "English Cucumbers",
      price: 15,
      image: cucumberImg,
      unitText: "each",
      description: "Long, seedless cucumbers, ideal for fresh salads.",
    },
    {
      id: 11,
      name: "Fresh Basil",
      price: 20,
      image: basilImg,
      unitText: "per bunch",
      description:
        "Aromatic basil leaves, perfect for pesto and Italian dishes.",
    },
    {
      id: 12,
      name: "Cherry Tomatoes",
      price: 35,
      image: cherryTomatoImg,
      unitText: "per punnet",
      description: "Sweet cherry tomatoes, great for snacking or salads.",
    },
    {
      id: 14,
      name: "Green Beans",
      price: 30,
      image: greenBeansImg,
      unitText: "per 500g",
      description: "Tender green beans, delicious steamed or stir-fried.",
    },
    {
      id: 15,
      name: "Coriander",
      price: 15,
      image: corianderImg,
      unitText: "per bunch",
      description: "Fresh coriander, essential for curries and salsas.",
    },
    {
      id: 16,
      name: "Red Onions",
      price: 12,
      image: redOnionImg,
      unitText: "each",
      description: "Mild and sweet red onions, great raw or cooked.",
    },
    {
      id: 17,
      name: "Lemons",
      price: 8,
      image: lemonImg,
      unitText: "each",
      description: "Juicy lemons, perfect for zesting or fresh lemonade.",
    },
    {
      id: 18,
      name: "Broccoli",
      price: 35,
      image: broccoliImg,
      unitText: "per head",
      description: "Fresh broccoli, packed with nutrients and flavor.",
    },
    {
      id: 20,
      name: "Pineapple",
      price: 45,
      image: pineappleImg,
      unitText: "each",
      description: "Sweet and tangy pineapple, great for desserts or juicing.",
    },
  ];

  return (
    <section
      id="product-list"
      className="bg-gray-50 px-8 py-8 sm:py-12 border-t border-gray-200"
    >
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-2">
          <Leaf className="w-8 h-8 text-green-600 animate-bounce" />
        </div>
        <h2 className="text-3xl font-extrabold text-green-600 tracking-tight animate-fade-in-down transition-all duration-700">
          Discover Our Freshest Picks
        </h2>
        <div className="mx-auto mt-2 mb-2 h-1 w-20 rounded bg-green-500"></div>
        <p className="text-base text-gray-500">
          Hand-selected fruits, veggies, and herbs delivered to your door.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
