import { NextResponse } from "next/server";
import { updateDestination, deleteDestination } from "@/lib/destination-service";
import type { Destination } from "@/types";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updates = body as Partial<Destination>;

    if (updates.rating !== undefined && (typeof updates.rating !== "number" || updates.rating < 1 || updates.rating > 5)) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 });
    }

    if (updates.priceFrom !== undefined && (typeof updates.priceFrom !== "number" || updates.priceFrom < 0)) {
      return NextResponse.json({ error: "Price must be a non-negative number" }, { status: 400 });
    }

    const updated = await updateDestination(id, updates);
    return NextResponse.json({ destination: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update destination";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteDestination(id);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to delete destination";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
