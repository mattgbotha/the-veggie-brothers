import useLocalStorage from "./useLocalStorage";

export default function useCart() {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      const addQty = quantity || 1;
      return existing
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + addQty }
              : item
          )
        : [...prev, { ...product, quantity: addQty }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) return removeItem(productId);
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return {
    cart,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    cartCount,
    setCart,
  };
}
