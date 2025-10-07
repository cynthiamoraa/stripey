import { get } from "@vercel/edge-config";
import { NextResponse } from "next/server";

export const runtime = "edge"; // ✅ ensure it runs on Edge

export async function GET() {
  try {
    const isInMaintenanceMode = await get("isInMaintenanceMode");
    return NextResponse.json({
      success: true,
      isInMaintenanceMode,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: (error as Error).message,
      hint: "Make sure EDGE_CONFIG env var is set and runtime is 'edge'",
    });
  }
}
