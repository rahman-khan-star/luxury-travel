import { NextResponse } from "next/server";
import { updateMessage, deleteMessage, markMessageRead, markMessageUnread } from "@/lib/message-service";
import type { Message } from "@/types";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updates = body as Partial<Message>;

    if (updates.read !== undefined) {
      if (updates.read) {
        const updated = await markMessageRead(id);
        return NextResponse.json({ message: updated });
      } else {
        const updated = await markMessageUnread(id);
        return NextResponse.json({ message: updated });
      }
    }

    const updated = await updateMessage(id, updates);
    return NextResponse.json({ message: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update message";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteMessage(id);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to delete message";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
