// src/app/admin/login/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/actions/adminAuth";

export default function AdminLoginPage() {
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");
      const router = useRouter();

      const handleSubmit = async (e) => {
            e.preventDefault();
            setError("");

            const result = await loginAdmin(password);

            if (result.success) {
                  router.push("/admin");
            } else {
                  setError(result.error);
            }
      };

      return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                  <div className="bg-white p-8 rounded shadow-md w-96">
                        <h1 className="text-2xl font-bold mb-6 text-center text-black">Logowanie Administratora</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                              <div>
                                    <input
                                          type="password"
                                          placeholder="Wprowadź hasło"
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    />
                              </div>
                              {error && <p className="text-red-500 text-sm">{error}</p>}
                              <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                              >
                                    Zaloguj
                              </button>
                        </form>
                  </div>
            </div>
      );
}
