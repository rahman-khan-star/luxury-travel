import { NextResponse } from "next/server";
import { getAllMembers, createMember } from "@/lib/team-service";
import type { TeamMember } from "@/types";

export async function GET() {
  try {
    const members = await getAllMembers();
    return NextResponse.json({ members });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch team members";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const member = body as Omit<TeamMember, "id">;

    if (!member.name || !member.designation || !member.photo || !member.phone || !member.whatsapp) {
      return NextResponse.json(
        { error: "Missing required fields: name, designation, photo, phone, whatsapp" },
        { status: 400 }
      );
    }

    if (typeof member.displayOrder !== "number" || member.displayOrder < 1) {
      return NextResponse.json(
        { error: "Display order must be a positive number" },
        { status: 400 }
      );
    }

    const created = await createMember(member);
    return NextResponse.json({ member: created }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create team member";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
