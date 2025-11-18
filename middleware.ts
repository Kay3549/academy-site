import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const protectedPaths = ["/members"]; // 보호할 경로 목록

  const requestedPath = req.nextUrl.pathname;

  // 보호된 페이지 접근 시 인증 확인
  if (protectedPaths.some((path) => requestedPath.startsWith(path))) {
    // Debug: Log all cookies
    console.log("[Middleware] All cookies:", req.cookies.getAll());
    console.log("[Middleware] Token cookie:", token ? "Found" : "Not found");
    
    if (!token) {
      console.log("[Middleware] No token found, redirecting to login");
      // 로그인 안했으면 로그인 페이지로 이동
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    // Remove quotes from JWT_SECRET if present
    let jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error("[Middleware] JWT_SECRET is not defined");
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    
    // Remove surrounding quotes if present
    jwtSecret = jwtSecret.replace(/^["']|["']$/g, "");

    try {
      // 토큰 검증 (유효한 토큰인지 확인) - using jose for Edge Runtime
      const secret = new TextEncoder().encode(jwtSecret);
      const { payload } = await jwtVerify(token, secret);
      console.log("[Middleware] Token verified successfully, decoded:", payload);
    } catch (err) {
      console.error("[Middleware] Token verification failed:", err);
      console.error("[Middleware] Token value:", token?.substring(0, 20) + "...");
      console.error("[Middleware] JWT_SECRET length:", jwtSecret.length);
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/members/:path*", "/members"], // 미들웨어 적용할 경로
};
