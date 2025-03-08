import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";

/**
 * POST /api/reservation
 * Creates new reservation in db
*/
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { date, time, firstName, lastName, email, phone } = body;

    const newReservation = await prisma.reservation.create({
      data: {
        date, // string format "YYYY-MM-DD"
        time, // time slot, example "09:00 - 10:00"
        firstName,
        lastName,
        email,
        phone,
      },
    });

    return NextResponse.json({
      success: true,
      reservation: newReservation,
    });
  } catch (error) {
    console.error("Chyba při ukládání rezervace:", error);
    return NextResponse.json({ success: false, message: "Error" }, { status: 500 });
  }
}
