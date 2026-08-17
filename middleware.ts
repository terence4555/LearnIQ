import { auth } from "@/lib/auth/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isAdmin = req.auth?.user?.role === "admin";
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/english/:path*", "/toefl/:path*", "/admin/:path*"],
};