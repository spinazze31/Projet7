import { Link } from "react-router-dom";
import "../Main_scss/main.css";
import Logo from "../Images/logo.png";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <nav className="header_container">
      <img src={Logo} className="logo" alt="Kasa logo" />

      <div className="header_link">
        <Link to="/" className={location.pathname === "/" ? "header_line" : ""}>
          Accueil
        </Link>
        <Link
          to="/Apropos"
          className={location.pathname === "/Apropos" ? "header_line" : ""}
        >
          A propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
