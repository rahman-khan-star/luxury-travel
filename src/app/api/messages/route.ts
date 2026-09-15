import { NextResponse } from "next/server";
import { getAllMessages, createMessage } from "@/lib/message-service";
import type { Message } from "@/types";

export async function GET() {
  try {
    const messages = await getAllMessages();
    return NextResponse.json({ messages });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch messages";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const msg = body as Omit<Message, "id">;

    if (!msg.name || !msg.email || !msg.phone || !msg.subject || !msg.message || !msg.date) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, subject, message, date" },
        { status: 400 }
      );
    }

    const created = await createMessage(msg);
    return NextResponse.json({ message: created }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create message";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
