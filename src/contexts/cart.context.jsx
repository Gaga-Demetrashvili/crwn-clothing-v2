/** @format */

// import { createContext, useState, useEffect, useReducer } from "react";

// import { createAction } from "../utils/reducer/reducer.utils";

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     cartItem => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map(cartItem =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find(
//     cartItem => cartItem.id === cartItemToRemove.id
//   );

//   if (existingCartItem.quantity > 1) {
//     return cartItems.map(cartItem =>
//       cartItem.id === cartItemToRemove.id
//         ? { ...cartItem, quantity: cartItem.quantity - 1 }
//         : cartItem
//     );
//   }

//   return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
// };

// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

// export const CartContext = createContext({
//   cartIsOpen: false,
//   setCartIsOpen: () => null,
//   cartItems: [],
//   addItemToCart: () => {},
//   cartCount: 0,
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   total: 0,
// });

// const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: "SET_CART_ITEMS",
//   SET_CART_IS_OPEN: "SET_CART_IS_OPEN",
// };

// const INITIAL_STATE = {
//   cartIsOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   total: 0,
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.SET_CART_IS_OPEN:
//       return {
//         ...state,
//         cartIsOpen: payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in userReducer`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [{ cartItems, cartIsOpen, cartCount, total }, dispatch] = useReducer(
//     cartReducer,
//     INITIAL_STATE
//   );
// const [cartIsOpen, setCartIsOpen] = useState(false);
// const [cartItems, setCartItems] = useState([]);
// const [cartCount, setCartCount] = useState(0);
// const [total, setTotal] = useState(0);

// const updateCartItemsReducer = newCartItems => {
//   const newCartCount = newCartItems.reduce(
//     (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
//     0
//   );
//   const newCartTotalPrice = newCartItems.reduce(
//     (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
//     0
//   );

//   dispatch(
//     createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//       cartItems: newCartItems,
//       cartCount: newCartCount,
//       total: newCartTotalPrice,
//     })
//   );
// };

// const addItemToCart = productToAdd => {
//   const newCartItems = addCartItem(cartItems, productToAdd);
//   updateCartItemsReducer(newCartItems);
// };

// const removeItemFromCart = cartItemToRemove => {
//   const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//   updateCartItemsReducer(newCartItems);
// };

// const clearItemFromCart = cartItemToClear => {
//   const newCartItems = clearCartItem(cartItems, cartItemToClear);
//   updateCartItemsReducer(newCartItems);
// };

// const setCartIsOpen = bool => {
//   dispatch(createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, bool));
// };

// useEffect(() => {
//   const newCartCount = cartItems.reduce(
//     (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
//     0
//   );
//   setCartCount(newCartCount);
// }, [cartItems]);

// useEffect(() => {
//   const newCartTotalPrice = cartItems.reduce(
//     (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
//     0
//   );
//   setTotal(newCartTotalPrice);
// }, [cartItems]);

//   const value = {
//     cartIsOpen,
//     setCartIsOpen,
//     addItemToCart,
//     removeItemFromCart,
//     cartItems,
//     cartCount,
//     clearItemFromCart,
//     total,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
