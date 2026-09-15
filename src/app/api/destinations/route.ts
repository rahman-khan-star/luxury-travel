import { NextResponse } from "next/server";
import { getAllDestinations, createDestination } from "@/lib/destination-service";
import type { Destination } from "@/types";

export async function GET() {
  try {
    const destinations = await getAllDestinations();
    return NextResponse.json({ destinations });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch destinations";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const dest = body as Destination;

    if (!dest.name || !dest.country || !dest.description || !dest.image) {
      return NextResponse.json(
        { error: "Missing required fields: name, country, description, image" },
        { status: 400 }
      );
    }

    if (typeof dest.rating !== "number" || dest.rating < 1 || dest.rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    if (typeof dest.priceFrom !== "number" || dest.priceFrom < 0) {
      return NextResponse.json(
        { error: "Price must be a non-negative number" },
        { status: 400 }
      );
    }

    const created = await createDestination(dest);
    return NextResponse.json({ destination: created }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create destination";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
