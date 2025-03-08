import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/times?date=YYYY-MM-DD
 * Loads all reservation for specific day and returns array with occupiedTimes
 */

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dateParam = searchParams.get("date");

  if (!dateParam) {
    return NextResponse.json({ occupiedTimes: [] });
  }

  
  const reservations = await prisma.reservation.findMany({
    where: {
      date: dateParam
    }
  });


  const occupiedTimes = reservations.map((res) => res.time);

  return NextResponse.json({ occupiedTimes });
}
