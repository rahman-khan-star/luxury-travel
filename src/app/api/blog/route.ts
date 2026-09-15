import { NextResponse } from "next/server";
import { getAllBlogPosts, createBlogPost } from "@/lib/blog-service";
import type { BlogPost } from "@/types";

export async function GET() {
  try {
    const posts = await getAllBlogPosts();
    return NextResponse.json({ posts });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch blog posts";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const post = body as Omit<BlogPost, "id">;

    if (!post.title || !post.excerpt || !post.author || !post.category || !post.slug) {
      return NextResponse.json(
        { error: "Missing required fields: title, excerpt, author, category, slug" },
        { status: 400 }
      );
    }

    const created = await createBlogPost(post);
    return NextResponse.json({ post: created }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create blog post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
