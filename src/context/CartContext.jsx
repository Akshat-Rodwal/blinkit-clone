import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // array of { product, qty }

  // ➕ Increase quantity or add new product
  const addToCart = (product) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.product.id === product.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  // ➖ Decrease quantity or remove item if qty = 0
  const decreaseFromCart = (productId) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.product.id === productId);
      if (idx > -1) {
        const copy = [...prev];
        if (copy[idx].qty > 1) {
          copy[idx] = { ...copy[idx], qty: copy[idx].qty - 1 };
          return copy;
        } else {
          // remove item completely when qty becomes 0
          return prev.filter((p) => p.product.id !== productId);
        }
      }
      return prev;
    });
  };

  // 🗑️ Optional: Remove item directly (without checking qty)
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.product.id !== productId));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseFromCart, removeFromCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
