// src/actions/adminAuth.js
"use server";

import { cookies } from "next/headers";

export async function loginAdmin(password) {
      if (password === process.env.ADMIN_PASSWORD) {
            cookies().set("admin_session", "true", {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                  path: "/",
                  maxAge: 60 * 60 * 24,
            });
            return { success: true };
      }
      return { success: false, error: "Nieprawidłowe hasło" };
}

export async function logoutAdmin() {
      cookies().delete("admin_session");
}
