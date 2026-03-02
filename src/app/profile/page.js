// src/app/profile/page.js
"use client";

import { useState, useEffect } from "react";
import UserProfile from "@/components/User/UserProfile";
import OrderHistory from "@/components/User/OrderHistory";
import { decodeToken } from "@/utils/decodeToken";
import { getUser, getUserOrders, getProduct } from "@/utils/api";

export default function ProfilePage() {
      const [userData, setUserData] = useState(null);
      const [orders, setOrders] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
            const fetchProfileData = async () => {
                  try {
                        const token = localStorage.getItem("authToken");
                        if (!token) throw new Error("Brak zalogowanego użytkownika.");

                        const userId = decodeToken(token).sub;

                        const [user, userOrders] = await Promise.all([getUser(userId), getUserOrders(userId)]);

                        const enrichedOrders = await Promise.all(
                              userOrders.map(async (order) => {
                                    const productsWithDetails = await Promise.all(
                                          order.products.map(async (p) => {
                                                const productDetails = await getProduct(p.productId);
                                                return { ...p, name: productDetails?.title };
                                          }),
                                    );
                                    return { ...order, products: productsWithDetails };
                              }),
                        );

                        setUserData(user);
                        setOrders(enrichedOrders);
                  } catch (err) {
                        setError(err.message);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchProfileData();
      }, []);

      if (loading) return <p className="text-center mt-20">Loading profile data...</p>;
      if (error) return <p className="text-center text-red-500 mt-20">{error}</p>;

      return (
            <div className="container mx-auto p-4 xl:flex justify-around xl:mt-32 mb-80">
                  <UserProfile userData={userData} />
                  <OrderHistory initialOrders={orders} />
            </div>
      );
}
