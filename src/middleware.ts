// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CheckExpiredToken } from "@/utils/jwt";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const isExpired = await CheckExpiredToken(token); // ✅ await fixes TS2801
  if (isExpired) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}



export const config = {
    matcher: ['/admin/:path*', '/api/admin/contacts/:path*']
}
