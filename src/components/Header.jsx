import React, { useState } from "react";
import { FiSearch, FiMapPin, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Header({ onSearch }) {
  const { cartItems, totalItems, addToCart, removeFromCart } = useCart();
  const [openCart, setOpenCart] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center gap-4 p-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="font-bold text-2xl text-yellow-300">
            blink<span className="text-green-600">it</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1">
          <FiSearch className="mr-2" />
          <input
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search for products..."
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Location */}
        <button className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
          <FiMapPin /> Indore
        </button>

        {/* Login + Cart */}
        <div className="flex items-center gap-3">
          <button className="px-3 py-2">Login</button>

          <div className="relative">
            <button onClick={() => setOpenCart(!openCart)}>
              <FiShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* 🛒 Cart Dropdown */}
            {openCart && (
              <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg w-72 p-3 z-30">
                <h3 className="font-semibold text-gray-700 mb-2">Your Cart</h3>

                {cartItems.length === 0 ? (
                  <div className="text-gray-500 text-sm">Cart is empty.</div>
                ) : (
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center border-b pb-2"
                      >
                        <div>
                          <div className="text-sm font-medium">{item.name}</div>
                          <div className="text-xs text-gray-500">
                            ₹{item.price}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-gray-200 px-2 rounded"
                          >
                            –
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-green-500 text-white px-2 rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {cartItems.length > 0 && (
                  <div className="mt-3 border-t pt-2 text-sm flex justify-between">
                    <span>Total Items:</span>
                    <span>{totalItems}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
