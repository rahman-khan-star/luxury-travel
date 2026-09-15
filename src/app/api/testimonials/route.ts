import { NextResponse } from "next/server";
import { getAllTestimonials, createTestimonial } from "@/lib/testimonial-service";
import type { Testimonial } from "@/types";

export async function GET() {
  try {
    const testimonials = await getAllTestimonials();
    return NextResponse.json({ testimonials });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch testimonials";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const testimonial = body as Omit<Testimonial, "id">;

    if (!testimonial.name || !testimonial.text || !testimonial.location) {
      return NextResponse.json(
        { error: "Missing required fields: name, text, location" },
        { status: 400 }
      );
    }

    if (typeof testimonial.rating !== "number" || testimonial.rating < 1 || testimonial.rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    const created = await createTestimonial(testimonial);
    return NextResponse.json({ testimonial: created }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create testimonial";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
