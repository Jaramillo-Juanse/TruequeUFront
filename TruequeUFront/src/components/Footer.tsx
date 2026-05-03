function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} TruequeU</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "1rem",
    borderTop: "1px solid #cccccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111827", 
    color: "#ffffff",  
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
};

export default Footer;
