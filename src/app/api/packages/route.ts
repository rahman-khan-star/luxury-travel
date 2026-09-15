import { NextResponse } from "next/server";
import { getAllPackages, createPackage } from "@/lib/tour-package-service";
import type { TourPackage } from "@/types";

export async function GET() {
  try {
    const packages = await getAllPackages();
    return NextResponse.json({ packages });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch packages";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const pkg = body as TourPackage;

    if (!pkg.title || !pkg.destination || !pkg.description || !pkg.duration || !pkg.category) {
      return NextResponse.json(
        { error: "Missing required fields: title, destination, description, duration, category" },
        { status: 400 }
      );
    }

    if (typeof pkg.price !== "number" || pkg.price < 0) {
      return NextResponse.json(
        { error: "Price must be a non-negative number" },
        { status: 400 }
      );
    }

    if (typeof pkg.rating !== "number" || pkg.rating < 1 || pkg.rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    const created = await createPackage(pkg);
    return NextResponse.json({ package: created }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create package";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
