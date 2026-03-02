// src/components/HomePage/FeaturedProducts.js

import ProductCard from "@/components/ShopPage/ProductCard";

export default function FeaturedProducts({ products, category }) {
      return (
            <div className="container mx-auto p-4">
                  <h2 className="text-2xl font-bold mb-4 text-center">Polecane z kategorii: {category}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                              <ProductCard key={product.id} product={product} />
                        ))}
                  </div>
            </div>
      );
}
