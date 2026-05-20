import { mockListings } from "./mockData";
import type { Listing } from "../types/types";

export async function getListings(): Promise<Listing[]> {
  await new Promise((r) => setTimeout(r, 500));
  return mockListings;
}

export async function getListingById(id: string): Promise<Listing | undefined> {
  await new Promise((r) => setTimeout(r, 300));
  return mockListings.find((item) => item.id === id);
}

export function createListing(data: Partial<Listing>) {
  const token = localStorage.getItem("token");
  return request<Listing>("/listings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}