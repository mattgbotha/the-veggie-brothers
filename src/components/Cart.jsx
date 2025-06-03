import { X, Plus, Minus, ShoppingBag } from "lucide-react";

function Cart({ cart, onUpdateQuantity, onRemoveItem, isOpen, onClose }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div>
      <div></div>
    </div>
  );
}

export default Cart;
