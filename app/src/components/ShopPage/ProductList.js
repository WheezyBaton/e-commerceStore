// src/components/ShopPage/ProductList.js
"use client";

import { useMemo, useState } from "react";
import CategoryFilter from "@/components/ShopPage/CategoryFilter";
import PriceFilter from "@/components/ShopPage/PriceFilter";
import ProductCard from "@/components/ShopPage/ProductCard";

export default function ProductList({ initialProducts, categories }) {
      const [selectedCategory, setSelectedCategory] = useState("");
      const [priceFilter, setPriceFilter] = useState({ min: "", max: "" });

      const filteredProducts = useMemo(() => {
            let filtered = initialProducts || [];

            if (selectedCategory) {
                  filtered = filtered.filter((product) => product.category === selectedCategory);
            }

            if (priceFilter.min !== "" || priceFilter.max !== "") {
                  const min = parseFloat(priceFilter.min) || 0;
                  const max = parseFloat(priceFilter.max) || Infinity;
                  filtered = filtered.filter((product) => product.price >= min && product.price <= max);
            }

            return filtered;
      }, [selectedCategory, priceFilter, initialProducts]);

      return (
            <div>
                  <div className="xl:flex justify-between">
                        <CategoryFilter categories={categories} onCategoryChange={setSelectedCategory} />
                        <PriceFilter onPriceChange={setPriceFilter} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                        {filteredProducts.map((product) => (
                              <ProductCard key={product.id} product={product} />
                        ))}
                  </div>
            </div>
      );
}
