import { NextResponse } from "next/server";
import { getAllAboutTeam, createAboutTeam, updateAboutTeam, deleteAboutTeam } from "@/lib/about-team-service";

export async function GET() {
  try {
    const team = await getAllAboutTeam();
    return NextResponse.json({ team });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch about team";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const member = body as { name: string; role: string; image: string };

    if (!member.name || !member.role || !member.image) {
      return NextResponse.json(
        { error: "Missing required fields: name, role, image" },
        { status: 400 }
      );
    }

    const created = await createAboutTeam(member);
    return NextResponse.json({ member: created }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create about team member";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}