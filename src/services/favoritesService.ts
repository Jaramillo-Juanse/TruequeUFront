import { request } from "./api";
import type { Listing } from "../types/types";

export function getFavorites() {
  return request<Listing[]>("/Favorites");
}

export function addFavorite(listingId: string) {
  return request(`/Favorites/${listingId}`, {
    method: "POST",
  });
}

export function removeFavorite(listingId: string) {
  return request<void>(`/Favorites/${listingId}`, {
    method: "DELETE",
  });

}