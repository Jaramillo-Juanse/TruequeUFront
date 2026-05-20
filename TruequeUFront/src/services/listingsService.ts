import { mockListings } from "./mockData";
import type { Listing } from "../types/types";

export async function getListings(): Promise<Listing[]> {
  await new Promise((r) => setTimeout(r, 500));
  return mockListings;
}

export async function getListingById(
  id: string
): Promise<Listing | undefined> {
  await new Promise((r) => setTimeout(r, 300));

  return mockListings.find(
    (item) => String(item.id) === String(id)
  );
}

export async function createListing(data: Omit<Listing, "id" | "createdAt">): Promise<Listing> {
  await new Promise((r) => setTimeout(r, 400));
  const nuevo: Listing = {
    ...data,
    id: String(Date.now()),
    createdAt: new Date().toISOString(),
    images: [],
  };
  mockListings.push(nuevo);
  return nuevo;
}