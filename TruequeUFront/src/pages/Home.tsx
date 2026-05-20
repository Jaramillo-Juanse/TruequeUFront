import { useEffect, useState } from "react";
import ListingList from "../components/listings/ListingList";
import { Loader } from "../components/ui/Loader";
import { ErrorState } from "../components/ui/ErrorState";
import { getListings } from "../services/listingsService";
import type { Listing } from "../types/types";

export default function Home() {
  const [data, setData] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getListings()
      .then((res) => setData(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorState />;

  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>¡Bienvenido a TruequeU!</h1>
        <p style={styles.subtitle}>
          Servicio de compraventa oficial de la Universidad EIA
        </p>
      </section>

      <section style={styles.listSection}>
        <h2 style={styles.sectionTitle}>Productos disponibles</h2>
        <ListingList listings={data} />
      </section>
    </main>
  );
}

const styles = {
  container: { padding: "0" },
  hero: {
    textAlign: "center" as const,
    padding: "3rem 2rem",
    backgroundColor: "#807bda",
    color: "#ffffff",
  },
  title: { fontSize: "2.2rem", fontWeight: "bold" },
  subtitle: { marginTop: "0.5rem", fontSize: "1.1rem", opacity: 0.9 },
  listSection: {
    padding: "2rem",
    backgroundColor: "#e2ecf6",
    minHeight: "100vh",
  },
  sectionTitle: {
    fontSize: "1.4rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#111827",
  },
};