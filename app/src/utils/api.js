// src/utils/api.js
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://fakestoreapi.com";

export async function getProducts() {
      const res = await fetch(`${API_URL}/products`, { cache: "no-store" });
      return res.json();
}

export async function getProduct(id) {
      const res = await fetch(`${API_URL}/products/${id}`, { cache: "no-store" });
      return res.json();
}

export async function getCategories() {
      const res = await fetch(`${API_URL}/products/categories`, { cache: "no-store" });
      return res.json();
}

export async function getProductsByCategory(category) {
      const res = await fetch(`${API_URL}/products/category/${category}`, { cache: "no-store" });
      return res.json();
}

export async function getUsers() {
      const res = await fetch(`${API_URL}/users`, { cache: "no-store" });
      return res.json();
}

export async function getUser(id) {
      const res = await fetch(`${API_URL}/users/${id}`);
      return res.json();
}

export async function getOrders() {
      const res = await fetch(`${API_URL}/carts`, { cache: "no-store" });
      return res.json();
}

export async function getUserOrders(userId) {
      const res = await fetch(`${API_URL}/carts/user/${userId}`, { cache: "no-store" });
      return res.json();
}

export async function addProductApi(productData) {
      const res = await fetch(`${API_URL}/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData),
      });
      return res.json();
}

export async function deleteProductApi(id) {
      const res = await fetch(`${API_URL}/products/${id}`, { method: "DELETE" });
      return res.json();
}

export async function updateProductApi(id, productData) {
      const res = await fetch(`${API_URL}/products/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData),
      });
      return res.json();
}

export async function getOrdersByDate(startDate, endDate) {
      const res = await fetch(`${API_URL}/carts?startdate=${startDate}&enddate=${endDate}`);
      return res.json();
}

export async function createOrderApi(orderData) {
      const res = await fetch(`${API_URL}/carts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
      });
      return res.json();
}

export async function updateUserApi(id, userData) {
      const res = await fetch(`${API_URL}/users/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
      });
      if (!res.ok) throw new Error("Failed to update user details.");
      return res.json();
}

export async function registerApi(userData) {
      const res = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
      });
      if (!res.ok) throw new Error("Registration failed");
      return res.json();
}

export async function loginApi(credentials) {
      const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
      });
      if (!res.ok) throw new Error("Login failed");
      return res.json();
}
