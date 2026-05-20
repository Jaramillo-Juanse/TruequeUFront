import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>¡Bienvenido a TruequeU!</h1>
        <p style={styles.subtitle}>
          Servicio de compraventa oficial de la Universidad EIA
        </p>

        <div style={styles.buttons}>
          <button
            style={styles.buttonPrimary}
            onClick={() => navigate("/listings")}
          >
            Ver productos
          </button>

          <button
            style={styles.buttonSecondary}
            onClick={() => navigate("/publish")}
          >
            Publicar producto
          </button>
        </div>
      </section>
    </main>
  );
}

const styles = {
  container: { padding: "0" },

  hero: {
    textAlign: "center" as const,
    padding: "4rem 2rem",
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

  buttons: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap" as const,
  },

  buttonPrimary: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#ffffff",
    color: "#807bda",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  buttonSecondary: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "2px solid white",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};