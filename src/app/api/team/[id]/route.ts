import { NextResponse } from "next/server";
import { updateMember, deleteMember } from "@/lib/team-service";
import type { TeamMember } from "@/types";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updates = body as Partial<TeamMember>;

    if (updates.displayOrder !== undefined && (typeof updates.displayOrder !== "number" || updates.displayOrder < 1)) {
      return NextResponse.json({ error: "Display order must be a positive number" }, { status: 400 });
    }

    if (updates.isActive !== undefined && typeof updates.isActive !== "boolean") {
      return NextResponse.json({ error: "isActive must be a boolean" }, { status: 400 });
    }

    const updated = await updateMember(id, updates);
    return NextResponse.json({ member: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update team member";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteMember(id);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to delete team member";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
