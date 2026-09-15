import { NextResponse } from "next/server";
import { updatePackage, deletePackage } from "@/lib/tour-package-service";
import type { TourPackage } from "@/types";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updates = body as Partial<TourPackage>;

    if (!updates.id) {
      return NextResponse.json({ error: "Missing package id" }, { status: 400 });
    }

    if (updates.price !== undefined && (typeof updates.price !== "number" || updates.price < 0)) {
      return NextResponse.json({ error: "Price must be a non-negative number" }, { status: 400 });
    }

    if (updates.rating !== undefined && (typeof updates.rating !== "number" || updates.rating < 1 || updates.rating > 5)) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 });
    }

    const updated = await updatePackage(id, updates);
    return NextResponse.json({ package: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update package";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deletePackage(id);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to delete package";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
