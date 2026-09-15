import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function GET() {
  try {
    const { data, error } = await supabaseServer
      .from("settings")
      .select("*")
      .single();

    if (error) throw new Error(`Failed to fetch settings: ${error.message}`);

    return NextResponse.json({ settings: data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch settings";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { company_name, email, phone, whatsapp, website, address, currency, timezone } = body;

    if (!company_name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields: company_name, email, phone" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseServer
      .from("settings")
      .upsert(
        {
          company_name,
          email,
          phone,
          whatsapp: whatsapp || "",
          website: website || "",
          address: address || "",
          currency: currency || "USD",
          timezone: timezone || "Asia/Dubai",
        },
        { onConflict: "company_name", count: "exact" }
      )
      .select()
      .single();

    if (error) throw new Error(`Failed to update settings: ${error.message}`);

    return NextResponse.json({ settings: data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update settings";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}