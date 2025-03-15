import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    users: 1200,
    revenue: 56000,
    activeUsers: 340,
    newSignups: 150,
    orders:900,
  };

  return NextResponse.json(data);
}
