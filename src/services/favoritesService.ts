import { request } from "./api";
import type { Listing } from "../types/types";

export function getFavorites() {
  return request<Listing[]>("/favorites");
}

export function addFavorite(listingId: string) {
  return request(`/favorites/${listingId}`, {
    method: "POST",
  });
}

export function removeFavorite(listingId: string) {
  return request<void>(`/favorites/${listingId}`, {
    method: "DELETE",
  });

}