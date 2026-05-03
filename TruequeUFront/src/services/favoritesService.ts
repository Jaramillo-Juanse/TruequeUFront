import { mockListings } from "./mockData";

let favoritosIds: string[] = ["1"];

export async function getFavorites() {
  await new Promise((r) => setTimeout(r, 500));
  return mockListings.filter((item) => favoritosIds.includes(item.id));
}

export async function removeFavorite(id: string) {
  await new Promise((r) => setTimeout(r, 300));
  favoritosIds = favoritosIds.filter((fid) => fid !== id);
}