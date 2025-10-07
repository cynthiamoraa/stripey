// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

export const runtime = "experimental-edge";

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // skip static + API
};

export async function middleware(req: NextRequest) {

  if (!process.env.EDGE_CONFIG) {
    // console.warn("⚠️ EDGE_CONFIG missing");
    req.nextUrl.pathname = "/missing-edge-config/";
    return NextResponse.rewrite(req.nextUrl);
  }

  try {
    const isInMaintenanceMode = await get<boolean>("isInMaintenanceMode");
    // console.log("🔧 Maintenance mode:", isInMaintenanceMode);

    if (isInMaintenanceMode) {
      req.nextUrl.pathname = "/maintenance/"; // 👈 trailing slash
      return NextResponse.rewrite(req.nextUrl);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("❌ Middleware error:", error);
    return NextResponse.next();
  }
}
