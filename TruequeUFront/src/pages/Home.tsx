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
    <main style={styles.container}>
      {/* Header */}
      <section style={styles.hero}>
        <h1 style={styles.title}>¡Bienvenido a TruequeU!</h1>
        <p style={styles.subtitle}>
          Servicio de compraventa oficial de la Universidad EIA
        </p>
      </section>

      {/* Listings */}
      <section style={styles.listSection}>
        <h2 style={styles.sectionTitle}>Productos disponibles</h2>
        <ListingList listings={data} />
      </section>
    </main>
  );
}

const styles = {
  container: {
    padding: "0", //
  },

  hero: {
    textAlign: "center" as const,
    padding: "3rem 2rem",
    backgroundColor: "#807bda", 
    color: "#ffffff",
  },

  title: {
    fontSize: "2.2rem",
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: "0.5rem",
    fontSize: "1.1rem",
    opacity: 0.9,
  },

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
