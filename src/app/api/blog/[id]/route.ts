import { NextResponse } from "next/server";
import { updateBlogPost, deleteBlogPost } from "@/lib/blog-service";
import type { BlogPost } from "@/types";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updates = body as Partial<BlogPost>;

    const updated = await updateBlogPost(id, updates);
    return NextResponse.json({ post: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update blog post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteBlogPost(id);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to delete blog post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
