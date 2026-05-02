import { request } from "./api";
import type { Listing } from "../types/types";

export function getListings() {
  return request<Listing[]>("/listings");
}

export function getListingById(id: string) {
  return request<Listing>(`/listings/${id}`);
}