// src/components/ClientProviders.js
"use client";

import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function ClientProviders({ children }) {
      const pathname = usePathname();
      const isAdminPage = pathname?.startsWith("/admin");

      return (
            <AuthProvider>
                  <CartProvider>
                        {!isAdminPage && <Navbar />}
                        <main className="mt-20">{children}</main>
                        {!isAdminPage && <Footer />}
                  </CartProvider>
            </AuthProvider>
      );
}
