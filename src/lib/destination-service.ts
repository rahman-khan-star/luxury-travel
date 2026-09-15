import type { Destination } from "@/types";

async function getSupabase() {
  const { getSupabaseServer } = await import("./supabase-server");
  return getSupabaseServer();
}

function toDbDestination(dest: {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  rating: number;
  priceFrom: number;
  tags: string[];
}) {
  return {
    id: dest.id,
    name: dest.name,
    country: dest.country,
    description: dest.description,
    image: dest.image,
    rating: dest.rating,
    price_from: dest.priceFrom,
    tags: dest.tags,
    slug: dest.id,
  };
}

type DestinationRow = {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  rating: number;
  price_from: number;
  tags: string[];
  slug: string;
  created_at: string;
  updated_at: string;
};

function toClientDestination(row: DestinationRow): Destination {
  return {
    id: row.id,
    name: row.name,
    country: row.country,
    description: row.description,
    image: row.image,
    rating: row.rating,
    priceFrom: row.price_from,
    tags: row.tags ?? [],
  };
}

export async function getAllDestinations(): Promise<Destination[]> {
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("destinations")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(`Failed to fetch destinations: ${error.message}`);
  return (data ?? []).map(toClientDestination);
}

export async function getDestinationById(id: string): Promise<Destination | null> {
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("destinations")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    if (error.code === "PGRST116") return null;
    throw new Error(`Failed to fetch destination: ${error.message}`);
  }
  return toClientDestination(data);
}

export async function createDestination(dest: Destination): Promise<Destination> {
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("destinations")
    .upsert(toDbDestination(dest), { onConflict: "slug", count: "exact" })
    .select()
    .single();
  if (error) throw new Error(`Failed to create destination: ${error.message}`);
  return toClientDestination(data);
}

export async function updateDestination(id: string, updates: Partial<Destination>): Promise<Destination> {
  const dest = { id, ...updates } as Destination;
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("destinations")
    .upsert(toDbDestination(dest), { onConflict: "slug", count: "exact" })
    .select()
    .single();
  if (error) throw new Error(`Failed to update destination: ${error.message}`);
  return toClientDestination(data);
}

export async function deleteDestination(id: string): Promise<void> {
  const supabaseServer = await getSupabase();
  const { error } = await supabaseServer
    .from("destinations")
    .delete()
    .eq("id", id);
  if (error) throw new Error(`Failed to delete destination: ${error.message}`);
}
