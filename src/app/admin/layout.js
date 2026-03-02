// src/app/admin/layout.js
"use client";

import AdminNavbar from "@/components/Admin/AdminNavbar";
import { useRouter } from "next/navigation";
import { logoutAdmin } from "@/actions/adminAuth";

export default function AdminLayout({ children }) {
      const router = useRouter();

      const handleLogout = async () => {
            await logoutAdmin();
            router.push("/");
      };

      return (
            <>
                  <AdminNavbar onLogout={handleLogout} />
                  {children}
            </>
      );
}
