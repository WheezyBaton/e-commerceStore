// src/app/admin/products/page.js
import ProductManagement from "@/components/Admin/ProductManagement";
import { getProducts } from "@/utils/api";

export default async function AdminProductsPage() {
      const products = await getProducts();

      return (
            <>
                  <ProductManagement initialProducts={products} />
            </>
      );
}
