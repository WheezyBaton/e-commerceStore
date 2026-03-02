// src/components/ShopPage/CategoryFilter.js
"use client";

export default function CategoryFilter({ categories = [], onCategoryChange }) {
      return (
            <div className="mb-4">
                  <select
                        className="border p-2 rounded w-full cursor-pointer"
                        onChange={(e) => onCategoryChange(e.target.value)}
                  >
                        <option value="">All</option>
                        {categories.map((category) => (
                              <option key={category} value={category}>
                                    {category}
                              </option>
                        ))}
                  </select>
            </div>
      );
}
