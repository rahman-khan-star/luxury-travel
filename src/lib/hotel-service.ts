import type { Hotel } from "@/types";

async function getSupabase() {
  const { supabaseServer } = await import("./supabase-server");
  return supabaseServer;
}

function toDbHotel(h: {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  amenities: string[];
}) {
  return {
    id: h.id,
    name: h.name,
    location: h.location,
    image: h.image,
    rating: h.rating,
    price: h.price,
    amenities: h.amenities,
  };
}

type HotelRow = {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
  amenities: string[];
  created_at: string;
  updated_at: string;
};

function toClientHotel(row: HotelRow): Hotel {
  return {
    id: row.id,
    name: row.name,
    location: row.location,
    image: row.image,
    rating: row.rating,
    price: row.price,
    amenities: row.amenities ?? [],
  };
}

export async function getAllHotels(): Promise<Hotel[]> {
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("hotels")
    .select("*")
    .order("name", { ascending: true });
  if (error) throw new Error(`Failed to fetch hotels: ${error.message}`);
  return (data ?? []).map(toClientHotel);
}

export async function getHotelById(id: string): Promise<Hotel | null> {
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("hotels")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    if (error.code === "PGRST116") return null;
    throw new Error(`Failed to fetch hotel: ${error.message}`);
  }
  return toClientHotel(data);
}

export async function createHotel(h: Omit<Hotel, "id">): Promise<Hotel> {
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("hotels")
    .upsert(toDbHotel({ ...h, id: crypto.randomUUID() }), { onConflict: "name", count: "exact" })
    .select()
    .single();
  if (error) throw new Error(`Failed to create hotel: ${error.message}`);
  return toClientHotel(data);
}

export async function updateHotel(id: string, updates: Partial<Hotel>): Promise<Hotel> {
  const hotel = { id, ...updates } as Hotel;
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("hotels")
    .upsert(toDbHotel(hotel), { onConflict: "name", count: "exact" })
    .select()
    .single();
  if (error) throw new Error(`Failed to update hotel: ${error.message}`);
  return toClientHotel(data);
}

export async function deleteHotel(id: string): Promise<void> {
  const supabaseServer = await getSupabase();
  const { error } = await supabaseServer
    .from("hotels")
    .delete()
    .eq("id", id);
  if (error) throw new Error(`Failed to delete hotel: ${error.message}`);
}