// src/components/User/OrderHistory.js
import Link from "next/link";

export default function OrderHistory({ initialOrders }) {
      if (!initialOrders || initialOrders.length === 0) {
            return <p className="text-center">No orders found.</p>;
      }

      return (
            <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-center">Order History</h2>
                  {initialOrders.map((order) => (
                        <div key={order.id} className="border p-4 rounded-lg shadow-md">
                              <p>
                                    <strong>Order ID:</strong> {order.id}
                              </p>
                              <p>
                                    <strong>Order Date:</strong> {new Date(order.date).toLocaleDateString()}
                              </p>
                              <p>
                                    <strong>Products:</strong>
                              </p>
                              <ul className="list-disc list-inside">
                                    {order.products.map((product) => (
                                          <li key={product.productId}>
                                                <Link
                                                      href={`/product/${product.productId}`}
                                                      className="text-blue-500 hover:underline"
                                                >
                                                      {product.name || `Product ID: ${product.productId}`}
                                                </Link>{" "}
                                                - Quantity: {product.quantity}
                                          </li>
                                    ))}
                              </ul>
                        </div>
                  ))}
            </div>
      );
}
