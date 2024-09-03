import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./logo.png";

function Header() {
  return (
    <nav className="header-container">
      <div>
        <img src={Logo} className="logo" alt="Kasa logo" />
      </div>
      <div className="header-link">
        <Link className="header-line" to="/">
          Accueil
        </Link>
        <Link to="/Apropos">A propos</Link>
      </div>
    </nav>
  );
}

export default Header;
