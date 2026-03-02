// src/components/Admin/UserManagement.js
"use client";

import { useState } from "react";
import { getUserOrders } from "@/utils/api";

export default function UserManagement({ initialUsers = [] }) {
      const [expandedUserId, setExpandedUserId] = useState(null);
      const [userOrders, setUserOrders] = useState({});

      const handleFetchUserOrders = async (userId) => {
            try {
                  const data = await getUserOrders(userId);
                  setUserOrders((prev) => ({ ...prev, [userId]: data }));
            } catch (error) {
                  console.error("Error retrieving user orders:", error);
            }
      };

      const toggleUserDetails = (userId) => {
            if (expandedUserId === userId) {
                  setExpandedUserId(null);
            } else {
                  setExpandedUserId(userId);

                  if (!userOrders[userId]) {
                        handleFetchUserOrders(userId);
                  }
            }
      };

      return (
            <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4">Users</h2>
                  <div>
                        {initialUsers.map((user) => (
                              <div key={user.id} className="border p-4 rounded mb-2">
                                    <div className="cursor-pointer" onClick={() => toggleUserDetails(user.id)}>
                                          <h3 className="text-lg font-bold">
                                                {user.name.firstname} {user.name.lastname}
                                          </h3>
                                          <p className="text-gray-600">{user.email}</p>
                                    </div>

                                    {expandedUserId === user.id && (
                                          <div className="mt-4">
                                                <p>
                                                      <strong>Adress:</strong> {user.address.city},{" "}
                                                      {user.address.street} {user.address.number}
                                                </p>
                                                <p>
                                                      <strong>Phone number:</strong> {user.phone}
                                                </p>
                                                <p>
                                                      <strong>ZIP code:</strong> {user.address.zipcode}
                                                </p>

                                                <h4 className="text-lg font-semibold mt-4">Orders:</h4>
                                                {userOrders[user.id] ? (
                                                      userOrders[user.id].length > 0 ? (
                                                            userOrders[user.id].map((order) => (
                                                                  <div
                                                                        key={order.id}
                                                                        className="border p-4 rounded mt-2"
                                                                  >
                                                                        <p>
                                                                              <strong>Order ID:</strong> {order.id}
                                                                        </p>
                                                                        <p>
                                                                              <strong>Order date:</strong>{" "}
                                                                              {new Date(
                                                                                    order.date,
                                                                              ).toLocaleDateString()}
                                                                        </p>
                                                                        <p>
                                                                              <strong>Products:</strong>
                                                                        </p>
                                                                        <ul className="list-disc list-inside">
                                                                              {order.products.map((product) => (
                                                                                    <li key={product.productId}>
                                                                                          Product ID:{" "}
                                                                                          {product.productId} -
                                                                                          Quantity: {product.quantity}
                                                                                    </li>
                                                                              ))}
                                                                        </ul>
                                                                  </div>
                                                            ))
                                                      ) : (
                                                            <p>No orders</p>
                                                      )
                                                ) : (
                                                      <p className="text-blue-500 animate-pulse">
                                                            Ładowanie zamówień...
                                                      </p>
                                                )}
                                          </div>
                                    )}
                              </div>
                        ))}
                  </div>
            </div>
      );
}
