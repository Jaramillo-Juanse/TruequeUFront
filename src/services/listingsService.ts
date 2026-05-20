import { request } from "./api";
import type { Listing } from "../types/types";
import type { CreateListingDto } from "../types/types";

export function getListings(): Promise<Listing[]> {
  return request<Listing[]>("/listing");
}

export function getListingById(
  id: string
): Promise<Listing> {
  return request<Listing>(`/listing/${id}`);
}

export function createListing(
  data: CreateListingDto
): Promise<Listing> {
  return request<Listing>("/listing", {
    method: "POST",
    body: JSON.stringify(data),
  });
}