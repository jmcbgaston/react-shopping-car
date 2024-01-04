import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import "./ShoppingCart.css";

export default function ShoppingCart({ itemsInCart }) {
  return (
    <div className="shopping-cart">
      <ShoppingCartIcon className="shopping-cart-icon" />
      <div>({itemsInCart})</div>
    </div>
  );
}
