// src/app/admin/products/page.js

import ProductManagement from "@/components/Admin/ProductManagement";
import { getProducts } from "@/lib/api";

export default async function AdminProductsPage() {
      const products = await getProducts();

      return (
            <div>
                  <ProductManagement initialProducts={products} />
            </div>
      );
}
