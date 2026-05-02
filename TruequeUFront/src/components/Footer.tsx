function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} TruequeU</p>

      <div style={styles.links}>
        <a href="#">Términos</a>
        <a href="#">Privacidad</a>
        <a href="#">Contacto</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "1rem",
    borderTop: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
};

export default Footer;