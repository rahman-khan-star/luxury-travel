import { NextResponse } from "next/server";
import { updateTestimonial, deleteTestimonial } from "@/lib/testimonial-service";
import type { Testimonial } from "@/types";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updates = body as Partial<Testimonial>;

    if (updates.rating !== undefined && (typeof updates.rating !== "number" || updates.rating < 1 || updates.rating > 5)) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 });
    }

    const updated = await updateTestimonial(id, updates);
    return NextResponse.json({ testimonial: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update testimonial";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteTestimonial(id);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to delete testimonial";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
