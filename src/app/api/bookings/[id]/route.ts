import { NextResponse } from "next/server";
import { updateBooking, deleteBooking, updateBookingStatus } from "@/lib/booking-service";
import type { Booking } from "@/types";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updates = body as Partial<Booking>;

    if (updates.status !== undefined) {
      const updated = await updateBookingStatus(id, updates.status);
      return NextResponse.json({ booking: updated });
    }

    const updated = await updateBooking(id, updates);
    return NextResponse.json({ booking: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update booking";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteBooking(id);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to delete booking";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
