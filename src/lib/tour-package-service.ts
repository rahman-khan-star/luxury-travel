import type { TourPackage } from "@/types";

async function getSupabase() {
  const { supabaseServer } = await import("./supabase-server");
  return supabaseServer;
}

function toDbPackage(pkg: {
  id: string;
  title: string;
  destination: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount?: number;
  highlights: string[];
  included: string[];
  category: TourPackage["category"];
}) {
  return {
    id: pkg.id,
    title: pkg.title,
    destination: pkg.destination,
    description: pkg.description,
    image: pkg.image,
    duration: pkg.duration,
    price: pkg.price,
    original_price: pkg.originalPrice ?? null,
    rating: pkg.rating,
    review_count: pkg.reviewCount ?? 0,
    highlights: pkg.highlights,
    included: pkg.included,
    category: pkg.category,
  };
}

type TourPackageRow = {
  id: string;
  title: string;
  destination: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  original_price: number;
  rating: number;
  review_count: number;
  highlights: string[];
  included: string[];
  category: "dubai" | "pakistan" | "umrah" | "visa";
  created_at: string;
  updated_at: string;
};

function toClientPackage(row: TourPackageRow): TourPackage {
  return {
    id: row.id,
    title: row.title,
    destination: row.destination,
    description: row.description,
    image: row.image,
    duration: row.duration,
    price: row.price,
    originalPrice: row.original_price ? Number(row.original_price) : undefined,
    rating: row.rating,
    reviewCount: row.review_count,
    highlights: row.highlights,
    included: row.included,
    category: row.category,
  };
}

export async function getAllPackages(): Promise<TourPackage[]> {
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("tour_packages")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(`Failed to fetch packages: ${error.message}`);
  return (data ?? []).map(toClientPackage);
}

export async function getPackageById(id: string): Promise<TourPackage | null> {
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("tour_packages")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    if (error.code === "PGRST116") return null;
    throw new Error(`Failed to fetch package: ${error.message}`);
  }
  return toClientPackage(data);
}

export async function createPackage(pkg: TourPackage): Promise<TourPackage> {
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("tour_packages")
    .upsert(toDbPackage(pkg), { onConflict: "title", count: "exact" })
    .select()
    .single();
  if (error) throw new Error(`Failed to create package: ${error.message}`);
  return toClientPackage(data);
}

export async function updatePackage(id: string, updates: Partial<TourPackage>): Promise<TourPackage> {
  const pkg = { id, ...updates } as TourPackage;
  const supabaseServer = await getSupabase();
  const { data, error } = await supabaseServer
    .from("tour_packages")
    .upsert(toDbPackage(pkg), { onConflict: "title", count: "exact" })
    .select()
    .single();
  if (error) throw new Error(`Failed to update package: ${error.message}`);
  return toClientPackage(data);
}

export async function deletePackage(id: string): Promise<void> {
  const supabaseServer = await getSupabase();
  const { error } = await supabaseServer
    .from("tour_packages")
    .delete()
    .eq("id", id);
  if (error) throw new Error(`Failed to delete package: ${error.message}`);
}
