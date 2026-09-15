import { NextResponse } from "next/server";
import { getAllHotels, createHotel } from "@/lib/hotel-service";
import type { Hotel } from "@/types";

export async function GET() {
  try {
    const hotels = await getAllHotels();
    return NextResponse.json({ hotels });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch hotels";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const hotel = body as Omit<Hotel, "id">;

    if (!hotel.name || !hotel.location || !hotel.image || !hotel.rating || !hotel.price) {
      return NextResponse.json(
        { error: "Missing required fields: name, location, image, rating, price" },
        { status: 400 }
      );
    }

    if (typeof hotel.rating !== "number" || hotel.rating < 1 || hotel.rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    if (typeof hotel.price !== "number" || hotel.price < 0) {
      return NextResponse.json(
        { error: "Price must be a non-negative number" },
        { status: 400 }
      );
    }

    if (!Array.isArray(hotel.amenities)) {
      return NextResponse.json(
        { error: "Amenities must be an array" },
        { status: 400 }
      );
    }

    const created = await createHotel(hotel);
    return NextResponse.json({ hotel: created }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create hotel";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}