// src/components/ShopPage/ProductDetails.js

import AddToCartButton from "@/components/ShopPage/AddToCartButton";

export default function ProductDetails({ product }) {
      return (
            <div className="max-w-4xl mx-auto border p-6 rounded shadow bg-white">
                  <img src={product.image} alt={product.title} className="w-full h-80 object-contain mb-6" />
                  <h2 className="text-3xl font-semibold mb-2">{product.title}</h2>
                  <p className="text-gray-500 text-lg mb-4">Kategoria: {product.category}</p>
                  <p className="text-black text-2xl font-bold mb-4">${product.price}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

                  <AddToCartButton product={product} />
            </div>
      );
}
