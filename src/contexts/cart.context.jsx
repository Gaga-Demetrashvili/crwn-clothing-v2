/** @format */

import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity > 1) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = cartItemToRemove => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = cartItemToClear => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotalPrice = cartItems.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
      0
    );
    setTotal(newCartTotalPrice);
  }, [cartItems]);

  const value = {
    cartIsOpen,
    setCartIsOpen,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    cartCount,
    clearItemFromCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
