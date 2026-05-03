import { useState, useEffect } from "react";
import { getFavorites, removeFavorite } from "../services/favoritesService";
import { Loader } from "../components/ui/Loader";
import { ErrorState } from "../components/ui/ErrorState";
import { EmptyState } from "../components/ui/EmptyState";

export default function Favorites() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getFavorites();
        setFavorites(data);
      } catch {
        setError(true);
      }
      setLoading(false);
    }
    cargar();
  }, []);

  async function handleRemove(id: string) {
    await removeFavorite(id);
    setFavorites(favorites.filter((item) => item.id !== id));
  }

  if (loading) return <Loader />;
  if (error) return <ErrorState />;
  if (!favorites.length) return <EmptyState />;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mis favoritos</h1>
      <div className="space-y-3">
        {favorites.map((item) => (
          <div key={item.id} className="border p-4 rounded-xl flex justify-between items-center">
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="text-sm text-gray-500">${item.price?.toLocaleString()}</p>
            </div>
            <button onClick={() => handleRemove(item.id)} className="text-red-500 text-sm underline">
              Quitar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}