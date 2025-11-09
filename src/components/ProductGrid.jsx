

import React, { useMemo, useState, useEffect } from "react";
import productsData from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ query }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    const q = (query || "").toLowerCase();
    if (!q) return productsData;
    return productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4 flex gap-4 overflow-x-auto">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="p-4 bg-white rounded w-60 flex-shrink-0">
            <div className="skeleton h-40 w-full mb-3" />
            <div className="skeleton h-4 w-3/4 mb-2" />
            <div className="skeleton h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  // --- Grouping logic ---
  const categories = {
    "Eggs, Bread & Milk": filtered.filter((p) =>
      ["Dairy", "Bakery"].includes(p.category)
    ),
    Snacks: filtered.filter((p) => p.category === "Snacks"),
    "Cold Drinks": filtered.filter((p) => p.category === "Beverages"),
    Vegetables: filtered.filter((p) => p.category === "Vegetables"),
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-10">
      {Object.entries(categories).map(([title, items]) => (
        <div key={title}>
          <h2 className="text-lg font-semibold mb-3">{title}</h2>
          {items.length === 0 ? (
            <div className="text-gray-500 text-sm">No items available.</div>
          ) : (
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
