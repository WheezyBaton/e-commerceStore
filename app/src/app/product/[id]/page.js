// src/app/product/[id]/page.js
import ProductDetails from "@/components/ShopPage/ProductDetails";
import { getProduct } from "@/utils/api";

export default async function ProductPage({ params }) {
      const { id } = await params;
      const product = await getProduct(id);

      if (!product) {
            return <p className="text-center p-4 text-xl">Produkt nie został znaleziony.</p>;
      }

      return (
            <div className="container mx-auto p-4">
                  <ProductDetails product={product} />
            </div>
      );
}
