import { useState, useEffect } from "react";
import { getListings } from "../services/listingsService";
import ListingList from "../components/listings/ListingList";
import { Loader } from "../components/ui/Loader";
import { ErrorState } from "../components/ui/ErrorState";
import Input from "../components/ui/Input";
import type { Listing } from "../types/types";

export default function Listings() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getListings();
        setListings(data);
      } catch {
        setError(true);
      }
      setLoading(false);
    }
    cargar();
  }, []);

  const filtrados = listings.filter((item) =>
    item.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <ErrorState />;

  return (
    <section className="p-4 bg-blue-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <div className="mb-4 max-w-sm">
        <Input className="bg-white" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar..." />
      </div>
      <ListingList listings={filtrados} />
    </section>
  );
}