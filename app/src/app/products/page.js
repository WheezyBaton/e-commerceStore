// src/app/products/page.js

import ProductList from "@/components/ShopPage/ProductList";
import { getProducts, getCategories } from "@/lib/api";

export default async function ProductsPage() {
      const [products, categories] = await Promise.all([getProducts(), getCategories()]);

      return (
            <div className="container mx-auto p-4">
                  <ProductList initialProducts={products} categories={categories} />
            </div>
      );
}
