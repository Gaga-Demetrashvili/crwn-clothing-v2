/** @format */
import { useContext } from "react";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen, cartCount } = useContext(CartContext);

  const toggleCartIsOpen = () => setCartIsOpen(!cartIsOpen);

  return (
    <CartIconContainer onClick={toggleCartIsOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
