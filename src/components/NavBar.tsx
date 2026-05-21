import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav} aria-label="Navegación principal">
      <div style={styles.logo}>
      <Link to="/" style={styles.logoLink}>
        <img src="/logo.png" alt="Logo de TruequeU" style={styles.logoImg} />
        <span>TruequeU</span>
      </Link>
    </div>

      <ul style={styles.menu}>
        <li>
          <NavLink to="/" style={navLinkStyle}>
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/listings" style={navLinkStyle}>
            Listings
          </NavLink>
        </li>

        <li>
          <NavLink to="/publish" style={navLinkStyle}>
            Publicar
          </NavLink>
        </li>

        <li>
          <NavLink to="/favorites" style={navLinkStyle}>
            Favoritos
          </NavLink>
        </li>

        <li>
          <NavLink to="/chats" style={navLinkStyle}>
            Chats
          </NavLink>
        </li>
      </ul>

      <div style={styles.auth}>
        <Link to="/login" style={styles.loginLink}>Login</Link>
        <Link to="/register" style={styles.registerBtn}>Register</Link>
      </div>
    </nav>
  );
}
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "1px solid #ccc",
    backgroundColor: "#111827", 
    color: "#ffffff", 
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#e5e7eb", 
  },
  menu: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
  },
  auth: {
  display: "flex",
  gap: "0.8rem",
  alignItems: "center",
  },

  loginLink: {
    color: "#e5e7eb",
    textDecoration: "none",
  },

  registerBtn: {
    backgroundColor: "#4f46e5",
    color: "#ffffff",
    padding: "0.4rem 0.9rem",
    borderRadius: "0.5rem",
    textDecoration: "none",
    fontWeight: "500",
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    color: "#ffffff",
  },

  logoImg: {
    width: "38px",
    height: "38px",
    objectFit: "contain",
  } as React.CSSProperties,
};

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: "none",
  color: isActive ? "#60a5fa" : "#ffffff",
  transition: "color 0.2s",
});

export default Navbar;
