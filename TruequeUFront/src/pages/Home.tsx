import { useEffect, useState } from "react";
import ListingList from "../components/listings/ListingList";
import { Loader } from "../components/ui/Loader";
import { ErrorState } from "../components/ui/ErrorState";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        setData([
          { id: 1, title: "Libro" },
          { id: 2, title: "Bicicleta" },
        ]);
        setLoading(false);
      } catch {
        setError(true);
      }
    }, 1000);
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorState />;

  return (
    <main className="p-4">
      <ListingList listings={data} />
    </main>
  );
}