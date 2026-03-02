// src/components/Admin/ProductManagement.js
"use client";

import { useState } from "react";
import { addProductApi, deleteProductApi, updateProductApi } from "@/utils/api";

export default function ProductManagement({ initialProducts = [] }) {
      const [products, setProducts] = useState(initialProducts);
      const [newProduct, setNewProduct] = useState({
            title: "",
            price: "",
            description: "",
            image: "",
            category: "",
      });
      const [expandedProductId, setExpandedProductId] = useState(null);
      const [editingProduct, setEditingProduct] = useState(null);

      const addProduct = async () => {
            try {
                  const data = await addProductApi(newProduct);
                  console.log("Product added successfully:", data);
                  setProducts([...products, { ...newProduct, id: data.id }]);
                  setNewProduct({ title: "", price: "", description: "", image: "", category: "" });
            } catch (error) {
                  console.error("Error adding product:", error);
            }
      };

      const deleteProduct = async (productId) => {
            try {
                  await deleteProductApi(productId);
                  console.log("Product deleted successfully:", productId);
                  setProducts(products.filter((product) => product.id !== productId));
            } catch (error) {
                  console.error("Error removing product:", error);
            }
      };

      const updateProduct = async (productId, updatedProduct) => {
            try {
                  const data = await updateProductApi(productId, updatedProduct);
                  console.log("Product updated successfully:", data);
                  setProducts(
                        products.map((product) => (product.id === productId ? { ...product, ...data } : product)),
                  );
                  setEditingProduct(null);
            } catch (error) {
                  console.error("Error while updating the product:", error);
            }
      };

      const toggleProductDetails = (productId) => {
            setExpandedProductId(expandedProductId === productId ? null : productId);
      };

      const startEditing = (product) => {
            setEditingProduct(product);
      };

      const cancelEditing = () => {
            setEditingProduct(null);
      };

      return (
            <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4">Products</h2>
                  <div className="mb-4">
                        <input
                              type="text"
                              placeholder="Product name"
                              value={newProduct.title}
                              onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                              className="border p-2 rounded w-full mb-2"
                        />
                        <input
                              type="text"
                              placeholder="Price"
                              value={newProduct.price}
                              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                              className="border p-2 rounded w-full mb-2"
                        />
                        <input
                              type="text"
                              placeholder="Description"
                              value={newProduct.description}
                              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                              className="border p-2 rounded w-full mb-2"
                        />
                        <input
                              type="text"
                              placeholder="Image URL"
                              value={newProduct.image}
                              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                              className="border p-2 rounded w-full mb-2"
                        />
                        <input
                              type="text"
                              placeholder="Category"
                              value={newProduct.category}
                              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                              className="border p-2 rounded w-full mb-2"
                        />
                        <button onClick={addProduct} className="bg-green-500 text-white p-2 rounded">
                              Add product
                        </button>
                  </div>
                  <div>
                        {products.map((product) => (
                              <div key={product.id} className="border p-4 rounded mb-2">
                                    <div className="cursor-pointer" onClick={() => toggleProductDetails(product.id)}>
                                          <h3 className="text-lg font-bold">{product.title}</h3>
                                          <p className="text-gray-600">${product.price}</p>
                                    </div>
                                    {expandedProductId === product.id && (
                                          <div className="mt-4">
                                                <p>
                                                      <strong>Description:</strong> {product.description}
                                                </p>
                                                <p>
                                                      <strong>Category:</strong> {product.category}
                                                </p>
                                                <div className="relative w-32 h-32 mt-2 flex">
                                                      <img
                                                            src={product.image}
                                                            alt={product.title}
                                                            className="object-cover rounded-lg w-full h-full"
                                                      />
                                                </div>
                                                <div className="mt-4 flex space-x-2">
                                                      <button
                                                            onClick={() => deleteProduct(product.id)}
                                                            className="bg-red-500 text-white p-2 rounded"
                                                      >
                                                            Delete
                                                      </button>
                                                      <button
                                                            onClick={() => startEditing(product)}
                                                            className="bg-blue-500 text-white p-2 rounded"
                                                      >
                                                            Edit
                                                      </button>
                                                </div>
                                          </div>
                                    )}
                              </div>
                        ))}
                  </div>
                  {editingProduct && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                              <div className="bg-white p-6 rounded-lg w-1/2">
                                    <h3 className="text-lg font-bold mb-4">Edit product</h3>
                                    <input
                                          type="text"
                                          placeholder="Product name"
                                          value={editingProduct.title}
                                          onChange={(e) =>
                                                setEditingProduct({
                                                      ...editingProduct,
                                                      title: e.target.value,
                                                })
                                          }
                                          className="border p-2 rounded w-full mb-2"
                                    />
                                    <input
                                          type="text"
                                          placeholder="Price"
                                          value={editingProduct.price}
                                          onChange={(e) =>
                                                setEditingProduct({
                                                      ...editingProduct,
                                                      price: e.target.value,
                                                })
                                          }
                                          className="border p-2 rounded w-full mb-2"
                                    />
                                    <input
                                          type="text"
                                          placeholder="Description"
                                          value={editingProduct.description}
                                          onChange={(e) =>
                                                setEditingProduct({
                                                      ...editingProduct,
                                                      description: e.target.value,
                                                })
                                          }
                                          className="border p-2 rounded w-full mb-2"
                                    />
                                    <input
                                          type="text"
                                          placeholder="Image URL"
                                          value={editingProduct.image}
                                          onChange={(e) =>
                                                setEditingProduct({
                                                      ...editingProduct,
                                                      image: e.target.value,
                                                })
                                          }
                                          className="border p-2 rounded w-full mb-2"
                                    />
                                    <input
                                          type="text"
                                          placeholder="Category"
                                          value={editingProduct.category}
                                          onChange={(e) =>
                                                setEditingProduct({
                                                      ...editingProduct,
                                                      category: e.target.value,
                                                })
                                          }
                                          className="border p-2 rounded w-full mb-2"
                                    />
                                    <div className="flex space-x-2">
                                          <button
                                                onClick={() => updateProduct(editingProduct.id, editingProduct)}
                                                className="bg-green-500 text-white p-2 rounded"
                                          >
                                                Save
                                          </button>
                                          <button
                                                onClick={cancelEditing}
                                                className="bg-gray-500 text-white p-2 rounded"
                                          >
                                                Cancel
                                          </button>
                                    </div>
                              </div>
                        </div>
                  )}
            </div>
      );
}
