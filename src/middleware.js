// src/middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
      const isAdminPage = request.nextUrl.pathname.startsWith("/admin");
      const isLoginPage = request.nextUrl.pathname === "/admin/login";

      if (isAdminPage && !isLoginPage) {
            const session = request.cookies.get("admin_session");

            if (!session) {
                  return NextResponse.redirect(new URL("/admin/login", request.url));
            }
      }

      return NextResponse.next();
}

export const config = {
      matcher: ["/admin/:path*"],
};
