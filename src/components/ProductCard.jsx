import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { cart, addToCart, decreaseFromCart } = useCart();
  const itemInCart = cart.find((p) => p.product.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col flex-shrink-0 w-60">
      <div className="h-40 flex items-center justify-center">
        <img src={product.img} alt={product.name} className="max-h-full" />
      </div>

      <div className="mt-3 flex-1">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <div className="text-xs text-gray-500">{product.category}</div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="font-semibold">₹{product.price}</div>
          {product.discount && (
            <div className="text-xs text-green-600">{product.discount}% off</div>
          )}
        </div>

        {/* If product is in cart, show - qty + controls */}
        {itemInCart ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseFromCart(product.id)}
              className="bg-gray-200 text-lg px-2 rounded"
            >
              –
            </button>
            <span>{itemInCart.qty}</span>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white text-lg px-2 rounded"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="px-3 py-1 bg-green-600 text-white rounded"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
