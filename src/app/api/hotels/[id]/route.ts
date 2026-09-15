import { NextResponse } from "next/server";
import { updateHotel, deleteHotel } from "@/lib/hotel-service";
import type { Hotel } from "@/types";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updates = body as Partial<Hotel>;

    if (updates.rating !== undefined && (typeof updates.rating !== "number" || updates.rating < 1 || updates.rating > 5)) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 });
    }

    if (updates.price !== undefined && (typeof updates.price !== "number" || updates.price < 0)) {
      return NextResponse.json({ error: "Price must be a non-negative number" }, { status: 400 });
    }

    if (updates.amenities !== undefined && !Array.isArray(updates.amenities)) {
      return NextResponse.json({ error: "Amenities must be an array" }, { status: 400 });
    }

    const updated = await updateHotel(id, updates);
    return NextResponse.json({ hotel: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update hotel";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteHotel(id);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to delete hotel";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}