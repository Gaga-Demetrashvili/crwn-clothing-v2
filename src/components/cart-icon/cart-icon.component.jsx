/** @format */
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen } = useContext(CartContext);

  const toggleCartIsOpen = () => setCartIsOpen(!cartIsOpen);

  return (
    <div onClick={toggleCartIsOpen} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
