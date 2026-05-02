import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/">TruequeU</Link>
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
          <NavLink to="/favorites" style={navLinkStyle}>
            Favoritos
          </NavLink>
        </li>

        <li>
          <NavLink to="/chat" style={navLinkStyle}>
            Chat
          </NavLink>
        </li>
      </ul>

      <div style={styles.auth}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
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
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  menu: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
  },
  auth: {
    display: "flex",
    gap: "1rem",
  },
};

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: "none",
  color: isActive ? "blue" : "black",
});
export default Navbar;