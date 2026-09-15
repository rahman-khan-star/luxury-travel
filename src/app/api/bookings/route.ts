import { NextResponse } from "next/server";
import { getAllBookings, createBooking } from "@/lib/booking-service";
import type { Booking } from "@/types";

export async function GET() {
  try {
    const bookings = await getAllBookings();
    return NextResponse.json({ bookings });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch bookings";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const booking = body as Omit<Booking, "id">;

    if (!booking.name || !booking.packageName || !booking.date) {
      return NextResponse.json(
        { error: "Missing required fields: name, packageName, date" },
        { status: 400 }
      );
    }

    if (typeof booking.amount !== "number" || booking.amount < 0) {
      return NextResponse.json(
        { error: "Amount must be a non-negative number" },
        { status: 400 }
      );
    }

    const created = await createBooking(booking);
    return NextResponse.json({ booking: created }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create booking";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
